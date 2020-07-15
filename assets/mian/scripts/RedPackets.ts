import advertising from "./advertising";


const { ccclass, property } = cc._decorator;

@ccclass
export default class RedPackets extends cc.Component {
    @property({
        type: cc.Node,
        displayName: "开红包前节点",
        tooltip: "开红包之前要显示的节点"
    })
    protected openNode: cc.Node = null;

    @property({
        type: cc.Node,
        displayName: "开红包后节点",
        tooltip: "开红包之后要显示的节点"
    })
    protected openedNode: cc.Node = null;

    @property({
        type: cc.Label,
        displayName: "红包钱数",
    })
    protected moneyLable: cc.Label = null;

    onLoad() {
        this.openNode.active = true;
        this.openedNode.active = false;
    }

    开红包看广告() {
        advertising.play(() => {
            this.openNode.active = false;
            this.openedNode.active = true;
        });
    }
}
