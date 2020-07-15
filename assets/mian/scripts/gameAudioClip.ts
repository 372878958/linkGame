const { ccclass, property } = cc._decorator;

@ccclass
export default class gameAudioClip extends cc.Component {
    @property({
        type: cc.AudioClip,
        displayName: "背景音乐",
        tooltip: "游戏关卡使用的背景音乐",
    })
    bgm: cc.AudioClip = null;

    @property({
        type: cc.AudioClip,
        displayName: "消除",
        tooltip: "方块消除时播放的音效",
    })
    removeGrid: cc.AudioClip = null;

    @property({
        type: cc.AudioClip,
        displayName: "重新排列",
        tooltip: "使用道具“重排”或者关卡出现无解需要重新排列的时候播放的音效",
    })
    resetGridPos: cc.AudioClip = null;

    @property({
        type: cc.AudioClip,
        displayName: "闪电",
        tooltip: "使用道具“闪电”时播放的音效",
    })
    lightning: cc.AudioClip = null;

    @property({
        type: cc.AudioClip,
        displayName: "时间冻结",
        tooltip: "使用道具“时间冻结”时播放的音效",
    })
    freezeTime: cc.AudioClip = null;

    @property({
        type: cc.AudioClip,
        displayName: "不可消除",
        tooltip: "玩家先选中一个方块，然后选中第二个方块的时候，如果不能消除，则同时播放此音效",
    })
    noLink: cc.AudioClip = null;

    @property({
        type: cc.AudioClip,
        displayName: "点击按钮",
        tooltip: "点击游戏中的确定类按钮时播放的音效",
    })
    btnClick: cc.AudioClip = null;

    @property({
        type: cc.AudioClip,
        displayName: "取消",
        tooltip: "点击游戏中的取消或X类按钮时播放的音效",
    })
    btnCancel: cc.AudioClip = null;

    @property({
        type: cc.AudioClip,
        displayName: "获得道具",
        tooltip: "关卡结算时，当分数满足条件的时候会得到道具（道具图标上会挑勾），每得到一个道具，播放一次本音效",
    })
    receiveItem: cc.AudioClip = null;

    @property({
        type: cc.AudioClip,
        displayName: "开箱子",
        tooltip: "关卡结算时如果分数足够，可以获得钥匙道具来开启宝箱，宝箱开始时播放本音效",
    })
    openBox: cc.AudioClip = null;

    @property({
        type: cc.AudioClip,
        displayName: "方块破冰",
        tooltip: "如果消除了冰块旁边的方块，则冰块会解冻，解冻时播放本音效",
    })
    unfreezeGrid: cc.AudioClip = null;

    @property({
        type: cc.AudioClip,
        displayName: "炸弹爆炸",
        tooltip: "有些方块上会带有炸弹，如果倒计时结束，炸弹爆炸时播放本音效",
    })
    bombExplosion: cc.AudioClip = null;

    @property({
        type: cc.AudioClip,
        displayName: "重生方块出现",
        tooltip: "当重生方块出现时，播放本音效",
    })
    rebirthGrid: cc.AudioClip = null;

    @property({
        type: cc.AudioClip,
        displayName: "闪电待机",
        tooltip: "点击闪电按钮后，需要选择格子时等待音效",
    })
    lightningSelect: cc.AudioClip = null;

    @property({
        type: cc.AudioClip,
        displayName: "选中格子音效",
        tooltip: "格子被选中时要播放的音效",
    })
    gridSelect: cc.AudioClip = null;

    @property({
        type: cc.AudioClip,
        displayName: "提醒时间快到了",
        tooltip: "当关卡倒计时时间快到的时候播放",
    })
    timeTip: cc.AudioClip = null;

    @property({
        type: cc.AudioClip,
        displayName: "倒计时音效",
        tooltip: "当关卡倒计时剩余不多的时候播放的音效",
    })
    timeCountdown: cc.AudioClip = null;

