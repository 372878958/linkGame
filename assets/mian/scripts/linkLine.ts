

const { ccclass, property } = cc._decorator;

@ccclass
export default class linkLine extends cc.Component {
    @property({
        type: cc.ParticleSystem,
        displayName: "粒子"
    })
    particle: cc.ParticleSystem = null;

    onLoad() {
        this.particle.stopSystem();
    }

    setAni(delay: number, moveTime: number, pool: cc.NodePool) {
        cc.tween(this.node)
            .delay(delay)
            .call(() => {
                this.particle.resetSystem();
            })
            .to(moveTime, { width: 0 })
            .call(() => {
                this.particle.stopSystem();
            })
            .delay(2)
            .call(() => {
                pool.put(this.node);
            })
            .start();
    }
}
