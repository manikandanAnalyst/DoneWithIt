import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import AppText from './AppText';

function AppButton({children,color,onPress}) {
    return (
        <TouchableOpacity style={[styles.container,{backgroundColor:color}]} onPress={onPress}>
            <AppText>{children}</AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
   container:{
    width:'80%',
    borderRadius:10,
    height:40,
    backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    marginBottom:10
   } 
})

export default AppButton;