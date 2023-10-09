import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from "../Colors";

export type LoginProps = {

}

const LoginScreen: React.FC<LoginProps> = () => {
    return (
        <View style={styles.container}>
            <View style={styles.tiltedView}>
            </View>
            <MaterialCommunityIcons name="wechat" style={styles.logo} size={150} color={Colors.white} />
            <TouchableOpacity style={styles.button} onPress={() => console.log("clicked")}>
                <View style={styles.buttonContent}>
                    <FontAwesome name="google" size={24} color="black" />
                    <Text style={styles.buttonText}>Sign in with Google</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.loginBackground1,
      alignItems: "center",
    },
    tiltedView: {
        backgroundColor: Colors.loginBackground2,
        marginTop: '-150%',
        marginLeft: '-50%',
        height: '150%',
        width: '150%',
        transform: [{rotate: '45deg'}]
    },
    button: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 2,
      },
      buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      buttonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 10,
      },
      logo: {
        marginTop: '50%',
        position: 'absolute'
      }
  });