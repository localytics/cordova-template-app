/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {

    enableLogging: true,

    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        Localytics.setLoggingEnabled(true);

        document.getElementById("btnIntegrate").addEventListener("click", app.onIntegrate);
        document.getElementById("btnAutoIntegrate").addEventListener("click", app.onAutoIntegrate);

        app.outputDebug(' onDeviceReady ');
    },

    onIntegrate: function () {
        document.addEventListener("resume", app.onResume, false);
        document.addEventListener("pause", app.onPause, false);
        var options = { "ll_wifi_upload_interval_seconds": 5,
            "ll_great_network_upload_interval_seconds": 10,
            "ll_decent_network_upload_interval_seconds": 30,
            "ll_bad_network_upload_interval_seconds": 90 }
        Localytics.integrate("YOUR-LOCALYTICS-APP-KEY", options);
        Localytics.openSession();
        Localytics.upload();

        app.onIntegrationComplete();
    },

    onAutoIntegrate: function () {
        var options = { "ll_wifi_upload_interval_seconds": 5,
            "ll_great_network_upload_interval_seconds": 10,
            "ll_decent_network_upload_interval_seconds": 30,
            "ll_bad_network_upload_interval_seconds": 90 }
        Localytics.autoIntegrate("YOUR-LOCALYTICS-APP-KEY", options);
        Localytics.openSession();

        app.onIntegrationComplete();
    },

onIntegrationComplete: function() {
    document.getElementById("integrationContainer").style["display"] = "none"
    document.getElementById("controlContainer").style["display"] = ""
    app.setupListeners();
},
    
