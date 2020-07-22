

const { ccclass, property } = cc._decorator;

@ccclass("itemParameter")
export class itemParameter {
    @property({
        displayName: "基准分数40快"
    })
    baseScore40: number = 150;
    @property({
        displayName: "基准分数54快"
    })
    baseScore54: number = 200;
    @property({
        displayName: "基准分数70快"
    })
    baseScore70: number = 300;
    @property({
        displayName: "查找"
    })
    tip: number = 0.2;
    @property({
        displayName: "闪电"
    })
    lightning: number = 0.4;
    @property({
        displayName: "重排"
    })
    reset: number = 0.6;
    @property({
        displayName: "冻结"
    })
    freeze: number = 0.8;
    @property({
        displayName: "钥匙"
    })
    key: number = 0.9;
}