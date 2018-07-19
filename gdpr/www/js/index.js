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
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        document.getElementById('loginForm').setAttribute('style', 'display:none;');
        document.getElementById('authenticatedForm').setAttribute('style', 'display:none;');
    },

    onDeviceReady: function() {
        this.setupLocalytics();

        document.getElementById("loginBtn").addEventListener("click", app.onLogin);
        document.getElementById("optOutBtn").addEventListener("click", app.onOptOut);
        document.getElementById("optInBtn").addEventListener("click", app.onOptIn);
        document.getElementById("logoutBtn").addEventListener("click", app.onLogout);

        var listeningElement = document.getElementById('waiting');
        var loginForm = document.getElementById('loginForm');
        var authenticatedForm = document.getElementById('authenticatedForm');
        if (window.localStorage.getItem('isLoggedIn')) {
          listeningElement.setAttribute('style', 'display:none;');
          loginForm.setAttribute('style', 'display:none;');
          authenticatedForm.setAttribute('style', 'display:block;');
        } else {
          listeningElement.setAttribute('style', 'display:none;');
          authenticatedForm.setAttribute('style', 'display:none;');
          loginForm.setAttribute('style', 'display:block;');
        }
    },

    setupLocalytics: function() {
      Localytics.setLoggingEnabled(true);
      Localytics.pauseDataUploading(true);
      Localytics.autoIntegrate(); // You can include your app key here if you don't want to use the Info.plist or AndroidManifst methods
      Localytics.openSession(); // For Android, we might have missed the call to open a session by the time autoIntegrate is called. Don't worry, calling this will not open a second session.

      if (window.localStorage.getItem('isLoggedIn')) {
        //This should be executed on a background thread
        Localytics.getCustomerId(
        	function success(result) {
        		var customerId = result;
            // TODO A proper backend integration should be connected here that will test the user's opt out status
            var isUserOptedOut = false;
            Localytics.setPrivacyOptedOut(isUserOptedOut);
            if (!isUserPrivacyOptedOut) {
              Localytics.setLocationMonitoringEnabled(true);
            }
            Localytics.pauseDataUploading(false);
        });
      } else {
        Localytics.setLocationMonitoringEnabled();
      }
    },

    onLogin: function() {
        var username = document.getElementById("username");
        var pwd = document.getElementById("password");

        // TODO A proper backend integration should be connected here that will log the user in
        // and check their customer ID for their data opt out status
        var customerIdFromServer = "customerIdFromServer";
        var isUserPrivacyOptedOut = false;
        window.localStorage.setItem('isLoggedIn', true);
        Localytics.setCustomerIdWithPrivacyOptedOut(customerIdFromServer, isUserPrivacyOptedOut);
        Localytics.pauseDataUploading(false);

        var loginForm = document.getElementById('loginForm');
        var authenticatedForm = document.getElementById('authenticatedForm');

        loginForm.setAttribute('style', 'display:none;');
        authenticatedForm.setAttribute('style', 'display:block;');
    },

    onOptOut: function() {
        Localytics.setPrivacyOptedOut(true);
    },

    onOptIn: function() {
        Localytics.setPrivacyOptedOut(false);
        Localytics.setLocationMonitoringEnabled(true);
    },

    onLogout: function() {
        Localytics.setCustomerIdWithPrivacyOptedOut(null, false);
        Localytics.setLocationMonitoringEnabled(true);
        window.localStorage.setItem('isLoggedIn', false);

        var loginForm = document.getElementById('loginForm');
        var authenticatedForm = document.getElementById('authenticatedForm');
        authenticatedForm.setAttribute('style', 'display:none;');
        loginForm.setAttribute('style', 'display:block;');
    }
};

app.initialize();
