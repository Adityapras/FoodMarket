import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Gap } from '../../atoms';
import { Header } from '../../molecules';
import OrderTabSection  from '../OrderTabSection';

const ExistOrder = () => {
    return (
        <View style={styles.page}>
            <Header title='Your Orders' subTitle='Wait for the best meal' onBack={false} />
            <Gap height={24}/>
            <OrderTabSection />
        </View>
    )
}

export default ExistOrder;

const styles = StyleSheet.create({
    page: {
        flex: 1
    }
})
