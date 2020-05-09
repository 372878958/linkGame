const { ccclass, property, menu } = cc._decorator;

@ccclass
@menu("扩展组件/倒计时")
export default class countDown extends cc.Component {

    @property({
        displayName: "是否是倒计时"
    })
    protected isCountDown: boolean = true; // 是否是倒计时

    @property({
        displayName: "开始计时秒数",
    })
    protected curTime: number = 0;

    @property({
        type: cc.Label,
        displayName: "计时label"
    })
    protected timeLabel: cc.Label = null;

    @property({
        type: cc.Component.EventHandler,
        displayName: "计时每秒回调"
    })
    callbackEvents: cc.Component.EventHandler[] = [];

    // time:单位秒
    protected intTime: number = 0;
    public setTime(time: number) {
        this.enabled = true;
        this.curTime = time;
        this.intTime = Math.ceil(this.curTime);
        this.onCallback();
    }

    public getTime(): number {
        return this.curTime;
    }

    update(timePass) {
        if (this.isPause) {
            return;
        }
        if (this.curTime > 0 || !this.isCountDown) {
            // 倒计时或者正计时
            let intTime = this.intTime;
            if (this.isCountDown) {
                this.curTime -= timePass;
            } else {
                this.curTime += timePass;
            }
            if (this.curTime <= 0) {
                this.curTime = 0;
                this.enabled = false;
            }
            intTime = Math.ceil(this.curTime);
            if (this.intTime != intTime) {
                this.intTime = intTime;
                this.onCallback();
            }
        }
    }

    protected onCallback() {
        if (this.timeLabel) {
            this.timeLabel.string = this.intTime.toString();
        }
        for (let v of this.callbackEvents) {
            v.emit([v.customEventData, this.intTime]);
        }
    }

    protected isPause: boolean = false;
    // 暂停
    pause() {
        this.isPause = true;
    }
    // 继续
    resume() {
        this.isPause = false;
    }
}
