//
//  GZStoreReview.h
//  XLNUtilityDyLib
//
//  Created by Daddy on 2018/10/26.
//  Copyright © 2018 XXX. All rights reserved.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface GZStoreReview : NSObject

+ (instancetype)sharedInstance;

/*
 * 弹出星级评价小窗口 (一年只允许弹3次) 10.3以上系统可用
 */
- (void)requestReview;

/*
 * 在App中弹出AppStore界面
 */
- (void)showAppStoreReView:(NSString *)appId viewController:(UIViewController *)viewController;

@end

NS_ASSUME_NONNULL_END
