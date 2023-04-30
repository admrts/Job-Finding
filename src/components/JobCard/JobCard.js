import { View, Text, TouchableOpacity } from "react-native";
import styles from "./JobCard.styles";
import { useNavigation } from "@react-navigation/native";

const JobCard = ({ data, removeId }) => {
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("JobDetail", { data });
  };
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={handlePress}
    >
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.company_name}>{data.company.name}</Text>

      <View style={styles.location_container}>
        <Text style={styles.location_text}>{data.locations[0].name}</Text>
      </View>

      <Text style={styles.level}>{data.levels[0].name}</Text>
      {removeId && (
        <TouchableOpacity style={styles.remove_container}>
          <Text style={styles.remove_text}>Remove Favorite</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default JobCard;
