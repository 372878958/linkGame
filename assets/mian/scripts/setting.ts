import gameAudioClip from "./gameAudioClip";
import sliderEX from "../../commonLib/component/sliderEX";
import gameMain from "./gameMain";

const LS_musicVolume = "musicVolume";
const LS_soundVolume = "soundVolume";

const { ccclass, property } = cc._decorator;

@ccclass
export default class setting extends cc.Component {
    @property({
        type: sliderEX,
        displayName: "音乐"
    })
    protected musicSlider: sliderEX = null;

    @property({
        type: sliderEX,
        displayName: "音效"
    })
    protected soundSlider: sliderEX = null;

    onLoad() {
        this.musicSlider.progress = setting.musicVolume;
        this.soundSlider.progress = setting.soundVolume;
    }

    onEnable() {
        gameMain.instance.pauseGame();
    }

    onDisable() {
        gameMain.instance.resumeGame();
    }

    设置音乐() {
        setting.setMusicVolume(this.musicSlider.progress);
    }

    设置音效() {
        setting.setSoundVolume(this.soundSlider.progress);
    }

    播放声效() {
        gameAudioClip.playBtnClick();
    }

    protected static musicVolume: number = 1;
    protected static soundVolume: number = 1;

    static initVolume() {
        let music = cc.sys.localStorage.getItem(LS_musicVolume);
        let sound = cc.sys.localStorage.getItem(LS_soundVolume);
        setting.musicVolume = music ? Number(music) : 1;
        setting.soundVolume = sound ? Number(sound) : 1;
        cc.audioEngine.setEffectsVolume(setting.soundVolume);
        cc.audioEngine.setMusicVolume(setting.musicVolume);
    }

    static setMusicVolume(volume: number) {
        if (setting.musicVolume != volume) {
            setting.musicVolume = volume;
            cc.sys.localStorage.setItem(LS_musicVolume, setting.musicVolume.toString());
            cc.audioEngine.setMusicVolume(setting.musicVolume);
        }
    }

    static setSoundVolume(volume: number) {
        if (setting.soundVolume != volume) {
            setting.soundVolume = volume;
            cc.sys.localStorage.setItem(LS_soundVolume, setting.soundVolume.toString());
            cc.audioEngine.setEffectsVolume(setting.soundVolume);
        }
    }
}