setupListeners: function() {
    // Integration
    document.getElementById("btnOpenSession").addEventListener("click", app.onOpenSession);
    document.getElementById("btnCloseSession").addEventListener("click", app.onCloseSession);
    document.getElementById("btnUpload").addEventListener("click", app.onUpload);
    
    // Analytics
    document.getElementById("btnSetOptedOut").addEventListener("click", app.onOptedOutAction);
    document.getElementById("btnGetOptedOut").addEventListener("click", app.onOptedOutAction);
    document.getElementById("btnTagEvent").addEventListener("click", app.onTagEvent);
    document.getElementById("btnTagPurchased").addEventListener("click", app.onTagPurchased);
    document.getElementById("btnTagAddedToCart").addEventListener("click", app.onTagAddedToCart);
    document.getElementById("btnTagStartedCheckout").addEventListener("click", app.onTagStartedCheckout);
    document.getElementById("btnTagCompletedCheckout").addEventListener("click", app.onTagCompletedCheckout);
    document.getElementById("btnTagContentViewed").addEventListener("click", app.onTagContentViewed);
    document.getElementById("btnTagSearched").addEventListener("click", app.onTagSearched);
    document.getElementById("btnTagShared").addEventListener("click", app.onTagShared);
    document.getElementById("btnTagContentRated").addEventListener("click", app.onTagContentRated);
    document.getElementById("btnTagCustomerRegistered").addEventListener("click", app.onTagCustomerRegistered);
    document.getElementById("btnTagCustomerLoggedIn").addEventListener("click", app.onTagCustomerLoggedIn);
    document.getElementById("btnTagCustomerLoggedOut").addEventListener("click", app.onTagCustomerLoggedOut);
    document.getElementById("btnTagInvited").addEventListener("click", app.onTagInvited);
    document.getElementById("btnTagScreen").addEventListener("click", app.onTagScreen);
    document.getElementById("btnSetCustomDimension").addEventListener("click", app.onSetCustomDimension);
    document.getElementById("btnGetCustomDimension").addEventListener("click", app.onGetCustomDimension);
    
    // Profiles
    document.getElementById("btnSetProfile").addEventListener("click", app.onProfileAction);
    document.getElementById("btnDeleteProfile").addEventListener("click", app.onProfileAction);
    document.getElementById("btnAddToSetProfile").addEventListener("click", app.onProfileAction);
    document.getElementById("btnRemoveFromSetProfile").addEventListener("click", app.onProfileAction);
    document.getElementById("btnIncrementProfile").addEventListener("click", app.onProfileAction);
    document.getElementById("btnDecrementProfile").addEventListener("click", app.onProfileAction);
    
    // User Info
    document.getElementById("btnSetIdentifier").addEventListener("click", app.onUserInfoAction);
    document.getElementById("btnSetCustomerId").addEventListener("click", app.onUserInfoAction);
    document.getElementById("btnSetCustomerFullName").addEventListener("click", app.onUserInfoAction);
    document.getElementById("btnSetCustomerFirstName").addEventListener("click", app.onUserInfoAction);
    document.getElementById("btnSetCustomerLastName").addEventListener("click", app.onUserInfoAction);
    document.getElementById("btnSetCustomerEmail").addEventListener("click", app.onUserInfoAction);
    document.getElementById("btnSetLocation").addEventListener("click", app.onUserInfoAction);
    document.getElementById("btnGetIdentifier").addEventListener("click", app.onUserInfoAction);
    document.getElementById("btnGetCustomerId").addEventListener("click", app.onUserInfoAction);
    
    // Marketing
    document.getElementById("btnRegisterPush").addEventListener("click", app.onRegisterPush);
    document.getElementById("btnSetPushDisabled").addEventListener("click", app.onPushDisabledAction);
    document.getElementById("btnGetPushDisabled").addEventListener("click", app.onPushDisabledAction);
    document.getElementById("btnSetPushToken").addEventListener("click", app.onPushTokenAction);
    document.getElementById("btnGetPushToken").addEventListener("click", app.onPushTokenAction);
    document.getElementById("btnSetTestModeEnabled").addEventListener("click", app.onTestModeEnabledAction);
    document.getElementById("btnGetTestModeEnabled").addEventListener("click", app.onTestModeEnabledAction);
    document.getElementById("btnSetDismissButtonImageName").addEventListener("click", app.onMarketingAction);
    document.getElementById("btnSetDismissButtonLocation").addEventListener("click", app.onMarketingAction);
    document.getElementById("btnGetDismissButtonLocation").addEventListener("click", app.onMarketingAction);
    document.getElementById("btnSetDismissButtonHidden").addEventListener("click", app.onMarketingAction);
    document.getElementById("btnTriggerInApp").addEventListener("click", app.onMarketingAction);
    document.getElementById("btnGetInboxCampaigns").addEventListener("click", app.onMarketingAction);
    document.getElementById("btnGetAllInboxCampaigns").addEventListener("click", app.onMarketingAction);
    document.getElementById("btnRefreshInboxCampaigns").addEventListener("click", app.onMarketingAction);
    document.getElementById("btnRefreshAllInboxCampaigns").addEventListener("click", app.onMarketingAction);
    document.getElementById("btnGetInboxCampaignsUnreadCount").addEventListener("click", app.onMarketingAction);
    document.getElementById("btnSetInboxCampaignRead").addEventListener("click", app.onMarketingAction);
    document.getElementById("btnInboxListItemTapped").addEventListener("click", app.onMarketingAction);
    
    // Location
    document.getElementById("btnSetLocationMonitoringEnabled").addEventListener("click", app.onLocationMonitoringEnabledAction);
    document.getElementById("btnGetGeofencesToMonitor").addEventListener("click", app.onGetGeofencesAction);
    document.getElementById("btnTriggerRegion").addEventListener("click", app.onTriggerRegionAction);
    
    // Callbacks / Listeners
    document.getElementById("btnSetAnalyticsListener").addEventListener("click", app.onListenersAction);
    document.getElementById("btnSetMessagingListener").addEventListener("click", app.onListenersAction);
    document.getElementById("btnSetLocationListener").addEventListener("click", app.onListenersAction);
    
    // Developer
    document.getElementById("btnSetLoggingEnabled").addEventListener("click", app.onLoggingEnabledAction);
    document.getElementById("btnGetLoggingEnabled").addEventListener("click", app.onLoggingEnabledAction);
    document.getElementById("btnGetInstallId").addEventListener("click", app.onGetInstallId);
    document.getElementById("btnGetAppKey").addEventListener("click", app.onGetAppKey);
    document.getElementById("btnGetLibraryVersion").addEventListener("click", app.onGetLibraryVersion);
    
    //GDPR
    document.getElementById("btnPauseUploading").addEventListener("click", app.onGDPRAction);
    document.getElementById("btnPrivacyOptOut").addEventListener("click", app.onGDPRAction);
    document.getElementById("btnSetCustomerIdPrivacy").addEventListener("click", app.onGDPRAction);
},
    
