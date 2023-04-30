import {
  ScrollView,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import RenderHtml from "react-native-render-html";
import styles from "./JobDetail.styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite } from "../../redux/favoriteSlice";
import { deleteFavoriteById } from "../../redux/favoriteSlice";

const JobDetails = ({ data }) => {
  const { favorites } = useSelector((store) => store.favorite);
  const item = favorites.find((fav) => fav.id === data.id);
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();

  const handleFavorite = () => {
    dispatch(addFavorite(data));
  };
  const removeFavorite = () => {
    dispatch(deleteFavoriteById(data.id));
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{data.name}</Text>
        <View style={styles.location_container}>
          <Text style={styles.location}>
            Location: {data.locations[0].name}
          </Text>
        </View>
      </View>
      <Text style={styles.about}>About</Text>
      <View style={styles.content}>
        <RenderHtml
          source={{ html: `${data.contents}` }}
          contentWidth={width}
        />
      </View>
      <View style={styles.buttons_container}>
        <TouchableOpacity style={styles.submit_button}>
          <MaterialCommunityIcons
            name="arrow-right-bold-box"
            size={24}
            color="#584632"
          />
          <Text style={{ color: "#584632" }}>Submit</Text>
        </TouchableOpacity>

        {item ? (
          <TouchableOpacity
            style={styles.remove_container}
            onPress={removeFavorite}
          >
            <Text style={styles.remove_text}>Remove Favorite</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.favorite_button}
            onPress={handleFavorite}
          >
            <MaterialCommunityIcons
              name="heart-circle-outline"
              size={24}
              color="#584632"
            />
            <Text style={{ color: "#584632" }}>Add Favorite</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

export default JobDetails;
