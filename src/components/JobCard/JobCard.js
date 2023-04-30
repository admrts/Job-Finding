import { View, Text, TouchableOpacity } from "react-native";
import styles from "./JobCard.styles";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { deleteFavoriteById } from "../../redux/favoriteSlice";

const JobCard = ({ data, removeId }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.navigate("JobDetail", { data });
  };
  const removeFavorite = () => {
    dispatch(deleteFavoriteById(data.id));
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
        <TouchableOpacity
          style={styles.remove_container}
          onPress={removeFavorite}
        >
          <Text style={styles.remove_text}>Remove Favorite</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
};

export default JobCard;
