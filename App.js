import { createDrawerNavigator } from "@react-navigation/drawer";
import Favorites from "./src/pages/Favorites/Favorites";
import JobsList from "./src/pages/JobsList/JobsList";
import { NavigationContainer } from "@react-navigation/native";

import "react-native-gesture-handler";
import CustomDrawer from "./src/components/CustomDrawer/CustomDrawer";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#138C82" },
          headerTitleStyle: { color: "#F0EECD" },
          headerTintColor: "#F0EECD",
          drawerActiveTintColor: "#F0EECD",
          drawerActiveBackgroundColor: "#584632",
        }}
        drawerContent={(props) => <CustomDrawer {...props} />}
      >
        <Drawer.Screen name="JobsList" component={JobsList} />
        <Drawer.Screen name="Favorites" component={Favorites} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
