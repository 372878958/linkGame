import { gameLib } from "../../commonLib/lib/gameLib";

const { ccclass, property } = cc._decorator;

@ccclass("parameter_base")
class parameter_base {
    @property({
        displayName: "初始值",
        step: 1
    })
    protected baseValue: number = 0;

    @property({
        displayName: "步数",
        step: 1
    })
    protected step: number = 0;

    @property({
        displayName: "步长",
        step: 1
    })
    protected stepCount: number = 0;

    // 获取正值
    getValue(level: number): number {
        let step = Math.floor(level / this.step);
        let totalCount = this.baseValue + step * this.stepCount;
        return totalCount;
    }

    // 获取负值
    getValue_(level: number): number {
        let step = Math.floor(level / this.step);
        let totalCount = this.baseValue - step * this.stepCount;
        return totalCount;
    }
}

@ccclass("parameter_rv")
class parameter_rv extends parameter_base {
    @property({
        displayName: "重置值",
        step: 1
    })
    protected resetValue: number = 0;

    getValue(level: number): number {
        level = level % this.resetValue;
        return super.getValue(level);
    }

    getValue_(level: number): number {
        level = level % this.resetValue;
        return super.getValue_(level);
    }
}

@ccclass("parameter_limit")
class parameter_limit extends parameter_base {
    @property({
        displayName: "阈值",
        step: 1
    })
    protected limit: number = 0;

    // 获取关卡时间
    getTime(level: number, gridTotalCount: number): number {
        let baseValue = this.baseValue * gridTotalCount;
        let step = Math.floor(level / this.step);
        let time = baseValue - step * this.stepCount;
        if (time < this.limit) {
            time = this.limit;
        }
        return time;
    }

    // 获取未知格子的个数
    getValue(level: number): number {
        let totalCount = super.getValue(level);
        if (totalCount > this.limit) {
            totalCount = this.limit;
        }
        return totalCount;
    }

    getValue_(level: number): number {
        let totalCount = super.getValue_(level);
        if (totalCount < this.limit) {
            totalCount = this.limit;
        }
        return totalCount;
    }
}

@ccclass("parameter_rvl")
class parameter_rvl extends parameter_rv {
    @property({
        displayName: "阈值",
        step: 1
    })
    protected limit: number = 0;

    getValue(level: number): number {
        let v = super.getValue(level);
        if (v > this.limit) {
            v = this.limit;
        }
        return v;
    }

    getValue_(level: number): number {
        let v = super.getValue_(level);
        if (v < this.limit) {
            v = this.limit;
        }
        return v;
    }

    // 获取种类数
    getTypeNum(level: number, gridTotalCount: number): number {
        level = level % this.resetValue;
        let baseValue = this.baseValue;
        switch (gridTotalCount) {
            case 40:
                baseValue += 1;
                break;
            case 54:
                baseValue += 2;
                break;
            case 70:
                baseValue += 3;
                break;
        }

        let step = Math.floor(level / this.step);
        let totalCount = baseValue + step * this.stepCount;
        if (totalCount > this.limit) {
            totalCount = this.limit;
        }
        return totalCount;
    }
}

@ccclass("parameter_bomb")
class parameter_bomb {
    @property({
        type: parameter_rvl,
        displayName: "一次出现个数"
    })
    count: parameter_rvl = null;

    @property({
        type: parameter_limit,
        displayName: "出现方式"
    })
    condition: parameter_limit = null;

    @property({
        type: parameter_rvl,
        displayName: "倒计时"
    })
    time: parameter_rvl = null;
}

@ccclass("parameter_easterGrid")
class parameter_easterGrid {
    @property({
        type: parameter_rvl,
        displayName: "消掉多少块触发",
    })
    count: parameter_rvl = null;

    @property({
        type: parameter_rvl,
        displayName: "刷新时间",
        step: 1
    })
    condition: parameter_rvl = null;
}

export class level_parameter_result {
    width: number;          // 格子列数 
    height: number;         // 格子行数
    totalGrid: number;      // 总格子数
    typeCount: number;      // 格子种类数量
    bombCount: number;      // 炸弹数
    bombCondition: number;  // 获取炸弹出现方式
    bombTime: number;       // 炸弹时间
    move: number;            // 位移数据
    time: number;           // 关卡总时间
    unknownGrid: number;    // 未知格子数
    freezeGridNum: number;  // 冰冻格子数
    easterGridCondition: number;// 重生格子 重生条件 (消除了多少个格子开始重生)
    easterGridTime: number;     // 重生格子 重生间隔时间
}

@ccclass("level_parameter")
export default class level_parameter {
    @property({
        type: parameter_rv,
        displayName: "宽"
    })
    protected width: parameter_rv = null;

    @property({
        type: parameter_rv,
        displayName: "高"
    })
    protected height: parameter_rv = null;

