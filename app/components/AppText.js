import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

import colors from '../config/colors';

function AppText({children, style}) {
    return (
        <Text style={[styles.container,style]}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    container:{
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
        color:colors.dark
    }
})

export default AppText;