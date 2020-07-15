import { blockInput } from "../../commonLib/component/BlockInput";

const { ccclass, property } = cc._decorator;

@ccclass
export default class cover extends cc.Component {

    @property({
        type: cc.AnimationClip,
        displayName: "隐藏动画"
    })
    protected hideClip: cc.AnimationClip = null;

    protected ani: cc.Animation = null;
    onLoad() {
        this.ani = this.getComponent(cc.Animation);
    }

    playHideAni() {
        let state = this.ani.play(this.hideClip.name);
        blockInput(state.duration);
        return state;
    }

    show() {
        this.node.active = true;
        this.ani.setCurrentTime(0, this.hideClip.name);
        this.ani.sample(this.hideClip.name);
    }
}
