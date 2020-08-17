// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import tableViewItem from "../../../commonLib/component/tableView/tableViewItem";
import { gameLib } from "../../../commonLib/lib/gameLib";
import { HttpLib, HttpMethod } from "../../../commonLib/lib/HttpLib";
import { loginLib } from "../../../commonLib/lib/LoginLib";
import HistoryController from "./HistoryController";
import popBox from "../../../commonLib/component/PopBox/popBox";
import messageBox from "../../../commonLib/component/PopBox/messageBox";

const { ccclass, property } = cc._decorator;

@ccclass
export default class HistoryTableItemComponent extends tableViewItem {

    @property({
        type: cc.Label,
        displayName: "商品名称",
        tooltip: "商品名称"
    })
    protected itemName_lab: cc.Label = null;
    @property({
        type: cc.Label,
        displayName: "兑换日期",
        tooltip: "兑换日期"
    })
    protected itemDate_lab: cc.Label = null;
    @property({
        type: cc.Label,
        displayName: "商品价值",
        tooltip: "商品价值"
    })
    protected price_lab: cc.Label = null;
    @property({
        type: cc.Label,
        displayName: "商品价格",
        tooltip: "商品价格"
    })
    protected priceGame_lab: cc.Label = null;
    @property({
        type: cc.Label,
        displayName: "订单状态",
        tooltip: "订单状态"
    })
    protected status_lab: cc.Label = null;
    @property({
        type: cc.Button,
        displayName: "订单操作",
        tooltip: "订单操作"
    })
    protected status_btn: cc.Button = null;
    @property({
        type: cc.Node,
        displayName: "完成订单背景",
        tooltip: "完成订单背景"
    })
    protected finish_node: cc.Node = null;
    @property({
        type: HistoryController,
        displayName: "记录类",
        tooltip: "记录类"
    })
    protected historyController: HistoryController = null;

    private _item_id = -1;
    private _storePath = HttpLib.BASE_PATH + "/smallgameapi/delayExchange.php";

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    // update (dt) {}

    public onDataChange(data: any) {

        let historyData: { id: number, item_id: number, item_name: string, use_amount: number, item_amount: number, status: number, create_time: string } = data;
        this._item_id = historyData.id;
        this.priceGame_lab.string = historyData.use_amount + "";
        this.price_lab.string = historyData.item_amount + "";
        this.itemName_lab.string = historyData.item_name;
        // this.itemDate_lab.string = gameLib.formatDate(historyData.item_date, "yyyy-MM-dd");
        this.itemDate_lab.string = historyData.create_time;
        this.setStatus(historyData.status);
    }

    private setStatus(type: number) {
        this.status_btn.node.active = false;
        this.status_lab.node.active = false;
        this.finish_node.active = false;
        switch (type) {
            case 0:
                this.status_btn.node.active = true;
                break;
            case 1:
                this.status_lab.node.active = true;
                this.status_lab.string = "Converted";
                this.finish_node.active = true;
                break;
            case 2:
                this.status_lab.node.active = true;
                this.status_lab.string = "Closed";
                this.finish_node.active = true;
                break;
            case 3:
                this.status_lab.node.active = true;
                this.status_lab.string = "Canceled";
                this.finish_node.active = true;
                break;
            case 4:
                this.status_lab.node.active = true;
                this.status_lab.string = "Checked";
                this.finish_node.active = true;
                break;
            default:
                break;
        }
    }

    public cancel_click() {
        messageBox.messageBox("Are you sure to cancel the order?", () => {
            let httpLib = new HttpLib();
            httpLib.open(this.successCallback, this.failureCallback, this._storePath, this, HttpMethod.POST);
            let param = {
                id: this._item_id
            };
            httpLib.setRequestHeader("cookie", "PHPSESSID=" + loginLib.loginToken);
            httpLib.send(param);
        }, () => {

        });
    }

    public successCallback(request) {
        let req = request;
        if (req.code == 0) {
            popBox.popBox("Successful！");
            this.historyController.refreshData();
        } else {
            cc.log("取消失败！" + req.msg);
            popBox.popBox("Failure!");
        }
    }
    public failureCallback(errorCode: number, msg: string, request: XMLHttpRequest) {
        popBox.popBox(msg);
    }
}
