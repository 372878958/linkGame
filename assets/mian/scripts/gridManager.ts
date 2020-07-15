import grid from "./grid";
import linkGamePathFinding from "./linkGamePathFinding";
import { level_parameter_result } from "./level_parameter";
import gameAudioClip from "./gameAudioClip";
import linkLine from "./linkLine";
import scoreAni from "./scoreAni";
import playAnimation from "../../commonLib/component/playAnimation";
import { gameLib } from "../../commonLib/lib/gameLib";

const { ccclass, property } = cc._decorator;

export enum GRID_MOVE_DIR {
    UP,
    DOWN,
    LEFT,
    RIGHT
}

@ccclass
export default class gridManager extends cc.Component {

    static instance: gridManager = null;

    @property({
        type: cc.Prefab,
        displayName: "方块预设"
    })
    protected gridPrefab: cc.Prefab = null;

    @property({
        type: cc.Graphics,
        displayName: "画笔"
    })
    protected graphics: cc.Graphics = null;

    @property({
        type: cc.Prefab,
        displayName: "连线拖尾"
    })
    protected linkLine: cc.Prefab = null;

    @property({
        type: cc.Node,
        displayName: "炸弹选择框"
    })
    protected bombSelectNode: cc.Node = null;

    @property({
        type: sp.Skeleton,
        displayName: "闪电按钮特效"
    })
    protected spLightningBtn: sp.Skeleton = null;

    @property({
        type: cc.Prefab,
        displayName: "闪电特效"
    })
    protected spLightning: cc.Prefab = null;
    protected spLightningPool: cc.NodePool = new cc.NodePool();

    @property({
        type: cc.Prefab,
        displayName: "闪电命中效果"
    })
    protected spLightningHit: cc.Prefab = null;
    protected spLightningHitPool: cc.NodePool = new cc.NodePool();

    @property({
        type: cc.Prefab,
        displayName: "格子消除特效"
    })
    protected removeGridAni: cc.Prefab = null;
    protected removeGridAniPool: cc.NodePool = new cc.NodePool();

    @property({
        type: cc.Prefab,
        displayName: "冰碎特效"
    })
    protected unfreezePrefab: cc.Prefab = null;
    protected unfreezeAniPool: cc.NodePool = new cc.NodePool();

    protected metaMap: number[][] = []; // 原始地图数据
    // protected curMap: number[][] = []; // 当前地图数据

    protected maxX: number = 0; // 最大列
    protected maxY: number = 0; // 最大行
    protected gridSize: cc.Size = cc.Size.ZERO; // 当前每个格子的大小
    protected allGrids: grid[] = []; // 当前所有格子的对象
    protected gridTypes: number[] = [1, 2, 3, 4]; // 当前所有格子包含的类型
    protected pathFinding: linkGamePathFinding = new linkGamePathFinding(); // 寻路
    protected bombTime: number = 60; // 炸弹时间

    onLoad() {
        gridManager.instance = this;
        this.spLightningBtn.node.active = false;
    }

    start() {
        // 设置画笔层级
        this.graphics.node.zIndex = 1;
        // 获取地图原数据
        this.metaMap = [
            [0, 0, 0, 0, 0, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 1, 1, 1, 1, 0],
            [0, 0, 0, 0, 0, 0]
        ];
    }

    // 设置地图的最大宽高
    protected setMaxWH(w: number, h: number) {
        // 给宽高留出空间
        w += 2;
        h += 2;
        // 遍历设置
        this.metaMap = [];
        for (let y = 0; y < h; ++y) {
            let row = [];
            for (let x = 0; x < w; ++x) {
                if (x == 0 || y == 0 || x == w - 1 || y == h - 1) {
                    // 边界无格子
                    row.push(0);
                } else {
                    row.push(1);
                }
            }
            this.metaMap.push(row);
        }
    }

    // 获取格子总数
    getTotalGridCount(): number {
        if (this.levelParameter) {
            return this.levelParameter.totalGrid;
        }
        return 0;
    }

    protected levelParameter: level_parameter_result = null;
    // 游戏开始
    gameStart(parameter: level_parameter_result) {
        this.levelParameter = parameter;
        // 关闭炸弹选择模式
        this.setBombSelectMode(false);
        // 停止生成格子
        this.stopGenerateGrid();
        // 设置格子最大宽高
        this.setMaxWH(parameter.width, parameter.height);
        // 清除当前选择的格子
        this.clearCurSelectGrid();
        // 清除所有格子
        this.clearAllGrids();
        // 清除绘制
        this.graphics.clear();
        // 计算最大行列
        this.maxX = this.levelParameter.width + 2;
        this.maxY = this.levelParameter.height + 2;
        // for (let v of this.metaMap) {
        //     if (v.length > this.maxX) {
        //         this.maxX = v.length;
        //     }
        // }
        // this.maxY = this.metaMap.length;
        // 计算每个格子的大小
        this.gridSize.width = this.node.width / this.maxX;
        this.gridSize.height = this.node.height / this.maxY;
        // 设置所有格子
        this.allGrids = [];
        this.pathFinding.reset(this.maxX, this.maxY);
        for (let y = 0; y < this.metaMap.length; ++y) {
            let array = this.metaMap[y];
            for (let x = 0; x < array.length; ++x) {
                let data = array[x];
                if (data) {
                    let grid = this.addGrid(x, y);
                    grid.playGenerateAni();
                }
            }
        }
        // 设置格子种类
        this.gridTypes = [];
        for (let i = 0; i < parameter.typeCount; ++i) {
            this.gridTypes.push(i);
        }
        // 随机生成所有格子的类型
        this.generateGridType();
        // 设置未知格子
        this.setUnknownGrid(parameter.unknownGrid);
        // 设置炸弹
        this.setBomb();
        // 设置冰冻格子
        this.setFreezeGrid(parameter.freezeGridNum);
        // 看看是否是死局，如果是则随机一遍
        if (this.isAllGridBlock()) {
            this.randomGridsPos();
        }
    }

