import React, { useState, useEffect } from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import COLORS from "../assets/colors/colors";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Headers = () => {
  const navigation = useNavigation();
  const [isLoggedIn, setLoggedIn] = useState(false);

  const checkLogin = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        setLoggedIn(true);
      }
    } catch (e) {
      console.error("Error checking login:", e);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.logo} source={require("../assets/icon.png")} />
      </View>
      {isLoggedIn && (
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <FontAwesome5 name="user-circle" size={30} color="black" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingVertical: 12,
    paddingHorizontal: 8,
    flexDirection: "row",
    borderTopWidth: 2,
    borderTopColor: COLORS.main,
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 20,
    borderTopColor: COLORS.main,
    borderTopWidth: 1,
    shadowColor: "#52006A",
    elevation: 20,
  },
  logo: {
    width: 110,
    height: 50,
  },
  iconContainer: {
    marginTop: 10,
  },
});

export default Headers;
