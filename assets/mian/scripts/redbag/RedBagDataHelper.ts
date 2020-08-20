import { construct } from "../Construct";
import { HttpLib, HttpMethod } from "../../../commonLib/lib/HttpLib";
import { loginLib } from "../../../commonLib/lib/LoginLib";
import { reportLib } from '../../../commonLib/lib/ReportLib';

export default class RedBagDataHelper {
    private _httpFinishPath = HttpLib.BASE_PATH + "/smallgameapi/changeUserProperty.php";
    public adsFinished() {
        let httpLib = new HttpLib();
        httpLib.open(this.successFinishCallback, this.failureFinishCallback, this._httpFinishPath, this, HttpMethod.POST);
        httpLib.setRequestHeader("cookie", "PHPSESSID=" + loginLib.loginToken);
        let param = {};
        httpLib.send(param);
    }
    public successFinishCallback(request: string) {
        let req = JSON.parse(request);
        if (req.code == 0) {
            reportLib.tokenReceive(req.data.userInfo.property_num, req.data.userInfo.property_num - construct.userInfo.property_num, "redbag")
            construct.userInfo.property_num = req.data.userInfo.property_num;
        } else {
            cc.log("successFinishCallback接口失败！" + req.code);
        }
    }
    public failureFinishCallback(errorCode: number, msg: string, request: XMLHttpRequest) {
        cc.log("确认红包领取失败！" + errorCode);
    }
}

export var redBagDataHelper: RedBagDataHelper = new RedBagDataHelper();