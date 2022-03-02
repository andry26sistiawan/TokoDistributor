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
import FeedBox from '../../molekul/FeedBox';
import MenuBox from '../../molekul/MenuBox';

interface FeedHomeState{
    dataMenu : any;
  };

class FeedHome extends Component<any, any>{
    state: FeedHomeState = {
        dataMenu : [
                {
                    title: "Rp.56.000 Dress Gwan",
                    Source : require('../../image/feed/1.png')
                },
                {
                    title: "Rp.115.000 Dress Regina",
                    Source : require('../../image/feed/2.png')
                },
                {
                    title: "Rp. 124.000 Dziner826",
                    Source : require('../../image/feed/3.png')
                },
                {
                    title: "Rp. 105.000 JBL Speaker",
                    Source : require('../../image/feed/4.png')
                },
                {
                    title: "Rp. 95.000 Karet 2 Kepala",
                    Source : require('../../image/feed/5.png')
                },
                {
                    title: "Rp. 90.000 QuickShine",
                    Source : require('../../image/feed/6.png')
                },
                {
                    title: "Rp. 105.000 Saklar Lampu",
                    Source : require('../../image/feed/7.png')
                },
                {
                    title: "Rp. 82.000 Skmei 1823",
                    Source : require('../../image/feed/8.png')
                },
                {
                    title: "Rp. 74.000 Stelan Anak Pedal",
                    Source : require('../../image/feed/9.png')
                },
                {
                    title: "Alat TulisRp. 22.500 Taffpack Lakban",
                    Source : require('../../image/feed/10.png')
                },
            ],

    };


    render(){
        return(
            <View style={{alignItems:'center', flexDirection:'row', flexWrap:'wrap', paddingBottom:20, paddingHorizontal:12, justifyContent:'space-between'}}>
              
                    {
                        this.state.dataMenu.map((y : any) => {
                            return (<FeedBox title={y.title} source ={y.Source} />)
                        })
                    }            
            </View>
        )
    }
}

export default FeedHome;
