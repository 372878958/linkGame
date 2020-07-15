//
//  XLNDevice.h
//  XLNUtilityLibIOS
//
//  Created by Daddy on 2017/11/4.
//  Copyright © 2017年 XXX. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface XLNDevice : NSObject

+ (NSString *)uuid;

+ (NSString *)idfa;

+ (NSString *)idfv;

/*
 * 获取钥匙串里面的uuid (用于获取设备唯一id)
 * key 钥匙串里的key
 * service 服务名
 */
+ (NSString *)uuidFromKeyChainWithKey:(NSString *)key service:(NSString *)service;


// 获取手机电量信息(正常值为0~100,-1表示获取失败)
+ (int)getBatteryLevel;

// 复制字符串到剪切板
+ (void)copyStringToClipBoard:(NSString *)string;

// 获取剪切板里的字符串
+ (NSString *)getStringFromClipBoard;

// 拉起微信
+ (void)openWeChat;

@end
