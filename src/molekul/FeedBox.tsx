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

const FeedBox = (props : any) => {
    return (
        <View style={{height:100, width: 190, backgroundColor:'white', marginTop:10, alignItems:'center'}}>
            <View style={{height:60, width:60, backgroundColor:'red', marginBottom:5}}>
                <Image source={props.source} />
            </View>
            <Text style={{textAlign:'center', fontSize:12, color:'black', width:170}}>
                {props.title}
            </Text>
        </View>
    );
  }
  
  export default FeedBox;