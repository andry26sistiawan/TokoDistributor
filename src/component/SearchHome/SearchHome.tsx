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


class SearchHome extends Component<any, any>{
    render(){
        return(
            <View style={{height:40, width:345, marginTop:40, borderRadius:6, borderWidth:1, borderColor:'#BED0D6', flexDirection:'row'}}>
              <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
                <View style={{marginLeft:10, }}>
                  <Image source={require('../../image/icons/search.png')} style={{height:25, width:25}} />
                </View>
                <View style={{marginLeft:10}}>
                  <Text style={{color:'#80898B', }}>Search</Text>
                </View>
              </View>
              <View style={{flex:1, alignItems:'flex-end', justifyContent:'center', paddingRight:10}}>
                <Image source={require('../../image/icons/mic.png')} style={{height:25, width:25}} />
              </View>
            </View>
        )
    }
}

export default SearchHome;