    @property({
        type: parameter_rvl,
        displayName: "方块种类增加"
    })
    protected typesNum: parameter_rvl = null;

    @property({
        type: parameter_limit,
        displayName: "关卡时间"
    })
    protected time: parameter_limit = null;

    @property({
        type: parameter_rvl,
        displayName: "未知方块"
    })
    protected unknownGrid: parameter_rvl = null;

    @property({
        type: parameter_bomb,
        displayName: "毁灭炸弹"
    })
    protected bomb: parameter_bomb = null;

    @property({
        type: parameter_limit,
        displayName: "位移"
    })
    protected move: parameter_limit = null;

    @property({
        type: parameter_rvl,
        displayName: "冰冻方块"
    })
    protected freezeGrid: parameter_rvl = null;

    @property({
        type: parameter_easterGrid,
        displayName: "重生方块"
    })
    protected easterGrid: parameter_easterGrid = null;

    @property({
        displayName: "冰冻块附加时间",
    })
    protected freezeGridAddTime: number = 0;

    @property({
        displayName: "未知块附加时间",
    })
    protected unknownGridAddTime: number = 0;

    @property({
        displayName: "炸弹块附加时间",
    })
    protected bombGridAddTime: number = 0;

    protected level: number = 0;
    getLevelParameter(level: number): level_parameter_result {
        this.level = level - 1;
        let ret = new level_parameter_result();
        ret.width = this.getWidth();
        ret.height = this.getHeight();
        ret.totalGrid = ret.width * ret.height;      // 总格子数
        ret.typeCount = this.getTypeCount();      // 格子种类数量
        ret.bombCount = this.getBombCount();      // 炸弹数
        ret.bombCondition = this.getBombCondition();  // 获取炸弹出现方式
        ret.bombTime = this.getBombTime();       // 炸弹时间
        ret.time = this.time.getTime(this.level, ret.totalGrid);           // 关卡总时间
        ret.move = this.getMoveCondition();              // 位移数据
        ret.unknownGrid = this.unknownGrid.getValue(this.level);    // 未知格子数
        ret.freezeGridNum = this.getFreezeGridNum();  // 冰冻格子数
        ret.easterGridCondition = this.getEasterGridCondition();// 重生格子 重生条件
        ret.easterGridTime = this.getEasterGridTime();     // 重生格子 重生间隔时间

        let addTime = this.bombGridAddTime * ret.bombCount + this.unknownGridAddTime * ret.unknownGrid + this.freezeGridAddTime * ret.freezeGridNum;
        ret.time += addTime;
        cc.log("当前关卡：" + level + " -----------------------------------------------------");
        cc.log("宽：" + ret.width);
        cc.log("高：" + ret.height);
        cc.log("格子总数：" + ret.totalGrid);
        cc.log("格子种类数：" + ret.typeCount);
        cc.log("炸弹数：" + ret.bombCount);
        cc.log("炸弹出现方式：" + ret.bombCondition);
        cc.log("炸弹时间：" + ret.bombTime);
        cc.log("位移条件：" + ret.move);
        cc.log("关卡时间：" + ret.time + "(附加时间：" + addTime + ")");
        cc.log("问号格子数：" + ret.unknownGrid);
        cc.log("冰冻格子数：" + ret.freezeGridNum);
        cc.log("重生格子数：" + ret.easterGridCondition);
        cc.log("重生格子间隔时间：" + ret.easterGridTime);
        return ret;
    }

    // 获得列数
    protected getWidth(): number {
        return this.width.getValue(this.level);
    }
    // 获得行数
    protected getHeight(): number {
        return this.height.getValue(this.level);
    }
    // 获得格子种类数
    protected getTypeCount(): number {
        return this.typesNum.getTypeNum(this.level, this.getWidth() * this.getHeight());
    }
    // 获取炸弹数
    protected getBombCount(): number {
        return this.bomb.count.getValue(this.level);
    }
    // 获取炸弹出现方式
    protected getBombCondition(): number {
        return this.bomb.condition.getValue(this.level);
    }
    // 获取炸弹时间
    protected getBombTime(): number {
        return this.bomb.time.getValue_(this.level);
    }
    // 获取冰冻方块个数
    protected getFreezeGridNum(): number {
        return this.freezeGrid.getValue(this.level);
    }
    // 获取重生格子 重生条件
    protected getEasterGridCondition(): number {
        return this.easterGrid.count.getValue_(this.level);
    }
    // 获取重生格子 重生间隔时间
    protected getEasterGridTime(): number {
        return this.easterGrid.condition.getValue_(this.level);
    }
    // 获取位移条件
    protected getMoveCondition(): number {
        let c = this.move.getValue(this.level);
        let r = gameLib.GetRandomNum(0, c);
        return r;
    }
}