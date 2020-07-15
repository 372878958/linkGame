// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class scoreAni extends cc.Component {

    @property({
        type: cc.Sprite,
        displayName: "分数图标"
    })
    protected scoreImg: cc.Sprite = null;

    @property({
        type: cc.ParticleSystem,
        displayName: "粒子特效"
    })
    protected particle: cc.ParticleSystem = null;

    onLoad() {
        if (this.particle) {
            this.particle.stopSystem();
        }
    }

    setPos(x: number, y: number) {
        this.node.x = x;
        this.node.y = y;
    }

    moveToTarget(delay: number, tarPos: cc.Vec2, overCallback: (obj: scoreAni) => void = null, finishCallback: (obj: scoreAni) => void = null) {
        this.scoreImg.node.active = true;
        this.node.scale = 0;
        cc.tween(this.node)
            .to(0.25, { scale: 1 })
            .delay(0.25 + delay)
            .call(() => {
                if (this.particle) {
                    this.particle.resetSystem();
                }
            })
            .to(0.75, { x: tarPos.x, y: tarPos.y }, { easing: "sineOut" })
            .call(() => {
                if (overCallback) {
                    overCallback(this);
                }
                if (this.particle) {
                    this.particle.stopSystem();
                }
                this.scoreImg.node.active = false;
            })
            .delay(0.5)
            .call(() => {
                if (finishCallback) {
                    finishCallback(this);
                }
            })
            .start();
    }
}
