// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import countDown from "../../component/countDown";
import linkGamePathFinding from "./linkGamePathFinding";

const { ccclass, property } = cc._decorator;

@ccclass
export default class grid extends cc.Component {

    @property({
        type: cc.Node,
        displayName: "内容跟节点"
    })
    protected content: cc.Node = null;

    @property({
        type: cc.Sprite,
        displayName: "显示图标"
    })
    protected icon: cc.Sprite = null;

    @property({
        type: cc.Sprite,
        displayName: "底图"
    })
    protected backGround: cc.Sprite = null;

    @property({
        type: cc.Sprite,
        displayName: "隐藏标示"
    })
    protected hideIcon: cc.Sprite = null;

    @property({
        type: cc.Sprite,
        displayName: "冻结图标"
    })
    protected freezingIcon: cc.Sprite = null;

    @property({
        type: cc.Node,
        displayName: "炸弹节点"
    })
    protected boomNode: cc.Node = null;

    @property({
        type: countDown,
        displayName: "炸弹倒计时"
    })
    protected boomTime: countDown = null;

    @property({
        type: cc.SpriteFrame,
        displayName: "图标集",
        tooltip: "都有哪些图标（图标合集）"
    })
    protected iconSF: cc.SpriteFrame[] = [];

    @property({
        type: cc.Button,
        displayName: "点击按钮"
    })
    protected button: cc.Button = null;

    // 当前 图标 ID -1:没有
    protected _iconID: number = null;

    get id(): number {
        return this._iconID;
    }

    set id(id: number) {
        if (this._iconID != id) {
            this._iconID = id;
            if (this._iconID != null && this._iconID >= 0) {
                this.node.active = true;
                this.icon.spriteFrame = this.iconSF[this._iconID];
            } else {
                this.node.active = false;
            }
        }
    }

    // 格子坐标
    protected _x: number = null;
    protected _y: number = null;
    get x(): number {
        return this._x;
    }
    set x(x: number) {
        if (this._x != x) {
            this._x = x;
            this.node.x = this.getX();
        }
    }
    get y(): number {
        return this._y;
    }
    set y(y: number) {
        if (this._y != y) {
            this._y = y;
            this.node.y = this.getY();
        }
    }

    // 获取在UI上的X坐标
    protected getX() {
        return this._x * this.size.width + this.size.width / 2;
    }
    // 获取在UI上的Y坐标
    protected getY() {
        return this._y * this.size.height + this.size.height / 2;
    }

    // 格子大小
    protected _size: cc.Size = null;
    get size(): cc.Size {
        return this._size;
    }
    set size(size: cc.Size) {
        if (this._size != size) {
            this._size = size;
            this.setScaleBySize(size);
        }
    }

    // 根据需要格子显示的大小，设置缩放
    protected setScaleBySize(size: cc.Size) {
        this.node.scaleX = size.width / this.node.width;
        this.node.scaleY = size.height / this.node.height;
    }

    // 是否被选择
    protected _isSelect: boolean = false;
    get isSelect(): boolean {
        return this._isSelect;
    }
    set isSelect(select: boolean) {
        if (this._isSelect != select) {
            this._isSelect = select;
            this.button.interactable = !this._isSelect;
            // 问号格子点击时反转
            if (this.hideMode) {
                this.turnGrid(select);
            }
        }
    }

    // 是否是问好格子
    protected _hideMode: boolean = null;
    get hideMode(): boolean {
        return this._hideMode;
    }
    set hideMode(b: boolean) {
        if (this._hideMode != b) {
            this._hideMode = b;
            this.hideIcon.node.active = b;
            this.icon.node.active = !b;
        }
    }

    protected _freezing: boolean = null;
    get freezing(): boolean {
        return this._freezing;
    }
    set freezing(b: boolean) {
        if (this._freezing != b) {
            this._freezing = b;
            if (b) {
                this.isSelect = false;
            }
            this.freezingIcon.node.active = b;
            this.button.enabled = !b;
        }
    }