    @property({
        type: cc.AudioClip,
        displayName: "连击奖励",
        tooltip: "当连击奖励飞到目标位置的时候播放",
    })
    getComboAward: cc.AudioClip = null;

    @property({
        type: cc.AudioClip,
        displayName: "获得连击奖励",
        tooltip: "当连击奖励达到一定数量可获得奖励时播放的声音",
    })
    comboAward: cc.AudioClip = null;

    @property({
        type: cc.AudioClip,
        displayName: "点击冰冻",
        tooltip: "点击冰冻格子时播放的音效",
    })
    clickFreeze: cc.AudioClip = null;

    // @property({
    //     type: cc.AudioClip,
    //     displayName: "连击声效",
    //     tooltip: "根据连击数量不同，播放不同的声效",
    // })
    // comboSound: cc.AudioClip[] = [];

    protected static instance: gameAudioClip = null;

    onLoad() {
        gameAudioClip.instance = this;
    }

    start() {
        // 播放背景音乐
        if (this.bgm) {
            cc.audioEngine.playMusic(this.bgm, true);
        }
    }

    onDestroy() {
        gameAudioClip.instance = null;
    }

    playRemoveGrid() {
        if (this.removeGrid) {
            cc.audioEngine.playEffect(this.removeGrid, false);
        }
    }
    static playRemoveGrid() {
        if (gameAudioClip.instance) {
            gameAudioClip.instance.playRemoveGrid();
        }
    }

    playResetGridPos() {
        if (this.resetGridPos) {
            cc.audioEngine.playEffect(this.resetGridPos, false);
        }
    }
    static playResetGridPos() {
        if (gameAudioClip.instance) {
            gameAudioClip.instance.playResetGridPos();
        }
    }

    playLightning() {
        if (this.lightning) {
            cc.audioEngine.playEffect(this.lightning, false);
        }
    }
    static playLightning() {
        if (gameAudioClip.instance) {
            gameAudioClip.instance.playLightning();
        }
    }

    protected freezeTimeAudioID: number = null;
    playFreezeTime() {
        if (this.freezeTime && !this.freezeTimeAudioID) {
            this.freezeTimeAudioID = cc.audioEngine.playEffect(this.freezeTime, false);
            cc.audioEngine.pauseMusic();
        }
    }
    static playFreezeTime() {
        if (gameAudioClip.instance) {
            gameAudioClip.instance.playFreezeTime();
        }
    }

    stopFreezeTime() {
        if (this.freezeTimeAudioID) {
            cc.audioEngine.stopEffect(this.freezeTimeAudioID);
            this.freezeTimeAudioID = null;
            cc.audioEngine.resumeMusic();
        }
    }
    static stopFreezeTime() {
        if (gameAudioClip.instance) {
            gameAudioClip.instance.stopFreezeTime();
        }
    }

    playNoLink() {
        if (this.noLink) {
            cc.audioEngine.playEffect(this.noLink, false);
        }
    }
    static playNoLink() {
        if (gameAudioClip.instance) {
            gameAudioClip.instance.playNoLink();
        }
    }

    playBtnClick() {
        if (this.btnClick) {
            cc.audioEngine.playEffect(this.btnClick, false);
        }
    }
    static playBtnClick() {
        if (gameAudioClip.instance) {
            gameAudioClip.instance.playBtnClick();
        }
    }

    playBtnCancel() {
        if (this.btnCancel) {
            cc.audioEngine.playEffect(this.btnCancel, false);
        }
    }
    static playBtnCancel() {
        if (gameAudioClip.instance) {
            gameAudioClip.instance.playBtnCancel();
        }
    }

    playReceiveItem() {
        if (this.receiveItem) {
            cc.audioEngine.playEffect(this.receiveItem, false);
        }
    }
    static playReceiveItem() {
        if (gameAudioClip.instance) {
            gameAudioClip.instance.playReceiveItem();
        }
    }

