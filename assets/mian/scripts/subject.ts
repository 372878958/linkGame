const { ccclass, property } = cc._decorator;
@ccclass
export default class subject extends cc.Component {
    @property({
        type: cc.AnimationClip,
        displayName: "淡入动画"
    })
    protected showClip: cc.AnimationClip = null;

    protected ani: cc.Animation = null;
    onLoad() {
        this.ani = this.getComponent(cc.Animation);
    }

    playShowAni() {
        let state = this.ani.play(this.showClip.name);
        this.ani.setCurrentTime(0, this.showClip.name);
        this.ani.sample(this.showClip.name);
        return state;
    }
}
