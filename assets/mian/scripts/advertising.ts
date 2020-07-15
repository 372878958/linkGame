import addUI from "../../commonLib/component/addUI";

const { ccclass, property } = cc._decorator;

@ccclass
export default class advertising extends cc.Component {

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
                    break;
                case cc.sys.OS_ANDROID:
                    ret = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showAd", "(Ljava/lang/String;Ljava/lang/String;)V", "title", "hahahahha");
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
                if (this.callback) {
                    this.callback();
                }
                return 'abcd'
            }
        }
    }
}
