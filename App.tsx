/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

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

// import Carousel from 'react-native-snap-carousel';
import { CarouselHome, FeedHome, MenuHome, SearchHome } from './src/component';

interface homeProps {

};

interface homeState{
  count : number;
  carouselItems : any;
  activeIndex : number;
};

interface ItemProps {
  title: string;
  url: any;
}

class App extends Component<homeProps, homeState>{
  ref = React.createRef<any>();
  state: homeState = {
    count: 0,
    activeIndex: 0,
    carouselItems: [
      {
        title: "Item 1",
        url : require('../TokoDistributor/src/image/carousel/banner1.png')
      },
      {
        title: "Item 2",
        url : require('../TokoDistributor/src/image/carousel/banner2.png')
      },
      {
        title: "Item 3",
        url : require('../TokoDistributor/src/image/carousel/banner3.png')
      },
      {
        title: "Item 4",
        url : require('../TokoDistributor/src/image/carousel/banner4.png')
      },
      {
        title: "Item 5",
        url : require('../TokoDistributor/src/image/carousel/banner5.png')
      },
    ],
  };
  

  _renderItem = ({item , index} : { item: ItemProps; index: number }) => {
      return (
          <View style={{height:100, width:350, backgroundColor:'white'}}>
              <Image source={item.url} style={{height:100, width:350}} />
          </View>
      );
  }
  render(){
    return(
      <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
        <View style={{flex:1}}>
          <View style={{flex:1, alignItems:'center'}}>
            <SearchHome /> 
            <CarouselHome />
            <MenuHome />

            <ScrollView style={{flex:1, width:'100%', marginTop:20, }}>
              <FeedHome /> 
            </ScrollView>
            

          </View>

          <View style={{backgroundColor:'yellow', width:'100%', height:50, flexDirection:'row', borderTopWidth:1, borderTopColor:'#C4C4C4'}}>
            <View style={{backgroundColor:'white', flex:1, justifyContent:'center', alignItems:'center'}}>
              <Text>Galeri</Text>
            </View>
            <View style={{backgroundColor:'white', flex:1, justifyContent:'center', alignItems:'center'}}>
              <Text>Contact</Text>
            </View>
          </View>
          
        </View>
        
      </SafeAreaView>
    )
  }
}
  

export default App;
