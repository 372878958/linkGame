import gridManager from "./gridManager";
import comboText from "./comboText";
import level_parameter from "./level_parameter";
import gameAudioClip from "./gameAudioClip";
import comboAward from "./comboAward";
import setting from "./setting";
import cover from "./cover";
import subject from "./subject";
import settlement from "./settlement";
import countDown from "../../commonLib/component/countDown";
import { loadGameData, gameData, saveGameData, resetGameData } from "./gameData";
import addUI from "../../commonLib/component/addUI";
import addItem from "./addItem";
import gameOver from "./gameOver";
import { gameLib } from "../../commonLib/lib/gameLib";

const { ccclass, property } = cc._decorator;

@ccclass
export default class gameMain extends cc.Component {
    static instance: gameMain = null;
    @property({
        type: level_parameter,
        displayName: "关卡参数",
        tooltip: "关卡计算公式参数"
    })
    protected level_parameter: level_parameter = null;

    @property({
        type: cc.Label,
        displayName: "关卡"
    })
    protected level: cc.Label = null;

    @property({
        type: cc.Label,
        displayName: "积分"
    })
    protected score: cc.Label = null;

    @property({
        type: cc.Label,
        displayName: "红包数"
    })
    protected redPackets: cc.Label = null;

    @property({
        type: countDown,
        displayName: "倒计时"
    })
    protected time: countDown = null;

    @property({
        type: cc.Sprite,
        displayName: "倒计时进度条"
    })
    protected timeImg: cc.Sprite = null;

    @property({
        type: comboText,
        displayName: "连击文字"
    })
    protected comboText: comboText = null;

    @property({
        type: cc.Prefab,
        displayName: "连击奖励"
    })
    protected comboAwardPrefab: cc.Prefab = null;

    @property({
        type: cc.Node,
        displayName: "连击奖励位置"
    })
    protected comboAwardPosNode: cc.Node = null;

    @property({
        displayName: "连击间隔时间",
        tooltip: "两次格子消除时间间隔不超过n(n:为连击间隔时间)秒，则视为连击"
    })
    protected comboTime: number = 2;

    @property({
        displayName: "连击奖励间隔"
    })
    protected comboAwardGap: number = 5;

    @property({
        type: cc.Button,
        displayName: "提示按钮"
    })
    protected tipButton: cc.Button = null;

    @property({
        type: cc.Button,
        displayName: "炸弹按钮"
    })
    protected bombButton: cc.Button = null;

    @property({
        type: cc.Button,
        displayName: "重排按钮"
    })
    protected realignmentButton: cc.Button = null;

    @property({
        type: cc.Button,
        displayName: "冻结时间按钮"
    })
    protected freezeTimeButton: cc.Button = null;

    @property({
        type: cc.Label,
        displayName: "提示数量"
    })
    protected tipLabel: cc.Label = null;

    @property({
        type: cc.Label,
        displayName: "炸弹数量"
    })
    protected bombLabel: cc.Label = null;

    @property({
        type: cc.Label,
        displayName: "重排数量"
    })
    protected realignmentLabel: cc.Label = null;

    @property({
        type: cc.Label,
        displayName: "冻结时间数量"
    })
    protected freezeTimeLabel: cc.Label = null;

    @property(gridManager)
    protected gridManager: gridManager = null;

    @property(addUI)
    protected gameOverNode: addUI = null;

    @property({
        type: cc.EditBox,
        displayName: "跳关输入框"
    })
    protected skipLevelEdit: cc.EditBox = null;

    @property({
        type: addUI,
        displayName: "结算界面"
    })
    protected settlement: addUI = null;

    @property({
        type: cover,
        displayName: "游戏封面"
    })
    protected cover: cover = null;

    @property({
        type: cc.Label,
        displayName: "封面关卡数"
    })
    protected curCoverLevel: cc.Label = null;

    @property({
        type: subject,
        displayName: "游戏主体"
    })
    protected subject: subject = null;

    @property({
        type: sp.Skeleton,
        displayName: "冰冻特效"
    })
    protected freezeSpine: sp.Skeleton = null;

    @property({
        type: cc.Sprite,
        displayName: "时间进度条"
    })
    protected timePorcessSP: cc.Sprite = null;