    // 随机生成所有格子的类型
    protected generateGridType() {
        let types: number[] = [];
        for (let i = 0; i < this.allGrids.length / 2; ++i) {
            let type = this.gridTypes[i % this.gridTypes.length];
            types.push(type, type);
        }

        let getType = () => {
            let i = gameLib.GetRandomNum(0, types.length - 1);
            let type = types[i];
            types.splice(i, 1);
            return type;
        }

        for (let v of this.allGrids) {
            if (v.id >= 0) {
                v.id = getType();
            }
        }
    }

    protected isBombSelectMode: boolean = null;
    // 开始选择炸弹模式
    setBombSelectMode(b: boolean) {
        if (this.isBombSelectMode != b) {
            this.isBombSelectMode = b;
            this.bombSelectNode.active = b;
            // 播放对应音效
            if (b) {
                gameAudioClip.playLightningSelect();
            } else {
                gameAudioClip.stopLightningSelect();
            }
            // 清除当前选择的格子
            this.clearCurSelectGrid();
            // 显示特效
            this.spLightningBtn.node.active = b;
        }
    }

    // 是否已经开始生成格子
    protected isStartGenerateGrid: boolean = false;
    // 开始每间隔一段时间生成生成格子
    protected startGenerateGrid() {
        if (this.isStartGenerateGrid) {
            return;
        }
        this.isStartGenerateGrid = true;
        this.schedule(this.randomGenerateGrid, this.levelParameter.easterGridTime);
    }
    // 停止生成格子
    protected stopGenerateGrid() {
        if (!this.isStartGenerateGrid) {
            return;
        }
        this.isStartGenerateGrid = false;
        this.unschedule(this.randomGenerateGrid);
    }
    // 暂停生成格子
    pauseGenerateGrid() {
        this.unschedule(this.randomGenerateGrid);
    }
    // 回复生成格子
    resumeGenerateGrid() {
        if (this.isStartGenerateGrid) {
            this.schedule(this.randomGenerateGrid, this.levelParameter.easterGridTime);
        }
    }

    // 暂停所有炸弹倒计时
    pauseAllBomb() {
        for (let v of this.allGrids) {
            if (v.isBomb()) {
                v.pauseBombTime(true);
            }
        }
    }
    // 恢复所有炸弹倒计时
    resumeAllBomb() {
        for (let v of this.allGrids) {
            if (v.isBomb()) {
                v.pauseBombTime(false);
            }
        }
    }
    // 清除所有炸弹
    clearAllBomb() {
        this.levelParameter.bombCount = 0;
        for (let v of this.allGrids) {
            if (v.isBomb()) {
                v.setBombTime(0);
            }
        }
    }

    // 随机位置生成一对格子
    protected randomGenerateGrid() {
        // 获取所有空位
        let array = this.getNullSpace();
        if (array && array.length >= this.levelParameter.easterGridCondition) {
            // 随机取一个位置
            let randPos = () => {
                let index = gameLib.GetRandomNum(0, array.length - 1);
                let pos = array[index];
                array.splice(index, 1);
                return pos;
            }
            let pos1 = randPos();
            let pos2 = randPos();
            // 随机类型
            let type = this.gridTypes[gameLib.GetRandomNum(0, this.gridTypes.length - 1)];
            let grid1 = this.addGrid(pos1.x, pos1.y, type, false, false);
            let grid2 = this.addGrid(pos2.x, pos2.y, type, false, false);
            grid1.playGenerateAni();
            grid2.playGenerateAni();
            // 播放格子重生音效
            gameAudioClip.playRebirthGrid();
            // 判断是否会死局
            if (this.isAllGridBlock()) {
                this.randomGridsPos();
            }
        }
    }

    // 随机所有炸弹位置
    randomGridsBomb() {
        let grids: grid[] = [];
        let bombs: number[] = [];
        // 循环判断是否有格子能连线
        for (let i = 0; i < this.allGrids.length; ++i) {
            let grid = this.allGrids[i];
            grids.push(grid);
            if (grid.isBomb()) {
                bombs.push(grid.getBombTime());
                grid.setBombTime(0);
            }
        }
        // 随机获取一个格子类型
        let getGrid = () => {
            let index = gameLib.GetRandomNum(0, grids.length - 1);
            let grid = grids[index];
            grids.splice(index, 1);
            return grid;
        }
        // 打乱有效格子的位置
        for (let v of bombs) {
            getGrid().setBombTime(v);
        }
    }

    // 随机所有位置格子的位置
    randomGridsUnknown() {
        let grids: grid[] = [];
        let unknownCount: number = 0;
        // 循环判断是否有格子能连线
        for (let i = 0; i < this.allGrids.length; ++i) {
            let grid = this.allGrids[i];
            grids.push(grid);
            if (grid.hideMode) {
                ++unknownCount;
                grid.hideMode = false;
            }
        }
        // 随机获取一个格子类型
        let getGrid = () => {
            let index = gameLib.GetRandomNum(0, grids.length - 1);
            let grid = grids[index];
            grids.splice(index, 1);
            return grid;
        }
        // 打乱有效格子的位置
        for (let i = 0; i < unknownCount; ++i) {
            getGrid().hideMode = true;
        }
    }

