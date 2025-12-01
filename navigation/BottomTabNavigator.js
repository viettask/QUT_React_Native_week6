import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";
import LogScreen from "../screens/LogScreen";
import RecordScreen from "../screens/RecordScreen";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Home";

export default function BottomTabNavigator({ navigation, route }) {
  React.useLayoutEffect(() => {
    if (navigation != null) {
      navigation.setOptions({ headerTitle: getHeaderTitle(route) });
    }
  }, []);

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={LogScreen}
        options={{
          title: "Event Log",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="code-working" />
          ),
        }}
      />
      <BottomTab.Screen
        name="RecordEvents"
        component={RecordScreen}
        options={{
          title: "Record Events",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="book" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}


function getHeaderTitle(route) {
  const routeName = getFocusedRouteNameFromRoute(route) ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Home":
      return "How to get started";
    case "RecordEvents":
      return "Links to learn more";
  }
}