import { createDrawerNavigator } from "@react-navigation/drawer";
import Favorites from "./src/pages/Favorites/Favorites";
import JobsList from "./src/pages/JobsList/JobsList";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import CustomDrawer from "./src/components/CustomDrawer/CustomDrawer";
import JobDetail from "./src/pages/JobsList/JobDetail/JobDetail";

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

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
          headerShown: false,
        }}
        drawerContent={(props) => <CustomDrawer {...props} />}
      >
        <Drawer.Screen name="JobsList" component={JobsStack} />
        <Drawer.Screen name="Favorites" component={FavoritesStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const JobsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#138C82" },
        headerTitleStyle: { color: "#F0EECD" },
        headerTintColor: "#F0EECD",
      }}
    >
      <Stack.Screen name="JobsList" component={JobsList} />
      <Stack.Screen name="JobDetail" component={JobDetail} />
    </Stack.Navigator>
  );
};
const FavoritesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#138C82" },
        headerTitleStyle: { color: "#F0EECD" },
        headerTintColor: "#F0EECD",
      }}
    >
      <Stack.Screen name="Favorites " component={Favorites} />
    </Stack.Navigator>
  );
};
