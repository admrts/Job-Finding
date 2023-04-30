import { FlatList, StyleSheet, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import JobCard from "../../components/JobCard/JobCard";

const JobsList = () => {
  const { data } = useFetch("https://www.themuse.com/api/public/jobs?page=1");

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <JobCard data={item} />}
      />
    </SafeAreaView>
  );
};

export default JobsList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F0EECD",
  },
});
