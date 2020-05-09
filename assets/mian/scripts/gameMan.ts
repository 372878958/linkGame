import countDown from "../../component/countDown";
import gridManager from "./gridManager";

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

    @property(gridManager)
    protected gridManager: gridManager = null;

    @property(cc.Node)
    protected gameOverNode: cc.Node = null;

    start() {
        this.gridManager.setGameOverCallback(this.gameOver.bind(this));
        this.gridManager.setAddScoreCallback(this.addScore.bind(this));
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

    // 当前分数
    protected curScore: number = 0;
    // 添加分数
    addScore(score: number) {
        this.curScore += score;
        this.score.string = this.curScore.toString();
    }
    // 重置分数
    resetScore() {
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
