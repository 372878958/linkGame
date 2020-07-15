import ArchiveItem from "./ArchiveItem";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Archive extends cc.Component {

    @property({
        type: ArchiveItem,
        displayName: "图鉴主题Item"
    })
    protected items: ArchiveItem[] = [];

    @property({
        type: cc.SpriteFrame,
        displayName: "主题图标"
    })
    protected themeIcons: cc.SpriteFrame[] = [];

    @property({
        type: cc.SpriteFrame,
        displayName: "主题名称"
    })
    protected themeNames: cc.SpriteFrame[] = [];

    @property({
        type: ArchiveItem,
        displayName: "查看界面"
    })
    protected viewItem: ArchiveItem = null;

    @property({
        type: cc.ScrollView,
        displayName: "滚动视图"
    })
    protected scrollView: cc.ScrollView = null;

    onLoad() {
        // 先关闭查看主题
        this.viewItem.themeIcons = this.themeIcons;
        this.viewItem.themeNames = this.themeNames;
        this.viewItem.node.active = false;
        for (let i = 0; i < this.items.length; ++i) {
            this.items[i].themeIcons = this.themeIcons;
            this.items[i].themeNames = this.themeNames;
            this.items[i].setData(i);
            this.items[i].setViewCallback(this.onViewItem.bind(this));
        }
    }

    protected onViewItem(id: number) {
        this.viewItem.setData(id);
        this.viewItem.node.active = true;
        this.scrollView.node.active = false;
    }

    protected 关闭查看主题() {
        this.viewItem.node.active = false;
        this.scrollView.node.active = true;
    }
}
