import nodeOperation from "../../commonLib/component/nodeOperation";
import { itemParameter } from "./settlementParameter";
import playAnimation from "../../commonLib/component/playAnimation";
import { gameLib } from "../../commonLib/lib/gameLib";
import advertising from "./advertising";
import gameAudioClip from "./gameAudioClip";
import gameMain from "./gameMain";
import { gameData, saveGameData, setGridIcon, curLevelProp } from "./gameData";
import addUI from "../../commonLib/component/addUI";
import RedPackets from "./RedPackets";
import { reportLib } from "../../commonLib/lib/ReportLib";

const { ccclass, property } = cc._decorator;

@ccclass
export default class settlement extends cc.Component {

    @property({
        type: itemParameter,
        displayName: "道具所需分数"
    })
    protected itemParameter: itemParameter = null;

    @property({
        type: cc.Float,
        displayName: "主题概率"
    })
    protected themeProbability: number[] = [];

    @property({
        type: cc.Sprite,
        displayName: "开箱奖励"
    })
    protected boxAward: cc.Sprite[] = [];

    @property({
        type: cc.Button,
        displayName: "主页按钮"
    })
    protected homeBtn: cc.Button = null;

    @property({
        type: cc.Label,
        displayName: "星星分数"
    })
    protected starScore: cc.Label = null;

    @property({
        type: cc.Label,
        displayName: "时间分数"
    })
    protected timeScore: cc.Label = null;

    @property({
        type: cc.Label,
        displayName: "总分数"
    })
    protected totalScoreLab: cc.Label = null;

    @property({
        type: cc.Label,
        displayName: "提示分"
    })
    protected tipScore: cc.Label = null;

    @property({
        type: cc.Sprite,
        displayName: "提示对勾"
    })
    protected tipMark: cc.Sprite = null;

    @property({
        type: cc.Label,
        displayName: "重排分"
    })
    protected resetScore: cc.Label = null;

    @property({
        type: cc.Sprite,
        displayName: "重排对勾"
    })
    protected resetMark: cc.Sprite = null;

    @property({
        type: cc.Label,
        displayName: "闪电分"
    })
    protected lightningScore: cc.Label = null;

    @property({
        type: cc.Sprite,
        displayName: "闪电对勾"
    })
    protected lightningMark: cc.Sprite = null;

    @property({
        type: cc.Label,
        displayName: "钥匙分"
    })
    protected keyScore: cc.Label = null;

    @property({
        type: cc.Sprite,
        displayName: "钥匙对勾"
    })
    protected keyMark: cc.Sprite = null;

    @property({
        type: cc.Label,
        displayName: "冰冻分"
    })
    protected freezeScore: cc.Label = null;

    @property({
        type: cc.Sprite,
        displayName: "冰冻对勾"
    })
    protected freezeMark: cc.Sprite = null;

    @property({
        type: cc.Button,
        displayName: "下一关按钮"
    })
    protected nextLevelBtn: cc.Button = null;

    @property({
        type: cc.Button,
        displayName: "不看广告按钮"
    })
    protected noAdvertisingBtn: cc.Button = null;

    @property({
        type: cc.Button,
        displayName: "看广告按钮"
    })
    protected advertisingBtn: cc.Button = null;

    @property({
        type: playAnimation,
        displayName: "开箱动画"
    })
    protected openBoxAni: playAnimation = null;

    @property({
        type: cc.SpriteFrame,
        displayName: "道具图标",
        tooltip: "四个功能道具图标(提示，闪电，重排，冻结)"
    })
    protected itemSpriteFrames: cc.SpriteFrame[] = [];

    protected nodeOperation: nodeOperation = null;
    protected addUI: addUI = null;
    onLoad() {
        this.nodeOperation = this.getComponent(nodeOperation);
        this.addUI = this.getComponent(addUI);
        this.nextLevelBtn.node.active = false;
    }

    onEnable() {
        // 设置远程参数
        if (itemParameter.remoteThemeParameter) {
            this.themeProbability[0] = itemParameter.remoteThemeParameter.redbag;
            this.themeProbability[1] = itemParameter.remoteThemeParameter.theme1;
            this.themeProbability[2] = itemParameter.remoteThemeParameter.theme2;
            this.themeProbability[3] = itemParameter.remoteThemeParameter.theme3;
            this.themeProbability[4] = itemParameter.remoteThemeParameter.theme4;
            this.themeProbability[5] = itemParameter.remoteThemeParameter.theme5;
            this.themeProbability[6] = itemParameter.remoteThemeParameter.prop;
        }
        if (itemParameter.remoteItemParameter) {
            this.itemParameter.tip = itemParameter.remoteItemParameter.search;
            this.itemParameter.lightning = itemParameter.remoteItemParameter.lightning;
            this.itemParameter.reset = itemParameter.remoteItemParameter.derangement;
            this.itemParameter.freeze = itemParameter.remoteItemParameter.frozen;
            this.itemParameter.key = itemParameter.remoteItemParameter.key;
        }
    }

