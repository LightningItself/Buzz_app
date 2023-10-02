import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export type NavButtonProps = {
  isFocused: boolean;
  onPress: any;
  label: string;
};

const NavButton: React.FC<NavButtonProps> = ({ isFocused, onPress, label }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={{ color: isFocused ? "#673ab7" : "#222", ...styles.text }}>
        {label}
      </Text>
    </TouchableOpacity>
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
