//
//  XLNPhotoPicker.h
//  XLNUtilityDyLib
//
//  Created by Daddy on 2018/5/16.
//  Copyright © 2018年 XXX. All rights reserved.
//

#import <UIKit/UIKit.h>

@protocol XLNPhotoPickerDelegate <NSObject>
@required
- (void)pickOver:(UIImage *)image;

- (void)pickCancel;
@end

@interface XLNPhotoPicker : NSObject

+ (instancetype)sharedInstance;

- (void)openPhotoPicker:(UIViewController *)viewController;

@property(nonatomic, retain) id <XLNPhotoPickerDelegate> delegate;
@end