    // 随机变换所有格子的位置
    randomGridsPos() {
        // this.randomGridsUnknown();
        // this.randomGridsBomb();

        // let grids: grid[] = [];
        // let types: number[] = [];
        // // 循环判断是否有格子能连线
        // for (let i = 0; i < this.allGrids.length; ++i) {
        //     let grid = this.allGrids[i];
        //     if (grid.id >= 0) {
        //         grids.push(grid);
        //         types.push(grid.id);
        //     }
        // }
        // // 随机获取一个格子类型
        // let getType = () => {
        //     let index = gameLib.GetRandomNum(0, types.length - 1);
        //     let type = types[index];
        //     types.splice(index, 1);
        //     return type;
        // }
        // // 打乱有效格子的位置
        // for (let v of grids) {
        //     v.id = getType();
        // }
        let randCount = 0; // 随机次数
        let rand = () => {
            randCount++;
            // 随机超过110次，则不随机了
            if (randCount > 11) {
                return;
            } else if (randCount > 10) {
                // 随机一百次还无解，则直接解除冰块
                for (let v of this.allGrids) {
                    if (v.freezing) {
                        this.unfreezeGrid(v.x, v.y);
                    }
                }
            }
            let grids: grid[] = [];
            let POSs: cc.Vec2[] = [];
            // 循环判断是否有格子能连线
            for (let i = 0; i < this.allGrids.length; ++i) {
                let grid = this.allGrids[i];
                if (grid.id >= 0) {
                    grids.push(grid);
                    grid.stopMove();
                    POSs.push(cc.v2(grid.x, grid.y));
                }
            }
            // 随机获取一个格子类型
            let getPos = () => {
                let index = gameLib.GetRandomNum(0, POSs.length - 1);
                let pos = POSs[index];
                POSs.splice(index, 1);
                return pos;
            }
            // 打乱有效格子的位置
            for (let v of grids) {
                let pos = getPos();
                v.x = pos.x;
                v.y = pos.y;
            }
            // 判断是否是一个普通的格子（非冰冻 且 非空格）
            let isNormalGrid = (x: number, y: number) => {
                let grid = this.getGrid(x, y);
                if (grid && grid.node.active && !grid.freezing) {
                    return true;
                }
                return false;
            }
            // 判断是否有冰冻格子被孤立
            let isFreezeBlock = () => {
                for (let v of grids) {
                    if (v.freezing && // 自己是冰块并且周围没有普通块
                        !isNormalGrid(v.x + 1, v.y) &&
                        !isNormalGrid(v.x - 1, v.y) &&
                        !isNormalGrid(v.x, v.y + 1) &&
                        !isNormalGrid(v.x, v.y - 1)
                    ) {
                        return true;
                    }
                }
                return false;
            }
            // 如果是冰块死局，则再随机
            if (isFreezeBlock()) {
                rand();
            }
        }

        // 随机未知
        rand();

        // 随机后在看看是否是死局，如果是则再随机一遍
        if (this.isAllGridBlock()) {
            this.randomGridsPos();
        } else {
            // 播放重排音效
            gameAudioClip.playResetGridPos();
        }
    }

    // 自动查找的可以链接的两个格子
    protected canLinkGrids: grid[] = [];
    // 判断是否所有的格子都不能连接了
    protected isAllGridBlock(): boolean {
        // 判断是否找到了，对应连线
        let find = (src: grid, beginIndex: number) => {
            for (let i = beginIndex; i < this.allGrids.length; ++i) {
                let tar = this.allGrids[i];
                if (tar.freezing == false && src.freezing == false && src.id == tar.id) {
                    let path = this.pathFinding.search(cc.v2(src.x, src.y), cc.v2(tar.x, tar.y));
                    if (path && path.length > 1) {
                        this.canLinkGrids = [src, tar];
                        return true;
                    }
                }
            }
            return false;
        }
        // 循环判断是否有格子能连线
        let isClear = true;
        for (let i = 0; i < this.allGrids.length; ++i) {
            let grid = this.allGrids[i];
            if (grid.id >= 0) {
                isClear = false;
                if (find(grid, i + 1)) {
                    return false;
                }
            }
        }
        if (isClear) {
            return false;
        }
        return true;
    }

    // 根据路线返回得分的格子
    protected getScroeLine(path: cc.Vec2[], startPoint: cc.Vec2, endPoint: cc.Vec2): cc.Vec2[] {
        let ret: cc.Vec2[] = [startPoint];
        // 是否可以push
        let isCanPush = (tar: cc.Vec2) => {
            if (tar.equals(startPoint) || tar.equals(endPoint)) {
                return false;
            }
            for (let v of ret) {
                if (v.equals(tar)) {
                    return false;
                }
            }
            return true;
        }
        // 按顺序push路径点
        let push = (v1: cc.Vec2, v2: cc.Vec2, is1_2: boolean, isX: boolean) => {
            if (is1_2) {
                if (isX) {
                    for (let x = v1.x; x <= v2.x; ++x) {
                        let v3 = cc.v2(x, v1.y);
                        if (isCanPush(v3)) {
                            ret.push(v3);
                        }
                    }
                } else {
                    for (let y = v1.y; y <= v2.y; ++y) {
                        let v3 = cc.v2(v1.x, y);
                        if (isCanPush(v3)) {
                            ret.push(v3);
                        }
                    }
                }
            } else {
                if (isX) {
                    for (let x = v1.x; x >= v2.x; --x) {
                        let v3 = cc.v2(x, v1.y);
                        if (isCanPush(v3)) {
                            ret.push(v3);
                        }
                    }
                } else {
                    for (let y = v1.y; y >= v2.y; --y) {
                        let v3 = cc.v2(v1.x, y);
                        if (isCanPush(v3)) {
                            ret.push(v3);
                        }
                    }
                }
            }
        }
        // 循环遍历路径点
        for (let i = 0; i < path.length; ++i) {
            let curPath = path[i];
            let nextPath = path[i + 1];
            // 计算两点之间所有格子
            if (curPath && nextPath) {
                if (curPath.x > nextPath.x) {
                    push(curPath, nextPath, false, true);
                } else if (curPath.x < nextPath.x) {
                    push(curPath, nextPath, true, true);
                } else if (curPath.y > nextPath.y) {
                    push(curPath, nextPath, false, false);
                } else if (curPath.y < nextPath.y) {
                    push(curPath, nextPath, true, false);
                }
            }
        }
        ret.push(endPoint);
        return ret;
    }

