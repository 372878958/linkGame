
const { ccclass, property } = cc._decorator;

@ccclass
export default class comboText extends cc.Component {
    @property({
        type: cc.Label,
        displayName: "连击数字"
    })
    protected combo: cc.Label = null;

    @property({
        type: cc.Animation,
        displayName: "动画播放器"
    })
    protected animation: cc.Animation = null;

    @property({
        type: cc.AnimationClip,
        displayName: "文字变动动画"
    })
    protected changeAni: cc.AnimationClip = null;

    @property({
        type: cc.AnimationClip,
        displayName: "文字显示动画"
    })
    protected showAni: cc.AnimationClip = null;

    @property({
        type: cc.AnimationClip,
        displayName: "文字隐藏动画"
    })
    protected hideAni: cc.AnimationClip = null;

    onLoad() {
        this.node.opacity = 0;
    }

    // 显示持续时间
    durationTime: number = 2;

    // 设置连击
    setCombo(num: number) {
        this.combo.string = num.toString();
        if (!this.node.opacity || this.animation.currentClip == this.hideAni) {
            // 未显示 或 正在播放隐藏 则播放显示动画
            this.animation.play(this.showAni.name);
            this.animation.sample(this.showAni.name);
        } else {
            // 显示中则播放改变动画
            this.animation.play(this.changeAni.name);
        }
        // 显示一段时间关闭
        this.unschedule(this.playHideAni);
        this.scheduleOnce(this.playHideAni, this.durationTime);
    }

    // 播放关闭动画
    playHideAni() {
        this.animation.play(this.hideAni.name);
    }
}
