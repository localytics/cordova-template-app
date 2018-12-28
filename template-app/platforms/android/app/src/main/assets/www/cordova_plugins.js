cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "com.localytics.phonegap.LocalyticsPlugin.Localytics",
    "file": "plugins/com.localytics.phonegap.LocalyticsPlugin/www/localytics.js",
    "pluginId": "com.localytics.phonegap.LocalyticsPlugin",
    "clobbers": [
      "Localytics"
    ]
  },
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "com.localytics.phonegap.LocalyticsPlugin": "5.4.0",
  "cordova-plugin-device": "2.0.3-dev",
  "cordova-plugin-whitelist": "1.3.3"
};
// BOTTOM OF METADATA
});