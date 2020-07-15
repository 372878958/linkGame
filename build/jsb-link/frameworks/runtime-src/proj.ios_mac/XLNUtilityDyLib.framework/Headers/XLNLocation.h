//
//  XLNLocation.h
//  XLNUtilityLibIOS
//
//  Created by Daddy on 2017/11/4.
//  Copyright © 2017年 XXX. All rights reserved.
//

#import <Foundation/Foundation.h>

/*
 * 必须在Info.plist里加入位置获取许可权限
 <key>NSLocationWhenInUseUsageDescription</key>
 <string>请您允许，我们将会为您提供更精确的信息</string>
 */

@protocol XLNLocationDelegate <NSObject>
@required
- (void)didGetLongitude:(double)longitude latitude:(double)latitude error:(NSError *)error;
@end

@interface XLNLocation : NSObject
@property(nonatomic, retain) id <XLNLocationDelegate> delegate;

+ (XLNLocation *)sharedInstance;  // 创建实例对象
- (void)getCurrentLocation;  // 获取经纬度

@end

