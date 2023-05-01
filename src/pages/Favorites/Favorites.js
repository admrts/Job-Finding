import { View, FlatList, StyleSheet, SafeAreaView, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import JobCard from "../../components/JobCard/JobCard";

const Favorites = () => {
  const { favorites } = useSelector((state) => state.favorite);
  return (
    <SafeAreaView style={styles.container}>
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          keyExtractor={favorites.id}
          renderItem={({ item }) => <JobCard data={item} removeId={item.id} />}
        />
      ) : (
        <View style={styles.empty_container}>
          <Text style={styles.empty_text}>Favorites is empty</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Favorites;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0EECD",
    flex: 1,
  },
  empty_container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  empty_text: {
    color: "#584632",
    fontSize: 30,
    fontWeight: "700",
  },
});
