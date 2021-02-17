import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native'
import { ProfileDummyFull } from '../../assets';
import { Gap, ProfileTabSection } from '../../components';

const Profile = () => {
    return (
        <View style={styles.page}>
            <View style={styles.container}>
                <View style={styles.borderOutline}>
                    <Image style={styles.photo} source={ ProfileDummyFull }/>
                </View>
                <Text style={styles.name}>Wanda Vision</Text>
                <Text style={styles.email}>Wanda@gmail.com</Text>
            </View>
            <Gap height={24}/>
            <ProfileTabSection />
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    page:{
        flex:1,
    },
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingTop: 26,
    },  
    photo: {
        height: 90,
        width: 90,
        borderRadius: 90
    },
    borderOutline:{
        padding: 10,
        borderColor: '#8D92A3',
        borderWidth: 1,
        width: 110,
        height: 110,
        borderRadius: 110,
        borderStyle : 'dashed'
    },
    name:{
        fontSize: 18,
        fontFamily: 'Poppins-Regular',
        color: '#020202',
        marginBottom: 6
    },
    email:{
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#8D92A3',
        marginBottom: 26
    }
})
