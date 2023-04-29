import { View, Text } from "react-native";
import styles from "./JobCard.styles";

const JobCard = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.company_name}>{data.company.name}</Text>

      <View style={styles.location_container}>
        <Text style={styles.location_text}>{data.locations[0].name}</Text>
      </View>

      <Text style={styles.level}>{data.levels[0].name}</Text>
    </View>
  );
};

export default JobCard;