onResume: function () {
    Localytics.openSession();
    Localytics.upload();
    app.outputDebug(' onResume ');
},
onPause: function () {
    Localytics.closeSession();
    Localytics.upload();
    app.outputDebug(' onPause ');
},
    
onTagEvent: function (ev) {
    var list = document.getElementById("listEvents");
    var selectedItem = list.options[list.selectedIndex].text;
    Localytics.tagEvent(selectedItem, { "Click Origin" : "Cordova" }, 0);
    app.outputDebug(' tagEvent: ' +selectedItem+ ' ');
},
    
onTagPurchased: function() {
    Localytics.tagPurchased("Test Name", "Test ID", "Test Type", 5, { "Extra Key" : "Extra Value" });
    app.outputDebug(' tagPurchased ');
},
    
onTagAddedToCart: function() {
    Localytics.tagAddedToCart("Test Name", "Test ID", "Test Type", 5, { "Extra Key" : "Extra Value" });
    app.outputDebug(' tagAddedToCart ');
},
    
onTagStartedCheckout: function() {
    Localytics.tagStartedCheckout(10, 25, { "Extra Key" : "Extra Value" });
    app.outputDebug(' tagStartedCheckout ');
},
    
onTagCompletedCheckout: function() {
    Localytics.tagCompletedCheckout(10, 25, { "Extra Key" : "Extra Value" });
    app.outputDebug(' tagCompletedCheckout ');
},
    
onTagContentViewed: function() {
    Localytics.tagContentViewed("Test Name", "Test ID", "Test Type", { "Extra Key" : "Extra Value" });
    app.outputDebug(' tagContentViewed ');
},
    
onTagSearched: function() {
    Localytics.tagSearched("Test Query", "Test Type", 12, { "Extra Key" : "Extra Value" });
    app.outputDebug(' tagSearched ');
},
    
onTagShared: function() {
    Localytics.tagShared("Test Name", "Test ID", "Test Type", "Test Method", { "Extra Key" : "Extra Value" });
    app.outputDebug(' tagShared ');
},
    
onTagContentRated: function() {
    Localytics.tagContentRated("Test Name", "Test ID", "Test Type", 9, { "Extra Key" : "Extra Value" });
    app.outputDebug(' tagContentRated ');
},
    
onTagCustomerRegistered: function() {
    Localytics.tagCustomerRegistered({ "customerId" : "u29zn3010", "firstName" : "John", "lastName" : "Smith", "fullName" : "Johnathan Smith", "emailAddress" : "jsmith@test.com" }, "Test Method", { "Extra Key" : "Extra Value" });
    app.outputDebug(' tagCustomerRegistered ');
},
onTagCustomerLoggedIn: function() {
    Localytics.tagCustomerLoggedIn({ "customerId" : "37bdy1pd", "firstName" : "Jane", "lastName" : "Smith", "fullName" : "Jane Smith", "emailAddress" : "jasmith@test.com" }, "Test Method", { "Extra Key" : "Extra Value" });
    app.outputDebug(' tagCustomerLoggedIn ');
},
    
onTagCustomerLoggedOut: function() {
    Localytics.tagCustomerLoggedOut({ "Extra Key" : "Extra Value" });
    app.outputDebug(' tagCustomerLoggedOut ');
},
    
onTagInvited: function() {
    Localytics.tagInvited("Test Method", { "Extra Key" : "Extra Value" });
    app.outputDebug(' tagInvited ');
},
    
onTagScreen: function (ev) {
    var list = document.getElementById("listScreens");
    var selectedItem = list.options[list.selectedIndex].text;
    Localytics.tagScreen(selectedItem);
    app.outputDebug(' tagScreen: ' +selectedItem+ ' ');
},
    
onSetCustomDimension: function (ev) {
    var list = document.getElementById("listCustomDimensions");
    var value = document.getElementById("inputCustomDimension").value || null;
    Localytics.setCustomDimension(list.selectedIndex, value);
    app.outputDebug(' setCustomDimension: ' +list.selectedIndex+ ', value: '+value+' ');
},
    
