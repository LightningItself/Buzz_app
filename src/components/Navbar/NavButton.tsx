import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import { Octicons } from "@expo/vector-icons";
import { NavigationHelpers, ParamListBase } from "@react-navigation/native";
import { BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs";

export type NavButtonProps = {
  isFocused: boolean;
  onPress: any;
  label: string;
};

const NavButton: React.FC<NavButtonProps> = ({ isFocused, onPress, label }) => {
  const icon =
    label === "Home"
      ? "home"
      : label === "Explore"
      ? "search"
      : label === "Create"
      ? "duplicate"
      : label === "Hives"
      ? "heart"
      : "person";
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Octicons name={icon} size={24} color={isFocused ? "white" : "gray"} />
    </Pressable>
  );
};

export default NavButton;

const styles = StyleSheet.create({
  container: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  text: {
    fontSize: 12,
  },
});