    protected nextlevelCallback: Function = null;
    // 设置下一局回调
    setNextlevelCallback(nextlevelCallback: Function) {
        this.nextlevelCallback = nextlevelCallback;
    }

    protected tipNeedScore: number = 200; // 提示所需分数
    protected lightningNeedScore: number = 200; // 闪电所需分数
    protected resetNeedScore: number = 200; // 重排所需分数
    protected freezeNeedScore: number = 200; // 冻结所需分数
    protected keyNeedScore: number = 200; // 钥匙所需分数

    protected totalScore: number = 0;
    // 设置分数
    setScore(starScore: number, time: number, totalGridCount: number) {

        // 设置分数
        time = Math.ceil(time);
        this.starScore.string = starScore.toString();
        this.timeScore.string = time.toString();
        this.totalScore = starScore + time;
        this.totalScoreLab.string = this.totalScore.toString();
        // 获取基准分数
        let scoreBase = this.itemParameter.baseScore40;
        if (totalGridCount >= 70) {
            scoreBase = this.itemParameter.baseScore70;
        } else if (totalGridCount >= 54) {
            scoreBase = this.itemParameter.baseScore54;
        } else if (totalGridCount >= 40) {
            scoreBase = this.itemParameter.baseScore40;
        }
        // 计算道具所需分数
        this.tipNeedScore = Math.ceil(scoreBase * this.itemParameter.tip);
        this.tipScore.string = this.tipNeedScore.toString();
        this.lightningNeedScore = Math.ceil(scoreBase * this.itemParameter.lightning);
        this.lightningScore.string = this.lightningNeedScore.toString();
        this.resetNeedScore = Math.ceil(scoreBase * this.itemParameter.reset);
        this.resetScore.string = this.resetNeedScore.toString();
        this.freezeNeedScore = Math.ceil(scoreBase * this.itemParameter.freeze);
        this.freezeScore.string = this.freezeNeedScore.toString();
        this.keyNeedScore = Math.ceil(scoreBase * this.itemParameter.key);
        this.keyScore.string = this.keyNeedScore.toString();
        // 隐藏所有对勾
        this.tipMark.node.active = false;
        this.lightningMark.node.active = false;
        this.resetMark.node.active = false;
        this.freezeMark.node.active = false;
        this.keyMark.node.active = false;
    }

    // 显示界面
    show() {
        // this.openBoxAni.sample(0);
        // 隐藏主页按钮
        this.homeBtn.node.active = false;
        // 隐藏下一关按钮
        this.nextLevelBtn.node.active = false;
        // 显示自己
        // this.nodeOperation.showSelf();
        this.node.active = true;
        this.scheduleOnce(() => {
            this.playScoreAward();
        }, 0.5);
    }

    // 显示下一关按钮
    protected showNextLevelBtn() {
        if (this.openBoxAni.isPlaying()) {
            return;
        }
        // 报送本关数据
        reportLib.stageGameFinish(0, gameData.curLevel, 0, curLevelProp.getAddProp(), curLevelProp.getUseProp(), this.totalScore, 1, gameData.isFirst ? 1 : 0);
        curLevelProp.reset();
        // 下一关
        ++gameData.curLevel;
        gameData.isFirst = true;
        // 保存游戏
        saveGameData();

        const playTime: number = 0.25;
        // 下一关按钮
        this.nextLevelBtn.node.scale = 0;
        this.nextLevelBtn.node.active = true;
        cc.tween(this.nextLevelBtn.node)
            .delay(playTime)
            .to(playTime, { scale: 1 }, { easing: "backOut" })
            .start();
        // 主页按钮
        this.homeBtn.node.scale = 0;
        this.homeBtn.node.active = true;
        cc.tween(this.homeBtn.node)
            .delay(playTime)
            .to(playTime, { scale: 1 }, { easing: "backOut" })
            .start();
    }

    // 播放道具奖励动画
    protected playScoreAward() {
        let markArray = [this.tipMark, this.lightningMark, this.resetMark, this.freezeMark, this.keyMark];
        let scoreArray = [this.tipNeedScore, this.lightningNeedScore, this.resetNeedScore, this.freezeNeedScore, this.keyNeedScore];
        const playTime: number = 0.15;
        let playAni = (i: number) => {
            let mark = markArray[i];
            let score = scoreArray[i];
            if (mark && this.totalScore >= score) {
                // 给予道具
                switch (i) {
                    case 0: // 提示
                        ++gameData.curTipCount;
                        break;
                    case 1: // 闪电
                        ++gameData.curLightningCount;
                        break;
                    case 2: // 重排
                        ++gameData.curResetCount;
                        break;
                    case 3: // 冻结
                        ++gameData.curFreezeTimeCount;
                        break;
                }
                curLevelProp.addProp(i);
                mark.node.scale = 0;
                mark.node.active = true;
                cc.tween(mark.node)
                    .delay(playTime)
                    .call(() => {
                        // 播放声效
                        gameAudioClip.playReceiveItem();
                    })
                    .to(playTime, { scale: 1 }, { easing: "backOut" })
                    .call(() => {
                        // 如果是钥匙
                        if (mark == this.keyMark) {
                            // 给予奖励
                            for (let i = 0; i < this.boxAward.length - 1; ++i) {
                                this.setOpenBoxAward(i);
                            }
                            // 播放开箱动画
                            let state = this.openBoxAni.play();
                            this.showRedPackets(state.duration + 0.25);
                        } else {
                            playAni(i + 1);
                        }
                    })
                    .start();
            } else {
                // this.showNextLevelBtn();
                this.showRedPackets(0.25);
            }
        }
        playAni(0);
    }

