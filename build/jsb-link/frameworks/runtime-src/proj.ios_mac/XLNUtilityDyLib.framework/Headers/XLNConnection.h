//
//  XLNConnection.h
//  XLNUtilityDyLib
//
//  Created by Work on 2017/11/21.
//  Copyright © 2017年 XXX. All rights reserved.
//

#import <Foundation/Foundation.h>

@protocol XLNConnectionDelegate <NSObject>
@optional
- (void)onConnectionOver:(NSDictionary *)dict;

- (void)onConnectionOverError:(int)errorCode;
@end

@interface XLNConnection : NSObject <NSURLSessionDelegate>
@property(nonatomic, retain) id <XLNConnectionDelegate> delegate;
@property(nonatomic, assign) BOOL isResponseNeedDecrypt; // 网络请求返回值是否压缩
- (void)connectionWithUrl:(NSString *)url postData:(NSData *)data;

- (void)connectionWithUrl:(NSString *)url postData:(NSData *)data key:(NSString *)_key;

- (void)connectionWithUrl:(NSString *)url postData:(NSData *)data key:(NSString *)_key completionHandler:(void (^ _Nullable)(NSDictionary *_Nullable dict, int errorCode))completionHandler;

- (void)connectionDataWithUrl:(NSString *)url postData:(NSData *)data key:(NSString *)_key completionHandler:(void (^ _Nullable)(NSData *_Nullable data, int errorCode))completionHandler;

+ (int)getErrorCodeWithError:(NSError *)error response:(NSURLResponse *)response;


@end
