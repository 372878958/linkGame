//
//  GZSocket.h
//  XLNUtilityDyLib
//
//  Created by Daddy on 2018/5/29.
//  Copyright © 2018年 XXX. All rights reserved.
//

#import <Foundation/Foundation.h>

typedef void (^SocketResponseCallBack)(int receiveProto, NSData *receiveData);
typedef void (^SocketRequestTimeOutCallBack)(void);

@protocol GZSocketDelegate <NSObject>
@optional

//已连接回调
-(void)connectedGZSocketCallBack;
//断开连接回调
-(void)closeGZSocketCallBack;
//收到认证消息回调
-(void)authGZSocketCallBack:(Boolean)result;
//收到心跳回调
-(void)heartGZSocketCallBack:(int64_t)timestamp;
//收到业务消息回调(此回调只能收到服务器主动下发的消息请求，客户端请求回调设置block接收)
-(Boolean)businessGZSocketCallBack:(int)sequence proto:(int)proto response:(NSData*)data;
//收到错误消息回调
-(void)errorGZSocketCallBack:(int)error;
//丢弃消息回调
-(void)dropGZSocketCallBack:(int)sequence proto:(int)proto dropData:(NSData*)data;
//被服务器踢出消息回调
-(void)kickGZSocketCallBack:(int)error;

@end

@interface GZSocket : NSObject

//启动连接
- (void)openSocket:(NSString *)address port:(int)port isSSL:(Boolean)isSSL;
//关闭连接
- (void)closeSocket;
//认证
- (void)authenticate:(int)ip token:(NSString*)token type:(int)type uid:(int)uid;
//发送业务消息(无超时回调)
- (void)sendBusinessMessage:(int)proto context:(NSData*)data receiveMessage:(SocketResponseCallBack)receiveMessage;
//发送业务消息(有超时回调)
- (void)sendBusinessMessage:(int)proto context:(NSData*)data receiveMessage:(SocketResponseCallBack)receiveMessage timeout:(int)time timeoutBack:(SocketRequestTimeOutCallBack)timeoutBack;
//回应业务消息(收到服务器主动下发的消息使用对应的业务消息给服务器回应)
- (void)receiveBusinessMessage:(int)sequence proto:(int)proto context:(NSData*)data;

@property(nonatomic, retain) id<GZSocketDelegate> delegate;

@end