    protected gameOverCallback: (isTime: boolean) => void = null;
    // 设置游戏结束的回调
    setGameOverCallback(callback: (isTime: boolean) => void) {
        this.gameOverCallback = callback;
    }

    protected linkRemovedCallback: (dis: number) => void = null;
    // 设置一对格子被消除时回调 dis:格子之间的距离
    setLinkRemovedCallback(callback: (dis: number) => void) {
        this.linkRemovedCallback = callback;
    }

    protected comboCallback: Function = null;
    // 设置连击回调
    setComboCallback(callback: Function) {
        this.comboCallback = callback;
    }

    protected nextLevelCallback: (delayTime: number) => void = null;
    // 设置通关回调
    setNextLevelCallback(callback: (delayTime: number) => void) {
        this.nextLevelCallback = callback;
    }

    protected gameOver(isTime: boolean) {
        // 关闭炸弹选择
        this.setBombSelectMode(false);
        // 停止生成格子
        this.stopGenerateGrid();
        // 游戏结束，暂停所有炸弹时间
        for (let v of this.allGrids) {
            v.pauseBombTime();
        }
        // 回调游戏结束
        if (this.gameOverCallback) {
            this.gameOverCallback(isTime);
        }
    }

    // 响应炸弹爆炸
    protected onBomb(grid: grid) {
        // 播放炸弹爆炸音效
        gameAudioClip.playBombExplosion();
        this.gameOver(false);
    }

    /** 随机格子设置属性 count：随机格子数量 attribute：要设置的属性
    @param count 随机格子数量
    @param attribute 要设置的属性 0:炸弹格子 1:未知格子 2:冰冻格子
    @param parameter 属性参数
    */
    protected setGridAttribute(count: number, attribute: number, parameter: number = 0): grid[] {
        if (!count || count <= 0) {
            return;
        }
        let grids: grid[] = [];
        for (let v of this.allGrids) {
            let isPush = false;
            switch (attribute) {
                case 0:
                    isPush = !v.isBomb();
                    break;
                case 1:
                    isPush = !v.hideMode;
                    break;
                case 2:
                    isPush = !v.freezing;
                    break;
            }
            if (isPush) {
                grids.push(v);
            }
        }
        let res: grid[] = [];
        for (let i = 0; i < count; ++i) {
            if (grids.length) {
                let index = gameLib.GetRandomNum(0, grids.length - 1);
                switch (attribute) {
                    case 0:
                        grids[index].setBombTime(parameter);
                        break;
                    case 1:
                        grids[index].hideMode = true;
                        break;
                    case 2:
                        grids[index].freezing = true;
                        break;
                }
                res.push(grids[index]);
                grids.splice(index, 1);
            }
        }
        return res;
    }

    // 设置炸弹
    protected setBomb(): grid[] {
        switch (this.levelParameter.bombCondition) {
            case 0: // 无炸弹
                return [];
            case 1: // 1为先后方式（消1个出一个)
                if (this.levelParameter.bombCount > 0) {
                    --this.levelParameter.bombCount;
                    return this.setGridAttribute(1, 0, this.levelParameter.bombTime);
                } else {
                    return [];
                }
            case 2: // 2为同时出现
                this.levelParameter.bombCondition = 0;
                return this.setGridAttribute(this.levelParameter.bombCount, 0, this.levelParameter.bombTime);
        }
    }

    // 设置一个炸弹，测试用
    setBombTest() {
        this.setGridAttribute(1, 0, 3);
    }

    // 随机设置未知格子
    protected setUnknownGrid(count: number): grid[] {
        return this.setGridAttribute(count, 1);
    }

    // 随机设置冰冻格子
    protected setFreezeGrid(count: number): grid[] {
        return this.setGridAttribute(count, 2);
    }

