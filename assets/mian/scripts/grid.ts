import linkGamePathFinding from "./linkGamePathFinding";
import countDown from "../../commonLib/component/countDown";
import playAnimation from "../../commonLib/component/playAnimation";
import { setGridIcon } from "./gameData";

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
    protected bombNode: cc.Node = null;

    @property({
        type: cc.Node,
        displayName: "选中状态节点"
    })
    protected selectNode: cc.Node = null;

    @property({
        type: countDown,
        displayName: "炸弹倒计时"
    })
    protected bombTime: countDown = null;

    @property({
        type: cc.Animation,
        displayName: "动画播放器"
    })
    protected animation: cc.Animation = null;

    @property({
        type: cc.AnimationClip,
        displayName: "生成动画"
    })
    protected generateAni: cc.AnimationClip = null;

    @property({
        type: cc.AnimationClip,
        displayName: "查看动画",
        tooltip: "查看未知格子动画"
    })
    protected openGridClip: cc.AnimationClip = null;

    @property({
        type: cc.AnimationClip,
        displayName: "取消查看",
        tooltip: "取消查看未知格子动画"
    })
    protected closeGridClip: cc.AnimationClip = null;

    // @property({
    //     type: cc.SpriteFrame,
    //     displayName: "图标集",
    //     tooltip: "都有哪些图标（图标合集）"
    // })
    // protected iconSF: cc.SpriteFrame[] = [];

    @property({
        type: cc.Button,
        displayName: "点击按钮"
    })
    protected button: cc.Button = null;

    // @property({
    //     type: cc.Prefab,
    //     displayName: "冰碎特效"
    // })
    // protected unfreezePrefab: cc.Prefab = null;
    // protected unfreezeAni: playAnimation = null;

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
                this.updateIcon();
            } else {
                this.node.active = false;
            }
        }
    }

    updateIcon() {
        setGridIcon(this._iconID, this.icon);
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
    getX() {
        return this._x * this.size.width + this.size.width / 2;
    }
    // 获取在UI上的Y坐标
    getY() {
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
        if (size) {
            this.node.scaleX = size.width / this.node.width;
            this.node.scaleY = size.height / this.node.height;
        }
    }

    // 是否被选择
    protected _isSelect: boolean = null;
    get isSelect(): boolean {
        return this._isSelect;
    }
    set isSelect(select: boolean) {
        if (this._isSelect != select) {
            this._isSelect = select;
            this.button.interactable = !this._isSelect;
            this.selectNode.active = select;
            // 问号格子点击时反转
            if (this.hideMode) {
                this.turnGrid(select);
            }
            // 播放和停止选中动画
            if (this._isSelect) {
                // 正在播发出生动画，则直接采样最后一帧
                if (this.animation.currentClip.name == this.generateAni.name) {
                    let state = this.animation.getAnimationState(this.generateAni.name);
                    if (state.isPlaying) {
                        this.animation.setCurrentTime(state.duration, this.generateAni.name);
                        this.animation.sample(this.generateAni.name);
                    }
                }
                let s = this.animation.play("选中");
                this.scheduleOnce(this.playSelectLoopAni, s.duration);
                this.node.zIndex = 1;
            } else {
                this.node.zIndex = 0;
                this.unschedule(this.playSelectLoopAni);
                this.animation.stop("选中_待机");
            }
        }
    }

    // 解除冰冻
    unfreeze() {
        if (this.freezing) {
            this.freezing = false;
            // if (!this.unfreezeAni) {
            //     let node = cc.instantiate(this.unfreezePrefab);
            //     this.content.addChild(node);
            //     this.unfreezeAni = node.getComponent(playAnimation);
            // }
            // return this.unfreezeAni.play();
        }
    }

    // 播放选中的循环动画
    protected playSelectLoopAni() {
        this.animation.play("选中_待机");
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
            // this.icon.node.active = !b;
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
            // this.button.enabled = !b;
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
        this.x = 0;
        this.y = 0;
        this.size = cc.Size.ZERO;
        this.hideMode = false;
        this.freezing = false;
        this.isSelect = false;
        this.id = -1;
        this.icon.node.scale = 1;
        this.setBombCallback(null);
        this.setClickCallback(null);
        this.setBombTime(0);
        this.resetTrun();
        this.stopMove();
        this.stopAnimation();
    }

    // 停止所有动画
    stopAnimation() {
        if (this.animation && this.animation.currentClip) {
            this.animation.setCurrentTime(this.animation.currentClip.duration, this.animation.currentClip.name);
            this.animation.sample(this.animation.currentClip.name);
        }
        this.animation.stop();
    }

    // 设置炸弹时间
    setBombTime(time: number) {
        if (time) {
            this.bombTime.resume();
            this.bombTime.setTime(time);
            this.bombNode.active = true;
            this.bombNode.scale = 0;
            cc.tween(this.bombNode)
                .to(0.25, { scale: 1 }, { easing: "backOut" })
                .start();
        } else {
            this.bombNode.active = false;
        }
    }

    getBombTime() {
        if (this.bombNode.active) {
            return this.bombTime.getTime();
        }
        return 0;
    }

    // 是否是炸弹
    isBomb(): boolean {
        return this.bombNode.active;
    }

    // 暂停炸弹时间
    pauseBombTime(pause: boolean = true) {
        if (pause) {
            this.bombTime.pause();
        } else {
            this.bombTime.resume();
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
            this.stopMove();
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

    // 停止移动
    stopMove() {
        if (this.curMoveTween) {
            this.curMoveTween.stop();
            this.curMoveTween = null;
            this.node.x = this.getX();
            this.node.y = this.getY();
        }
    }

    // protected curTween: cc.Tween<cc.Node> = null;
    // 反转格子显示问号或者图标
    protected turnGrid(isShow: boolean) {
        let ani = this.hideIcon.getComponent(cc.Animation);
        if (isShow) {
            ani.play(this.openGridClip.name);
        } else {
            ani.play(this.closeGridClip.name);
        }
        // if (this.curTween) {
        //     this.curTween.stop();
        // }
        // this.curTween = cc.tween(this.content)
        //     .call(() => {
        //         this.content.is3DNode = true;
        //     })
        //     .to(0.25, { eulerAngles: cc.v3(0, 90, 0) })
        //     .call(() => {
        //         if (this.hideMode) {
        //             this.hideIcon.node.active = !isShow;
        //             this.icon.node.active = isShow;
        //         }
        //     })
        //     .to(0.25, { eulerAngles: cc.v3(0, 0, 0) })
        //     .call(() => {
        //         this.content.is3DNode = false;
        //         this.curTween = null;
        //     })
        //     .start();
    }

    // 播放格子生成的动画
    playGenerateAni() {
        this.animation.play(this.generateAni.name);
        this.animation.sample(this.generateAni.name);
    }

    // 重置翻转动画
    resetTrun() {
        // if (this.curTween) {
        //     this.curTween.stop();
        //     this.curTween = null;
        // }
        // this.content.eulerAngles = cc.v3(0, 0, 0);
        let ani = this.hideIcon.getComponent(cc.Animation);
        ani.setCurrentTime(0, this.openGridClip.name);
        ani.sample(this.openGridClip.name);
    }

    protected 点击格子() {
        if (this.clickCallback) {
            this.clickCallback(this);
        }
    }

    // 设置炸弹回调
    protected bombCallback: grid_callback = null;
    setBombCallback(cb: grid_callback) {
        this.bombCallback = cb;
    }
    protected 炸弹事件(event: string, time: number) {
        if (time <= 0) {
            if (this.bombCallback) {
                this.bombCallback(this);
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