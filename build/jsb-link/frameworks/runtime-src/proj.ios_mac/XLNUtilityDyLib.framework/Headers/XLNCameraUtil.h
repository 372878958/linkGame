//
//  XLNCameraUtil.h
//  XLNUtilityDyLib
//
//  Created by Daddy on 2018/5/15.
//  Copyright © 2018年 XXX. All rights reserved.
//

#import <UIKit/UIKit.h>

@protocol XLNCameraUtilDelegate <NSObject>
@required
- (void)captureOver:(UIImage *)image;

- (void)captureError:(NSError *)error;
@end

@interface XLNCameraUtil : NSObject

+ (instancetype)sharedInstance;

- (void)cameraCapture:(UIViewController *)viewController;

@property(nonatomic, retain) id <XLNCameraUtilDelegate> delegate;
@end
