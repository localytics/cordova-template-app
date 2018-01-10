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
cordova plugin add ../localytics-cordova
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
2. [AndroidManifest.xml](platforms/android/AndroidManifest.xml)

And for Android, replace `YOUR_PUSH_SENDER_ID` in [AndroidManifest.xml](platforms/android/AndroidManifest.xml)
