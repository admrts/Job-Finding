import {
  FlatList,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  View,
  Text,
} from "react-native";
import React from "react";
import useFetch from "../../hooks/useFetch";
import JobCard from "../../components/JobCard/JobCard";

const JobsList = () => {
  const { data, loading, error } = useFetch(
    "https://www.themuse.com/api/public/jobs?page=1"
  );

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F0EECD",
        }}
      >
        <ActivityIndicator size="large" color="#D94B25" />
      </View>
    );
  }
  if (error) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F0EECD",
        }}
      >
        <Text>Something went wrong. Check Your Internet Connection</Text>
      </View>
    );
  }

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
