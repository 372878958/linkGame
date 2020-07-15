//
//  XLNHTTPAPI.h
//  XLNUtilityDyLib
//
//  Created by Daddy on 2018/3/5.
//  Copyright © 2018年 XXX. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface XLNHTTPAPI : NSObject
+ (XLNHTTPAPI *)shareInstance;

- (void)loginWithUrl:(NSString *_Nonnull)url completionHandler:(void (^ _Nullable)(int errorCode))completionHandler;

- (void)callWithUrl:(NSString *)url message:(NSData *_Nonnull)message completionHandler:(void (^ _Nullable)(NSData *_Nullable data, int errorCode))completionHandler;

@property(nonatomic, copy) NSString *secretToken;
@end