onGetCustomDimension: function (ev) {
    var list = document.getElementById("listCustomDimensions");
    var outputElement = document.getElementById("outputCustomDimension");
    
    var value = Localytics.getCustomDimension(list.selectedIndex,
                                              function success(value) {
                                              outputElement.value = value || "no value";
                                              app.outputDebug(' getCustomDimension: value - '+value+' ');
                                              });
    
    app.outputDebug(' getCustomDimension: ' +list.selectedIndex+ ' ');
},
    
onOptedOutAction: function (ev) {
    if (ev.currentTarget) {
        var targetId = ev.currentTarget.id;
        if (targetId == "btnSetOptedOut") {
            var list = document.getElementById("listOptedOut");
            var value = list.options[list.selectedIndex].text;
            Localytics.setOptedOut(value == "true");
        } else {
            var outputElement = document.getElementById("outputOptedOut");
            Localytics.isOptedOut(
                                  function success(result) {
                                  outputElement.value = result;
                                  });
        }
    }
},
    
onProfileAction: function (ev) {
    if (ev.currentTarget) {
        var targetId = ev.currentTarget.id;
        var attribute = document.getElementById("inputProfileAttribute").value;
        var value = document.getElementById("inputProfileAttributeValue").value || null;
        var scope = document.getElementById("inputProfileAttributeScope").value;
        var increment = document.getElementById("inputProfileAttributeIncrementValue").value;
        
        var generateProfileSet = function () {
            var setListType = document.getElementById("listProfileSetType");
            var setListLength = document.getElementById("listProfileSetLength");
            var type = setListType.options[setListType.selectedIndex].text;
            var length = setListLength.selectedIndex;
            var result = null;
            if (type == "String")
                result = ["a", "b", "c", "d"];
            else if (type == "Date")
                result = [new Date(), new Date(), new Date(), new Date()];
            else
                result = [1, 2, 3, 4];
            
            result.length = length;
            
            console.log(result);
            return result;
        };
        
        
        //app.outputDebug(' onProfileAction: ' +targetId+ ', attr: ' +attribute+', val: ' +value+', scope: ' +scope+', inc: ' +increment+ ' ');
        
        if (!attribute)
            return;
        
        switch (targetId) {
            case "btnSetProfile":
                Localytics.setProfileAttribute(attribute, value, scope);
                break;
            case "btnDeleteProfile":
                Localytics.deleteProfileAttribute(attribute, scope);
                break;
            case "btnAddToSetProfile":
                Localytics.addProfileAttributesToSet(attribute, generateProfileSet(), scope);
                break;
            case "btnRemoveFromSetProfile":
                Localytics.removeProfileAttributesFromSet(attribute, generateProfileSet(), scope);
                break;
            case "btnIncrementProfile":
                Localytics.incrementProfileAttribute(attribute, increment, scope);
                break;
            case "btnDecrementProfile":
                Localytics.decrementProfileAttribute(attribute, increment, scope);
                break;
            default:
                app.outputDebug(' onProfileAction: no match ');
                return;
                break;
        }
    }
},
    
