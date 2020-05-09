import grid from "./grid";
import { gameLib } from "../../lib/gameLib";
import linkGamePathFinding from "./linkGamePathFinding";

const { ccclass, property } = cc._decorator;

export enum GRID_MOVE_DIR {
    UP,
    DOWN,
    LEFT,
    RIGHT
}

@ccclass
export default class gridManager extends cc.Component {

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

    protected metaMap: number[][] = []; // 原始地图数据
    // protected curMap: number[][] = []; // 当前地图数据

    protected maxX: number = 0; // 最大列
    protected maxY: number = 0; // 最大行
    protected gridSize: cc.Size = cc.Size.ZERO; // 当前每个格子的大小
    protected allGrids: grid[] = []; // 当前所有格子的对象
    protected gridTypes: number[] = [1, 2, 3, 4]; // 当前所有格子包含的类型
    protected pathFinding: linkGamePathFinding = new linkGamePathFinding(); // 寻路
    protected boomTime: number = 60; // 炸弹时间

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

    // 游戏开始
    gameStart() {
        // 停止生成格子
        this.stopGenerateGrid();
        // 设置格子最大宽高
        this.setMaxWH(3, 6);
        // 清除当前选择的格子
        this.curSelectGrid = null;
        // 清除所有格子
        this.clearAllGrids();
        // 清除绘制
        this.graphics.clear();
        // 计算最大行列
        for (let v of this.metaMap) {
            if (v.length > this.maxX) {
                this.maxX = v.length;
            }
        }
        this.maxY = this.metaMap.length;
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
                    // this.addGrid(x, y, data, gameLib.GetRandomNum(0, 1) ? true : false, gameLib.GetRandomNum(0, 1) ? true : false);
                    this.addGrid(x, y, data, false, false);
                }
            }
        }
        // 随机生成所有格子的类型
        this.generateGridType();
        // 随机炸弹
        this.addBoom(2, this.boomTime);
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

    // 是否已经开始生成格子
    protected isStartGenerateGrid: boolean = false;
    // 开始每间隔一段时间生成生成格子
    protected startGenerateGrid() {
        if (this.isStartGenerateGrid) {
            return;
        }
        this.isStartGenerateGrid = true;
        this.schedule(this.randomGenerateGrid, 5);
    }
    // 停止生成格子
    protected stopGenerateGrid() {
        if (!this.isStartGenerateGrid) {
            return;
        }
        this.isStartGenerateGrid = false;
        this.unschedule(this.randomGenerateGrid);
    }
    // 随机位置生成一对格子
    protected randomGenerateGrid() {
        // 获取所有空位
        let array = this.getNullSpace();
        if (array && array.length > 1) {
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
        }
    }

    // 随机变换所有格子的位置
    protected randomGridsPos() {
        let grids: grid[] = [];
        let types: number[] = [];
        // 循环判断是否有格子能连线
        for (let i = 0; i < this.allGrids.length; ++i) {
            let grid = this.allGrids[i];
            if (grid.id >= 0) {
                grids.push(grid);
                types.push(grid.id);
            }
        }

        // 随机获取一个格子类型
        let getType = () => {
            let index = gameLib.GetRandomNum(0, types.length - 1);
            let type = types[index];
            types.splice(index, 1);
            return type;
        }

        // 打乱有效格子的位置
        for (let v of grids) {
            v.id = getType();
        }

        // 随机后在看看是否是死局，如果是则再随机一遍
        if (this.isAllGridBlock()) {
            this.randomGridsPos();
        }
    }

    // 判断是否所有的格子都不能连接了
    protected isAllGridBlock(): boolean {
        // 判断是否找到了，对应连线
        let find = (src: grid, beginIndex: number) => {
            for (let i = beginIndex; i < this.allGrids.length; ++i) {
                let tar = this.allGrids[i];
                if (tar.freezing == false && src.freezing == false && src.id == tar.id) {
                    let path = this.pathFinding.search(cc.v2(src.x, src.y), cc.v2(tar.x, tar.y));
                    if (path && path.length > 1) {
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
        let ret: cc.Vec2[] = [];
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
        return ret;
    }

    protected gameOverCallback: Function = null;
    // 设置游戏结束的回调
    setGameOverCallback(callback: Function) {
        this.gameOverCallback = callback;
    }

    protected gridRemovedCallback: (dis: number) => void = null;
    // 设置一对格子被消除时回调 dis:格子之间的距离
    setGridRemovedCallback(callback: (dis: number) => void) {
        this.gridRemovedCallback = callback;
    }

    protected nextLevelCallback: Function = null;
    // 设置通关回调
    setNextLevelCallback(callback: Function) {
        this.nextLevelCallback = callback;
    }

    protected gameOver() {
        // 停止生成格子
        this.stopGenerateGrid();
        // 游戏结束，暂停所有炸弹时间
        for (let v of this.allGrids) {
            v.pauseBoomTime();
        }
        // 回调游戏结束
        if (this.gameOverCallback) {
            this.gameOverCallback();
        }
    }

    // 相应炸弹爆炸
    protected onBoom(grid: grid) {
        this.gameOver();
    }

    // 设置炸弹
    protected addBoom(count: number, time: number): grid[] {
        let grids: grid[] = [];
        for (let v of this.allGrids) {
            if (!v.isBoom()) {
                grids.push(v);
            }
        }
        let res: grid[] = [];
        for (let i = 0; i < count; ++i) {
            if (grids.length) {
                let index = gameLib.GetRandomNum(0, grids.length - 1);
                grids[index].setBoomTime(time);
                res.push(grids[index]);
                grids.splice(index, 1);
            }
        }
        return res;
        // let randomGrid = () => {
        //     let i = gameLib.GetRandomNum(0, this.allGrids.length - 1);
        //     let grid = this.allGrids[i];
        //     if (!grid.isBoom()) {
        //         return grid;
        //     } else {
        //         return randomGrid();
        //     }
        // }
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
    // 格子被点击的事件
    protected onGridClick(grid: grid) {
        if (this.curSelectGrid && grid != this.curSelectGrid && this.curSelectGrid.id == grid.id) {
            // 如果被点击的格子与之前的格子属于统一类型，则判断是否能连线消除
            let path = this.pathFinding.search(cc.v2(this.curSelectGrid.x, this.curSelectGrid.y), cc.v2(grid.x, grid.y));
            if (path && path.length > 1) {
                // 连线成功 绘制连线
                this.paintLine(path);
                // 获取分数路径点
                let scorePath = this.getScroeLine(path, this.pathFinding.startPoint, this.pathFinding.endPoint);
                // 添加分数
                if (this.gridRemovedCallback) {
                    this.gridRemovedCallback(scorePath.length + 1);
                }
                // 解锁方块旁边冻结的方块
                let unfreezeGrid = (x, y) => {
                    let grid = this.getGrid(x, y);
                    if (grid && grid.freezing) {
                        grid.freezing = false;
                    }
                }
                unfreezeGrid(this.curSelectGrid.x + 1, this.curSelectGrid.y);
                unfreezeGrid(this.curSelectGrid.x - 1, this.curSelectGrid.y);
                unfreezeGrid(this.curSelectGrid.x, this.curSelectGrid.y + 1);
                unfreezeGrid(this.curSelectGrid.x, this.curSelectGrid.y - 1);
                unfreezeGrid(grid.x + 1, grid.y);
                unfreezeGrid(grid.x - 1, grid.y);
                unfreezeGrid(grid.x, grid.y + 1);
                unfreezeGrid(grid.x, grid.y - 1);
                // 判断如果被消除的是炸弹，则重新生成炸弹
                if (this.curSelectGrid.isBoom()) {
                    this.addBoom(1, this.boomTime);
                }
                if (grid.isBoom()) {
                    this.addBoom(1, this.boomTime);
                }
                // 清除两个方块
                this.removeGrid(this.curSelectGrid);
                this.removeGrid(grid);
                // 判断是否通关了
                if (this.allGrids.length == 0) {
                    if (this.nextLevelCallback) {
                        this.nextLevelCallback();
                    }
                    return;
                }
                // 判断是否对齐移动
                this.moveGrid(gameLib.GetRandomNum(GRID_MOVE_DIR.UP, GRID_MOVE_DIR.RIGHT));
                // 开始生成格子
                this.startGenerateGrid();
                // 判断是否是死局
                if (this.isAllGridBlock()) {
                    // 如果是死局，则随机现有格子的位置
                    this.randomGridsPos();
                }
                // 清除当前选择
                this.curSelectGrid = null;
                return;
            }
        }

        if (this.curSelectGrid) {
            this.curSelectGrid.isSelect = false;
        }
        this.curSelectGrid = grid;
        this.curSelectGrid.isSelect = true;
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

    // 消除格子
    protected removeGrid(grid: grid) {
        // 重置格子
        grid.reset();
        // 删除格子信息
        let index = this.allGrids.indexOf(grid);
        this.allGrids.splice(index, 1);
        // 删除路径障碍
        this.pathFinding.remBlockPoint([cc.v2(grid.x, grid.y)]);
        // 加入缓冲池
        this.gridPool.put(grid.node);
    }

    // 添加一个格子
    protected addGrid(x: number, y: number, id: number, freezing: boolean, hideMode: boolean, boomTime: number = 0): grid {
        // 给寻路添加障碍
        this.pathFinding.addBlockPoint([cc.v2(x, y)]);
        // 创建格子
        let node = this.createGrid();
        this.node.addChild(node);
        let com: grid = node.getComponent(grid);
        this.allGrids.push(com);
        // 设置回调
        com.setClickCallback(this.onGridClick.bind(this));
        com.setBoomCallback(this.onBoom.bind(this));
        com.setBoomTime(boomTime);
        // 设置格子属性
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

    // 绘制连线
    protected paintLine(path: cc.Vec2[]) {
        this.graphics.clear();
        if (path && path.length) {
            if (path.length > 1) {
                let halfWidth = this.gridSize.width / 2;
                let halfHeight = this.gridSize.height / 2;
                let p = new Array(path.length);
                this.graphics.strokeColor = cc.Color.YELLOW;
                this.graphics.moveTo(path[0].x * this.gridSize.width + halfWidth, path[0].y * this.gridSize.height + halfHeight);
                for (let i = 1; i < p.length; i++) {
                    this.graphics.lineTo(path[i].x * this.gridSize.width + halfWidth, path[i].y * this.gridSize.height + halfHeight);
                }
                this.graphics.stroke();
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
    }
}