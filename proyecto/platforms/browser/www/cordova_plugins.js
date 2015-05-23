cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.apache.cordova.device-orientation/www/CompassError.js",
        "id": "org.apache.cordova.device-orientation.CompassError",
        "clobbers": [
            "CompassError"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-orientation/www/CompassHeading.js",
        "id": "org.apache.cordova.device-orientation.CompassHeading",
        "clobbers": [
            "CompassHeading"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-orientation/www/compass.js",
        "id": "org.apache.cordova.device-orientation.compass",
        "clobbers": [
            "navigator.compass"
        ]
    },
    {
        "file": "plugins/org.apache.cordova.device-orientation/src/browser/CompassProxy.js",
        "id": "org.apache.cordova.device-orientation.CompassProxy",
        "runs": true
    },
    {
        "file": "plugins/org.apache.cordova.device-orientation/src/browser/compass.js",
        "id": "org.apache.cordova.device-orientation.compass",
        "merges": [
            "navigator.compass"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "org.apache.cordova.device-orientation": "0.3.11"
}
// BOTTOM OF METADATA
});