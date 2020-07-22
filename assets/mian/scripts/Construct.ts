const { ccclass, property } = cc._decorator;

@ccclass
export default class Construct {
    public userInfo: { property_num: number, phone: string } = { property_num: 0, phone: "" };
}
export var construct = new Construct();
