import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button, Gap, Header, Select, TextInput } from '../../components';
import { useForm, showMessage } from '../../utils';
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';

const Address = ( {navigation} ) => {

    const [form, setForm] = useForm({
        phoneNumber: '',
        address: '',
        houseNumber: '',
        city: 'Jakarta'
    });

    const dispatch            = useDispatch();
    const {registerReducer, photoReducer} = useSelector((state) => state);
    const urlApi              = 'http://10.0.2.2:80/food-market-backend/public/api';

    const onSubmit = () => {
        
        dispatch({type: 'SET_ADDRESS', value: form});

        const data = { ...form, ...registerReducer}

        dispatch({type: 'SET_LOADING', value: true});

        //send data to api 
        Axios.post(urlApi + '/register', data).then((res) => {
                
             
                // if using upload photo
                if (photoReducer.isUploadPhoto) {
                    
                    const photoForUpload = new FormData();
                    photoForUpload.append('file', photoReducer);
    
                    // upload photo to api 
                    Axios.post(urlApi + '/user/photo', photoForUpload, {
                        headers: {
                            'Authorization': `${res.data.data.token_type} ${res.data.data.access_token}`,
                            'Content-Type': 'multipart/form-data'
                        }
                    }).then((responseUpload) => {
                        console.log('succes upload', responseUpload);
                    }).catch((err) => {
                        showMessage('upload photo failed');
                    })
                }

                showMessage('register success', 'success');
                dispatch({
                    type: 'SET_LOADING',
                    value: false
                });
                // navigation.replace('SignUpFinish')
            })
            .catch((err) => {
                dispatch({
                    type: 'SET_LOADING',
                    value: false
                });
                showMessage(`${err?.response?.data?.data?.message}`);
            });
    }

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.page}>
                <Header title="Address" subTitle="Make sure it's valid" onBack={() => {}}/>
                <View style={styles.container}>
                    <TextInput label="Phone No." value={form.name} onChangeText={(value) => setForm('phoneNumber', value)} placeholder="Type your phone number"/>
                    <Gap height={16}/>
                    <TextInput label="Address" value={form.address} onChangeText={(value) => setForm('address', value)} placeholder="Type your address"/>
                    <Gap height={16}/>
                    <TextInput label="House No" value={form.houseNumber} onChangeText={(value) => setForm('houseNumber', value)} placeholder="Type your house number"/>
                    <Gap height={16}/>
                    <Select value={form.city} onSelectChange={(value) => setForm('city', value)} label="City" />
                    <Gap height={16}/>
                    <Button buttonColor="#FFC700" text="Sign Up Now" textButtonColor="#020202" onPress={onSubmit}/>
                </View>
            </View>
        </ScrollView>
        
    )
}

export default Address;

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
    }
})
