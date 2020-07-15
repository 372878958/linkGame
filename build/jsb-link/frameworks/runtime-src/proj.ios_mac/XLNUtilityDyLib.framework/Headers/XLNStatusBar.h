//
//  XLNStatusBar.h
//  XLNUtilityLibIOS
//
//  Created by Daddy on 2017/11/4.
//  Copyright © 2017年 XXX. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface XLNStatusBar : NSObject

// 获取网络类型(-1:获取失败 0:移动网络 1:wifi信号 2：无网络连接)
+ (int)getNetWorkType;

+ (int)getSignalStrength;
@end

