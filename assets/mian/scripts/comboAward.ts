import { gameLib } from "../../commonLib/lib/gameLib";

const { ccclass, property } = cc._decorator;

@ccclass
export default class comboAward extends cc.Component {

    @property({
        displayName: "连击奖励查找概率",
        step: 0.1
    })
    protected comboAwardLink: number = 0.5;
    @property({
        displayName: "连击奖励炸弹概率",
        step: 0.1
    })
    protected comboAwardBomb: number = 0.3;
    @property({
        displayName: "连击奖励重排概率",
        step: 0.1
    })
    protected comboAwardReset: number = 0.1;
    @property({
        displayName: "连击奖励冻结概率",
        step: 0.1
    })
    protected comboAwardFreeze: number = 0.1;

    @property({
        type: cc.Sprite,
    })
    protected sp: cc.Sprite = null;

    @property({
        type: cc.SpriteFrame,
        displayName: "连击奖励图标"
    })
    protected sf: cc.SpriteFrame[] = [];

    @property({
        type: cc.ParticleSystem,
        displayName: "粒子效果"
    })
    protected particle: cc.ParticleSystem = null;

    protected _awardID: number = null;
    get awardID(): number {
        return this._awardID;
    }
    set awardID(id: number) {
        if (this._awardID != id) {
            this._awardID = id;
            this.sp.spriteFrame = this.sf[id];
        }
    }

    onLoad() {
        if (this.particle) {
            this.particle.stopSystem();
        }
    }

    // 随机连击奖励
    randomComboAwardID() {
        let all = this.comboAwardLink + this.comboAwardBomb + this.comboAwardReset + this.comboAwardFreeze;
        let r = gameLib.GetRandomNum(1, all * 100) / 100;
        if (r <= this.comboAwardLink) {
            this.awardID = 0;
        } else if (r <= this.comboAwardLink + this.comboAwardBomb) {
            this.awardID = 1;
        } else if (r <= this.comboAwardLink + this.comboAwardBomb + this.comboAwardReset) {
            this.awardID = 2;
        } else if (r <= all) {
            this.awardID = 3;
        }
    }

    // 移动位置
    moveTo(node: cc.Node, callback: (awardID: comboAward) => void) {
        if (!node) {
            return;
        }
        let worldPos = node.convertToWorldSpaceAR(cc.v2(node.x, node.y));
        let pos = this.node.parent.convertToNodeSpaceAR(cc.v2(worldPos.x, worldPos.y));
        // pos.x -= node.anchorX * node.width * node.scaleX;
        pos.y -= this.sp.node.anchorY * this.sp.node.height;
        if (this.particle) {
            this.particle.resetSystem();
        }
        cc.tween(this.node)
            .to(1, { x: pos.x, y: pos.y }, { easing: "sineOut" })
            .call(() => {
                if (callback) {
                    callback(this);
                }
                if (this.particle) {
                    this.particle.stopSystem();
                }
            })
            .start();
    }
}