    start() {
        if (this.hideMode == null) {
            this.hideMode = false;
        }
        if (this.freezing == null) {
            this.freezing = false;
        }
    }

    reset() {
        this.hideMode = false;
        this.freezing = false;
        this.isSelect = false;
        this.id = -1;
        this.setBoomCallback(null);
        this.setClickCallback(null);
        this.setBoomTime(0);
        this.resetTrun();
    }

    // 设置炸弹时间
    setBoomTime(time: number) {
        if (time) {
            this.boomTime.resume();
            this.boomTime.setTime(time);
            this.boomNode.active = true;
        } else {
            this.boomNode.active = false;
        }
    }

    // 是否是炸弹
    isBoom(): boolean {
        return this.boomNode.active;
    }

    // 暂停炸弹时间
    pauseBoomTime(pause: boolean = true) {
        if (pause) {
            this.boomTime.pause();
        } else {
            this.boomTime.resume();
        }
    }

    // 移动格子（仅限横向）
    moveToX(x: number, path: linkGamePathFinding = null) {
        this.moveTo(x, this.y, path);
    }

    // 移动格子（仅限纵向）
    moveToY(y: number, path: linkGamePathFinding = null) {
        this.moveTo(this.x, y, path);
    }

    protected curMoveTween: cc.Tween<cc.Node> = null;
    // 移动格子
    moveTo(x: number, y: number, path: linkGamePathFinding = null) {
        if (this.x != x || this.y != y) {
            // 先停止移动动画
            if (this.curMoveTween) {
                this.curMoveTween.stop();
                this.node.x = this.getX();
                this.node.y = this.getY();
            }
            // 计算移动距离
            let moveX = Math.abs(this.x - x);
            let moveY = Math.abs(this.y - y);
            let moveDis = Math.max(moveX, moveY);
            // 刷新障碍点
            if (path) {
                path.remBlockPoint([cc.v2(this.x, this.y)]);
                path.addBlockPoint([cc.v2(x, y)]);
            }
            // 刷新坐标
            this._x = x;
            this._y = y;
            // 获取UI坐标
            let uiX = this.getX();
            let uiY = this.getY();
            // 移动格子
            this.curMoveTween = cc.tween(this.node)
                .to(moveDis * 0.2, { x: uiX, y: uiY }, { easing: "backOut" })
                .call(() => {
                    this.curMoveTween = null;
                })
                .start();
        }
    }

    protected curTween: cc.Tween<cc.Node> = null;
    // 反转格子显示问号或者图标
    protected turnGrid(isShow: boolean) {
        if (this.curTween) {
            this.curTween.stop();
        }
        this.curTween = cc.tween(this.content)
            .call(() => {
                this.content.is3DNode = true;
            })
            .to(0.25, { eulerAngles: cc.v3(0, 90, 0) })
            .call(() => {
                if (this.hideMode) {
                    this.hideIcon.node.active = !isShow;
                    this.icon.node.active = isShow;
                }
            })
            .to(0.25, { eulerAngles: cc.v3(0, 0, 0) })
            .call(() => {
                this.content.is3DNode = false;
                this.curTween = null;
            })
            .start();
    }

    // 重置翻转动画
    resetTrun() {
        if (this.curTween) {
            this.curTween.stop();
            this.curTween = null;
        }
        this.content.eulerAngles = cc.v3(0, 0, 0);
    }

    protected 点击格子() {
        if (this.clickCallback) {
            this.clickCallback(this);
        }
    }

    // 设置炸弹回调
    protected boomCallback: grid_callback = null;
    setBoomCallback(cb: grid_callback) {
        this.boomCallback = cb;
    }
    protected 炸弹事件(event: string, time: number) {
        if (time <= 0) {
            if (this.boomCallback) {
                this.boomCallback(this);
            }
        }
    }

    protected clickCallback: grid_callback = null;
    // 设置点击回调
    setClickCallback(callback: grid_callback) {
        this.clickCallback = callback;
    }
}

export type grid_callback = (grid: grid) => void;