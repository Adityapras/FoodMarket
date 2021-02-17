import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, TextInput } from '../../components'

const SignUp = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header title="Sign Up" subTitle="Register and eat" onBack={() => {}}/>
            <View style={styles.container}>
                <View style={styles.photo}>
                    <View style={styles.borderPhoto}>
                        <View style={styles.photoContainer}>
                            <Text style={styles.addPhoto}>Add Photo</Text>
                        </View>
                    </View>
                </View>
                <TextInput label="Full Name" placeholder="Type your fullname"/>
                <Gap height={16}/>
                <TextInput label="Email Address" placeholder="Type your email address"/>
                <Gap height={16}/>
                <TextInput label="Password" placeholder="Type your password"/>
                <Gap height={16}/>
                <Button buttonColor="#FFC700" text="Continue" textButtonColor="#020202" onPress={() => navigation.navigate('Address')}/>
            </View>
        </View>
    )
}

export default SignUp;

const styles = StyleSheet.create({
    page : {
        flex: 1
    },
    container : {
        backgroundColor: 'white', 
        paddingHorizontal : 24, 
        paddingVertical : 24,
        paddingTop: 26,
        marginTop : 24,
        flex : 1
    },
    addPhoto :  {
        color : '#8D92A3',
        fontFamily : 'Poppins-Light',
        textAlign : 'center',
        fontSize : 14
    },
    photoContainer : {
        backgroundColor : '#F0F0F0',
        padding : 24,
        borderRadius : 90, 
        height : 90,
        width : 90
    },
    borderPhoto : {
        height : 110,
        width : 110,
        borderRadius: 110,
        borderColor : '#8D92A3',
        borderStyle:'dashed',
        borderWidth : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    photo : {
        alignItems : 'center',
        marginBottom : 16,
        marginTop: 26
    }
})
