import { ScrollView, Text, useWindowDimensions, View } from "react-native";
import RenderHtml from "react-native-render-html";
import styles from "./JobDetail.styles";

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
      <RenderHtml source={{ html: `${data.contents}` }} contentWidth={width} />
    </ScrollView>
  );
};

export default JobDetails;
