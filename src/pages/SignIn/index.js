import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, TextInput } from '../../components'
import { useForm } from '../../utils';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../redux/action/global';
import { signInAction } from '../../redux/action';

const SignIn = ({navigation}) => {

    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    const [form, setForm] = useForm({
        email: '',password: ''
    });

    const dispatch = useDispatch();

    const onSubmit = () => {
        dispatch(setLoading(true));
        dispatch(signInAction(form, navigation));
    }

    return (
        <View style={styles.page}>
            <Header title="Sign In" subTitle="Find your best ever meal" />
            <View style={styles.container}>
                <TextInput label="Email Address" placeholder="Type your email address" value={form.email} onChangeText={(value) => setForm('email', value)} />
                <Gap height={16}/>
                <TextInput label="Password" placeholder="Type your password" secureTextEntry  value={form.password} onChangeText={(value) => setForm('password', value)} />
                <Gap height={24}/>
                <Button buttonColor="#FFC700" text="Sign In" textButtonColor="#020202" onPress={onSubmit}/>
                <Gap height={12}/>
                <Button buttonColor="#8D92A3" text="Register" textButtonColor="#FFFFFF" onPress={() => navigation.navigate('SignUp')}/>
            </View>
        </View>
    )
}

export default SignIn

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
