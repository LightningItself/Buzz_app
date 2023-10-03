import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import NavButton from "./NavButton";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { ParamListBase } from "@react-navigation/native";

// export default function Navbar({ state, descriptors, navigation }: any) {

//   return (
// <View style={styles.container}>
//   <NavButton isFocused={true} onPress={handlePress("Home")} />
//   <NavButton isFocused={true} onPress={handlePress("Explore")} />
//   <NavButton isFocused={true} onPress={handlePress("Create")} />
//   <NavButton isFocused={true} onPress={handlePress("Hives")} />
//   <NavButton isFocused={true} onPress={handlePress("Profile")} />
// </View>
//   );
// }

const styles = StyleSheet.create({
  container: { flexDirection: "row", height: 65 },
});

export default function Navbar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: any) => {
        const isFocused = state.index === index;

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate(route.name as string, { merge: true });
          }
        };

        return (
          <NavButton
            isFocused={isFocused}
            onPress={onPress}
            label={route.name}
          />
        );
      })}
    </View>
  );
}