    // 移动格子（对齐格子） dir 0:上 1:下 2:左 3:右
    protected moveGrid(dir: GRID_MOVE_DIR) {
        // 根据需要的方向，返回格子 x 还是 y 的开关。 u:是否取反
        let getX_Y = (g: grid, u: boolean = false) => {
            let isX = dir == GRID_MOVE_DIR.UP || dir == GRID_MOVE_DIR.DOWN ? true : false;
            !u ? isX : isX = !isX;
            if (isX) {
                return g.x;
            } else {
                return g.y;
            }
        }
        // 格式化所有格子
        let map: { [key: number]: grid[] } = {};
        for (let v of this.allGrids) {
            if (map[getX_Y(v)] == null) {
                map[getX_Y(v)] = [];
            }
            map[getX_Y(v)].push(v);
        }
        for (let key in map) {
            let gridArray = map[key];
            // 排序
            gridArray.sort((a, b) => {
                return getX_Y(a, true) - getX_Y(b, true);
            });
            // 移动格子
            switch (dir) {
                case GRID_MOVE_DIR.UP:
                    {
                        let max = this.maxY - 2;
                        for (let i = gridArray.length - 1; i >= 0; --i) {
                            let grid = gridArray[i];
                            if (grid.y == max) {
                                max--;
                            } else {
                                grid.moveToY(max, this.pathFinding);
                                max--;
                            }
                        }
                    }
                    break;
                case GRID_MOVE_DIR.DOWN:
                    {
                        let min = 1;
                        for (let i = 0; i < gridArray.length; ++i) {
                            let grid = gridArray[i];
                            if (grid.y == min) {
                                min++;
                            } else {
                                grid.moveToY(min, this.pathFinding);
                                min++;
                            }
                        }
                    }
                    break;
                case GRID_MOVE_DIR.LEFT:
                    {
                        let min = 1;
                        for (let i = 0; i < gridArray.length; ++i) {
                            let grid = gridArray[i];
                            if (grid.x == min) {
                                min++;
                            } else {
                                grid.moveToX(min, this.pathFinding);
                                min++;
                            }
                        }
                    }
                    break;
                case GRID_MOVE_DIR.RIGHT:
                    {
                        let max = this.maxX - 2;
                        for (let i = gridArray.length - 1; i >= 0; --i) {
                            let grid = gridArray[i];
                            if (grid.x == max) {
                                max--;
                            } else {
                                grid.moveToX(max, this.pathFinding);
                                max--;
                            }
                        }
                    }
                    break;
            }
        }
    }

    // 当前选中的格子
    protected curSelectGrid: grid = null;
    // 清除当前选择
    protected clearCurSelectGrid() {
        if (this.curSelectGrid) {
            this.curSelectGrid.isSelect = false;
            this.curSelectGrid = null;
        }
    }

    // 格子被点击的事件
    protected onGridClick(grid: grid) {
        if (this.bombSelectNode.active) {
            this.onBombSelect(grid);
            return;
        }
        // 冰冻格子不能点击
        if (grid.freezing) {
            gameAudioClip.playClickFreeze();
            return;
        }
        if (this.curSelectGrid && grid != this.curSelectGrid && this.curSelectGrid.id == grid.id) {
            // 如果被点击的格子与之前的格子属于统一类型，则判断是否能连线消除
            if (this.linkGrid(this.curSelectGrid, grid)) {
                return;
            }
        }
        // 如果不能连接
        if (this.curSelectGrid != null) {
            // 播放不可消除音效
            gameAudioClip.playNoLink();
        } else {
            // 被选中时播放选中音效
            gameAudioClip.playGridSelect();
        }
        // 清除当前选择的格子
        this.clearCurSelectGrid();
        // 设置当前选择的格子
        this.curSelectGrid = grid;
        this.curSelectGrid.isSelect = true;
    }

    protected bombSelectCallback: (select: boolean) => void
    // 设置选择炸掉某种格子的回调
    setBombSelectCallback(callback: (select: boolean) => void) {
        this.bombSelectCallback = callback;
    }

    // 选择炸掉所有同种类的格子
    protected onBombSelect(grid: grid) {
        if (grid && grid.id >= 0) {
            // 关闭选择模式
            this.setBombSelectMode(false);
            // 调用选择回调
            if (this.bombSelectCallback) {
                this.bombSelectCallback(true);
            }
            // 找出所有同类型的格子
            let grids: grid[] = [];
            for (let v of this.allGrids) {
                if (v.id == grid.id) {
                    grids.push(v);
                }
            }
            let duration = 0.25; // 效果持续时间
            // 添加特效
            let lightningBtnPos = gameLib.convertToSpacePos(this.spLightningBtn.node, this.graphics.node);
            for (let i = 0; i < grids.length; ++i) {
                // 目标格子
                let grid = grids[i];
                let gridPos = cc.v2(grid.getX(), grid.getY());
                // 添加闪电特效
                let lightningNode = this.spLightningPool.get();
                if (!lightningNode) {
                    lightningNode = cc.instantiate(this.spLightning);
                }
                this.graphics.node.addChild(lightningNode);
                let ani = lightningNode.getComponent(playAnimation);
                let state = ani.play();
                // 记录床播放时间
                if (state.duration > duration) {
                    duration = state.duration;
                }
                // 播放结束回收节点
                this.scheduleOnce(() => {
                    this.spLightningPool.put(lightningNode);
                }, state.duration);
                // 设置闪电坐标
                lightningNode.x = lightningBtnPos.x > gridPos.x ? gridPos.x + (lightningBtnPos.x - gridPos.x) / 2 : lightningBtnPos.x + (gridPos.x - lightningBtnPos.x) / 2;
                lightningNode.y = lightningBtnPos.y > gridPos.y ? gridPos.y + (lightningBtnPos.y - gridPos.y) / 2 : lightningBtnPos.y + (gridPos.y - lightningBtnPos.y) / 2;
                //计算角度
                let deltaP = gridPos.sub(lightningBtnPos);
                let angle = Math.atan2(deltaP.x, deltaP.y) / Math.PI * 180;
                // 设置坐标和角度
                lightningNode.angle = -angle;
                // 两点距离
                let dis = gridPos.sub(lightningBtnPos).mag();
                // 设置宽度
                lightningNode.scaleY = dis / lightningNode.height;
                // 添加闪电击中特效
                let lightningHitNode = this.spLightningHitPool.get();
                if (!lightningHitNode) {
                    lightningHitNode = cc.instantiate(this.spLightningHit);
                }
                this.graphics.node.addChild(lightningHitNode);
                ani = lightningHitNode.getComponent(playAnimation);
                // 设置闪电命中特效坐标
                lightningHitNode.x = gridPos.x;
                lightningHitNode.y = gridPos.y;
                lightningHitNode.active = false;
                // 播放特效
                // lightning.timeScale = 0.1;
                this.scheduleOnce(() => {
                    lightningHitNode.active = true;
                    let state = ani.play();
                    this.scheduleOnce(() => {
                        this.spLightningHitPool.put(lightningHitNode);
                    }, state.duration);
                }, state.duration);
            }
            // 删除格子
            for (let v of grids) {
                this.removeGrid(v);
            }
            // 显示按钮特效
            this.spLightningBtn.node.active = true;
            this.scheduleOnce(() => {
                this.spLightningBtn.node.active = false;
            }, duration);
            // 播放音效
            gameAudioClip.playLightning();
        }
    }