    @property({
        type: cc.SpriteFrame,
        displayName: "时间进度条图"
    })
    protected timePorcessSF: cc.SpriteFrame = null;

    @property({
        type: cc.SpriteFrame,
        displayName: "时间进度条冰图"
    })
    protected timePorcessSF2: cc.SpriteFrame = null;

    onLoad() {
        gameMain.instance = this;
        let guid = gameLib.getGUID();
        console.error("GUID = " + guid);
        this.skipLevelEdit.string = "GUID = " + guid;
        setting.initVolume();
        this.freezeSpine.node.active = false;
        this.freezeSpine.setCompleteListener((te: sp.spine.TrackEntry) => {
            if (te.animation.name == "BD_3") {
                this.freezeSpine.node.active = false;
            }
        });
        this.gridManager.initGrid();
    }

    start() {
        // 加载存档
        loadGameData();
        // 计算时间进度条 起始、结束及显示范围
        this.timeImgFillStart = this.timeImg.fillStart;
        this.timeImgFillEnd = this.timeImg.fillRange;
        this.timeImgFillRange = this.timeImgFillEnd - this.timeImgFillStart;
        // 连击最短间隔时间
        this.comboText.durationTime = this.comboTime;
        this.gridManager.setLinkRemovedCallback(this.onLinkRemoved.bind(this));
        this.gridManager.setGameOverCallback(this.gameOver.bind(this));
        this.gridManager.setNextLevelCallback(this.nextLevel.bind(this));
        this.gridManager.setBombSelectCallback(this.onBombSelect.bind(this));
        this.gridManager.setComboCallback(this.onCombo.bind(this));
        this.time.setPercentCallback(this.onTimePercentCallback.bind(this));
        // 关闭炸弹选择模式
        this.gridManager.setBombSelectMode(false);
        // 显示封面
        this.cover.node.active = true;
        // 隐藏主体
        this.subject.node.active = false;
        // 封面关卡
        this.curCoverLevel.string = gameData.curLevel.toString();
    }

    onDestroy() {
        this.comboAwardNodePool.clear();
    }

    protected 点击开始游戏() {
        let state = this.cover.playHideAni();
        this.scheduleOnce(() => {
            this.cover.node.active = false;
            this.subject.node.active = true;
            let state = this.subject.playShowAni();
            this.updateItemsCount();
            this.scheduleOnce(() => {
                this.gameStart();
            }, state.duration + 0.1);
        }, state.duration + 0.1);
    }

    protected gameStart() {
        // 游戏开始
        this.isGameOver = false;
        // 设置关卡数
        this.level.string = gameData.curLevel.toString();
        // 关闭炸弹选择模式
        this.gridManager.setBombSelectMode(false);
        // 重置分数
        this.resetScore();
        // 先解冻 已经冻结的时间
        this.unfreezeTime(false);
        // 计算关卡难度
        let parameter = this.level_parameter.getLevelParameter(gameData.curLevel);
        // 重计倒计时
        this.setTime(parameter.time);
        // 游戏开始
        this.gridManager.gameStart(parameter);
        // 刷新道具数量
        this.updateItemsCount();

        // 测试用
        // this.time.setTime(3);
        // this.gridManager.setBombTest();
    }

    protected isGameOver: boolean = false;
    // 游戏结束
    protected gameOver(isTime: boolean) {
        if (this.isGameOver) {
            return;
        }
        this.isGameOver = true;
        // 显示游戏结束
        this.gameOverNode.addUI(null, (ui: gameOver) => {
            ui.setContinueCallback(this.continueGame.bind(this));
            ui.setRestartCallback(this.gameStart.bind(this));
            ui.setGoHomeCallback(this.goHome.bind(this));
            ui.show(isTime);
        }, "gameOver");
        // 先解冻 已经冻结的时间
        this.unfreezeTime(true);
        // 游戏结束，暂停游戏倒计时
        this.time.pause();
    }

    // gameover后 看广告继续游戏
    protected continueGame() {
        if (!this.isGameOver) {
            return;
        }
        this.isGameOver = false;
        this.time.resetTime();
        this.time.resume();
        this.gridManager.clearAllBomb();
    }

