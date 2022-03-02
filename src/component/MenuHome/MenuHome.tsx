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
import MenuBox from '../../molekul/MenuBox';

interface MenuHomeState{
    dataMenu : any;
  };

class MenuHome extends Component<any, any>{
    state: MenuHomeState = {
        dataMenu : [
                {
                    title: "Sembako",
                    Source : require('../../image/menu/Sembako1.png')
                },
                {
                    title: "ElekTronik",
                    Source : require('../../image/menu/elektronik.jpeg')
                },
                {
                    title: "Sayuran",
                    Source : require('../../image/menu/sayuran.jpeg')
                },
                {
                    title: "Lauk Pauk",
                    Source : require('../../image/menu/laukpauk.jpeg')
                },
                {
                    title: "Fashion",
                    Source : require('../../image/menu/fashion.jpeg')
                },
                {
                    title: "Handphone",
                    Source : require('../../image/menu/handphone.jpeg')
                },
                {
                    title: "Perabotan",
                    Source : require('../../image/menu/rumahtangga.jpeg')
                },
                {
                    title: "Ibu & Anak",
                    Source : require('../../image/menu/ibu.jpeg')
                },
                {
                    title: "Alat Tulis",
                    Source : require('../../image/menu/alattulis.jpeg')
                },
            ],

    };


    render(){
        return(
            <View style={{ height:90, width:'100%', marginTop:20, flexDirection:'row', alignItems:'center', paddingLeft:20}}>
              <ScrollView horizontal={true} style={{height:90}}>
                    {
                        this.state.dataMenu.map((y : any) => {
                            return (<MenuBox key={y.source} title={y.title} source ={y.Source} />)
                        })
                    }
              </ScrollView>              
            </View>
        )
    }
}

export default MenuHome;
