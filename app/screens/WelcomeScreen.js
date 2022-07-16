import React from 'react';
import { Image, ImageBackground, StyleSheet,View, Text } from 'react-native';

import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import colors from '../config/colors';

function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.container} 
        source={require('../assets/background.jpg')} blurRadius={5}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo-red.png')} style={styles.logoImage}/>
                <AppText style={styles.sloganText}>Sell What You Don't Need</AppText>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton color={colors.primary} onPress={()=>console.log('Login Pressed')}>Login</AppButton>
                <AppButton color={colors.secondary} onPress={()=>console.log('Registered pressed')}>Register</AppButton>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'flex-end'
    },
    logoContainer:{
        position:'absolute',
        top:100,
        alignItems:'center'
    },
    logoImage:{
        height:90,
        width:90
    },
    sloganText:{
        top:10
    },
    buttonContainer:{
        width:'100%',
        padding:20
    }
})
export default WelcomeScreen;