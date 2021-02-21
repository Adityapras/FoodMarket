import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView} from 'react-native'
import { Button, Gap, Header, TextInput } from '../../components'
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from '../../utils';
import { Value } from 'react-native-reanimated';

const SignUp = ({navigation}) => {

    const [form, setForm] = useForm({
        name: '',
        email: '',
        password: '',
    });

    const dispatch = useDispatch();

    const onSubmit = () => {
        dispatch({type: 'SET_REGISTER', value: form});
        navigation.navigate('Address')
    }

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
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
                    <TextInput label="Full Name" value={form.name} onChangeText={(value) => setForm('name', value)} placeholder="Type your fullname"/>
                    <Gap height={16}/>
                    <TextInput label="Email Address" value={form.email} onChangeText={(value) => setForm('email', value)} placeholder="Type your email address"/>
                    <Gap height={16}/>
                    <TextInput label="Password"  secureTextEntry value={form.password} onChangeText={(value) => setForm('password', value)} placeholder="Type your password"/>
                    <Gap height={16}/>
                    <Button buttonColor="#FFC700" text="Continue" textButtonColor="#020202" onPress={onSubmit}/>
                </View>
            </View>
        </ScrollView>
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
