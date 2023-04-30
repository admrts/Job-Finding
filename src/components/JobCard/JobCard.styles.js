import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "column",
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderColor: "#584632",
    borderRadius: 5,
    gap: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
    color: "#584632",
  },
  company_name: {
    color: "#584632",
  },
  location_container: {
    alignSelf: "flex-start",
    backgroundColor: "#D94B25",
    padding: 5,
    borderRadius: 5,
  },
  location_text: {
    color: "#F0EECD",
  },
  level: {
    alignSelf: "flex-end",
    color: "#584632",
    fontWeight: "700",
  },
  remove_container: {
    backgroundColor: "#F44336",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 7,
  },
  remove_text: {
    color: "#F0EECD",
  },
});