    点击炸弹选择框() {
        this.setBombSelectMode(false);
        if (this.bombSelectCallback) {
            this.bombSelectCallback(false);
        }
    }

    // 自动链接格子
    autoLinkGrid(): boolean {
        if (this.canLinkGrids.length == 2) {
            return this.linkGrid(this.canLinkGrids[0], this.canLinkGrids[1]);
        }
        return false;
    }

    @property({
        type: cc.Node,
        displayName: "积分位置"
    })
    protected scorePosNode: cc.Node = null;

    @property({
        type: cc.Prefab,
        displayName: "得分动画"
    })
    protected scoreAni: cc.Prefab = null;
    protected scoreAniPool: cc.NodePool = new cc.NodePool();

    // 获取一个得分动画效果
    protected getScoreAni(): scoreAni {
        let node = this.scoreAniPool.get();
        if (!node) {
            node = cc.instantiate(this.scoreAni);
        }
        this.graphics.node.addChild(node);
        let com = node.getComponent(scoreAni);
        return com;
    }

    protected scoreAniDelay: number = 0;

    // 链接格子
    linkGrid(src: grid, tar: grid): boolean {
        let path = this.pathFinding.search(cc.v2(src.x, src.y), cc.v2(tar.x, tar.y));
        if (path && path.length > 1) {
            // 连线成功 绘制连线
            this.paintLine(path);
            // 获取分数路径点
            let scorePath = this.getScroeLine(path, this.pathFinding.startPoint, this.pathFinding.endPoint);
            // 添加积分动画
            let socrePos = gameLib.convertToSpacePos(this.scorePosNode, this.graphics.node);
            let halfWidth = this.gridSize.width / 2;
            let halfHeight = this.gridSize.height / 2;
            this.scoreAniDelay = 0;
            for (let v of scorePath) {
                let scoreAni = this.getScoreAni();
                // 设置位置
                scoreAni.setPos(v.x * this.gridSize.width + halfWidth, v.y * this.gridSize.height + halfHeight)
                // 设置动画
                scoreAni.moveToTarget(this.scoreAniDelay, socrePos,
                    (obj) => {
                        // 移动完毕
                        if (this.linkRemovedCallback) {
                            this.linkRemovedCallback(1);
                        }
                        // 播放得分动画
                        cc.tween(this.scorePosNode)
                            .to(0.15, { scale: 1.1 })
                            .to(0.15, { scale: 1 })
                            .start();
                    }, (obj) => {
                        // 回收
                        this.scoreAniPool.put(obj.node);
                    })
                this.scoreAniDelay += 0.05;
            }
            // 设置连击回调
            if (this.comboCallback) {
                this.comboCallback()
            }
            // // 动画播完添加分数
            // this.scheduleOnce(() => {
            //     if (this.linkRemovedCallback) {
            //         this.linkRemovedCallback(scorePath.length);
            //     }
            // }, 1);
            // 记录炸弹
            let srcIsBomb = src.isBomb();
            let tarIsBomb = tar.isBomb();
            // 清除两个方块
            this.removeGrid(src);
            this.removeGrid(tar);
            // 播放消除音效
            gameAudioClip.playRemoveGrid();
            // 判断是否通关了
            if (this.isNextLevel) {
                return true;
            }
            // 判断是否对齐移动
            switch (this.levelParameter.move) {
                case 0: // 不位移
                    break;
                case 1: // 上
                    this.moveGrid(GRID_MOVE_DIR.UP);
                    break;
                case 2: // 下
                    this.moveGrid(GRID_MOVE_DIR.DOWN);
                    break;
                case 3: // 左
                    this.moveGrid(GRID_MOVE_DIR.LEFT);
                    break;
                case 4: // 右
                    this.moveGrid(GRID_MOVE_DIR.RIGHT);
                    break;
                case 5: // 随机
                    this.moveGrid(gameLib.GetRandomNum(GRID_MOVE_DIR.UP, GRID_MOVE_DIR.RIGHT));
                    break;
            }
            // 判断是否是死局
            if (this.isAllGridBlock()) {
                // 如果是死局，则随机现有格子的位置
                this.randomGridsPos();
            }
            // 清除当前选择的格子
            this.clearCurSelectGrid();
            // 判断如果被消除的是炸弹，则重新生成炸弹
            if (srcIsBomb) {
                this.setBomb();
            }
            if (tarIsBomb) {
                this.setBomb();
            }
            return true;
        }
        return false;
    }

