import { createDrawerNavigator } from "@react-navigation/drawer";
import Favorites from "./src/pages/Favorites/Favorites";
import JobsList from "./src/pages/JobsList/JobsList";
import { NavigationContainer } from "@react-navigation/native";

import "react-native-gesture-handler";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="JobsList" component={JobsList} />
        <Drawer.Screen name="Favorites" component={Favorites} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
