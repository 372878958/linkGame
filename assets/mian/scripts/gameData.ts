

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
}

export var gameData = new _gameData();

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