    playOpenBox() {
        if (this.openBox) {
            cc.audioEngine.playEffect(this.openBox, false);
        }
    }
    static playOpenBox() {
        if (gameAudioClip.instance) {
            gameAudioClip.instance.playOpenBox();
        }
    }

    playUnfreezeGrid() {
        if (this.unfreezeGrid) {
            cc.audioEngine.playEffect(this.unfreezeGrid, false);
        }
    }
    static playUnfreezeGrid() {
        if (gameAudioClip.instance) {
            gameAudioClip.instance.playUnfreezeGrid();
        }
    }

    playBombExplosion() {
        if (this.bombExplosion) {
            cc.audioEngine.playEffect(this.bombExplosion, false);
        }
    }
    static playBombExplosion() {
        if (gameAudioClip.instance) {
            gameAudioClip.instance.playBombExplosion();
        }
    }

    playRebirthGrid() {
        if (this.rebirthGrid) {
            cc.audioEngine.playEffect(this.rebirthGrid, false);
        }
    }
    static playRebirthGrid() {
        if (gameAudioClip.instance) {
            gameAudioClip.instance.playRebirthGrid();
        }
    }

    protected lightningSelectAudioID: number = null;
    playLightningSelect() {
        if (this.lightningSelect && !this.lightningSelectAudioID) {
            this.lightningSelectAudioID = cc.audioEngine.playEffect(this.lightningSelect, true);
        }
    }
    static playLightningSelect() {
        if (gameAudioClip.instance) {
            gameAudioClip.instance.playLightningSelect();
        }
    }

    stopLightningSelect() {
        if (this.lightningSelectAudioID) {
            cc.audioEngine.stopEffect(this.lightningSelectAudioID);
            this.lightningSelectAudioID = null;
        }
    }
    static stopLightningSelect() {
        if (gameAudioClip.instance) {
            gameAudioClip.instance.stopLightningSelect();
        }
    }

    playGridSelect() {
        if (this.gridSelect) {
            cc.audioEngine.playEffect(this.gridSelect, false);
        }
    }
    static playGridSelect() {
        if (gameAudioClip.instance) {
            gameAudioClip.instance.playGridSelect();
        }
    }

    playTimeTip() {
        if (this.timeTip) {
            cc.audioEngine.playEffect(this.timeTip, false);
        }
    }
    static playTimeTip() {
        if (gameAudioClip.instance) {
            gameAudioClip.instance.playTimeTip();
        }
    }

    playTimeCountdown() {
        if (this.timeCountdown) {
            cc.audioEngine.playEffect(this.timeCountdown, false);
        }
    }
    static playTimeCountdown() {
        if (gameAudioClip.instance) {
            gameAudioClip.instance.playTimeCountdown();
        }
    }

    playGetComboAward() {
        if (this.getComboAward) {
            cc.audioEngine.playEffect(this.getComboAward, false);
        }
    }
    static playGetComboAward() {
        if (gameAudioClip.instance) {
            gameAudioClip.instance.playGetComboAward();
        }
    }

    // playComboSound(comboNum: number) {
    //     if (this.comboSound) {
    //         let index = comboNum % (this.comboSound.length + 1);
    //         if (index < this.comboSound.length) {
    //             cc.audioEngine.playEffect(this.comboSound[index], false);
    //         }
    //     }
    // }
    // static playComboSound(comboNum: number) {
    //     if (gameAudioClip.instance) {
    //         gameAudioClip.instance.playComboSound(comboNum);
    //     }
    // }

    playComboAward() {
        if (this.comboAward) {
            cc.audioEngine.playEffect(this.comboAward, false);
        }
    }
    static playComboAward() {
        if (gameAudioClip.instance) {
            gameAudioClip.instance.playComboAward();
        }
    }

    playClickFreeze() {
        if (this.clickFreeze) {
            cc.audioEngine.playEffect(this.clickFreeze, false);
        }
    }
    static playClickFreeze() {
        if (gameAudioClip.instance) {
            gameAudioClip.instance.playClickFreeze();
        }
    }
}
