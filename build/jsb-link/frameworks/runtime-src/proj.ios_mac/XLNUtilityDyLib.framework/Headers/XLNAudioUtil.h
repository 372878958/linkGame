//
//  XLNAudioUtil.h
//  XLNUtilityLibIOS
//
//  Created by Work on 2017/12/8.
//  Copyright © 2017年 Work. All rights reserved.
//

#import <Foundation/Foundation.h>

@protocol XLNAudioUtilDelegate <NSObject>
@required
- (void)voiceRecordDidFinish:(NSString *)localId;                // 声音录制完成
- (void)voiceRecordDidFail:(int)errorCode;                       // 声音录制失败
- (void)voiceRecordAutoEnd:(NSString *)localId;                  // 录音超过60秒，自动停止录音
- (void)voicePlayEnd;                                            // 语音播放完毕
- (void)voicePlayFail:(int)errorCode;                            // 语音播放失败
- (void)voiceUploadOver:(NSString *)localId serverId:(NSString *)serverId;                    // 语音上传完成
- (void)voiceUploadFail:(int)errorCode;                         // 语音上传失败
- (void)voiceDownloadOver:(NSString *)localId serverId:(NSString *)serverId;                   // 语音下载成功
- (void)voiceDownloadFail:(int)errorCode;                       // 语音下载失败
@end

@interface XLNAudioUtil : NSObject
@property(nonatomic, retain) id <XLNAudioUtilDelegate> delegate;

+ (XLNAudioUtil *)sharedInstance;

- (void)initWithAppId:(NSString *)appId;

- (void)startRecord;                             // 传入录音文件保存路径，开始录音
- (void)stopRecord;                              // 停止录音
- (void)playVoice:(NSString *)localId;           // 传入要播放的文件路径，开始播放
- (float)getVoiceDuration:(NSString *)localId;
- (void)stopVoicePlaying;                        // 停止播放
- (void)uploadVoice:(NSString *)localId isNeedMp3File:(Boolean)isNeedMp3File;        // 上传录音
- (void)downloadVoice:(NSString *)serverId;      // 下载录音
- (void)cleanCache;                              // 清理缓存文件(自己管理清理缓存策略)
- (void)setVolume:(float)volume;                 // 设置音量 (0.0~1.0)
- (float)getVolume;                              // 获取目前音量
- (void)goSetting; // 去设置

@property(nonatomic, copy) NSString *uploadUrl;
@property(nonatomic, copy) NSString *downloadUrl;
@end
