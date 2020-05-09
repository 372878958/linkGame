import countDown from "../../component/countDown";
import gridManager from "./gridManager";
import comboText from "./comboText";

const { ccclass, property } = cc._decorator;
const comboTime: number = 2;

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
        type: comboText,
        displayName: "连击文字"
    })
    protected comboText: comboText = null;

    @property(gridManager)
    protected gridManager: gridManager = null;

    @property(cc.Node)
    protected gameOverNode: cc.Node = null;

    start() {
        this.comboText.durationTime = comboTime;
        this.gridManager.setGridRemovedCallback(this.onGridRemoved.bind(this));
        this.gridManager.setGameOverCallback(this.gameOver.bind(this));
        this.gridManager.setNextLevelCallback(this.nextLevel.bind(this));
        this.gameStart();
    }

    protected gameStart() {
        // 游戏开始
        this.isGameOver = false;
        // 关闭游戏结束面板
        this.gameOverNode.active = false;
        // 重置分数
        this.resetScore();
        // 重计倒计时
        this.setTime(120);
        // 
        this.gridManager.gameStart();
    }

    protected isGameOver: boolean = false;
    // 游戏结束
    protected gameOver() {
        if (this.isGameOver) {
            return;
        }
        this.isGameOver = true;
        this.gameOverNode.active = true;
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
        this.scheduleOnce(this.resetCombo, comboTime);
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
}
