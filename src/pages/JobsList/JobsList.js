import { View, Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import JobCard from "../../components/JobCard/JobCard";

const JobsList = () => {
  const { data } = useFetch("https://www.themuse.com/api/public/jobs?page=2");

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <JobCard data={item} />}
      />
    </View>
  );
};

export default JobsList;
