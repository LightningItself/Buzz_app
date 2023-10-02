import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HiveScreen from "./src/screens/HiveScreen";
import PostScreen from "./src/screens/PostScreen";
import Navbar from "./src/components/Navbar/Navbar";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props) => <Navbar {...props} />}>
        <Tab.Screen name="Hive" component={HiveScreen} />
        <Tab.Screen name="Post" component={PostScreen} />
        <Tab.Screen name="Test" component={PostScreen} />
        <Tab.Screen name="Test1" component={PostScreen} />
        <Tab.Screen name="Test2" component={PostScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
