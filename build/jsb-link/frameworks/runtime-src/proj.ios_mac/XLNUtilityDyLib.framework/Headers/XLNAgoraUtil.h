//
//  XLNAgoraUtil.h
//  XLNUtilityLibIOS
//
//  Created by Daddy on 2017/12/25.
//  Copyright © 2017年 XXX. All rights reserved.
//

#import <Foundation/Foundation.h>

@protocol XLNAgoraUtilDelegate <NSObject>
@required
- (void)onGetChannelToken:(NSString *)channelToken;

- (void)onGetChannelTokenError:(int)errorCode;
@end

@interface XLNAgoraUtil : NSObject

+ (XLNAgoraUtil *)sharedInstance;

/**
 * 初始化工具
 *
 * @param _appId 这个程序的appId
 *
 */
- (void)initWithAppId:(NSString *)_appId url:(NSString *)_url;

/**
 * 获取Channel Token
 */
- (void)getChannelTokenWithChannelName:(NSString *)channelName userId:(NSString *)userId role:(int)role;

@property(nonatomic, retain) id <XLNAgoraUtilDelegate> delegate;
@property(nonatomic, copy) NSString *appId;
@property(nonatomic, copy) NSString *url;
@end