onUserInfoAction: function (ev) {
    if (ev.currentTarget) {
        var targetId = ev.currentTarget.id;
        
        var logString = "target: " + targetId;
        
        var value = null;
        switch (targetId) {
            case "btnSetIdentifier":
                var key = document.getElementById("inputIdentifierKey").value;
                value = document.getElementById("inputIdentifierValue").value || null;
                Localytics.setIdentifier(key, value);
                logString += ", key: " + key + ", value: " + value + ", function: setIdentifier";
                break;
            case "btnSetCustomerId":
                value = document.getElementById("inputCustomerId").value || null;
                Localytics.setCustomerId(value);
                logString += ", value: " + value + ", function: setCustomerId";
                break;
            case "btnSetCustomerFullName":
                value = document.getElementById("inputCustomerFullName").value || null;
                Localytics.setCustomerFullName(value);
                logString += ", value: " + value + ", function: setCustomerFullName";
                break;
            case "btnSetCustomerFirstName":
                value = document.getElementById("inputCustomerFirstName").value || null;
                Localytics.setCustomerFirstName(value);
                logString += ", value: " + value + ", function: setCustomerFirstName";
                break;
            case "btnSetCustomerLastName":
                value = document.getElementById("inputCustomerLastName").value || null;
                Localytics.setCustomerLastName(value);
                logString += ", value: " + value + ", function: setCustomerLastName";
                break;
            case "btnSetCustomerEmail":
                value = document.getElementById("inputCustomerEmail").value || null;
                Localytics.setCustomerEmail(value);
                logString += ", value: " + value + ", function: setCustomerEmail";
                break;
            case "btnSetLocation":
                var latitude = document.getElementById("inputLocationLatitude").value;
                var longitude = document.getElementById("inputLocationLongitude").value;
                Localytics.setLocation(latitude, longitude);
                logString += ", location: (" + latitude + ", " + longitude + "), function: setLocation";
                break;
            case "btnGetIdentifier":
                var key = document.getElementById("outputIdentifierKey").value;
                var outputElement = document.getElementById("outputIdentifierValue");
                Localytics.getIdentifier(key,
                                         function success(value) {
                                         outputElement.value = value || "no value";
                                         app.outputDebug(' getIdentifier: value - ' + value + ' ');
                                         });
                logString += ", key: " + key + ", function: getIdentifier";
                break;
            case "btnGetCustomerId":
                var outputElement = document.getElementById("outputCustomerId");
                Localytics.getCustomerId(
                                         function success(value) {
                                         outputElement.value = value;
                                         app.outputDebug(' getCustomerId: value - ' + value + ' ');
                                         });
                logString += ", function: getCustomerId";
                break;
            default:
                app.outputDebug(' onUserInfoAction: no match ');
                return;
                break;
        }
        app.outputDebug(' onUserInfoAction: ' + logString + ' ')
    }
},
    
onLoggingEnabledAction: function (ev) {
    if (ev.currentTarget) {
        var targetId = ev.currentTarget.id;
        if (targetId == "btnSetLoggingEnabled") {
            var list = document.getElementById("listLoggingEnabled");
            var value = list.options[list.selectedIndex].text;
            Localytics.setLoggingEnabled(value == "true");
        } else {
            var outputElement = document.getElementById("outputLoggingEnabled");
            Localytics.isLoggingEnabled(
                                        function success(result) {
                                        outputElement.value = result;
                                        });
        }
    }
},
    
onRegisterPush: function (ev) {
    Localytics.registerPush();
},
    
onPushDisabledAction: function (ev) {
    if (ev.currentTarget) {
        var targetId = ev.currentTarget.id;
        if (targetId == "btnSetPushDisabled") {
            var list = document.getElementById("listPushDisabled");
            var value = list.options[list.selectedIndex].text;
            Localytics.setPushDisabled(value == "true");
        } else {
            var outputElement = document.getElementById("outputPushDisabled");
            Localytics.isPushDisabled(
                                      function success(result) {
                                      outputElement.value = result;
                                      });
        }
    }
},
    
onPushTokenAction: function (ev) {
    if (ev.currentTarget) {
        var targetId = ev.currentTarget.id;
        if (targetId == "btnSetPushToken") {
            var value = document.getElementById("inputPushToken").value || null;
            Localytics.setPushToken(value);
        } else {
            var outputElement = document.getElementById("outputPushToken");
            Localytics.getPushToken(
                                    function success(result) {
                                    outputElement.value = result;
                                    });
        }
    }
},
    
