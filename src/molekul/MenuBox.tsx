import React, { Component } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
//require('../image/menu/elektronik.jpeg'

const MenuBox = (props : any) => {
    return (
        <View style={{height:80, width:80, backgroundColor:'white', alignItems:'center', marginRight:10, shadowColor: "#000", shadowOffset: { width: 2, height: 4, },  shadowOpacity: 0.32, shadowRadius: 5.46, elevation: 9,  }}>
            <View style={{height:50, width:50, justifyContent:'center', alignItems:'center'}} >
                <Image source={props.source} style={{height:50, width:50}} />                   
            </View>
            <Text style={{fontSize:12, color:'black', marginTop:5}}>{props.title}</Text>
        </View>
    );
  }
  
  export default MenuBox;