    // 是否已经通关
    protected isNextLevel: boolean = false;

    // 下一关
    protected onNextLevel() {
        if (this.allGrids.length == 0) {
            // 保护通关回调只调一次
            let callback = !this.isNextLevel ? true : false;
            this.isNextLevel = true;
            if (callback && this.nextLevelCallback) {
                this.nextLevelCallback(this.scoreAniDelay + 2);
            }
        } else {
            this.isNextLevel = false;
        }
        return this.isNextLevel;
    }

    // 获取所有空位的数组
    protected getNullSpace(): cc.Vec2[] {
        let map: cc.Vec2[][] = [];
        // 格式化地图
        for (let x = 0; x < this.maxX - 2; ++x) {
            for (let y = 0; y < this.maxY - 2; ++y) {
                if (!map[x]) {
                    map[x] = [];
                }
                map[x][y] = cc.v2(x + 1, y + 1);
            }
        }
        // 删除已有格子
        for (let v of this.allGrids) {
            map[v.x - 1][v.y - 1] = null;
        }
        // 保存数组
        let ret: cc.Vec2[] = [];
        for (let v of map) {
            for (let w of v) {
                if (w) {
                    ret.push(w);
                }
            }
        }
        return ret;
    }

    // 根据位置获取格子信息
    protected getGrid(x: number, y: number) {
        for (let v of this.allGrids) {
            if (v.id != null && v.id >= 0 && v.x == x && v.y == y) {
                return v;
            }
        }
        return null;
    }
    // 解锁格子
    protected unfreezeGrid(x, y) {
        let grid = this.getGrid(x, y);
        if (grid && grid.freezing) {
            // 播放破冰音效
            gameAudioClip.playUnfreezeGrid();
            // 解冻
            grid.unfreeze();
            // 解冻特效
            let node = this.unfreezeAniPool.get();
            if (!node) {
                node = cc.instantiate(this.unfreezePrefab);
            }
            this.graphics.node.addChild(node);
            node.x = grid.getX();
            node.y = grid.getY();
            let playAni = node.getComponent(playAnimation);
            let state = playAni.play();
            this.scheduleOnce(() => {
                this.unfreezeAniPool.put(node);
            }, state.duration);
        }
    }

    // 消除格子
    protected removeGrid(grid: grid): boolean {
        // 删除路径障碍
        this.pathFinding.remBlockPoint([cc.v2(grid.x, grid.y)]);
        // 解锁格子旁边冻结的方块
        this.unfreezeGrid(grid.x + 1, grid.y);
        this.unfreezeGrid(grid.x - 1, grid.y);
        this.unfreezeGrid(grid.x, grid.y + 1);
        this.unfreezeGrid(grid.x, grid.y - 1);
        // 添加删除特效
        let getRemoveAni = () => { // 获取一个特效
            let node = this.removeGridAniPool.get();
            if (!node) {
                node = cc.instantiate(this.removeGridAni);
            }
            this.graphics.node.addChild(node);
            let ani = node.getComponent(playAnimation);
            return ani;
        }
        let ani = getRemoveAni();
        ani.node.x = grid.getX();
        ani.node.y = grid.getY();
        let state = ani.play();
        this.scheduleOnce(() => {
            this.removeGridAniPool.put(ani.node);
        }, state.duration + 0.01);
        // 重置格子
        grid.reset();
        // 删除格子信息
        let index = this.allGrids.indexOf(grid);
        this.allGrids.splice(index, 1);
        // 加入缓冲池
        this.gridPool.put(grid.node);
        // 判断是否通关了
        let isNextLevel = this.onNextLevel();
        // 如果没有过关
        if (!isNextLevel) {
            // 开始生成格子
            this.startGenerateGrid();
        }
        return isNextLevel;
    }

    // 添加一个格子
    protected addGrid(x: number, y: number, id: number = 0, freezing: boolean = false, hideMode: boolean = false, bombTime: number = 0): grid {
        // 给寻路添加障碍
        this.pathFinding.addBlockPoint([cc.v2(x, y)]);
        // 创建格子
        let node = this.createGrid();
        this.node.addChild(node);
        let com: grid = node.getComponent(grid);
        this.allGrids.push(com);
        // 设置回调
        com.setClickCallback(this.onGridClick.bind(this));
        com.setBombCallback(this.onBomb.bind(this));
        com.setBombTime(bombTime);
        // 设置格子属性
        com.stopAnimation();
        com.resetTrun();
        com.isSelect = false;
        com.size = this.gridSize;
        com.x = x;
        com.y = y;
        com.id = id;
        com.freezing = freezing;
        com.hideMode = hideMode;
        return com;
    }

    // protected linkLinePool: cc.NodePool = new cc.NodePool();

    // // 创建一个连接线
    // protected createLinkLine(): cc.MotionStreak {
    //     let node = this.linkLinePool.get();
    //     if (!node) {
    //         node = cc.instantiate(this.linkLine);
    //     }
    //     this.graphics.node.addChild(node);

    //     let com = node.getComponent(cc.MotionStreak);
    //     com.scheduleOnce(() => {
    //         this.linkLinePool.put(node);
    //     }, com.fadeTime * 2);
    //     return com;
    // }

