import { View, FlatList, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import JobCard from "../../components/JobCard/JobCard";

const Favorites = () => {
  const { favorites } = useSelector((state) => state.favorite);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={favorites.id}
        renderItem={({ item }) => <JobCard data={item} removeId={item.id} />}
      />
    </SafeAreaView>
  );
};

export default Favorites;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0EECD",
    flex: 1,
  },
});
