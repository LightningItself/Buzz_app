import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Post from "../components/Post/Post";

const PostScreen = () => {
  return (
    <View style={styles.container}>
      <Post userData={{
        displayImage: ""
      }} />
      
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
    // justifyContent: "center",
  },
});
