import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ProfileDummy } from '../../../assets';
import { getData } from '../../../utils';


const HomeProfile = () => {

    const [photo, setPhoto] = useState(ProfileDummy);

    useEffect(() => {
        getData('userProfile').then((res) => {
            setPhoto({uri: res.profile_photo_url});
        });
    }, []);

    return (
        <View style={styles.profileContainer}>
            <View>
                <Text style={styles.appName}>Food Market</Text>
                <Text style={styles.description}>Let's get some foods</Text>
            </View>
            <Image source={ photo } style={styles.profile} />
        </View>
    )
}

export default HomeProfile;

const styles = StyleSheet.create({
    profileContainer : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingTop: 32,
        paddingBottom: 24,
        backgroundColor: 'white'
    },
    profile : {
        width : 50,
        height: 50,
        borderRadius : 8
    },
    appName : { 
        fontSize: 22, fontFamily: 'Poppins-Medium', color: '#020202'
    },
    description : {
        fontSize: 14, fontFamily: 'Poppins-Light', color: '#8D92A3'
    },
})
