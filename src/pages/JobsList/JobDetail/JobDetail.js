import { Text, SafeAreaView, View, ActivityIndicator } from "react-native";
import React from "react";
import useFetch from "../../../hooks/useFetch";
import JobDetails from "../../../components/JobDetail/JobDetails";

const JobDetail = ({ route }) => {
  const { data: jobData } = route.params;

  const { data, error, loading } = useFetch(
    `https://www.themuse.com/api/public/jobs/${jobData.id}`
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
    <SafeAreaView style={{ backgroundColor: "#F0EECD" }}>
      <JobDetails data={data} />
    </SafeAreaView>
  );
};

export default JobDetail;
