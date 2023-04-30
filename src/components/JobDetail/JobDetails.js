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

const JobDetails = ({ data }) => {
  const { width } = useWindowDimensions();
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
        <TouchableOpacity style={styles.favorite_button}>
          <MaterialCommunityIcons
            name="heart-circle-outline"
            size={24}
            color="#584632"
          />
          <Text style={{ color: "#584632" }}>Add Favorite</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default JobDetails;
