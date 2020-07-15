import { loadThemeSelect, gameData, saveThemeSelect } from "./gameData";
import gridManager from "./gridManager";
import advertising from "./advertising";
import nodeOperation from "../../commonLib/component/nodeOperation";
import gameMain from "./gameMain";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ThemeSelect extends cc.Component {

    @property({
        type: cc.Toggle,
        displayName: "主题选项"
    })
    protected themeItems: cc.Toggle[] = [];

    @property({
        type: cc.Label,
        displayName: "主题碎片数"
    })
    protected themeItemCount: cc.Label[] = [];

    @property({
        type: cc.Sprite,
        displayName: "主题展示图"
    })
    protected themeShowSprite: cc.Sprite = null;

    @property({
        type: cc.SpriteFrame,
        displayName: "主题展示图集"
    })
    protected themeShowSF: cc.SpriteFrame[] = [];

    @property({
        type: cc.Button,
        displayName: "确定按钮"
    })
    protected okBtn: cc.Button = null;

    protected srcSelectIndex: number = null;
    protected curSelectIndex: number = null;
    onEnable() {
        gameMain.instance.pauseGame();
        this.okBtn.interactable = false;
        this.curSelectIndex = loadThemeSelect();
        this.srcSelectIndex = this.curSelectIndex;
        this.themeItems[this.curSelectIndex].isChecked = true;

        for (let i = 0; i < this.themeItems.length; ++i) {
            this.themeItems[i].interactable = gameData.archive && gameData.archive[i] && gameData.archive[i].length >= 20;
            let child = this.themeItems[i].node.getChildByName("img_change_1");
            if (this.themeItems[i].interactable) {
                child.color = cc.Color.WHITE;
                child.opacity = 255;
                this.themeItemCount[i].node.parent.active = false;
            } else {
                child.color = cc.color(94, 40, 17, 255);
                child.opacity = 200;
                this.themeItemCount[i].node.parent.active = true;
                if (gameData.archive[i]) {
                    this.themeItemCount[i].string = gameData.archive[i].length + "/20";
                } else {
                    this.themeItemCount[i].string = "0/20";
                }
            }
        }
    }

    onDisable() {
        gameMain.instance.resumeGame();
    }

    protected 选择主题(event: cc.Toggle, customEventData: string) {
        for (let i = 0; i < this.themeItems.length; ++i) {
            if (this.themeItems[i].isChecked) {
                this.curSelectIndex = i;
                this.themeShowSprite.spriteFrame = this.themeShowSF[this.curSelectIndex];
                break;
            }
        }
        // 不换主题不能点
        this.okBtn.interactable = this.curSelectIndex != this.srcSelectIndex;
    }

    protected 点击确定() {
        // 看广告换主题
        advertising.play(() => {
            saveThemeSelect(this.curSelectIndex);
            gridManager.instance.updateTheme();
            this.getComponent(nodeOperation).closeSelf();
        })
    }
}
