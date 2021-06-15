import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Setting from "../../working/Setting";
import SettingMyProfile from "../../working/SettingMyProfile";
import Setting_PW_Change from "../../working/Setting_PW_Change";
import Membership_Withdrawal from "../../working/Membership_Withdrawal";
import NotificationPage from "../../working/NotificationPage";
import AlarmPage from "../../working/AlarmPage";
const SettingStackNavigator = createStackNavigator();
const SettingStack = () => {
  return (
    <SettingStackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <SettingStackNavigator.Screen name="Setting" component={Setting} />
      <SettingStackNavigator.Screen name="SettingMyProfile" component={SettingMyProfile} />
      <SettingStackNavigator.Screen name="Setting_PW_Change" component={Setting_PW_Change} />
      <SettingStackNavigator.Screen name="Membership_Withdrawal" component={Membership_Withdrawal} />
      <SettingStackNavigator.Screen name="NotificationPage" component={NotificationPage} />
      <SettingStackNavigator.Screen name="AlarmPage" component={AlarmPage} />
    </SettingStackNavigator.Navigator>
  );
};

export default SettingStack;
