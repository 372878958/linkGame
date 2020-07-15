//
//  XLNStatistics.h
//  XLNUtilityLibIOS
//
//  Created by Daddy on 2018/1/2.
//  Copyright © 2018年 XXX. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface XLNStatistics : NSObject

+ (XLNStatistics *)sharedInstance;

- (void)initStatisticsWithProductName:(NSString *)_productName channelName:(NSString *)_channelName;

- (void)sendEvent:(NSString *)event context:(NSString *)context;

- (void)applicationPause;

- (void)applicationResume;

- (void)applicationTerminate;

@property(nonatomic, copy) NSString *productName;
@property(nonatomic, copy) NSString *channelName;
@property(nonatomic, assign) BOOL isDebug;
@end
