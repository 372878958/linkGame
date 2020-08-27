import addUI from "../../commonLib/component/addUI";
import { HttpLib } from "../../commonLib/lib/HttpLib";
import popBox from "../../commonLib/component/PopBox/popBox";
import { reportLib } from "../../commonLib/lib/ReportLib";

const { ccclass, property } = cc._decorator;

@ccclass
export default class advertising extends cc.Component {

    private getUrl: string = HttpLib.BASE_PATH + "/smallgameapi/getRoundSet.php";

    protected static callback: Function = null;
    setFinishCallback(callback: Function) {
        advertising.callback = callback;
    }

    onDestroy() {
        if (advertising.callback) {
            advertising.callback();
        }
    }

    public static play(finishCallback: Function) {
        if (cc.sys.isNative) {
            this.init();
            this.callback = finishCallback;
            let ret: any = null;
            switch (cc.sys.os) {
                case cc.sys.OS_IOS:
                    ret = jsb.reflection.callStaticMethod("AppController", "showAd:title:", "", "");
                    reportLib.watchAdverts("getRedbag", 0);//点击播放广告
                    break;
                case cc.sys.OS_ANDROID:
                    ret = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showAd", "(Ljava/lang/String;Ljava/lang/String;)V", "title", "hahahahha");
                    reportLib.watchAdverts("getRedbag", 0);//点击播放广告
                    break;
            }
            if (ret) {
                cc.log(".reflection.callStaticMethod.ret = " + ret.toString());
            }
        } else {
            addUI.addUI("广告", (ui: advertising) => {
                ui.setFinishCallback(finishCallback);
            }, "advertising");
        }
    }

    public static showInterstitialAd(/*finishCallback: Function*/) {
        if (cc.sys.isNative) {
            this.init();
            // this.callback = finishCallback;
            let ret: any = null;
            switch (cc.sys.os) {
                case cc.sys.OS_IOS:
                    ret = jsb.reflection.callStaticMethod("AppController", "showInterstitialAd:title:", "", "");
                    break;
                case cc.sys.OS_ANDROID:
                    ret = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showInterstitialAd", "(Ljava/lang/String;Ljava/lang/String;)V", "title", "hahahahha");
                    break;
            }
            if (ret) {
                cc.log(".reflection.callStaticMethod.ret = " + ret.toString());
            }
        } else {
            addUI.addUI("广告", (ui: advertising) => {
                ui.setFinishCallback(finishCallback);
            }, "advertising");
        }
    }

    protected static isInit = false;
    protected static init() {
        if (!this.isInit) {
            this.isInit = true;
            window["didHideAd"] = (str) => {
                // 广告播放完毕
                reportLib.watchAdverts("getRedbag", 1);//播放完毕
                if (this.callback) {
                    this.callback();
                }
                return 'abcd'
            }
            window["adFailure"] = (str) => {
                popBox.popBox(str);
            }
        }
    }

}
