import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Home from "../screens/Home";
import Donate from "../screens/Donate";
import PreBooking from "../screens/Prebooking";
import Login from "../screens/Login";
import Help from "../screens/Help";
import COLORS from "../assets/colors/colors";
import { Platform } from "react-native";

const Tab = createBottomTabNavigator();

const HomeTab = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const checkLogin = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    checkLogin();
  }, [checkLogin]);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.main,
        tabBarInactiveTintColor: COLORS.primary,
        tabBarShowLabel: true,
        tabBarStyle: {
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
          height: 60,
          backgroundColor: COLORS.white,
          paddingVertical: 5,
          borderTopWidth: 2,
          shadowColor: "#1D616C",
          borderRadius: 10,
          marginVertical: 5,
          paddingBottom: 10,
          width: "96%",
          marginHorizontal: "2%",
          marginBottom: Platform.OS === "ios" ? 20 : 10,
        },
      }}
    >
      <Tab.Screen
        name={"Home"}
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name={"Donate"}
        component={Donate}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="hand-holding-heart" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      {isLoggedIn ? (
        <Tab.Screen
          name={"PreBooking"}
          component={PreBooking}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="history" size={24} color={color} />
            ),
            headerShown: false,
          }}
        />
      ) : (
        <Tab.Screen
          name={"Login"}
          component={Login}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="login" size={24} color={color} />
            ),
          }}
        />
      )}
      <Tab.Screen
        name={"Help"}
        component={Help}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="help-outline" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTab;
