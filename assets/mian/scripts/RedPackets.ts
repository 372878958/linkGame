import advertising from "./advertising";
import { HttpLib, HttpMethod } from "../../commonLib/lib/HttpLib";
import { loginLib } from "../../commonLib/lib/LoginLib";
import { construct } from "./Construct";
import { redBagDataHelper } from "./redbag/RedBagDataHelper";
import { reportLib } from "../../commonLib/lib/ReportLib";


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
    protected moneyLabel: cc.Label = null;

    @property({
        type: cc.Label,
        displayName: "总钱数",
    })
    protected allLabel: cc.Label = null;

    @property({
        type: cc.Label,
        displayName: "冻结数",
    })
    protected frozenLabel: cc.Label = null;


    private _httpPath = HttpLib.BASE_PATH + "/smallgameapi/getRoundSet.php";
    private _getMoney = 0;
    private _frozenMoney = 0;
    private _allMoney = 0;
    private _finishType = -1;

    onLoad() {
        this.openNode.active = true;
        this.openedNode.opacity = 0;
    }

    开红包看广告() {
        advertising.play(() => {
            // redBagDataHelper.adsFinished();
            this.scheduleOnce(() => {//此处如果不用延迟调用，广告后直接请求就收不到回复消息，所以延迟一帧
                let httpLib = new HttpLib();
                httpLib.open(this.successCallback, this.failureCallback, this._httpPath, this, HttpMethod.POST);
                httpLib.setRequestHeader("cookie", "PHPSESSID=" + loginLib.loginToken);
                let param = {
                    type: this._finishType
                };
                httpLib.send(param);
            })
        });

    }

    public successCallback(request) {
        let req = request;
        if (req.code == 0) {
            this.openedNode.opacity = 255;
            this.openNode.active = false;
            this._getMoney = req.data.CouponNum;
            this.moneyLabel.string = this._getMoney + "";
            this._frozenMoney = req.data.frozenCouponNum;
            construct.userInfo.frozenCouponNum = this._frozenMoney;
            this.frozenLabel.string = this._frozenMoney + "";
            this._allMoney = construct.userInfo.property_num;
            this.allLabel.string = this._allMoney + "";
        } else {
            cc.log("successCallback接口失败！" + req.code);
        }
    }
    public failureCallback(errorCode: number, msg: string, request: XMLHttpRequest) {
        cc.log("获取红包失败！" + errorCode);
    }

    public setFinishType(finishType: number) {
        this._finishType = finishType;
    }

    public getTestRedBag() {
        redBagDataHelper.adsFinished();
    }

}
