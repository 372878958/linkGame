//
//  XLNMediaFileUtil.h
//  XLNUtilityDyLib
//
//  Created by Daddy on 2018/4/11.
//  Copyright © 2018年 XXX. All rights reserved.
//

#import <Foundation/Foundation.h>

@interface XLNMediaFileUtil : NSObject

+ (instancetype)sharedInstance;

- (void)initWithAppId:(NSString *)_appId url:(NSString *)_url;

- (void)uploadMediaFile:(NSString *)filePath
                 suffix:(NSString *)suffix
              succeedCB:(void (^ _Nullable)(NSString *mediaId, NSString *downloadUrl))succeedCB
                 failCB:(void (^ _Nullable)(int errorCode))failCB;

- (void)uploadMediaFileData:(NSData *)fileData
                 suffix:(NSString *)suffix
              succeedCB:(void (^ _Nullable)(NSString *mediaId, NSString *downloadUrl))succeedCB
                 failCB:(void (^ _Nullable)(int errorCode))failCB;

- (void)downloadMediaFile:(NSString *)mediaId
                   suffix:(NSString *)suffix
                succeedCB:(void (^ _Nullable)(NSString *downloadUrl))succeedCB
                   failCB:(void (^ _Nullable)(int errorCode))failCB;

- (void)deleteMediaFile:(NSString *)mediaId
                 suffix:(NSString *)suffix
              succeedCB:(void (^ _Nullable)(void))succeedCB
                 failCB:(void (^ _Nullable)(int errorCode))failCB;

@property(nonatomic, copy) NSString *appId;
@property(nonatomic, copy) NSString *url;
@end
