import { Image, Text, View, StyleSheet, Button, Pressable } from "react-native"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { faHeart, faComments } from "@fortawesome/free-regular-svg-icons"


export default function Post(props: any) {
    const postImage: Function = () => {
        if (props.userData.displayImage !== "j") return (
            <Image source={require('../../../assets/test/Profile.jpg')} style={[styles.division, styles.displayImage]}/> 
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.horStack}>
                <Image source={require('../../../assets/test/Profile.jpg')} style={styles.profileImage}></Image>
                <View style={styles.username}>
                    <Text>Anugrah Gupta</Text>
                </View>
            </View>
            <View style={styles.division}>
                <Text style={styles.caption}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</Text>
            </View>
            {postImage()}
            <View style={styles.horStack}>
                <Pressable onPress={() => console.log('like')}>
                    <FontAwesomeIcon icon={faHeart} />
                </Pressable>
                <Pressable onPress={() => console.log('comment')}>
                    <FontAwesomeIcon icon={faComments} />
                </Pressable>
            </View>
            <View style={styles.division}>
                <Text>comment section</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: '100%',

    },
    division: {
        flexDirection: 'column',
    },
    horStack: {
        flexDirection: 'row',
        width: '100%'
    },
    profileImage: {
        height: 50,
        width: 50,
        borderRadius: 100,
        margin: 10
    },
    username: {
        justifyContent: 'center',
        margin: 10
    },
    caption: {
        margin: 10,
    },
    displayImage: {
        height: '70%',
        width: '100%'
    },
    buttons: {
        margin: 10
    },
    reactionPanel: {
        
    },
    commemts: {
       
    }
})