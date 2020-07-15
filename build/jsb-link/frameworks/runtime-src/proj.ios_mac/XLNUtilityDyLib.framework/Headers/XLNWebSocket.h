//
//  GZSockerRocketTool.h
//  yn_openLive_ios
//
//  Created by Haha on 2017/12/19.
//  Copyright © 2017年 Zecek. All rights reserved.
//
#import <UIKit/UIKit.h>

@protocol XLNSocketDelegate <NSObject>
@optional
//收到登出消息回调
-(void)receiveLogoutMessage;
//收到认证消息回调
-(void)receiveLoginMessage:(int)result;
//收到心跳回调
-(void)receiveHeartMessage;
//收到业务消息回调
-(void)receiveBusinessMessage:(NSDictionary*)dic;

@end

@interface XLNWebSocket : NSObject

//获取对象
+(XLNWebSocket*)sharedInstance;
//初始化websocket
- (void)openWebSocket:(NSString *)address;
//登录
- (void)login:(NSDictionary*)dic :(int)version;
//业务消息发送
- (void)sendBusinessMessage:(NSDictionary*)dic :(short)group :(short)action;
//退出
- (void)logout;

@property int heartTime;
@property(nonatomic, retain) id<XLNSocketDelegate> delegate;

@end