    倒计时回调(event: string, time: number) {
        if (time == 10) {
            gameAudioClip.playTimeTip();
        } else if (time < 10) {
            gameAudioClip.playTimeCountdown();
        }
        if (time <= 0) {
            // 倒计时结束，闯关失败
            this.gameOver(true);
        }
    }

    // 设置倒计时时间
    setTime(time: number) {
        this.time.setTime(time);
        this.time.resume();
    }

    protected isCanCombo: boolean = false;
    protected curComboNum: number = 0;

    // 重置连击数
    protected resetCombo() {
        this.isCanCombo = false;
        this.curComboNum = 0;
        if (this.curComboAward) {
            this.comboAwardNodePool.put(this.curComboAward.node);
            this.curComboAward = null;
        }
    }

    // 当前连击数
    protected onCombo(): number {
        this.unschedule(this.resetCombo);
        if (!this.isCanCombo) {
            // 如果不能连击
            this.isCanCombo = true;
        } else {
            // 如果是开始连击，则随机一个连击奖励
            if (this.curComboNum == 0) {
                this.createComboAward();
            }
            // 连击数+
            ++this.curComboNum;
            // 计算连击进度
            let progress = this.curComboNum % this.comboAwardGap;
            // 设置奖励进度
            this.onComboAwardProgress(progress / this.comboAwardGap)
            if (progress == 0) {
                // 连击完成获取奖励
                this.onComboAward();
                // 播放获取连击奖励的声音
                gameAudioClip.playComboAward();
            }
            // 设置连击文字
            this.comboText.setCombo(this.curComboNum);
        }
        this.scheduleOnce(this.resetCombo, this.comboTime);
        return this.curComboNum;
    }

    // 当前连击奖励
    protected curComboAward: comboAward = null;
    protected comboAwardNodePool: cc.NodePool = new cc.NodePool();

    protected curComboAwardTween: cc.Tween<cc.Node> = null;
    // 设置连击奖励进度
    protected onComboAwardProgress(progress: number = 0) {
        if (this.curComboAward) {
            if (this.curComboAwardTween) {
                this.curComboAwardTween.stop();
                this.curComboAwardTween = null;
            }
            if (progress == 0) {
                progress = 1;
            }
            this.curComboAwardTween = cc.tween(this.curComboAward.node)
                .to(0.25, { scale: progress }, { easing: "backOut" })
                .call(() => {
                    this.curComboAwardTween = null;
                })
                .start();
        }
    }

    // 创建一个连击奖励
    createComboAward(): comboAward {
        if (this.curComboAward) {
            this.comboAwardNodePool.put(this.curComboAward.node);
        }
        let node = this.comboAwardNodePool.get();
        if (!node) {
            node = cc.instantiate(this.comboAwardPrefab);
        }
        node.scale = 0;
        node.x = this.comboAwardPosNode.x;
        node.y = this.comboAwardPosNode.y;
        this.node.addChild(node);
        this.curComboAward = node.getComponent(comboAward);
        this.curComboAward.randomComboAwardID();
        return this.curComboAward;
    }

    // 获得连击奖励
    protected onComboAward() {
        let tarButton: cc.Button = null;
        switch (this.curComboAward.awardID) {
            case 0:
                tarButton = this.tipButton;
                break;
            case 1:
                tarButton = this.bombButton;
                break;
            case 2:
                tarButton = this.realignmentButton;
                break;
            case 3:
                tarButton = this.freezeTimeButton;
                break;
        }
        if (tarButton) {
            let getChildByName = (name: string, node: cc.Node) => {
                for (let v of node.children) {
                    if (v.name == name) {
                        return v;
                    } else {
                        return getChildByName(name, v);
                    }
                }
            }
            // let child = tarButton.node.getChildByName("icon");
            let child = getChildByName("icon", tarButton.node);
            this.curComboAward.moveTo(child, (award) => {
                let tweenNode: cc.Node = null;
                switch (award.awardID) {
                    case 0:
                        ++gameData.curTipCount;
                        tweenNode = this.tipLabel.node.parent;
                        break;
                    case 1:
                        ++gameData.curLightningCount;
                        tweenNode = this.bombLabel.node.parent;
                        break;
                    case 2:
                        ++gameData.curResetCount;
                        tweenNode = this.realignmentLabel.node.parent;
                        break;
                    case 3:
                        ++gameData.curFreezeTimeCount;
                        tweenNode = this.freezeTimeLabel.node.parent;
                        break;
                }
                if (tweenNode) {
                    cc.tween(tweenNode)
                        .to(0.15, { scale: 1.2 })
                        .to(0.15, { scale: 1 })
                        .start();
                }
                this.updateItemsCount();
                // 播放获得音效
                gameAudioClip.playGetComboAward();
                // 先隐藏奖励图标
                award.awardID = -1;
                // 过一秒回收
                this.scheduleOnce(() => {
                    this.comboAwardNodePool.put(award.node);
                }, 1);
            });
            this.curComboAward = null;
            this.createComboAward();
        }
    }

