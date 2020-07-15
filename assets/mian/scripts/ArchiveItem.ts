import { gameData, setGridIcon } from "./gameData";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ArchiveItem extends cc.Component {

    @property({
        type: cc.Sprite,
        displayName: "锁头图标"
    })
    protected lockImg: cc.Sprite = null;

    @property({
        type: cc.Sprite,
        displayName: "主题图标"
    })
    protected themeIconImg: cc.Sprite = null;

    @property({
        type: cc.Sprite,
        displayName: "主题名称"
    })
    protected themeIconName: cc.Sprite = null;

    @property({
        type: cc.ProgressBar,
        displayName: "进度条"
    })
    protected progress: cc.ProgressBar = null;

    @property({
        type: cc.Label,
        displayName: "进度文字"
    })
    protected progressLabel: cc.Label = null;

    @property({
        type: cc.Sprite,
        displayName: "所有图标"
    })
    protected icons: cc.Sprite[] = [];

    themeIcons: cc.SpriteFrame[] = [];
    themeNames: cc.SpriteFrame[] = [];

    protected id: number = null;
    setData(id: number) {
        if (this.id == id) {
            return;
        }
        this.id = id;
        this.lockImg.node.active = true;
        this.progress.progress = 0;
        this.progressLabel.string = "(0/20)";
        let archive = gameData.archive[id];
        if (archive) {
            if (archive.length >= 20) {
                this.lockImg.node.active = false;
                this.progress.progress = 1;
                this.progressLabel.string = "(20/20)";
            } else {
                this.progress.progress = archive.length / 20;
                this.progressLabel.string = "(" + archive.length + "/20)";
            }
        }
        // 设置主题名称和标题
        this.themeIconImg.spriteFrame = this.themeIcons[this.id];
        this.themeIconName.spriteFrame = this.themeNames[this.id];
        // 设置图标
        for (let i = 0; i < this.icons.length; ++i) {
            this.icons[i].node.color = cc.color(94, 40, 17, 255);
            this.icons[i].node.parent.color = this.icons[i].node.color;
            setGridIcon(i, this.icons[i], this.id);
        }
        // 设置图标明暗
        if (archive) {
            for (let v of archive) {
                if (this.icons[v]) {
                    this.icons[v].node.color = cc.Color.WHITE;
                    this.icons[v].node.parent.color = this.icons[v].node.color;
                }
            }
        }
    }

    protected viewCallback: (id: number) => void = null;
    // 设置点击查看按钮回调
    setViewCallback(viewCallback: (id: number) => void) {
        this.viewCallback = viewCallback;
    }

    protected 点击查看() {
        if (this.viewCallback) {
            this.viewCallback(this.id);
        }
    }
}
