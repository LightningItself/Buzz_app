import { Image, Text, View, StyleSheet, Button, Pressable } from "react-native"
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { useState } from "react"

export type PostProps = {
    postData: any;
}

const Post:React.FC<PostProps> = ({postData}) => {
    return (
        <View style={styles.container}>
            <View style={styles.horStack}>
                <Image source={require('../../../assets/test/Profile.jpg')} style={styles.profileImage}></Image>
                <View style={styles.username}>
                    <Text>Anugrah Gupta</Text>
                </View>
            </View>
            <View style={styles.division}>
                <Text style={[styles.caption, {marginTop: 0}]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</Text>
            </View>
            {postData.displayImage !== "" && <Image source={require('../../../assets/test/Profile.jpg')} style={[styles.division, styles.displayImage]} />}
            <View style={styles.horStack}>
                <Pressable onPress={() => {}}>
                    <Ionicons name="heart-outline" style={styles.buttons} size={30} color="black" />
                </Pressable>
                <Pressable onPress={() => {}}>
                    <FontAwesome name="mail-reply" style={[styles.buttons, {marginTop: 5}]} size={25} color="black" />
                </Pressable>
            </View>
            <View style={styles.division}>
                <Text>comment section</Text>
            </View>
        </View>
    )
}

export default Post;

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
        marginRight: 2.5,
        marginLeft: 10
    }
})