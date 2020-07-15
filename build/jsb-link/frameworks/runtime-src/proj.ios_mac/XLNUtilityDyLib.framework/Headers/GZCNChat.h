//
//  GZCNChat.h
//  XLNUtilityDyLib
//
//  Created by Daddy on 2018/11/8.
//  Copyright © 2018 XXX. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "GZLogin.h"

NS_ASSUME_NONNULL_BEGIN

@interface GZCNChat : NSObject

+ (instancetype)sharedInstance;

/*
 * 注册吹牛信息
 */
- (void)registerCNChatWithAppId:(NSString *)appId appSecret:(NSString *)appSecret;

/*
 * 吹牛handleUrl
 */
- (void)handleOpenURL:(NSURL *)url;

/*
 * 吹牛图片分享
 */
- (void)shareImageToCNChatWithImagePath:(NSString *)imagePath;

/*
 * 吹牛webPage分享
 */
- (void)shareWebpageToCNChatWithTittle:(NSString *)tittle description:(NSString *)description thumImage:(NSString *)thumImage urlIntent:(NSString *)urlIntent;

/*
 * 吹牛邀请分享
 */
- (void)shareInviteToCNChatWithTittle:(NSString *)tittle description:(NSString *)description reciveInviteBackInfo:(NSString *)reciveInviteBackInfo thumImage:(NSString *)thumImage urlIntent:(NSString *)urlIntent;

/*
 * 获取吹牛AccessToken
 */
-(void)getCNChatAccessToken:(gzLoginCallBcak) callBack;
@end

NS_ASSUME_NONNULL_END
