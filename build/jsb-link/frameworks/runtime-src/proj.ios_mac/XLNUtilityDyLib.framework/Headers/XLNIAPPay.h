//
//  XLNIAPPay.h
//  XLNUtilityDyLib
//
//  Created by Daddy on 2018/5/21.
//  Copyright © 2018年 XXX. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>
#import <StoreKit/StoreKit.h>

@protocol XLNIAPPayDelegate;

@interface XLNIAPPay : NSObject

+ (instancetype)sharedInstance;

- (void)initIapPayWithAppId:(NSString *)_appId secret:(NSString *)_appSecret products:(NSSet *)identifiers;

- (void)paymentProduct:(SKProduct *)product orderId:(NSString *)orderId fee:(NSString *)fee isSandBox:(bool)_isSandBox;

- (void)consoleGamePaymentProduct:(SKProduct *)product fee:(NSString *)fee isSandBox:(bool)_isSandBox;

- (SKProduct *)getProduct:(NSString *)pid;

- (void)restoreCompletedTransactions:(bool)_isSandBox;

@property(nonatomic, assign) id <XLNIAPPayDelegate> delegate;
@property(nonatomic, copy) NSString *extraData;
@property(nonatomic, copy) NSMutableArray *skProducts;
@property(nonatomic, copy) NSString *appId;
@property(nonatomic, copy) NSString *appSecret;
@property(nonatomic, assign) bool isInit;
@property(nonatomic, assign) bool isSandBox;
@property(nonatomic, copy) NSString *orderUrl;
@property(nonatomic, copy) NSString *verifyUrl;

@end

@protocol XLNIAPPayDelegate <NSObject>
@optional

- (void)initIapPayOver;

- (void)initIapError:(NSError *)error;

- (void)onPayProductsFinish;

- (void)onPayProductsError:(NSError *)error;

- (void)onRestoreOver:(NSString *)productId;

- (void)onRestoreError:(NSString *)productId error:(NSError *)error;
@end
