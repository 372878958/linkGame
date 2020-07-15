//
//  XLNLogin.h
//  XLNUtilityDyLib
//
//  Created by Daddy on 2018/3/1.
//  Copyright © 2018年 XXX. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

typedef enum {
    XLN_LOGIN_TYPE_GUEST = 0,
    XLN_LOGIN_TYPE_WECHAT = 1,
    XLN_LOGIN_TYPE_FACEBOOK = 2,
    XLN_LOGIN_TYPE_USERNAME = 3
} XLNLoginType;

DEPRECATED_MSG_ATTRIBUTE("Use GZLoginDelegate: instead")
@protocol XLNLoginDelegate <NSObject>
@required
- (void)loginSucceedCB:(NSString *)userInfoStr type:(XLNLoginType)type; // 微信登录成功获得用户信息
- (void)loginErrorCB:(NSError *)error type:(XLNLoginType)type;  // 登录失败，返回错误信息
- (void)bindingSucceedCB:(XLNLoginType)type; // 绑定成功
- (void)bindingFailCB:(NSError *)error type:(XLNLoginType)type; // 绑定失败
@end

DEPRECATED_MSG_ATTRIBUTE("Use GZLogin: instead")
@interface XLNLogin : NSObject
+ (XLNLogin *)shareInstance;

/*
 * 获取token
 */
- (NSString *)getToken;

/*
 * 登出
 */
- (void)logout;

@property(nonatomic, copy) NSString *channelId;
@property(nonatomic, copy) NSString *guestUrl;
@property(nonatomic, retain) id <XLNLoginDelegate> delegate;

#pragma register

/*
 * 注册游客登陆
 *
 * @param url 游客登陆地址
 */
- (void)registerGuestWithURL:(NSString *)url;

- (void)registerUserNameWithURL:(NSString *)url;

/*
 * 注册微信信息
 *
 * @param appId 微信appId
 * @param gameId 游戏id 不需要的话填0
 * @param loginUrl 登陆http api地址
 * @param bindingUrl 绑定微信 http api地址 不需要给空字符串@""
 */
- (void)registerWechatSDKWithAppId:(NSString *)appId gameId:(int)gameId loginUrl:(NSString *)loginUrl bindingUrl:(NSString *)bindingUrl;

/*
 * facebook初始化信息
 *
 * @param url 登陆http api地址
 */

- (void)registerFacebookSDKWithLoginURL:(NSString *)loginUrl bindingUrl:(NSString *)bindingUrl application:(UIApplication *)application launchOptions:(NSDictionary *)launchOptions;

#pragma login

/*
 * 游客登陆
 */
- (void)logInGuest;

/*
 * 用户名登陆
 */
- (void)logInUserName:(NSString *)userName passWord:(NSString *)passWord;

/*
 * 进行微信登陆
 */
- (void)logInWechat;

/*
 * 进行Facebook登陆
 */
- (void)logInFacebook;

/*
 * 绑定Facebook
 */
- (void)bindingFacebook;

#pragma handleUrl

- (void)wechatHandleUrl:(NSURL *)url;

- (void)facebookHandleUrl:(UIApplication *)application :(NSURL *)url :(NSString *)sourceApplication :(id)annotation;

- (void)facebookHandleUrlWithOptions:(UIApplication *)app :(NSURL *)url :(NSDictionary<UIApplicationOpenURLOptionsKey, id> *)options;

- (void)appEventFacebook;

@end
