//
//  GZLogin.h
//  XLNUtilityDyLib
//
//  Created by Daddy on 2018/7/2.
//  Copyright © 2018年 XXX. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIkit/UIkit.h>

typedef void (^gzLoginCallBcak)(NSDictionary *dict, NSError *error);

typedef enum {
    GZ_LOGIN_TYPE_NONE = -1,
    GZ_LOGIN_TYPE_WECHAT = 1,
    GZ_LOGIN_TYPE_LINE = 2,
    GZ_LOGIN_TYPE_PHONE = 3,
    GZ_LOGIN_TYPE_FACEBOOK = 4,
    GZ_LOGIN_TYPE_GUEST = 5,
    GZ_LOGIN_TYPE_USERNAME = 6
} GZLoginType;

@interface GZLogin : NSObject

/*
 * 单例
 */
+ (instancetype)sharedInstance;

/*
 * 获取存储过的token
 */
- (NSString *)getToken;

/*
 * 登出
 */
- (void)logout;

// ------------Line-----------

/*
 * Line登陆 (带block回调)
 */
- (void)loginLine:(NSDictionary *)clientInfo callBack:(gzLoginCallBcak)callBack;

/*
 * Line web登陆 (带block回调)
 */
- (void)loginLineWeb:(NSDictionary *)clientInfo callBack:(gzLoginCallBcak)callBack;

/*
 * Line登陆的HandleUrl
 */
- (void)lineHandleOpenURL:(NSURL *)url;

/*
 * Line绑定 (带block回调)
 */
- (void)bindingLine:(NSDictionary *)clientInfo callBack:(gzLoginCallBcak)callBack;

/*
 * Line Web绑定 (带block回调)
 */
- (void)bindingLineWeb:(NSDictionary *)clientInfo callBack:(gzLoginCallBcak)callBack;

/*
 * Line 获取AccessToken
 */
- (void)getLineAccessToken:(gzLoginCallBcak)callBack;

/*
 * Line Web 获取AccessToken
 */
- (void)getLineWebAccessToken:(gzLoginCallBcak)callBack;


// ------------手机号-----------
/*
 * 获取图形验证码
 */
- (void)getImageVerifyCode:(NSString *)clientInfo callBack:(gzLoginCallBcak)callBack;

/*
 * 获取手机验证码
 */
- (void)getPhoneVerifyCode:(NSString *)phoneNum imgCode:(NSString *)imgCode clientInfo:(NSDictionary *)clientInfo callBack:(gzLoginCallBcak)callBack;

/*
 * 手机号登陆 (带block回调)
 */
- (void)loginPhone:(NSString *)phoneNum verifyCode:(NSString *)verifyCode clientInfo:(NSDictionary *)clientInfo callBack:(gzLoginCallBcak)callBack;

/*
 * 绑定手机号 (带block回调)
 */
- (void)bindingPhone:(NSString *)phoneNum verifyCode:(NSString *)verifyCode clientInfo:(NSDictionary *)clientInfo callBack:(gzLoginCallBcak)callBack;

// ------------微信-----------

/*
 * 注册微信AppId，需要提前调用进行微信SDK初始化工作
 */
- (void)registerWechatLogin:(NSString *)wxAppId;

/*
 * 微信登陆的HandleUrl
 */
- (void)wechatHandleOpenURL:(NSURL *)url;

/*
 * 微信登陆 (带block回调)
 */
- (void)loginWechat:(NSDictionary *)clientInfo callBack:(gzLoginCallBcak)callBack;

/*
 * 绑定微信 (带block回调)
 */
- (void)bindingWechat:(NSDictionary *)clientInfo callBack:(gzLoginCallBcak)callBack;

/*
 * 获取微信code
 */
- (void)getWechatCode:(gzLoginCallBcak)callBack;

// ------------Facebook-----------

/*
 * 注册Facebook需要提前调用进行微信SDK初始化工作
 */
- (void)registerFacebookLogin:(UIApplication *)application :(NSDictionary *)launchOptions;

/*
 * Facebook登陆的HandleUrl
 */
- (void)facebookHandleOpenURL:(UIApplication *)application :(NSURL *)url :(NSString *)sourceApplication :(id)annotation;

- (void)facebookHandleOpenURLWithOptions:(UIApplication *)app :(NSURL *)url :(NSDictionary<UIApplicationOpenURLOptionsKey, id> *)options;

- (void)appEventFacebook;

/*
 * Facebook登陆 (带block回调)
 */
- (void)loginFacebook:(NSDictionary *)clientInfo callBack:(gzLoginCallBcak)callBack;

/*
 * 绑定Facebook (带block回调)
 */
- (void)bindingFacebookcallBack:(NSDictionary *)clientInfo callBack:(gzLoginCallBcak)callBack;

/*
 * 获取Facebook token
 */
- (void)getFacebookAccessToken:(gzLoginCallBcak)callBack;

// ------------游客登陆-----------

/*
 * 游客登陆 (带block回调)
 */
- (void)loginGuest:(NSDictionary *)clientInfo callBack:(gzLoginCallBcak)callBack;

// ------------用户名密码登陆-----------

/*
 * 用户名密码注册 (带block回调)
 */
- (void)registerUserName:(NSString *)userName password:(NSString *)password clientInfo:(NSDictionary *)clientInfo callBack:(gzLoginCallBcak)callBack;

/*
 * 用户名密码登陆 (带block回调)
 */
- (void)loginUserName:(NSString *)userName password:(NSString *)password clientInfo:(NSDictionary *)clientInfo callBack:(gzLoginCallBcak)callBack;

/*
 * 用户名密码绑定 (带block回调)
 */
- (void)bindingUserName:(NSString *)userName password:(NSString *)password clientInfo:(NSDictionary *)clientInfo callBack:(gzLoginCallBcak)callBack;

// ------------吹牛登陆-----------
- (void)getCNChatAccessToken:(gzLoginCallBcak)callBack;


// ------------默往登陆-----------
/*
 * 注册AppKey
 */
-(void)registerMostOneAppKey:(NSString *)appKey;
/*
 * 获取默往Code
 */
- (void)getMostOneCode:(NSString *)stateCode callBack:(gzLoginCallBcak)callBack;
/*
 * 回调注册
 */
- (void)mostOneOpenURL:(NSURL *)url;

// ------------与你-----------
/*
 * 注册AppId
 */
- (void)registerYuniWithAppid:(NSString *)appId;

/*
 * 回调注册
 */
- (void)handleYuniOpenURL:(NSURL *)url;

/*
 * 获取与你登陆信息
 */
- (void)getYuniToken:(gzLoginCallBcak)callBack;

// ------------多聊-----------

/*
 * 注册AppId
 */
- (void)registerDuoLiaoWithAppID:(NSString *)appId;

/*
 * 回调注册
 */
- (void)handleDuoLiaoOpenUrl:(NSURL *)url;

/*
 * 获取多聊登陆信息
 */
- (void)getDuoLiaoOpenId:(gzLoginCallBcak)callBack;

// ------------苹果Apple-----------

/*
 * 获取苹果登陆信息
 */
- (void)getAppleIdInfo:(gzLoginCallBcak)callBack;

@property(nonatomic, copy) NSString *loginUrl;
@property(nonatomic, copy) NSString *bindingUrl;
@property(nonatomic, copy) NSString *registerUrl;
@property(nonatomic, copy) NSString *appId;
@property(nonatomic, copy) NSString *phoneVerifyCodeUrl;
@property(nonatomic, copy) NSString *imgVerifyUrl;
@property(nonatomic, copy) NSString *wechatAppId;
@property(nonatomic, copy) NSString *clientType;
@end
