import countDown from "../../component/countDown";
import gridManager from "./gridManager";
import comboText from "./comboText";

const { ccclass, property } = cc._decorator;

@ccclass
export default class gameMan extends cc.Component {
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
        type: countDown,
        displayName: "倒计时"
    })
    protected time: countDown = null;

    @property({
        displayName: "连击间隔时间",
        tooltip: "两次格子消除时间间隔不超过n(n:为连击间隔时间)秒，则视为连击"
    })
    protected comboTime: number = 2;

    @property({
        type: comboText,
        displayName: "连击文字"
    })
    protected comboText: comboText = null;

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

    @property(cc.Node)
    protected gameOverNode: cc.Node = null;

    start() {
        this.comboText.durationTime = this.comboTime;
        this.gridManager.setGridRemovedCallback(this.onGridRemoved.bind(this));
        this.gridManager.setGameOverCallback(this.gameOver.bind(this));
        this.gridManager.setNextLevelCallback(this.nextLevel.bind(this));
        this.gridManager.setBombSelectCallback(this.onBombSelect.bind(this));
        this.updateItemsCount();
        this.gameStart();
    }

    protected gameStart() {
        // 游戏开始
        this.isGameOver = false;
        // 关闭游戏结束面板
        this.gameOverNode.active = false;
        // 关闭炸弹选择模式
        this.gridManager.setBombSelectMode(false);
        // 重置分数
        this.resetScore();
        // 先解冻 已经冻结的时间
        this.unfreezeTime();
        // 重计倒计时
        this.setTime(120);
        // 
        this.gridManager.gameStart();
        // 所有道具给3个
        this.curTipCount += 3;
        this.curBombCount += 1;
        this.curRealignmentCount += 1;
        this.curFreezeTimeCount += 1;
        this.updateItemsCount();
    }

    protected isGameOver: boolean = false;
    // 游戏结束
    protected gameOver() {
        if (this.isGameOver) {
            return;
        }
        this.isGameOver = true;
        this.gameOverNode.active = true;
        // 先解冻 已经冻结的时间
        this.unfreezeTime();
        // 游戏结束，暂停游戏倒计时
        this.time.pause();
    }

    倒计时回调(event: string, time: number) {
        if (time <= 0) {
            // 倒计时结束，闯关失败
            this.gameOver();
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
    }

    // 返回当前连击数
    protected getComboNum(): number {
        this.unschedule(this.resetCombo);
        if (!this.isCanCombo) {
            // 如果不能连击
            this.isCanCombo = true;
        } else {
            // 如果可以连击
            ++this.curComboNum;
            // 设置连击文字
            this.comboText.setCombo(this.curComboNum);
        }
        this.scheduleOnce(this.resetCombo, this.comboTime);
        return this.curComboNum;
    }

    // 当前分数
    protected curScore: number = 0;
    // 当有一对格子被消除 dis:格子之间的距离
    onGridRemoved(dis: number) {
        let comboNum = this.getComboNum();
        this.curScore += dis * comboNum;
        this.score.string = this.curScore.toString();
    }

    // 重置分数
    resetScore() {
        this.resetCombo(); // 重置分数的时候，连击数也要清零
        this.curScore = 0;
        this.score.string = "0";
    }

    protected curLevel: number = 1;
    // 下一关
    nextLevel() {
        ++this.curLevel;
        this.level.string = this.curLevel.toString();
        this.gameStart();
    }

    protected curTipCount: number = 0;
    protected 点击提示() {
        if (this.curTipCount > 0) {
            --this.curTipCount;
            this.updateItemsCount();
            this.gridManager.autoLinkGrid();
        }
    }

    // 是否选择了炸掉某种格子
    protected onBombSelect(select: boolean) {
        if (select) {
            --this.curBombCount;
            this.updateItemsCount();
        }
    }

    protected curBombCount: number = 0;
    protected 点击炸弹() {
        if (this.curBombCount > 0) {
            this.gridManager.setBombSelectMode(true);
        }
    }

    protected curRealignmentCount: number = 0;
    protected 点击重排() {
        if (this.curRealignmentCount > 0) {
            --this.curRealignmentCount;
            this.updateItemsCount();
            this.gridManager.randomGridsPos();
        }
    }

    protected curFreezeTimeCount: number = 0;
    protected 点击冻结时间() {
        if (this.curFreezeTimeCount > 0) {
            --this.curFreezeTimeCount;
            this.updateItemsCount();
            this.freezeTime();
        }
    }

    // 时间是否已经冻结
    protected isFreezeTime: boolean = false;
    // 冻结时间
    protected freezeTime() {
        if (!this.isFreezeTime) {
            this.isFreezeTime = true;
            this.time.pause();
            this.scheduleOnce(this.unfreezeTime, 7);
            // 冻结时 冻结按钮不可再次点击
            this.freezeTimeButton.interactable = false;
        }
    }
    // 解冻时间
    protected unfreezeTime() {
        if (this.isFreezeTime) {
            this.isFreezeTime = false;
            this.unschedule(this.unfreezeTime);
            this.time.resume();
            // 解冻时 如果还有冻结次数，则冻结可点
            if (this.curFreezeTimeCount > 0) {
                this.freezeTimeButton.interactable = true;
            }
        }
    }

    // 刷新道具数量
    protected updateItemsCount() {
        this.tipLabel.string = this.curTipCount.toString();
        this.bombLabel.string = this.curBombCount.toString();
        this.realignmentLabel.string = this.curRealignmentCount.toString();
        this.freezeTimeLabel.string = this.curFreezeTimeCount.toString();

        this.tipButton.interactable = this.curTipCount > 0;
        this.bombButton.interactable = this.curBombCount > 0;
        this.realignmentButton.interactable = this.curRealignmentCount > 0;
        this.freezeTimeButton.interactable = this.curFreezeTimeCount > 0;
    }
}
