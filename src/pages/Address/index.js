import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Button, Gap, Header, Select, TextInput } from '../../components';
import { useForm, showMessage } from '../../utils';
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';
import { setLoading, singUpAction } from '../../redux/action';

const Address = ( {navigation} ) => {

    const [form, setForm] = useForm({
        phoneNumber: '',
        address: '',
        houseNumber: '',
        city: 'Jakarta'
    });

    const dispatch            = useDispatch();
    const {registerReducer, photoReducer} = useSelector((state) => state);

    const onSubmit = () => {
        
        dispatch({type: 'SET_ADDRESS', value: form});

        const data = { ...form, ...registerReducer}

        dispatch(setLoading(true));

        dispatch(singUpAction(data, photoReducer, navigation));
    }

    return (
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <View style={styles.page}>
                <Header title="Address" subTitle="Make sure it's valid" onBack={() => navigation.goBack()}/>
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