    // 当前分数
    protected curScore: number = 0;
    // 当有一对格子被消除 dis:格子之间的距离
    onLinkRemoved(dis: number) {
        // let comboNum = this.getComboNum() + 1;
        this.curScore += dis;
        this.score.string = this.curScore.toString();
        // cc.tween(this.score.node)
        //     .to(0.15, { scale: 1.2 })
        //     .to(0.15, { scale: 1 })
        //     .start();
    }

    // 重置分数
    resetScore() {
        this.resetCombo(); // 重置分数的时候，连击数也要清零
        this.curScore = 0;
        this.score.string = "0";
    }

    // 下一关
    nextLevel(delayTime: number = null) {
        // 显示结算
        let showSettlement = () => {
            this.settlement.addUI(null, (ui: settlement) => {
                ui.setNextlevelCallback(this.onClickNextLevel.bind(this));
                ui.setGoHomeCallback(this.goHome.bind(this));
                ui.setScore(this.curScore, this.time.getTime(), this.gridManager.getTotalGridCount());
                ui.show();
            }, "settlement");
        }
        this.unfreezeTime(true);
        this.freezeTime(false, 0);
        if (delayTime) {
            this.scheduleOnce(showSettlement, delayTime);
        } else {
            showSettlement();
        }
    }

    protected onClickNextLevel() {
        this.gameStart();
    }

    // 看广告加道具
    protected addItem(id: number, num: number) {
        addUI.addUI("addItem", (ui: addItem) => {
            this.pauseGame();
            ui.setDestroyCallback(() => {
                this.resumeGame();
            });
            ui.setData(id, num);
            ui.setCallback(() => {
                switch (id) {
                    case 0:
                        gameData.curTipCount += num;
                        break;
                    case 1:
                        gameData.curLightningCount += num;
                        break;
                    case 2:
                        gameData.curResetCount += num;
                        break;
                    case 3:
                        gameData.curFreezeTimeCount += num;
                        break;
                }
                this.updateItemsCount();
            });
        }, "addItem");
    }

    protected 点击提示() {
        if (gameData.curTipCount > 0) {
            --gameData.curTipCount;
            this.updateItemsCount();
            this.gridManager.autoLinkGrid();
        } else {
            this.addItem(0, 3);
        }
    }

    // 是否选择了炸掉某种格子
    protected onBombSelect(select: boolean) {
        if (select) {
            --gameData.curLightningCount;
            this.updateItemsCount();
        }
    }

    protected 点击炸弹() {
        if (gameData.curLightningCount > 0) {
            this.gridManager.setBombSelectMode(true);
        } else {
            this.addItem(1, 1);
        }
    }

    protected 点击重排() {
        if (gameData.curResetCount > 0) {
            --gameData.curResetCount;
            this.updateItemsCount();
            this.gridManager.randomGridsPos();
        } else {
            this.addItem(2, 1);
        }
    }

    protected 点击冻结时间() {
        if (gameData.curFreezeTimeCount > 0) {
            --gameData.curFreezeTimeCount;
            this.updateItemsCount();
            this.freezeTime();
        } else {
            this.addItem(3, 1);
        }
    }

    // 暂停游戏
    protected isPauseGame: boolean = false;
    pauseGame() {
        if (!this.isPauseGame) {
            this.isPauseGame = true;
            this.time.pause();
            this.gridManager.pauseGenerateGrid();
            this.gridManager.pauseAllBomb();
            cc.director.getScheduler().pauseTarget(this);
        }
    }

