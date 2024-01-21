import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  RefreshControl,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "../assets/css/styles";
import { EvilIcons } from "@expo/vector-icons";
import Headers from "../components/headers";
const List = ({ route }) => {
  const check_in_date = route.params.check_in_date;
  const check_out_date = route.params.check_out_date;
  const url =
    "https://reservation-zeta.vercel.app/list/" +
    check_in_date +
    "/" +
    check_out_date;
  const [isLoading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredDonate, setFilteredDonate] = useState([]);
  const [Donate, setDonate] = useState([]);

  const getDonate = async () => {
    try {
      const response = await axios.get(url);
      setDonate(response.data);
      setFilteredDonate(response.data);
      setLoading(false);
    } catch (e) {}
  };
  const searchFilter = (text) => {
    if (text) {
      const newCar = Donate.filter(function (item) {
        const carData = item.name;
        const textData = text;
        return carData.indexOf(textData) > -1;
      });
      setFilteredDonate(newCar);
      setSearch(text);
    } else {
      setFilteredDonate(Donate);
      setSearch(text);
    }
  };
  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      getDonate();
      setRefreshing(false);
    }, 5000);
  };

  useEffect(() => {
    getDonate();
  }, []);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Headers />
      {isLoading ? (
        <View style={styles.activityIndicator}>
          <ActivityIndicator style={styles.indicator} size={70} />
          <Text style={styles.signup}>Loading Donate...</Text>
        </View>
      ) : (
        <View>
          <View style={styles.search}>
            <View style={styles.sinput}>
              <View style={styles.sicon}>
                <EvilIcons name="search" size={29} color="yellow" />
              </View>
              <View style={{ flex: 8 }}>
                <TextInput
                  onChangeText={(text) => searchFilter(text)}
                  onBlur={(text) => searchFilter("")}
                  onCancel={(text) => searchFilter("")}
                  placeholder="Search for a car here!!!"
                  value={search}
                  style={styles.input_search}
                />
              </View>
            </View>
          </View>
          <View style={styles.list}>
            <FlatList
              data={filteredDonate}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Car", {
                      rid: item._id,
                      cindate: check_in_date,
                      coutdate: check_out_date,
                    })
                  }
                >
                  <View style={styles.Donate}>
                    <Image style={styles.image} source={{ uri: item.image }} />
                    <View style={styles.tags}>
                      <View>
                        <Text style={styles.name}>{item.name}</Text>
                      </View>
                      <View>
                        <Text style={styles.price}>
                          <Text>$ </Text>
                          {item.price}
                          <Text> /day</Text>
                        </Text>
                      </View>
                      <View style={styles.specials}>
                        <Text style={{ width: 70 }}> Free Driver</Text>
                        <Text style={{ width: 60 }}>|Snacks and drink</Text>
                        <Text style={{ width: 70 }}>|Phone chargers</Text>
                        <Text style={{ width: 120 }}>| Free wifi</Text>
                        <Text style={{ width: 60 }}>
                          |Games and playing cards
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              )}
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};
export default List;
