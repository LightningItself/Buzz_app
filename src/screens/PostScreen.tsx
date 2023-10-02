import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const PostScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Post Screen. Post Data and subPosts will be displayed here.</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
