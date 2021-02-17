import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button, Gap, Header, Select, TextInput } from '../../components'

const Address = ( {navigation} ) => {
    return (
        <View style={styles.page}>
            <Header title="Address" subTitle="Make sure it's valid" onBack={() => {}}/>
            <View style={styles.container}>
                <TextInput label="Phone No." placeholder="Type your phone number"/>
                <Gap height={16}/>
                <TextInput label="Address" placeholder="Type your address"/>
                <Gap height={16}/>
                <TextInput label="House No" placeholder="Type your house number"/>
                <Gap height={16}/>
                <Select label="City" />
                <Gap height={16}/>
                <Button buttonColor="#FFC700" text="Sign Up Now" textButtonColor="#020202" onPress={() => navigation.replace('SignUpFinish')}/>
            </View>
        </View>
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