    // 显示红包
    protected showRedPackets(delay: number) {
        this.scheduleOnce(() => {
            this.addUI.addUI(null, (ui: RedPackets) => {
                let old = ui["onDestroy"];
                ui["onDestroy"] = () => {
                    if (old) {
                        old();
                    }
                    this.showNextLevelBtn();
                }
            }, "RedPackets");
        }, delay);
    }

    protected setOpenBoxAward(index: number) {

        let randomItem = () => {
            // 随机一个道具给他
            let oldWidth = this.boxAward[index].node.width;
            let oldHeight = this.boxAward[index].node.height;
            // 加道具
            let award = gameMain.instance.createComboAward();
            switch (award.awardID) {
                case 0:
                    ++gameData.curTipCount;
                    break;
                case 1:
                    ++gameData.curLightningCount;
                    break;
                case 2:
                    ++gameData.curResetCount;
                    break;
                case 3:
                    ++gameData.curFreezeTimeCount;
                    break;
            }
            curLevelProp.addProp(award.awardID);
            this.boxAward[index].spriteFrame = this.itemSpriteFrames[award.awardID];
            this.boxAward[index].node.width = oldWidth;
            this.boxAward[index].node.height = oldHeight;
        }

        // 随机主题
        let theme = this.randomTheme();
        if (theme == 0) { // 红包
            randomItem();
        } else if (theme == 6) { // 随机功能道具
            randomItem();
        } else {
            // 随机碎片
            let itemID = this.randomThemeItem(theme);
            if (itemID >= 0) {
                if (!gameData.archive[theme]) {
                    gameData.archive[theme] = [];
                }
                // 存储数据
                gameData.archive[theme].push(itemID);
                // 设置图标
                setGridIcon(itemID, this.boxAward[index], theme);
            } else {
                // 随机功能道具
                randomItem();
            }
        }
    }

    protected 点击下一局() {
        this.nodeOperation.closeSelf(() => {
            if (this.nextlevelCallback) {
                this.nextlevelCallback();
            }
        });
    }

    // 随机一个主题碎片
    protected randomThemeItem(themeID: number) {
        // 格式化所有碎片
        let ids: number[] = [];
        for (let i = 0; i < 20; ++i) {
            ids.push(i);
        }
        // 去除已有碎片
        if (gameData.archive[themeID]) {
            for (let v of gameData.archive[themeID]) {
                for (let i = 0; i < ids.length; ++i) {
                    if (v == ids[i]) {
                        ids.splice(i, 1);
                        break;
                    }
                }
            }
        }
        // 随机为获得碎片
        if (ids.length) {
            return ids[gameLib.GetRandomNum(0, ids.length - 1)];
        } else {
            return -1
        }
    }

    // 随机一个主题
    protected randomTheme() {
        let ret = 0;
        let all = 0;
        // 所有主题的id和几率
        let ids: { id: number, pro: number }[] = [];
        // 格式化所有主题的id和几率
        for (let i = 0; i < this.themeProbability.length; ++i) {
            if (i == 0 || !gameData.archive[i] || (gameData.archive[i] && gameData.archive[i].length < 20)) {
                ids.push({ id: i, pro: this.themeProbability[i] });
            }
        }
        // 统计所有几率
        for (let v of ids) {
            all += v.pro;
        }
        // 随机
        let rand = Math.random();
        let r = all * rand;
        let w = 0;
        for (let i = 0; i < ids.length; ++i) {
            w += ids[i].pro;
            if (r <= w) {
                ret = ids[i].id;
                break;
            }
        }
        return ret;
    }

    protected goHomeCallback: Function = null;
    // 设置回到主页回调
    setGoHomeCallback(callback: Function) {
        this.goHomeCallback = callback;
    }

    播放广告() {
        advertising.play(() => {
            let i = this.boxAward.length - 1;
            this.setOpenBoxAward(i);
            // this.boxAward[i].node.parent.active = true;
            this.openBoxAni.play("开箱奖励2");
            this.advertisingBtn.node.active = false;
        });
    }

    回到主页() {
        this.nodeOperation.closeSelf(() => {
            if (this.goHomeCallback) {
                this.goHomeCallback();
            }
        });
    }
}