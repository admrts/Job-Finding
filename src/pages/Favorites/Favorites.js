import { View, Text, FlatList, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import JobCard from "../../components/JobCard/JobCard";

const Favorites = () => {
  const { favorites } = useSelector((state) => state.favorite);
  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={favorites}
        keyExtractor={favorites.id}
        renderItem={({ item }) => <JobCard data={item} />}
      />
    </ScrollView>
  );
};

export default Favorites;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0EECD",
  },
});