    @property({
        type: cc.Prefab,
        displayName: "连线预设",
    })
    protected linkPrefab: cc.Prefab = null;
    protected linkPool: cc.NodePool = new cc.NodePool();

    // 获取一条连接线段
    protected getLinkLine(): linkLine {
        let node = this.linkPool.get();
        if (!node) {
            node = cc.instantiate(this.linkPrefab);
        }
        this.graphics.node.addChild(node);
        let line = node.getComponent(linkLine);
        return line;
    }

    // 绘制连线
    protected paintLine(path: cc.Vec2[]) {
        // 绘制连线
        if (path && path.length) {
            if (path.length > 1) {
                // let halfWidth = this.gridSize.width / 2;
                // let halfHeight = this.gridSize.height / 2;
                // let linkLine = this.createLinkLine()
                // linkLine.node.x = path[0].x * this.gridSize.width + halfWidth;
                // linkLine.node.y = path[0].y * this.gridSize.height + halfHeight;
                // let tw = cc.tween(linkLine.node);
                // for (let i = 1; i < path.length; i++) {
                //     let curPath = path[i];
                //     let prePath = path[i - 1];
                //     let length = Math.abs(curPath.x - prePath.x) + Math.abs(curPath.y - prePath.y);
                //     tw.to(length * 0.05, { x: curPath.x * this.gridSize.width + halfWidth, y: curPath.y * this.gridSize.height + halfHeight });
                // }
                // tw.start();
                let halfWidth = this.gridSize.width / 2;
                let halfHeight = this.gridSize.height / 2;
                let delay = 0.5;
                for (let i = 1; i < path.length; ++i) {
                    let prePath = path[i - 1];
                    let curPath = path[i];
                    // 获得一条线段
                    let linkLine = this.getLinkLine();
                    // 设置位置
                    linkLine.node.x = curPath.x * this.gridSize.width + halfWidth;
                    linkLine.node.y = curPath.y * this.gridSize.height + halfHeight;
                    // 设置旋转角度和宽度
                    if (prePath.x > curPath.x) {
                        linkLine.node.width = (prePath.x - curPath.x) * this.gridSize.width;
                        linkLine.node.angle = 180;
                    } else if (prePath.y < curPath.y) {
                        linkLine.node.width = (curPath.y - prePath.y) * this.gridSize.height;
                        linkLine.node.angle = 90;
                    } else if (prePath.y > curPath.y) {
                        linkLine.node.width = (prePath.y - curPath.y) * this.gridSize.height;
                        linkLine.node.angle = -90;
                    } else {
                        linkLine.node.width = (curPath.x - prePath.x) * this.gridSize.width;
                        linkLine.node.angle = 0;
                    }
                    // 设置动画
                    // let moveTime = 0.0005 * linkLine.node.width;
                    let moveTime = 0.2;
                    linkLine.setAni(delay, moveTime, this.linkPool);
                    delay += moveTime;
                }
            }
        }

        // this.graphics.clear();
        // 绘制连线
        // if (path && path.length) {
        //     if (path.length > 1) {
        //         let halfWidth = this.gridSize.width / 2;
        //         let halfHeight = this.gridSize.height / 2;
        //         this.graphics.strokeColor = cc.Color.YELLOW;
        //         this.graphics.moveTo(path[0].x * this.gridSize.width + halfWidth, path[0].y * this.gridSize.height + halfHeight);
        //         for (let i = 1; i < path.length; i++) {
        //             this.graphics.lineTo(path[i].x * this.gridSize.width + halfWidth, path[i].y * this.gridSize.height + halfHeight);
        //         }
        //         this.graphics.stroke();
        //     }
        // }

        // 绘制障碍
        // for (let v in this.pathFinding.pathObj) {
        //     if (this.pathFinding.pathObj[v] != null) {
        //         let pos = v.split("*");
        //         let x = Number(pos[1]);
        //         let y = Number(pos[0]);
        //         this.graphics.fillColor = cc.color(255, 0, 0, 50);
        //         this.graphics.fillRect(x * this.gridSize.width, y * this.gridSize.height, this.gridSize.width, this.gridSize.height);
        //     }
        // }
    }

    // 初始化格子
    protected _initGrid = false;
    initGrid() {
        if (!this._initGrid) {
            this._initGrid = true;
            for (let i = 0; i < 70; ++i) {
                let node = cc.instantiate(this.gridPrefab);
                this.gridPool.put(node);
            }
        }
    }

    // 格子缓冲池
    protected gridPool: cc.NodePool = new cc.NodePool();
    // 创建一个格子
    createGrid(): cc.Node {
        let node = this.gridPool.get()
        if (!node) {
            node = cc.instantiate(this.gridPrefab);
        }
        node.name = "grid";
        return node;
    }
    // 清除所有格子
    clearAllGrids() {
        for (let i = 0; i < this.node.children.length; ++i) {
            let v = this.node.children[i];
            if (v.name == "grid") {
                this.gridPool.put(v);
                --i;
            }
        }
        for (let v of this.allGrids) {
            v.reset();
        }
        this.allGrids = [];
        this.pathFinding.removeAllBlock();
    }
    // 被销毁清除缓存
    onDestroy() {
        this.gridPool.clear();
        // this.linkLinePool.clear();
        this.removeGridAniPool.clear();
        this.linkPool.clear();
        this.scoreAniPool.clear();
        this.spLightningHitPool.clear();
        this.spLightningPool.clear();
        this.unfreezeAniPool.clear();
    }

    // 刷新主题
    updateTheme() {
        for (let v of this.allGrids) {
            v.updateIcon();
        }
    }
}