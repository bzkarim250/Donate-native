import React from "react";
import HomeTab from "./navigations/HomeTab";
import List from "./screens/List";
import Signup from "./screens/Signup";
import Profile from "./screens/Profile";
import Details from "./screens/Details";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "react-native";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#e0f4f1"
        color="white"
        translucent={false}
      />
      <Stack.Navigator>
        <Stack.Screen
          name="HomeTab"
          component={HomeTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: true,
            headerBackTitleVisible: true,
            headerTitleStyle: { color: "white" },
            headerBackTitle: "Back",
          }}
        />
        <Stack.Screen
          name="List"
          component={List}
          options={{
            headerShown: true,
            headerBackTitleVisible: true,
            headerTitleStyle: { color: "white" },
            headerBackTitle: "Back",
          }}
        />
        <Stack.Screen
          name={"Details"}
          component={Details}
          options={{
            headerShown: true,
            headerBackTitleVisible: true,
            headerTitleStyle: { color: "white" },
            headerBackTitle: "Back",
          }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: true,
            headerBackTitleVisible: true,
            headerTitleStyle: { color: "white" },
            headerBackTitle: "Back",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
