Localytics for PhoneGap/Cordova Sample App
========

## Development

To install local copy of localytics-cordova

1. Clone [localytics-cordova](https://github.com/localytics/localytics-cordova).

2. Remove current LocalyticsPlugin:

```
cordova plugin rm com.localytics.phonegap.LocalyticsPlugin
```

3. Add plugin from local source:

```
cordova plugin add --link ../localytics-cordova
```

> ../localytics-cordova assumes you cloned localytics-cordova in the same directory as
this repo (cordova-template-app)

4. Run iOS or Android:

```
cordova run ios
```
```
cordova run android
```
> The iOS build will normally fail. Open platforms/ios/LocalyticsSample.xcworkspace to run from Xcode.

## Before Running

First, replace `YOUR-LOCALYTICS-APP-KEY` in the following files:

1. [index.js](www/js/index.js)
2. [localytics.xml](platforms/android/res/values/localytics.xml)

And for Android, replace `YOUR_PUSH_SENDER_ID` in [localytics.xml](platforms/android/res/values/localytics.xml)
For FCM integrations, place your google-services.json file in the `platforms/android/` folder.

## Debugging

To debug Android, open the `platform/android` directory in Android Studio.  
To debug iOS, open `platforms/iOS/LocalyticsSample.xcworkspace` in XCode. 

You can additionally edit files in the `platforms/android/src` and `platforms/android/LocalyticsSample/Plugins/com.localytics.phonegap.LocalyticsPlugin` (shown in XCode under `Plugins`) directory and they will update the wrapper (provided you added the plugin with the `--link` option).  Doing this tends to break the cordova setup though so you may need to remove and re-add the plugins afterwards. 
