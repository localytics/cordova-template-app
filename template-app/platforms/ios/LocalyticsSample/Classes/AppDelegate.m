/*
 Licensed to the Apache Software Foundation (ASF) under one
 or more contributor license agreements.  See the NOTICE file
 distributed with this work for additional information
 regarding copyright ownership.  The ASF licenses this file
 to you under the Apache License, Version 2.0 (the
 "License"); you may not use this file except in compliance
 with the License.  You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing,
 software distributed under the License is distributed on an
 "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, either express or implied.  See the License for the
 specific language governing permissions and limitations
 under the License.
 */

//
//  AppDelegate.m
//  LocalyticsSample
//
//  Created by ___FULLUSERNAME___ on ___DATE___.
//  Copyright ___ORGANIZATIONNAME___ ___YEAR___. All rights reserved.
//

#import "AppDelegate.h"
#import "MainViewController.h"
@import UserNotifications;
@import Localytics;

@implementation AppDelegate

- (BOOL)application:(UIApplication*)application didFinishLaunchingWithOptions:(NSDictionary*)launchOptions
{
    self.viewController = [[MainViewController alloc] init];
    [Localytics autoIntegrate:@"977e844f5a33e2d198849bb-091fca20-aeaf-11e3-1c46-004a77f8b47f" withLocalyticsOptions:nil launchOptions:launchOptions];
    if (NSClassFromString(@"UNUserNotificationCenter")) {
        UNAuthorizationOptions options = (UNAuthorizationOptionBadge | UNAuthorizationOptionSound |UNAuthorizationOptionAlert);
        [[UNUserNotificationCenter currentNotificationCenter] requestAuthorizationWithOptions:options
                                                                            completionHandler:^(BOOL granted, NSError * _Nullable error) {
                                                                                [Localytics didRequestUserNotificationAuthorizationWithOptions:options
                                                                                                                                       granted:granted];
                                                                            }];
        [UNUserNotificationCenter currentNotificationCenter].delegate = self;
    } else {
        UIUserNotificationType types = (UIUserNotificationTypeAlert | UIUserNotificationTypeBadge | UIUserNotificationTypeSound);
        UIUserNotificationSettings *settings = [UIUserNotificationSettings settingsForTypes:types categories:nil];
        [application registerUserNotificationSettings:settings];
    }
    
    return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (void) userNotificationCenter:(UNUserNotificationCenter *)center didReceiveNotificationResponse:(UNNotificationResponse *)response withCompletionHandler:(void (^)(void))completionHandler {
    [Localytics didReceiveNotificationResponseWithUserInfo:response.notification.request.content.userInfo];
    completionHandler();
}

- (void)userNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(UNNotificationPresentationOptions))completionHandler {
    completionHandler(UNNotificationPresentationOptionAlert | UNNotificationPresentationOptionBadge);
}

@end
