import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import NavButton from "./NavButton";

export default function Navbar({ state, descriptors, navigation }: any) {
  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          if (!isFocused) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };
        return (
          <NavButton isFocused={isFocused} onPress={onPress} label={label} />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", height: 50 },
});
