// Details.js
import React from "react";
import { View, Text, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import styles from "../assets/css/styles"; // Import your styles

const Details = () => {
  const route = useRoute();
  const { postId } = route.params;

  // Dummy data, replace this with your actual data fetching logic
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

  // Find the post with the matching postId
  const post = dummyData.find((item) => item.id === postId);

  if (!post) {
    // Handle the case where the post is not found
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Post not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.postContainer}>
      <Image source={post.image} style={styles.postImage} />
      <Text style={styles.postTitle}>{post.title}</Text>
      <Text style={styles.postDescription}>{post.description}</Text>
      <Text style={styles.postAmount}>
        Amount Required: ${post.amountRequired}
      </Text>
      <Text style={styles.postDonatedAmount}>
        Donated: ${post.donatedAmount}
      </Text>
      {/* Add any other information you want to display */}
    </View>
  );
};

export default Details;