onTestModeEnabledAction: function (ev) {
    if (ev.currentTarget) {
        var targetId = ev.currentTarget.id;
        if (targetId == "btnSetTestModeEnabled") {
            var list = document.getElementById("listTestMode");
            var value = list.options[list.selectedIndex].text;
            Localytics.setTestModeEnabled(value == "true");
        } else {
            var outputElement = document.getElementById("outputTestModeEnabled");
            Localytics.isTestModeEnabled(
                                         function success(result) {
                                         outputElement.value = result;
                                         });
        }
    }
},
onMarketingAction: function (ev) {
    if (ev.currentTarget) {
        var targetId = ev.currentTarget.id;
        if (targetId == "btnSetDismissButtonImageName") {
            var value = document.getElementById("inputDismissButtonImageName").value || null;
            Localytics.setInAppMessageDismissButtonImageWithName(value);
        } else if (targetId == "btnSetDismissButtonHidden") {
            var list = document.getElementById("listDismissButtonHidden");
            var value = list.options[list.selectedIndex].text;
            Localytics.setInAppMessageDismissButtonHidden(value == "true");
            app.outputDebug(' btnSetDismissButtonHidden: ' + value == "true");
        } else if (targetId == "btnSetDismissButtonLocation") {
            var list = document.getElementById("listDismissButtonLocation");
            var value = list.options[list.selectedIndex].value;
            Localytics.setInAppMessageDismissButtonLocation(value);
        } else if (targetId == "btnGetDismissButtonLocation") {
            var outputElement = document.getElementById("outputDismissButtonLocation");
            Localytics.getInAppMessageDismissButtonLocation(
                                                            function success(result) {
                                                            outputElement.value = result;
                                                            });
        } else if (targetId == "btnTriggerInApp") {
            var triggerName = document.getElementById("inputTriggerInAppName").value;
            // Note: attributes must match event's attribute, so keep it simple
            var attrKey = document.getElementById("inputTriggerInAppAttrKey").value || null;
            var attrValue = document.getElementById("inputTriggerInAppAttrValue").value || null;
            if (triggerName) {
                var attributes = null;
                if (attrKey) {
                    attributes = { attrKey : attrValue };
                }
                Localytics.triggerInAppMessage(triggerName, attributes);
            }
        } else if (targetId == "btnGetInboxCampaigns") {
            var outputElement = document.getElementById("outputInboxCampaigns");
            Localytics.getInboxCampaigns(
                                         function success(result) {
                                         outputElement.value = JSON.stringify(result);
                                         });
        } else if (targetId == "btnGetAllInboxCampaigns") {
            var outputElement = document.getElementById("outputAllInboxCampaigns");
            Localytics.getAllInboxCampaigns(
                                            function success(result) {
                                            outputElement.value = JSON.stringify(result);
                                            });
        } else if (targetId == "btnRefreshInboxCampaigns") {
            var outputElement = document.getElementById("outputRefreshInboxCampaigns");
            Localytics.refreshInboxCampaigns(
                                             function success(result) {
                                             outputElement.value = JSON.stringify(result);
                                             });
        } else if (targetId == "btnRefreshAllInboxCampaigns") {
            var outputElement = document.getElementById("outputRefreshAllInboxCampaigns");
            Localytics.refreshAllInboxCampaigns(
                                                function success(result) {
                                                outputElement.value = JSON.stringify(result);
                                                });
        } else if (targetId == "btnGetInboxCampaignsUnreadCount") {
            var outputElement = document.getElementById("outputInboxCampaignsUnreadCount");
            Localytics.getInboxCampaignsUnreadCount(
                                                    function success(result) {
                                                    outputElement.value = result;
                                                    });
        } else if (targetId == "btnSetInboxCampaignRead") {
            var campaignId = document.getElementById("inputSetInboxCampaignReadCampaignId").value;
            var list = document.getElementById("listSetInboxCampaignRead");
            var readValue = list.options[list.selectedIndex].text;
            Localytics.setInboxCampaignRead(campaignId, readValue == "true");
            app.outputDebug(' setInboxCampaignRead: campaignId: ' + campaignId + ', read: ' + readValue);
        } else if (targetId == "btnInboxListItemTapped") {
            var campaignId = document.getElementById("inputInboxListItemTappedCampaignId").value;
            Localytics.inboxListItemTapped(campaignId);
            app.outputDebug(' inboxListItemTapped: campaignId: ' + campaignId);
        }
    }
},
    
onListenersAction: function (ev) {
    if (ev.currentTarget) {
        var targetId = ev.currentTarget.id;
        if (targetId == "btnSetAnalyticsListener") {
            var outputElement = document.getElementById("outputAnalyticsListener");
            Localytics.setAnalyticsListener(function success(value) {
                                            outputElement.value = JSON.stringify(value);
                                            });
        } else if (targetId == "btnSetMessagingListener") {
            var outputElement = document.getElementById("outputMessagingListener");
            Localytics.setMessagingListener(function success(value) {
                                            outputElement.value = JSON.stringify(value);
                                            });
        } else if (targetId == "btnSetLocationListener") {
            var outputElement = document.getElementById("outputLocationListener");
            Localytics.setLocationListener(function success(value) {
                                           outputElement.value = JSON.stringify(value);
                                           });
        }
    }
},
    
