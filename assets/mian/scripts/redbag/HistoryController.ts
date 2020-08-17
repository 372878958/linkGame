// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import tableView from "../../../commonLib/component/tableView/tableView";
import { HttpLib, HttpMethod } from "../../../commonLib/lib/HttpLib";
import { loginLib } from "../../../commonLib/lib/LoginLib";
import popBox from "../../../commonLib/component/PopBox/popBox";
import pullToRefresh from "../../../commonLib/component/pullToRefresh";

const { ccclass, property } = cc._decorator;

@ccclass
export default class HistoryController extends cc.Component {

    @property({
        type: tableView,
        displayName: "tableview",
        tooltip: "tableview"
    })
    protected history_tb: tableView = null;

    private _storePath = HttpLib.BASE_PATH + "/smallgameapi/exchangeRecords.php";
    private _historyData = [];
    private _pageNumber = 1;
    private _pullRefresh: pullToRefresh = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        this.getData();
    }

    // update (dt) {}

    private getData(callback: Function = null) {
        let httpLib = new HttpLib();
        httpLib.open((request: string) => {
            this.successCallback(request);
            if (callback) {
                callback();
            }
        }, (errorCode: number, msg: string, request: XMLHttpRequest) => {
            this.failureCallback(errorCode, msg, request);
            if (callback) {
                callback();
            }
        }, this._storePath, this, HttpMethod.POST);
        let param = {
            page: this._pageNumber,
            rows: 10
        };
        httpLib.setRequestHeader("cookie", "PHPSESSID=" + loginLib.loginToken);
        httpLib.send(param);
    }

    public successCallback(request) {
        let req = request;
        if (req.code == 0) {
            if (req.data) {
                if (req.data.length > 0) {
                    this._historyData = this._historyData.concat(req.data);
                    this.history_tb.setData(this._historyData);
                } else {
                    if (this._pageNumber == 1) {

                    } else {
                        this._pageNumber -= 1;
                    }
                }
            }
        } else {
            popBox.popBox(req.msg);
        }
    }
    public failureCallback(errorCode: number, msg: string, request: XMLHttpRequest) {
        popBox.popBox(msg);
    }

    public refreshData(callback: Function = null) {
        this._historyData = [];
        this._pageNumber = 1;
        this.getData(callback);
    }

    public getNextPage(s, pullRefresh: pullToRefresh) {
        this._pageNumber += 1;
        this.getData(() => {
            pullRefresh.finish();
        });
    }
}
