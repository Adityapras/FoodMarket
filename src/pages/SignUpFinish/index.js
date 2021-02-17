import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FinishLogo } from '../../assets';
import { Button, Gap, Header, TextInput } from '../../components'


const SignUpFinish = ( {navigation} ) => {
    return (
        <View style={styles.page}>
            <FinishLogo />
            <Gap height={30}/>
            <Text style={styles.title}>Yeay! Completed</Text>
            <Text style={styles.subTitle}>Now you are able to order</Text>
            <Text style={styles.subTitle}>some foods as a self-reward</Text>
            <Gap height={30}/>

            <View style={styles.buttonContainer}>
                <Button buttonColor="#FFC700" text="Find Foods" textButtonColor="#020202" onPress={() => navigation.replace('MainApp')}/>
            </View>
        </View>
    )
}

export default SignUpFinish;

const styles = StyleSheet.create({
    page : {
        flex: 1,
        alignItems : 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize : 20,
        fontFamily: 'Poppins-Regular',
        color:'#020202'
    },
    subTitle : {
        fontSize : 14,
        fontFamily: 'Poppins-Regular',
        color : '#8D92A3'
    },
    buttonContainer:{
        width:'100%',
        paddingHorizontal: 80
    }
})