    // 继续游戏
    resumeGame() {
        if (this.isPauseGame) {
            this.isPauseGame = false;
            if (!this.isFreezeTime) {
                this.time.resume();
                this.gridManager.resumeGenerateGrid();
                this.gridManager.resumeAllBomb();
            }
            cc.director.getScheduler().resumeTarget(this);
        }
    }

    // 时间是否已经冻结
    protected isFreezeTime: boolean = false;
    // 冻结时间
    protected freezeTime(playSound: boolean = true, time: number = 7) {
        if (!this.isFreezeTime) {
            this.isFreezeTime = true;
            // 时间暂停
            this.time.pause();
            this.gridManager.pauseGenerateGrid();
            this.gridManager.pauseAllBomb();
            // 播放冻结音效
            if (playSound) {
                gameAudioClip.playFreezeTime();
                this.freezeSpine.node.active = true;
                this.freezeSpine.setAnimation(0, "BD_1", false);
                this.freezeSpine.addAnimation(0, "BD_2", true);
                // 时间进度条图改为冰条
                this.timePorcessSP.spriteFrame = this.timePorcessSF2;
            }
            if (time) {
                this.scheduleOnce(this.unfreezeTime, time);
            }
            // 冻结时 冻结按钮不可再次点击
            this.freezeTimeButton.interactable = false;
        }
    }
    // 解冻时间
    protected unfreezeTime(playSound: boolean = true) {
        if (this.isFreezeTime) {
            this.isFreezeTime = false;
            // 时间进度条还原
            this.timePorcessSP.spriteFrame = this.timePorcessSF;
            playSound = (typeof playSound != 'boolean') ? true : playSound;
            this.unschedule(this.unfreezeTime);
            this.time.resume();
            this.gridManager.resumeGenerateGrid();
            this.gridManager.resumeAllBomb();
            if (playSound) {
                // 停止冻结音效
                gameAudioClip.stopFreezeTime();
                this.freezeSpine.setAnimation(0, "BD_3", false);
            } else {
                this.freezeSpine.node.active = false;
            }
            // 解冻时 如果还有冻结次数，则冻结可点
            if (gameData.curFreezeTimeCount > 0) {
                this.freezeTimeButton.interactable = true;
            }
        }
    }

    // 刷新道具数量
    protected updateItemsCount() {
        this.tipLabel.string = gameData.curTipCount.toString();
        this.bombLabel.string = gameData.curLightningCount.toString();
        this.realignmentLabel.string = gameData.curResetCount.toString();
        this.freezeTimeLabel.string = gameData.curFreezeTimeCount.toString();

        // this.tipButton.interactable = gameData.curTipCount > 0;
        // this.bombButton.interactable = gameData.curLightningCount > 0;
        // this.realignmentButton.interactable = gameData.curResetCount > 0;
        // this.freezeTimeButton.interactable = gameData.curFreezeTimeCount > 0;
    }

    protected timeImgFillStart: number = 0;
    protected timeImgFillEnd: number = 1;
    protected timeImgFillRange: number = 1;
    // 倒计时百分比的回调
    protected onTimePercentCallback(percent: number) {
        this.timeImg.fillRange = (this.timeImgFillStart + this.timeImgFillRange) * percent;
    }

    // 回到主页
    protected goHome() {
        // let state = this.cover.playHideAni();
        // this.scheduleOnce(() => {
        //     this.cover.node.active = false;
        //     let state = this.subject.playShowAni();
        //     this.updateItemsCount();
        //     this.subject.node.active = true;
        //     this.scheduleOnce(() => {
        //         this.gameStart();
        //     }, state.duration + 0.1);
        // }, state.duration + 0.1);
        this.gridManager.clearAllGrids();
        this.subject.node.active = false;
        // 封面关卡
        this.curCoverLevel.string = gameData.curLevel.toString();
        this.cover.show();
    }

    跳关() {
        if (this.skipLevelEdit) {
            let level = Number(this.skipLevelEdit.string);
            if (level) {
                gameData.curLevel = level - 1;
                this.nextLevel(0);
            }
        }
    }

    下一关() {
        this.curScore = 500;
        this.nextLevel();
    }

    重置游戏记录() {
        resetGameData();
        this.goHome();
    }
}