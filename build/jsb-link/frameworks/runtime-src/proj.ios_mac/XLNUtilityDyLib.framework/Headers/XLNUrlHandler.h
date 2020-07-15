//
//  XLNUrlHandler.h
//  UniversalLinkTest
//
//  Created by Daddy on 2017/12/1.
//  Copyright © 2017年 LiuMing. All rights reserved.
//

#import <Foundation/Foundation.h>

@protocol XLNUrlHandlerDelegate <NSObject>
@required
- (void)handleURL:(NSString *)url path:(NSString *)path params:(NSString *)params;
@end

@interface XLNUrlHandler : NSObject

+ (XLNUrlHandler *)sharedInstance;

@property(nonatomic, retain) id <XLNUrlHandlerDelegate> delegate;

@property(nonatomic, copy) NSString *domain;
@property(nonatomic, copy) NSString *scheme;
@property(nonatomic, copy) NSString *lastUrl;
@property(nonatomic, copy) NSString *lastPath;
@property(nonatomic, copy) NSString *lastParams;


- (void)registerApp:(NSString *)domainName scheme:(NSString *)schemeName;

- (void)handleUserActivity:(NSUserActivity *)activity;

- (void)handleURLScheme:(NSURL *)url;

- (void)handleFacebookAppLinks:(NSURL *)url;
@end
