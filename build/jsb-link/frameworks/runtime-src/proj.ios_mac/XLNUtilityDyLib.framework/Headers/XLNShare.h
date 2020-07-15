//
//  XLNShare.h
//  XLNUtilityDyLib
//
//  Created by Daddy on 2018/3/5.
//  Copyright © 2018年 XXX. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

typedef enum {
    XLNShareWechatType_Session = 1,
    XLNShareWechatType_Timeline = 2
} XLNShareWechatType;

@protocol XLNShareDelegate <NSObject>
@required
- (void)shareSuccess;  // 分享成功
- (void)shareFail:(NSError *)error;  // 分享失败
@optional
- (void)shareInviteBackWith:(NSString *)backInfo; // 接到邀请信息(目前只有吹牛有)
@end

@interface XLNShare : NSObject
+ (XLNShare *)shareInstance;

@property(nonatomic, retain) id <XLNShareDelegate> delegate;

/*
 * 分享网址
 *
 * @param title 标题
 * @param description 描述
 * @param imageName 图片完整路径
 * @param url 链接地址
 * @param type 分享类型 会话还是朋友圈
 */
- (void)shareToWeChatWithTitle:(NSString *)title description:(NSString *)description image:(NSString *)imageName url:(NSString *)url type:(XLNShareWechatType)type;

/*
 * 分享图片
 *
 * @param image 图片完整路径
 * @param type 分享类型 会话还是朋友圈
 */
- (void)shareToWeChatWithImage:(NSString *)image type:(XLNShareWechatType)type;

/*
 * 分享文本
 *
 * @param text 文本
 * @param type 分享类型 会话还是朋友圈
 */
- (void)shareToWeChatWithText:(NSString *)text type:(XLNShareWechatType)type;

/*
 * facebook分享网址，文本
 *
 * @param url 网址
 * @param text 文本
 */
- (void)shareToFacebookWithUrl:(NSString *)url :(NSString *)text;

/*
 * facebook分享图文
 *
 * @param imgPath 图片路径
 * @param text 文本
 */
- (void)shareToFacebookWithPhoto:(NSString *)imgPath :(NSString *)text;

/*
 * WhatsApp分享文本
 *
 * @param text 文本
 */
- (void)shareToWhatsAppWithText:(NSString *)text;

@property(retain) UIDocumentInteractionController *documentInteractionController;

/*
 * WhatsApp分享图文
 *
 * @param imgPath 图片路径
 * @param text 文本
 */
- (void)shareToWhatsAppWithPhoto:(NSString *)imgPath;

/*
 * 系统分享
 *
 * @param tittle 标题
 * @param text 内容文本
 * @param imagePath 图片路径(不需要填空)
 * @param url 分享链接(不需要填空)
 * @param types 不想包括的分享方式(没特殊要求可以不填)
 */
- (void)showSystemShareBoard:(NSString *)tittle text:(NSString *)text imagePath:(NSString *)imagePath url:(NSString *)url excludedTypes:(NSArray<UIActivityType> *)types;

/*
 * Line文本分享
 * @param text 文本
 */
- (void)shareToLineWithText:(NSString *)text;

/*
 * Line图片分享
 * @param imagePath 图片完整路径
 */
- (void)shareToLineWithImage:(NSString *)imagePath;

/*
 * 吹牛图片分享
 */
- (void)shareImageToCNChatWithImagePath:(NSString *)imagePath;

/*
 * 吹牛webPage分享
 */
- (void)shareWebpageToCNChatWithTittle:(NSString *)tittle description:(NSString *)description thumImage:(NSString *)thumImage urlIntent:(NSString *)urlIntent;

/*
 * 吹牛邀请分享
 */
- (void)shareInviteToCNChatWithTittle:(NSString *)tittle description:(NSString *)description reciveInviteBackInfo:(NSString *)reciveInviteBackInfo thumImage:(NSString *)thumImage urlIntent:(NSString *)urlIntent;

/*
 * 默往分享
 */
- (void)shareToMostOne:(NSString *)title content:(NSString *)content image:(NSString *)image androidParam:(NSString *)androidParam iOSParam:(NSString *)iOSParam gamePath:(NSString *)gamePath shareType:(NSString *)shareType gameType:(int)gameType;

/*
 * 与你分享图片
 */
- (void)shareToYuniWithImagePath:(NSString *)imagePath;

/*
 * 与你分享链接
 */
- (void)shareToYuniWithTitle:(NSString *)title description:(NSString *)description url:(NSString *)url;

/*
 * 多聊分享图片
 */
- (void)shareImageToDuoLiaoWithImage:(NSString *)imagePath;

/*
 * 多聊分享链接
 */
- (void)shareLinkToDuoLiaoWithUrl:(NSString *)url;

/*
 * 多聊分享房间
 */
- (void)sendRoomInviteMessageWithTitle:(NSString *)title content:(NSString *)content webUrl:(NSString *)webUrl appUrl:(NSString *)appUrl;
@end
