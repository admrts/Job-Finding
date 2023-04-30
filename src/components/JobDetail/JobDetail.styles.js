import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#F0EECD",
    padding: 10,
  },
  header: {},
  title: {
    fontWeight: "700",
    fontSize: 30,
    color: "#584632",
  },
  location_container: {
    alignSelf: "flex-start",
    backgroundColor: "#D94B25",
    padding: 10,
    borderRadius: 7,
    marginTop: 10,
  },
  location: {
    color: "#F0EECD",
  },
  about: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: "700",
  },
  content: {},
  buttons_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    gap: 5,
  },
  submit_button: {
    backgroundColor: "#F19C33",
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    flexDirection: "row",
    gap: 5,
  },
  favorite_button: {
    backgroundColor: "#D94B25",
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 7,
    flexDirection: "row",
    gap: 5,
  },
});
