import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const HiveScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hive Screen. Posts will be displayed here.</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default HiveScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
