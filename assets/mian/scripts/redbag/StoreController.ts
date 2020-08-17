// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import tableView from "../../../commonLib/component/tableView/tableView";
import { HttpLib, HttpMethod } from "../../../commonLib/lib/HttpLib";
import { construct } from "../Construct";
import { loginLib } from "../../../commonLib/lib/LoginLib";

const { ccclass, property } = cc._decorator;

@ccclass
export default class StoreController extends cc.Component {

    @property({
        type: cc.ToggleContainer,
        displayName: "类型选项",
        tooltip: "类型选项"
    })
    protected type_tc: cc.ToggleContainer = null;
    @property({
        type: cc.Label,
        displayName: "游戏币",
        tooltip: "拥有游戏币数量"
    })
    protected all_lab: cc.Label = null;
    @property({
        type: tableView,
        displayName: "tableview",
        tooltip: "tableview"
    })
    protected redbag_tb: tableView = null;

    private _storePath = HttpLib.BASE_PATH + "/smallgameapi/getGoodsList.php";
    private _storeData = null;
    private _goodsRed = [];
    private _goodsOrange = [];
    private _goodsType = 0;
    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.initUI();
        this.getData();
    }

    private initUI() {
        this.all_lab.string = construct.userInfo.property_num + "";
    }
    private setData(goodsType: number) {
        if (goodsType == 0) {
            this.redbag_tb.setData(this._goodsRed);
        } else if (goodsType == 1) {
            this.redbag_tb.setData(this._goodsOrange);
        }
    }
    private sortData() {
        if (this._goodsRed.length > 0) {
            let items = [];
            let activityItems = [];
            let newbeeItems = [];
            for (let i = 0; i < this._goodsRed.length; i++) {
                const element = this._goodsRed[i];
                if (element.activity_code == "activity") {
                    activityItems.push(element);
                } else if (element.activity_code == "normal") {
                    items.push(element);
                } else if (element.activity_code == "newbee") {
                    newbeeItems.push(element);
                }
            }
            items = newbeeItems.concat(activityItems, items);
            this._goodsRed = items;
        }
        if (this._goodsOrange.length > 0) {
            let items = [];
            let activityItems = [];
            let newbeeItems = [];
            for (let i = 0; i < this._goodsOrange.length; i++) {
                const element = this._goodsOrange[i];
                if (element.activity_code == "activity") {
                    activityItems.push(element);
                } else if (element.activity_code == "normal") {
                    items.push(element);
                } else if (element.activity_code == "newbee") {
                    newbeeItems.push(element);
                }
            }
            items = newbeeItems.concat(activityItems, items);
            this._goodsOrange = items;
        }
    }

    // update (dt) {}

    private getData() {
        let httpLib = new HttpLib();
        httpLib.open(this.successCallback, this.failureCallback, this._storePath, this, HttpMethod.POST);
        let param = {
            page: 1,
            rows: 100
        };
        httpLib.setRequestHeader("cookie", "PHPSESSID=" + loginLib.loginToken);
        httpLib.send(param);
        // let items = { data: [{ "item_id": 29, "name": "测试名称", "item_name": 2014, "item_amount": 1000, "use_name": 2014, "use_amount": 1000, "weigh": 29, "activity_id": 1, "is_filter": 0, "activity_name": "普通活动", "activity_code": "normal", "status": 0 }, { "item_id": 30, "name": "测试名称2", "item_name": 2014, "item_amount": 1000, "use_name": 2014, "use_amount": 1000, "weigh": 30, "activity_id": 2, "is_filter": 0, "activity_name": "特殊活动", "activity_code": "activity", "status": 1 }, { "item_id": 31, "name": "测试名称3", "item_name": 2014, "item_amount": 1000, "use_name": 2014, "use_amount": 1000, "weigh": 31, "activity_id": 3, "is_filter": 0, "activity_name": "新手优惠", "activity_code": "newbee", "status": 1 }], "totalPages": 3, "page": "1", "rows": "100" }
        // this.redbag_tb.setData(items.data);
    }

    public successCallback(request) {
        let req = request;
        if (req.code == 0) {
            this._storeData = req.data.data;
            construct.userInfo.property_num = req.data.userInfo.property_num;
            this.initUI();
            this._goodsRed = [];
            this._goodsOrange = [];
            for (let i = 0; i < this._storeData.length; i++) {
                const element = this._storeData[i];
                if (element.item_name == 2007 || element.item_name == 2008) {
                    this._goodsRed.push(element);
                } else {
                    this._goodsOrange.push(element);
                }
            }
            this.sortData();
            this.setData(this._goodsType);
        } else {

        }
    }
    public failureCallback(errorCode: number, msg: string, request: XMLHttpRequest) {

    }
    public button_click() {

    }
    public changeType_click(e: Event, goodsType: string) {
        if (goodsType == "0") {
            if (this._goodsType == 1) {
                this._goodsType = 0;
                this.setData(this._goodsType);
            }
        } else {
            if (this._goodsType == 0) {
                this._goodsType = 1;
                this.setData(this._goodsType);
            }
        }
    }
    public refreshData() {
        this.getData();
    }
}
