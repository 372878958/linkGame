// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import tableViewItem from "../../../commonLib/component/tableView/tableViewItem";
import { HttpLib, HttpMethod } from "../../../commonLib/lib/HttpLib";
import { loginLib } from "../../../commonLib/lib/LoginLib";
import StoreController from "./StoreController";
import messageBox from "../../../commonLib/component/PopBox/messageBox";
import { construct } from "../Construct";
import addUI from "../../../commonLib/component/addUI";
import popBox from "../../../commonLib/component/PopBox/popBox";
import { reportLib } from '../../../commonLib/lib/ReportLib';

const { ccclass, property } = cc._decorator;

@ccclass
export default class StoreTableItemComponent extends tableViewItem {

    @property({
        type: cc.Node,
        displayName: "标签1",
        tooltip: "不明标签1"
    })
    protected tag1: cc.Node = null;
    @property({
        type: cc.Node,
        displayName: "标签2",
        tooltip: "不明标签2"
    })
    protected tag2: cc.Node = null;
    @property({
        type: addUI,
        displayName: "绑定手机号",
        tooltip: "绑定手机号"
    })
    protected bindPhoneLayer: addUI = null;
    @property({
        type: cc.Node,
        displayName: "红包icon",
        tooltip: "红包icon"
    })
    protected redIcons: cc.Node[] = [];
    @property({
        type: cc.Node,
        displayName: "电话卡icon",
        tooltip: "电话卡icon"
    })
    protected orangeIcons: cc.Node[] = [];
    @property({
        type: cc.Node,
        displayName: "类型底板",
        tooltip: "类型底板"
    })
    protected typeNode: cc.Node[] = [];
    @property({
        type: StoreController,
        displayName: "商店类",
        tooltip: "商店类"
    })
    protected storeController: StoreController = null;

    private _itemId = -1;
    private _storePath = HttpLib.BASE_PATH + "/smallgameapi/exchange.php";
    private _canPay = true;
    private _itemName = 0;
    private _useAmount = 0;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    // update (dt) {}

    public onDataChange(data: any) {
        this.setData(data);
    }

    private setData(goodsData: {
        item_id: number,
        name: string,
        item_name: number,
        item_amount: number,
        use_name: number,
        use_amount: number,
        weigh: number,
        activity_id: number,
        is_filter: number,
        activity_name: string,
        activity_code: string,
        status: number
    }) {
        let type = 1;
        this.typeNode[0].active = false;
        this.typeNode[1].active = false;
        if (goodsData.item_name == 2007 || goodsData.item_name == 2008) {
            type = 0;
        }
        this._itemName = goodsData.item_name;
        this._itemId = goodsData.item_id;
        this._useAmount = goodsData.use_amount;
        this.typeNode[type].active = true;
        let price_lab = this.typeNode[type].getChildByName("price_lab");
        let priceGame_lab = this.typeNode[type].getChildByName("priceGame_lab");
        let priceGame_title = this.typeNode[type].getChildByName("gameMoneyTitle");
        // let bottom_lab = this.typeNode[type].getChildByName("bottom_lab");
        // let date_lab = this.typeNode[type].getChildByName("date_lab");
        this.showTip(goodsData.activity_code);
        this.showIcon(this.typeNode[type], goodsData.item_name);
        let icon_node = this.typeNode[type].getChildByName("item" + goodsData.item_name);
        icon_node.active = true;
        if (goodsData.status == 0) {
            this._canPay = false;
            price_lab.getComponent(cc.Label).string = "Received";
            priceGame_lab.getComponent(cc.Label).string = "Please come again.";
            priceGame_title.active = false;
        } else {
            this._canPay = true;
            price_lab.getComponent(cc.Label).string = goodsData.item_amount + "";
            priceGame_lab.getComponent(cc.Label).string = goodsData.use_amount + "";
            priceGame_title.active = true;
        }
        // bottom_lab.getComponent(cc.Label).string = goodsData.bottom + "";
        // date_lab.getComponent(cc.Label).string = goodsData.date + "";
    }
    public showMessageBox() {
        if (construct.userInfo.phone == "") {
            this.bindPhoneLayer.addUI();
        } else {
            if (!this._canPay) {
                popBox.popBox("Goods Received！");
                return;
            }
            messageBox.messageBox("Are you sure to exchange the goods?", this.payItem.bind(this), () => {

            });
        }

    }

    public payItem() {
        let httpLib = new HttpLib();
        httpLib.open(this.successCallback, this.failureCallback, this._storePath, this, HttpMethod.POST);
        let param = {
            item_id: this._itemId
        };
        httpLib.setRequestHeader("cookie", "PHPSESSID=" + loginLib.loginToken);
        httpLib.send(param);
    }

    public successCallback(request) {
        let req = request;
        if (req.code == 0) {
            cc.log("get success!");
            popBox.popBox("Successful！");
            this.storeController.refreshData();
            // reportLib.rpExchange(0, this._itemId, this._itemName + "", 1, this._useAmount);
        }
        // else if (req.code == 9) {
        //     cc.log("兑换失败：" + req.msg);
        //     popBox.popBox(req.msg);
        // } else if (req.code == 7) {
        //     cc.log("兑换失败：" + req.msg);
        //     popBox.popBox(req.msg);
        // }
        else {
            cc.log("兑换失败：" + req.msg)
            popBox.popBox("Failure!");
        }
    }
    public failureCallback(errorCode: number, msg: string, request: XMLHttpRequest) {
        popBox.popBox(msg);
    }

    private showIcon(target: cc.Node, name: number) {
        let iconNode1 = target.getChildByName("item2008");
        iconNode1.active = false;
        let iconNode2 = target.getChildByName("item2007");
        iconNode2.active = false;
        let iconNode3 = target.getChildByName("item2011");
        iconNode3.active = false;
        let iconNode4 = target.getChildByName("item2012");
        iconNode4.active = false;
        let iconNode5 = target.getChildByName("item2013");
        iconNode5.active = false;
        let iconNode6 = target.getChildByName("item2014");
        iconNode6.active = false;
        target.getChildByName("item" + name).active = true;
    }

    private showTip(tipType: string) {
        if (tipType == "activity") {
            this.tag1.active = true;
            this.tag2.active = false;
        } else if (tipType == "normal") {
            this.tag1.active = false;
            this.tag2.active = false;
        } else if (tipType == "newbee") {
            this.tag1.active = false;
            this.tag2.active = true;
        }
    }
}
