import advertising from "./advertising";
import { HttpLib, HttpMethod } from "../../commonLib/lib/HttpLib";
import { loginLib } from "../../commonLib/lib/LoginLib";
import { construct } from "./Construct";
import { redBagDataHelper } from "./redbag/RedBagDataHelper";


const { ccclass, property } = cc._decorator;

@ccclass
export default class RedPackets extends cc.Component {
    @property({
        type: cc.Node,
        displayName: "开红包前节点",
        tooltip: "开红包之前要显示的节点"
    })
    protected openNode: cc.Node = null;

    @property({
        type: cc.Node,
        displayName: "开红包后节点",
        tooltip: "开红包之后要显示的节点"
    })
    protected openedNode: cc.Node = null;

    @property({
        type: cc.Label,
        displayName: "红包钱数",
    })
    protected moneyLable: cc.Label = null;

    @property({
        type: cc.Label,
        displayName: "总钱数",
    })
    protected allLable: cc.Label = null;

    private _httpPath = HttpLib.BASE_PATH + "/smallgameapi/getRoundSet.php";
    private _getMoney = 0;

    onLoad() {
        this.openNode.active = true;
        this.openedNode.active = false;
    }

    开红包看广告() {
        advertising.play(() => {
            this.openNode.active = false;
            this.openedNode.active = true;
            redBagDataHelper.adsFinished();
        });
        let httpLib = new HttpLib();
        httpLib.open(this.successCallback, this.failureCallback, this._httpPath, this, HttpMethod.POST);
        httpLib.setRequestHeader("cookie", "PHPSESSID=" + loginLib.loginToken);
        let param = {};
        httpLib.send(param);
    }

    public successCallback(request: string) {
        let req = JSON.parse(request);
        if (req.code == 0) {
            this._getMoney = req.data.CouponNum;
            this.moneyLable.string = this._getMoney + "";
            this.allLable.string = (construct.userInfo.property_num + this._getMoney) + "";
        } else {
            cc.log("successCallback接口失败！" + req.code);
        }
    }
    public failureCallback(errorCode: number, msg: string, request: XMLHttpRequest) {
        cc.log("获取红包失败！" + errorCode);
    }

    public getTestRedBag() {
        redBagDataHelper.adsFinished();
    }

}
