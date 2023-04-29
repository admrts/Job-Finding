import { View, Text } from "react-native";
import React from "react";

const JobCard = ({ data }) => {
  return (
    <View>
      <Text>{data.name}</Text>
    </View>
  );
};

export default JobCard;
