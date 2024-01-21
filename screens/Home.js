import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Image,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import COLORS from "../assets/colors/colors";

const Home = ({ navigation }) => {
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const dummyData = [
    {
      id: 1,
      title: "Post 1",
      description: "Description for Post 1",
      amountRequired: 500,
      donatedAmount: 250,
      image: require("../assets/images/post1.jpeg"),
    },
    {
      id: 2,
      title: "Post 2",
      description: "Description for Post 2",
      amountRequired: 1000,
      donatedAmount: 750,
      image: require("../assets/images/post2.jpg"),
    },
    // Add more posts as needed
  ];

  const handleDonatePress = () => {
    // Navigate to the donation page or form
    navigation.navigate("Donate");
  };

  const handlePostPress = () => {
    // Navigate to the Details screen with the current post's id
    navigation.navigate("Details", { postId: dummyData[currentPostIndex].id });
  };

  const animatedValue = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 1000, // Adjust the duration as needed
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    fadeIn();
  }, []);

  const handleNextPost = () => {
    setCurrentPostIndex((prevIndex) => (prevIndex + 1) % dummyData.length);
  };

  const handlePrevPost = () => {
    setCurrentPostIndex((prevIndex) =>
      prevIndex === 0 ? dummyData.length - 1 : prevIndex - 1
    );
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.mainContent,
          {
            opacity: animatedValue,
            transform: [
              {
                translateY: animatedValue.interpolate({
                  inputRange: [0, 1],
                  outputRange: [50, 0],
                }),
              },
            ],
          },
        ]}
      >
        <FontAwesome5 name="hand-holding-heart" size={64} color="#FF69B4" />
        <Text style={styles.title}>Help a Friend</Text>
        <Text style={styles.description}>
          Your kindness can brighten a child's future. Make a donation today and
          be a hero!
        </Text>
        <TouchableOpacity
          style={styles.donateButton}
          onPress={handleDonatePress}
        >
          <Text style={styles.buttonText}>Donate Now</Text>
        </TouchableOpacity>
      </Animated.View>

      <TouchableOpacity style={styles.postsContainer} onPress={handlePostPress}>
        <Image
          source={dummyData[currentPostIndex].image}
          style={styles.postImage}
        />
        <Text style={styles.postTitle}>
          {dummyData[currentPostIndex].title}
        </Text>
        <Text style={styles.postDescription}>
          {dummyData[currentPostIndex].description}
        </Text>
      </TouchableOpacity>

      <View style={styles.arrowButtonsContainer}>
        <TouchableOpacity onPress={handlePrevPost} style={styles.arrowButton}>
          <FontAwesome5 name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleNextPost} style={styles.arrowButton}>
          <FontAwesome5 name="arrow-right" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#F0F8FF",
  },
  mainContent: {
    alignItems: "center",
    marginBottom: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
    color: COLORS.main,
  },
  description: {
    textAlign: "center",
    marginHorizontal: 16,
    marginTop: 8,
    color: COLORS.primary,
    fontWeight: "bold",
  },
  donateButton: {
    backgroundColor: COLORS.main,
    padding: 10,
    marginTop: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
    padding: 5,
  },
  postsContainer: {
    position: "absolute",
    bottom: 60,
    alignItems: "center",
  },
  postImage: {
    width: 300,
    height: 200,
    borderRadius: 8,
    marginBottom: 10,
    resizeMode: "cover",
  },
  postTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 16,
    color: COLORS.primary,
  },
  postDescription: {
    textAlign: "center",
    marginHorizontal: 16,
    marginTop: 8,
    color: "#555",
  },
  arrowButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
    marginBottom: 20,
  },
  arrowButton: {
    padding: 20,
  },
});

export default Home;
