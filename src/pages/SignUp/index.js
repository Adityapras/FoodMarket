import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image} from 'react-native'
import { Button, Gap, Header, TextInput } from '../../components'
import { useSelector, useDispatch } from 'react-redux';
import { useForm, showMessage } from '../../utils';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const SignUp = ({navigation}) => {

    const [form, setForm] = useForm({
        name: '',
        email: '',
        password: '',
    });

    const [photo, setPhoto] = useState('');

    const dispatch = useDispatch();

    const onSubmit = () => {
        dispatch({type: 'SET_REGISTER', value: form});
        navigation.navigate('Address')
    }

    // function upload photo 
    const addPhoto =  () => {

        const options = {
            quality: 0.5,
            maxWidth: 200,
            maxHeight: 200
        }

        launchImageLibrary(options, (response) => {
          
             if (response.didCancel || response.error) {
                 showMessage('Anda belum memilih photo');
             }  else {
                 
               const source = {uri: response.uri};

               const dataImage = {
                   uri: response.uri,
                   type: response.type,
                   name: response.fileName
               };

               setPhoto(source);
               dispatch({type: 'SET_PHOTO', value: dataImage });
               dispatch({type: 'SET_UPLOAD_STATUS', value: {isUploadPhoto : true}});
             }
          });
    }
    
    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.page}>
                <Header title="Sign Up" subTitle="Register and eat" onBack={() => {}}/>
                <View style={styles.container}>
                    <View style={styles.photo}>
                        <TouchableOpacity onPress={addPhoto}>
                            <View style={styles.borderPhoto}>
                                {
                                    photo ? ( <Image style={styles.photoContainer} source = {photo}/>) 
                                    : <View style={styles.photoContainer}> 
                                          <Text style = {styles.addPhoto}> Add Photo </Text> 
                                      </View> 
                                }
                              
                            </View>
                        </TouchableOpacity>
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