onLocationMonitoringEnabledAction: function (ev) {
    if (ev.currentTarget) {
        var targetId = ev.currentTarget.id;
        var list = document.getElementById("listLocationMonitoringEnabled");
        var value = list.options[list.selectedIndex].text;
        Localytics.setLocationMonitoringEnabled(value == "true");
    }
},
    
onGetGeofencesAction: function (ev) {
    var lat = document.getElementById("inputGetGeofencesLat").value;
    var lng = document.getElementById("inputGetGeofencesLng").value;
    var outputElement = document.getElementById("outputGeofencesToMonitor");
    Localytics.getGeofencesToMonitor(lat, lng,
                                     function success(value) {
                                     outputElement.value = JSON.stringify(value) || "no value";
                                     app.outputDebug(' getGeofencesToMonitor: value - ' + JSON.stringify(value) + ' ');
                                     });
    app.outputDebug(' onGetGeofencesAction: lat: ' + lat + ', lng: ' + lng);
},
    
onTriggerRegionAction: function (ev) {
    var uniqueId = document.getElementById("inputTriggerRegionUniqueId").value;
    var list = document.getElementById("listTriggerRegionEvent");
    var eventValue = list.options[list.selectedIndex].text;
    Localytics.triggerRegion({ "uniqueId" : uniqueId }, eventValue);
    app.outputDebug(' onTriggerRegionAction: uniqueId: ' + uniqueId + ', event: ' + eventValue);
},
    
onGDPRAction: function (ev) {
    if (ev.currentTarget) {
        var targetId = ev.currentTarget.id;
        if (targetId == "btnPauseUploading") {
            var list = document.getElementById("dataPause");
            var value = list.options[list.selectedIndex].text;
            Localytics.pauseDataUploading(value == "Pause");
            app.outputDebug(' The user has ' + value + ' data uploading ');
        } else if (targetId == "btnPrivacyOptOut") {
            var list = document.getElementById("privacyOptOut");
            var value = list.options[list.selectedIndex].text;
            Localytics.setPrivacyOptedOut(value == "Opt Out");
            app.outputDebug(' The user has ' + value + ' ');
        } else if (targetId == "btnSetCustomerIdPrivacy") {
            var customerId = document.getElementById("inputCustomerIdPrivacy").value || null;
            var list = document.getElementById("privacyOptOut");
            var optedOut = list.options[list.selectedIndex].text;
            Localytics.setCustomerIdWithPrivacyOptedOut(customerId, optedOut == "Opt Out");
            app.outputDebug(' The user with Id ' + customerId + ' has ' + optedOut + ' ');
        }
    }
},
    
onGetInstallId: function (ev) {
    var outputElement = document.getElementById("outputInstallId");
    Localytics.getInstallId(
                            function success(result) {
                            outputElement.value = result;
                            });
},
    
onGetAppKey: function (ev) {
    var outputElement = document.getElementById("outputAppKey");
    Localytics.getAppKey(
                         function success(result) {
                         outputElement.value = result;
                         });
},
    
onGetLibraryVersion: function (ev) {
    var outputElement = document.getElementById("outputLibraryVersion");
    Localytics.getLibraryVersion(
                                 function success(result) {
                                 outputElement.value = result;
                                 });
},
    
onOpenSession: function (ev) {
    Localytics.openSession();
    Localytics.upload();
    app.outputDebug(' openSession ');
},
    
onCloseSession: function (ev) {
    Localytics.closeSession();
    Localytics.upload();
    app.outputDebug(' closeSession ');
},
    
onUpload: function (ev) {
    Localytics.upload();
    app.outputDebug(' upload ');
},
    
outputDebug: function (message) {
    if (app.enableLogging) {
        console.log("************** " +message+" **************");
    }
},
};

app.initialize();
