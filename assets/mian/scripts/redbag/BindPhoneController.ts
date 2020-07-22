// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { HttpLib, HttpMethod } from "../../../commonLib/lib/HttpLib";
import { loginLib } from "../../../commonLib/lib/LoginLib";
import popBox from "../../../commonLib/component/PopBox/popBox";
import { construct } from "../Construct";
import nodeOperation from "../../../commonLib/component/nodeOperation";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BindPhoneController extends cc.Component {

    @property({
        type: cc.EditBox,
        displayName: "phone",
        tooltip: "phone"
    })
    protected phone_lab: cc.EditBox = null;

    @property({
        type: cc.EditBox,
        displayName: "repeat",
        tooltip: "repeat"
    })
    protected repeat_lab: cc.EditBox = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    private _phonePath = HttpLib.BASE_PATH + "/smallgameapi/bindPhone.php";

    start() {

    }

    public save_click() {
        if (this.phone_lab.string != this.repeat_lab.string) {
            popBox.popBox("Please check out your phone number!");
            return;
        }
        let httpLib = new HttpLib();
        httpLib.open(this.successCallback, this.failureCallback, this._phonePath, this, HttpMethod.POST);
        let param = {
            phone: this.phone_lab.string
        };
        httpLib.setRequestHeader("cookie", "PHPSESSID=" + loginLib.loginToken);
        httpLib.send(param);
    }

    public successCallback(request: string) {
        let req = JSON.parse(request);
        if (req.code == 0) {
            construct.userInfo.phone = this.phone_lab.string;
            popBox.popBox("Bind Successful!");
            this.getComponent(nodeOperation).closeSelf();
        } else {
            popBox.popBox("Bind failure!");
        }
    }
    public failureCallback(errorCode: number, msg: string, request: XMLHttpRequest) {
        popBox.popBox("Bind failure!");
    }

    // update (dt) {}
}
