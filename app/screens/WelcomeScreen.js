import React from 'react';
import { Image, ImageBackground, StyleSheet,View, Text } from 'react-native';

import AppText from '../components/AppText';

function WelcomeScreen(props) {
    return (
        <ImageBackground style={styles.container} 
        source={require('../assets/background.jpg')} blurRadius={5}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo-red.png')} style={styles.logoImage}/>
                <AppText style={styles.sloganText}>Sell What You Don't Need</AppText>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'green',
        alignItems:'center'
    },
    logoContainer:{
        position:'absolute',
        top:70,
        alignItems:'center'
    },
    logoImage:{
        height:90,
        width:90
    },
    sloganText:{
        top:10
    }
})
export default WelcomeScreen;