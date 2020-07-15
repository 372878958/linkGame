//
//  GZThirdPartyCheck.h
//  XLNUtilityLibIOS
//
//  Created by Daddy on 2019/12/23.
//  Copyright © 2019 XXX. All rights reserved.
//

#ifndef GZThirdPartyCheck_h
#define GZThirdPartyCheck_h

#import "XLNUtilityDyLib.h"

// 自动检查三方SDK导入情况

#define GZ_SDK_THIRD_PARTY_CHECK(...)
#if !defined(__has_include)
#error "XLNUtilityDyLib.h won't import anything if your compiler doesn't support __has_include. Please import the headers individually."
#else
#if !__has_include(<FBSDKCoreKit/FBSDKCoreKit.h>)
XLN_SDK_WITHOUT_FACEBOOK()
#endif
#if !__has_include("CNManager.h")
XLN_SDK_WITHOUT_CNCHAT()
#endif
#if !__has_include("DLService0.h")
XLN_SDK_WITHOUT_DUOLIAO()
#endif
#if !__has_include(<CocoaAsyncSocket/CocoaAsyncSocket.h>)
XLN_SDK_WITHOUT_TCP_SOCKET()
#endif
#if !__has_include(<Protobuf/GPBDescriptor.h>)
XLN_SDK_WITHOUT_PROTOBUF()
#endif
#if !__has_include(<LineSDK/LineSDK.h>)
XLN_SDK_WITHOUT_LINE()
#endif
#if !__has_include(<MostOneSDK/MOJumpToMostOne.h>)
XLN_SDK_WITHOUT_MOSTONE()
#endif
#if !__has_include(<SocketRocket/SRWebSocket.h>)
XLN_SDK_WITHOUT_WEBSOCKET()
#endif
#if !__has_include("WXApi.h")
XLN_SDK_WITHOUT_WECHAT()
#endif
#if !__has_include(<TZImagePickerController/TZCameraUtil.h>)
XLN_SDK_WITHOUT_PHOTO()
#endif
#if !__has_include(<YuniSDKiOS/YuniSDK.h>)
XLN_SDK_WITHOUT_YUNI()
#endif
#endif


#endif /* GZThirdPartyCheck_h */
