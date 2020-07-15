import advertising from "./advertising";
import nodeOperation from "../../commonLib/component/nodeOperation";

// 看广告添加道具
const { ccclass, property } = cc._decorator;

@ccclass
export default class addItem extends cc.Component {
    @property({
        type: cc.SpriteFrame,
        displayName: "大图标集"
    })
    protected iconSFs: cc.SpriteFrame[] = [];

    @property({
        type: cc.Sprite,
        displayName: "道具图标"
    })
    protected icon: cc.Sprite = null;

    @property({
        type: cc.SpriteFrame,
        displayName: "数量图片集"
    })
    protected numSFs: cc.SpriteFrame[] = [];

    @property({
        type: cc.Sprite,
        displayName: "数量图"
    })
    protected numImg: cc.Sprite = null;

    protected op: nodeOperation = null;
    onLoad() {
        this.op = this.getComponent(nodeOperation);
    }

    protected id: number = null;
    protected num: number = null;
    // 设置数据
    setData(id: number, num: number) {
        this.id = id;
        this.num = num;
        this.icon.spriteFrame = this.iconSFs[id];
        this.numImg.spriteFrame = this.numSFs[num - 1];
    }

    protected callback: (id: number, num: number) => void = null;
    // 设置看完广告后的回调
    setCallback(callback: (id: number, num: number) => void) {
        this.callback = callback;
    }

    protected destroyCallback: Function = null;
    // 设置关闭回调
    setDestroyCallback(callback: Function) {
        this.destroyCallback = callback;
    }

    onDestroy() {
        if (this.destroyCallback) {
            this.destroyCallback();
        }
    }

    protected 点击观看广告() {
        advertising.play(() => {
            if (this.callback) {
                this.callback(this.id, this.num);
            }
            this.op.closeSelf();
        })
    }
}
