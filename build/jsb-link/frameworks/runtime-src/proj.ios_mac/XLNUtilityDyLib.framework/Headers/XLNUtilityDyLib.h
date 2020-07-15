//
//  XLNUtilityDyLib.h
//  XLNUtilityDyLib
//
//  Created by Daddy on 2017/11/4.
//  Copyright © 2017年 XXX. All rights reserved.
//

#import <UIKit/UIKit.h>

//! Project version number for XLNUtilityDyLib.
FOUNDATION_EXPORT double XLNUtilityDyLibVersionNumber;

//! Project version string for XLNUtilityDyLib.
FOUNDATION_EXPORT const unsigned char XLNUtilityDyLibVersionString[];

// In this header, you should import all the public headers of your framework using statements like #import <XLNUtilityDyLib/PublicHeader.h>


// 不使用默往
#define XLN_SDK_WITHOUT_MOSTONE(...)                            \
@interface MOJumpToMostOne : NSObject                           \
@end                                                            \
@implementation MOJumpToMostOne : NSObject                      \
@end                                                            \

// 不使用原生tcp socket库
#define XLN_SDK_WITHOUT_TCP_SOCKET(...)                         \
@interface GCDAsyncSocket : NSObject                            \
@end                                                            \
@implementation GCDAsyncSocket : NSObject                       \
@end                                                            \

// 不使用原生Protobuf库
#define XLN_SDK_WITHOUT_PROTOBUF(...)                           \
@interface GPBDescriptor : NSObject<NSCopying>                  \
@end                                                            \
@implementation GPBDescriptor : NSObject                        \
@end                                                            \
@interface GPBFileDescriptor : NSObject                         \
@end                                                            \
@implementation GPBFileDescriptor : NSObject                    \
@end                                                            \
@interface GPBEnumDescriptor : NSObject                         \
@end                                                            \
@implementation GPBEnumDescriptor : NSObject                    \
@end                                                            \
@interface GPBMessage : NSObject                                \
@end                                                            \
@implementation GPBMessage : NSObject                           \
@end                                                            \
@interface GPBRootObject : NSObject                             \
@end                                                            \
@implementation GPBRootObject : NSObject                        \
@end                                                            \
void GPBCheckRuntimeVersionSupport(int32_t objcRuntimeVersion){} \


// 不使用原生websocket库
#define XLN_SDK_WITHOUT_WEBSOCKET(...)                          \
@interface SRWebSocket : NSObject                               \
@end                                                            \
@implementation SRWebSocket : NSObject                          \
@end                                                            \


// 不使用图片库
#define XLN_SDK_WITHOUT_PHOTO(...)                          \
\
@interface TZImagePickerController : UINavigationController \
@end                                                        \
\
@implementation TZImagePickerController                     \
@end                                                        \
\
@interface TZCameraUtil : NSObject                          \
@end                                                        \
\
@implementation TZCameraUtil                                \
@end                                                        \

// 不使用facebook sdk
#define XLN_SDK_WITHOUT_FACEBOOK(...)               \
\
@interface FBSDKAccessToken : NSObject              \
@end                                                \
\
@implementation FBSDKAccessToken                    \
@end                                                \
\
@interface FBSDKAppEvents : NSObject                \
@end                                                \
\
@implementation FBSDKAppEvents                      \
@end                                                \
\
@interface FBSDKLoginManager : NSObject             \
@end                                                \
\
@implementation FBSDKLoginManager                   \
@end                                                \
\
@interface FBSDKShareDialog : NSObject              \
@end                                                \
\
@implementation FBSDKShareDialog                    \
@end                                                \
\
@interface FBSDKShareLinkContent : NSObject         \
@end                                                \
\
@implementation FBSDKShareLinkContent               \
@end                                                \
\
@interface FBSDKSharePhoto : NSObject               \
@end                                                \
\
@implementation FBSDKSharePhoto                     \
@end                                                \
\
@interface FBSDKSharePhotoContent : NSObject        \
@end                                                \
\
@implementation FBSDKSharePhotoContent              \
@end                                                \
\
@interface FBSDKApplicationDelegate : NSObject      \
@end                                                \
\
@implementation FBSDKApplicationDelegate            \
@end                                                \
@interface BFURL : NSObject      \
@end                                                \
\
@implementation BFURL            \
@end                                                \

// 不使用微信SDK
#define XLN_SDK_WITHOUT_WECHAT(...)         \
\
@interface SendAuthReq : NSObject           \
@end                                        \
\
@implementation SendAuthReq                 \
@end                                        \
\
@interface SendAuthResp : NSObject          \
@end                                        \
\
@implementation SendAuthResp                \
@end                                        \
\
@interface SendMessageToWXReq : NSObject    \
@end                                        \
\
@implementation SendMessageToWXReq          \
@end                                        \
\
@interface WXApi : NSObject                 \
@end                                        \
\
@implementation WXApi                       \
@end                                        \
\
@interface WXMediaMessage : NSObject        \
@end                                        \
\
@implementation WXMediaMessage              \
@end                                        \
\
@interface WXImageObject : NSObject         \
@end                                        \
\
@implementation WXImageObject               \
@end                                        \
\
@interface WXWebpageObject : NSObject       \
@end                                        \
\
@implementation WXWebpageObject             \
@end


// 不使用Line SDK
#define XLN_SDK_WITHOUT_LINE(...)           \
\
@interface LineSDKLogin : NSObject          \
@end                                        \
\
@implementation LineSDKLogin                \
@end                                        \
\

// 不使用吹牛SDK
#define XLN_SDK_WITHOUT_CNCHAT(...)         \
\
@interface CNImageObject : NSObject         \
@end                                        \
\
@implementation CNImageObject               \
@end                                        \
\
@interface CNShareInviteObject : NSObject   \
@end                                        \
\
@implementation CNShareInviteObject         \
@end                                        \
\
@interface CNShareManager : NSObject        \
@end                                        \
\
@implementation CNShareManager              \
@end                                        \
\
@interface CNShareMessageObject : NSObject  \
@end                                        \
\
@implementation CNShareMessageObject        \
@end                                        \
\
@interface _CNShareWebpageObject : NSObject \
@end                                        \
\
@implementation _CNShareWebpageObject       \
@end                                        \
\
@interface CNShareWebpageObject : NSObject  \
@end                                        \
\
@implementation CNShareWebpageObject        \
@end                                        \
\
@interface CNManager : NSObject             \
@end                                        \
\
@implementation CNManager                   \
@end                                        \
\
@interface CNchatAuthSDK : NSObject         \
@end                                        \
\
@implementation CNchatAuthSDK               \
@end                                        \
\

// 不使用与你SDK

#define XLN_SDK_WITHOUT_YUNI(...)           \
@interface YuniSDK : NSObject               \
@end                                        \
\
@implementation YuniSDK                     \
@end                                        \
\
@interface YuniShareInfo : NSObject               \
@end                                        \
\
@implementation YuniShareInfo                     \
@end                                        \
\

// 不使用多聊SDK

#define XLN_SDK_WITHOUT_DUOLIAO(...)           \
@interface DLService : NSObject           \
@end                                        \
\
@implementation DLService                     \
@end                                        \
\

