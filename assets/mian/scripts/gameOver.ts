import nodeOperation from "../../commonLib/component/nodeOperation";
import advertising from "./advertising";

const { ccclass, property } = cc._decorator;

@ccclass
export default class gameOver extends cc.Component {

    @property({
        type: cc.Sprite,
        displayName: "时间相关图"
    })
    protected timeImgs: cc.Sprite[] = [];

    @property({
        type: cc.Sprite,
        displayName: "炸弹相关图"
    })
    protected bombImgs: cc.Sprite[] = [];

    protected op: nodeOperation = null;

    onLoad() {
        this.op = this.getComponent(nodeOperation);
    }

    show(isTime: boolean) {
        for (let v of this.timeImgs) {
            v.node.active = isTime;
        }
        for (let v of this.bombImgs) {
            v.node.active = !isTime;
        }
        this.node.active = true;
    }

    protected continueCallback: Function = null;
    // 设置继续回调
    setContinueCallback(callback: Function) {
        this.continueCallback = callback;
    }

    protected restartCallback: Function = null;
    // 设置重新开始回调
    setRestartCallback(callback: Function) {
        this.restartCallback = callback;
    }

    protected goHomeCallback: Function = null;
    // 设置回到主页回调
    setGoHomeCallback(callback: Function) {
        this.goHomeCallback = callback;
    }

    // 
    protected 看广告继续() {
        advertising.play(() => {
            this.op.closeSelf(() => {
                if (this.continueCallback) {
                    this.continueCallback();
                }
            });
        })
    }

    protected 点击重新开始() {
        this.op.closeSelf(() => {
            if (this.restartCallback) {
                this.restartCallback();
            }
        });
    }

    protected 点击主页() {
        if (this.goHomeCallback) {
            this.goHomeCallback();
        }
        this.op.node.active = false;
    }
}
