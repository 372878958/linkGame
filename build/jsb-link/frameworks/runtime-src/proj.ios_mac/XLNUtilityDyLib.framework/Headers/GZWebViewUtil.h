//
//  GZWebViewUtil.h
//  XLNUtilityDyLib
//
//  Created by Daddy on 2018/10/25.
//  Copyright © 2018 XXX. All rights reserved.
//

#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@protocol GZWebViewDelegate <NSObject>
@required
- (void)webViewClosed;

- (void)webViewStartLoadRequest:(NSString *)url;
@end

@interface GZWebViewUtil : NSObject

+ (instancetype)sharedInstance;

- (void)openWebViewWithUrl:(NSString *)url viewController:(UIViewController *)controller;

- (void)closeWebView;

- (void)setBackViewColor:(UIColor*)color;

@property(nonatomic, retain) id <GZWebViewDelegate> delegate;
@property(nonatomic, assign) bool isShowToolBar;
@property(nonatomic, assign) bool isShowCloseButton;
@property(nonatomic, assign) bool isShowGoBackButton;
@property(nonatomic, assign) bool isShowGoForwardButton;
@property(nonatomic, assign) bool isFullScreen;
@property(nonatomic, copy) UIColor* backViewColor;

@end

NS_ASSUME_NONNULL_END
