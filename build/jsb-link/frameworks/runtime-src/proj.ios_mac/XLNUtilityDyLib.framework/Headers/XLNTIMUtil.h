//
//  XLNTIMUtil.h
//  XLNUtilityDyLib
//
//  Created by Daddy on 2018/3/16.
//  Copyright © 2018年 XXX. All rights reserved.
//

#import <Foundation/Foundation.h>

@protocol XLNTIMUtilDelegate <NSObject>
@required
- (void)getSigSucceedCB:(NSString *)userSig; // 获取签名成功
- (void)getSigErrorCB:(NSError *)error;  // 获取签名失败
@end

@interface XLNTIMUtil : NSObject
+ (XLNTIMUtil *)sharedInstance;

- (void)registerWithUrl:(NSString *)url;

/*
 * 获取登陆用的签名(鉴权Token)
 *
 * @param appId 应用id
 * @param userName 用户名 用来登陆腾讯IM的用户名，用户在项目中的唯一id，如userId等
 */
-(void)getSigWithAppId: (NSString *)appId userName: (NSString *)userName;

@property(nonatomic, retain) id <XLNTIMUtilDelegate> delegate;
@property(nonatomic, copy) NSString *url;
@end
