cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "com.localytics.phonegap.LocalyticsPlugin.Localytics",
    "file": "plugins/com.localytics.phonegap.LocalyticsPlugin/www/localytics.js",
    "pluginId": "com.localytics.phonegap.LocalyticsPlugin",
    "clobbers": [
      "Localytics"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "com.localytics.phonegap.LocalyticsPlugin": "5.4.0"
};
// BOTTOM OF METADATA
});