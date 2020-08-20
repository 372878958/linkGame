

// const { ccclass, property } = cc._decorator;

// @ccclass
class _gameData {
    // 当前关卡数
    curLevel: number = 1;
    // 当前提示道具数
    curTipCount: number = 0;
    // 当前闪电道具数
    curLightningCount: number = 0;
    // 当前重排道具数
    curResetCount: number = 0;
    // 当前冻结道具数
    curFreezeTimeCount: number = 0;
    // 图鉴
    archive: { [key: number]: number[] } = {};
    // 是否是第一次打本关
    isFirst: boolean = true;
}

export var gameData = new _gameData();

type propRet = { props_id: number, num: number };
// 当前关卡获取和使用的道具数量
class _CurLevelProp {
    _addProp: { [key: number]: number } = {};
    _usedProp: { [key: number]: number } = {};
    reset() {
        this._addProp = {};
        this._usedProp = {};
    }
    // 获得道具
    addProp(id: number, count: number = 1) {
        if (!this._addProp[id]) {
            this._addProp[id] = count;
        } else {
            this._addProp[id] += count;
        }
    }
    // 使用道具
    useProp(id: number) {
        if (!this._usedProp[id]) {
            this._usedProp[id] = 1;
        } else {
            ++this._usedProp[id];
        }
    }
    // 获取得到过的道具刷量
    getAddProp(): propRet[] {
        let ret: propRet[] = [];
        for (let key in this._addProp) {
            let num = this._addProp[key];
            ret.push({ props_id: Number(key), num: num });
        }
        return ret;
    }
    // 获取使用过的道具数量
    getUseProp(): propRet[] {
        let ret: propRet[] = [];
        for (let key in this._usedProp) {
            let num = this._usedProp[key];
            ret.push({ props_id: Number(key), num: num });
        }
        return ret;
    }
}
export var curLevelProp = new _CurLevelProp();

// 重置游戏记录
export function resetGameData() {
    gameData = new _gameData();
    saveGameData();
    loadGameData();
    saveThemeSelect(0);
}

const SAVE_DATA = "GAME_DATA";
// 保存游戏
export function saveGameData() {
    cc.sys.localStorage.setItem(SAVE_DATA, JSON.stringify(gameData));
}

// 加载游戏
export function loadGameData() {
    let d = cc.sys.localStorage.getItem(SAVE_DATA);
    if (d) {
        gameData = JSON.parse(d);
    }
    // 默认情况，第一个主题是满的
    const themeID = 0;
    gameData.archive[themeID] = [];
    for (let i = 0; i < 20; ++i) {
        gameData.archive[themeID].push(i);
    }
    loadIcons();
}

var themeSelectIndex: number = null;
const Theme_Select = "Theme_Select";
// 保存主题选择
export function saveThemeSelect(index: number) {
    themeSelectIndex = index;
    cc.sys.localStorage.setItem(Theme_Select, index.toString());
}

// 加载主题选择
export function loadThemeSelect(): number {
    if (themeSelectIndex == null) {
        let s = cc.sys.localStorage.getItem(Theme_Select);
        if (s) {
            themeSelectIndex = Number(s);
        } else {
            themeSelectIndex = 0;
        }
    }
    return themeSelectIndex;
}

export const ThemeIconNames = ["icona_", "iconb_", "iconc_", "icond_", "icone_", "iconf_"];
const iconPath = "texture/游戏界面/icons/";
// 设置格子图标
export function setGridIcon(id: number, sp: cc.Sprite, themeID: number = null) {
    if (!sp) {
        return;
    }
    themeID == null ? themeID = loadThemeSelect() : themeID;
    let iconName = ThemeIconNames[themeID];
    let itemID = id + 1;
    let path = iconPath + iconName + (itemID < 10 ? "0" + itemID : itemID);
    sp.spriteFrame = null;
    if (isLoadIcons == 2) {
        sp.spriteFrame = cc.loader.getRes(path, cc.SpriteFrame);
    } else {
        cc.loader.loadRes(path, cc.SpriteFrame, (eror: Error, res: cc.SpriteFrame) => {
            if (eror) {
                cc.error(eror.message);
            } else {
                sp.spriteFrame = res;
            }
        });
    }
}

var isLoadIcons = 0; // 0:未加载 1:加载中 2:加载完
function loadIcons() {
    if (isLoadIcons == 0) {
        isLoadIcons = 1;
        cc.loader.loadResDir(iconPath, (error: Error) => {
            if (error) {
                cc.log(error.message);
            } else {
                isLoadIcons = 2;
            }
        });
    }
}