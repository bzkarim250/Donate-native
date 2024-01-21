import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import styles from "../assets/css/styles"; // Import your styles
import { FontAwesome5 } from "@expo/vector-icons";

const Donate = ({ navigation }) => {
  const [donationPosts, setDonationPosts] = useState([]);

  // Dummy data, replace this with your actual data fetching logic
  useEffect(() => {
    // Fetch donation posts from your data source or API
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
        image: require("../assets/images/post1.jpeg"),
      },
      // Add more posts as needed
    ];

    setDonationPosts(dummyData);
  }, []);

  const handlePostPress = (postId) => {
    // Navigate to the detailed post view or donation form
    // You can replace 'PostDetail' with your actual component or route name
    navigation.navigate("Details", { postId });
  };

  const renderPostItem = ({ item }) => (
    <TouchableOpacity
      style={styles.postItem}
      onPress={() => handlePostPress(item.id)}
    >
      <Image source={item.image} style={styles.postImage} />
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text style={styles.postDescription}>{item.description}</Text>
      <Text style={styles.postAmount}>
        Amount Required: ${item.amountRequired}
      </Text>
      <Text style={styles.postDonatedAmount}>
        Donated: ${item.donatedAmount}
      </Text>
      {/* Add any other information you want to display */}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.mainlogo} source={require("../assets/icon.png")} />
      <Text style={[styles.title, styles.heading]}>Donation Posts</Text>
      <FlatList
        data={donationPosts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderPostItem}
        contentContainerStyle={styles.postList}
      />
    </SafeAreaView>
  );
};

export default Donate;
