/****************************************************************************
Copyright (c) 2015-2016 Chukong Technologies Inc.
Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.
 
http://www.cocos2d-x.org

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
****************************************************************************/
package org.cocos2dx.javascript;

import org.cocos2dx.lib.Cocos2dxActivity;
import org.cocos2dx.lib.Cocos2dxGLSurfaceView;
import org.cocos2dx.lib.Cocos2dxJavascriptJavaBridge;

import android.content.Context;
import android.os.Bundle;

import android.content.Intent;
import android.content.res.Configuration;
import android.os.Handler;
import android.provider.Settings;

import com.applovin.mediation.MaxAd;
import com.applovin.mediation.MaxAdListener;
import com.applovin.mediation.MaxReward;
import com.applovin.mediation.MaxRewardedAdListener;
import com.applovin.mediation.ads.MaxInterstitialAd;
import com.applovin.mediation.ads.MaxRewardedAd;
import com.applovin.sdk.AppLovinSdk;
import com.applovin.sdk.AppLovinSdkConfiguration;

import java.util.concurrent.TimeUnit;

public class AppActivity extends Cocos2dxActivity
        implements MaxAdListener, MaxRewardedAdListener
{

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        app = this;
        imei = getIMEI(this);
        // Workaround in
        // https://stackoverflow.com/questions/16283079/re-launch-of-activity-on-home-button-but-only-the-first-time/16447508
        if (!isTaskRoot()) {
            // Android launched another instance of the root activity into an existing task
            // so just quietly finish and go away, dropping the user back into the activity
            // at the top of the stack (ie: the last state of this task)
            // Don't need to finish it again since it's finished in super.onCreate .
            return;
        }
        // DO OTHER INITIALIZATION BELOW
        SDKWrapper.getInstance().init(this);

        AppLovinSdk.getInstance( this ).setMediationProvider( "max" );
        AppLovinSdk.initializeSdk( this, new AppLovinSdk.SdkInitializationListener() {
            @Override
            public void onSdkInitialized(final AppLovinSdkConfiguration configuration)
            {
                // AppLovin SDK is initialized, start loading ads
                app.createInterstitialAd();
                app.createRewardedAd();
            }
        } );
    }

    public static String imei="";

    /**
     * 映射返回获取imei
     * @param context
     * @return
     */
    public static final String getIMEI2(final String title, final String message) {
        return  imei;
    }

    /**
     *
     * @param context
     * @return
     */
    public static String getIMEI(Context context) {
        //获取设备的id
        return  Settings.Secure.getString(context.getApplicationContext().getContentResolver(), Settings.Secure.ANDROID_ID);

        //获取IMEI,需要开启权限
//         TelephonyManager manager = (TelephonyManager) context.getSystemService(Context.TELEPHONY_SERVICE);
////        TelephonyManager manager = (TelephonyManager)getSystemService(Context.TELEPHONY_SERVICE);
//        try {
//            Method method = manager.getClass().getMethod("getImei", int.class);
//            String imei1 = (String) method.invoke(manager, 0);
//            String imei2 = (String) method.invoke(manager, 1);
//            if(TextUtils.isEmpty(imei2)){
//                return imei1;
//            }
//            if(!TextUtils.isEmpty(imei1)){
//                //因为手机卡插在不同位置，获取到的imei1和imei2值会交换，所以取它们的最小值,保证拿到的imei都是同一个
//                String imei = "";
//                if(imei1.compareTo(imei2) <= 0){
//                    imei = imei1;
//                }else{
//                    imei = imei2;
//                }
//                return imei;
//            }
//        } catch (Exception e) {
////            e.printStackTrace();
//            try {
//                if (manager.getDeviceId() != null) {
//                    return manager.getDeviceId().toString();
//                } else {
//                    return Settings.Secure.getString(context.getApplicationContext().getContentResolver(), Settings.Secure.ANDROID_ID);
//                }
//            } catch (Exception e2) {
//                return Settings.Secure.getString(context.getApplicationContext().getContentResolver(), Settings.Secure.ANDROID_ID);
//            }
//        }
//        return "";
    }

    @Override
    public Cocos2dxGLSurfaceView onCreateView() {
        Cocos2dxGLSurfaceView glSurfaceView = new Cocos2dxGLSurfaceView(this);
        // TestCpp should create stencil buffer
        glSurfaceView.setEGLConfigChooser(5, 6, 5, 0, 16, 8);
        SDKWrapper.getInstance().setGLSurfaceView(glSurfaceView, this);

        return glSurfaceView;
    }

    @Override
    protected void onResume() {
        super.onResume();
        SDKWrapper.getInstance().onResume();

    }

    @Override
    protected void onPause() {
        super.onPause();
        SDKWrapper.getInstance().onPause();

    }

    @Override
    protected void onDestroy() {
        super.onDestroy();

        // Workaround in https://stackoverflow.com/questions/16283079/re-launch-of-activity-on-home-button-but-only-the-first-time/16447508
        if (!isTaskRoot()) {
            return;
        }

        SDKWrapper.getInstance().onDestroy();

    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        SDKWrapper.getInstance().onActivityResult(requestCode, resultCode, data);
    }

    @Override
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        SDKWrapper.getInstance().onNewIntent(intent);
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        SDKWrapper.getInstance().onRestart();
    }

    @Override
    protected void onStop() {
        super.onStop();
        SDKWrapper.getInstance().onStop();
    }

    @Override
    public void onBackPressed() {
        SDKWrapper.getInstance().onBackPressed();
        super.onBackPressed();
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        SDKWrapper.getInstance().onConfigurationChanged(newConfig);
        super.onConfigurationChanged(newConfig);
    }

    @Override
    protected void onRestoreInstanceState(Bundle savedInstanceState) {
        SDKWrapper.getInstance().onRestoreInstanceState(savedInstanceState);
        super.onRestoreInstanceState(savedInstanceState);
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        SDKWrapper.getInstance().onSaveInstanceState(outState);
        super.onSaveInstanceState(outState);
    }

    @Override
    protected void onStart() {
        SDKWrapper.getInstance().onStart();
        super.onStart();
    }
    /////////////////////////////////////////////////////////////////////////////////////////////
    private MaxInterstitialAd interstitialAd;
    private int retryAttempt;

    void createInterstitialAd()
    {
        interstitialAd = new MaxInterstitialAd( "77598e56e4c0d9b9", this );
        interstitialAd.setListener( this );

        // Load the first ad
        interstitialAd.loadAd();
    }

    // MAX Ad Listener
    @Override
    public void onAdLoaded(final MaxAd maxAd)
    {
        // Interstitial ad is ready to be shown. interstitialAd.isReady() will now return 'true'

        // Reset retry attempt
        retryAttempt = 0;
    }

    @Override
    public void onAdLoadFailed(final String adUnitId, final int errorCode)
    {
        // Interstitial ad failed to load. We recommend retrying with exponentially higher delays.

        retryAttempt++;
        long delayMillis = TimeUnit.SECONDS.toMillis( (long) Math.pow( 2, retryAttempt ) );

        new Handler().postDelayed(new Runnable()
        {
            @Override
            public void run()
            {
                interstitialAd.loadAd();
            }
        }, delayMillis );
    }

    @Override
    public void onAdDisplayFailed(final MaxAd maxAd, final int errorCode)
    {
        // Interstitial ad failed to display. We recommend loading the next ad
        interstitialAd.loadAd();
    }

    @Override
    public void onAdDisplayed(final MaxAd maxAd) {}

    @Override
    public void onAdClicked(final MaxAd maxAd) {}

    @Override
    public void onAdHidden(final MaxAd maxAd)
    {
        // Interstitial ad is hidden. Pre-load the next ad
        interstitialAd.loadAd();

        // 一定要在 GL 线程中执行
        app.runOnGLThread(new Runnable() {
            @Override
            public void run() {
                Cocos2dxJavascriptJavaBridge.evalString("window.didHideAd(\"onAdHidden\")");
            }
        });
    }
    /////////////////////////////////////////////////////////////////////////////////////////////
    private MaxRewardedAd rewardedAd;

    void createRewardedAd()
    {
        rewardedAd = MaxRewardedAd.getInstance( "1f6a82a8c75497dd", this );
        rewardedAd.setListener( this );

        rewardedAd.loadAd();
    }


    @Override
    public void onRewardedVideoStarted(final MaxAd maxAd) {}

    @Override
    public void onRewardedVideoCompleted(final MaxAd maxAd) {}

    @Override
    public void onUserRewarded(final MaxAd maxAd, final MaxReward maxReward)
    {
        // Rewarded ad was displayed and user should receive the reward
    }

    //////////////////////////////////////调用原生静态方法///////////////////////////////////////////////////////
    private static AppActivity app = null;

    // 显示广告
    public static void showAd(final String title,final String message) {
        // 这里一定要使用 runOnUiThread
        app.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if ( app.rewardedAd.isReady() )
                {
                    app.rewardedAd.showAd();
                }
            }
        });
    }
}
