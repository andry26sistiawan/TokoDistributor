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

import Carousel from 'react-native-snap-carousel';

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
        url : require('../TokoDistributor/src/image/carousel/banner1.png')
      },
      {
        title: "Item 3",
        url : require('../TokoDistributor/src/image/carousel/banner1.png')
      },
      {
        title: "Item 4",
        url : require('../TokoDistributor/src/image/carousel/banner1.png')
      },
      {
        title: "Item 5",
        url : require('../TokoDistributor/src/image/carousel/banner1.png')
      },
    ]
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

            <View style={{height:40, width:345, marginTop:40, borderRadius:6, borderWidth:1, borderColor:'#BED0D6', flexDirection:'row'}}>
              <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
                <View style={{marginLeft:10, }}>
                  <Image source={require('../TokoDistributor/src/image/icons/search.png')} style={{height:25, width:25}} />
                </View>
                <View style={{marginLeft:10}}>
                  <Text style={{color:'#80898B', }}>Search</Text>
                </View>
              </View>
              <View style={{flex:1, alignItems:'flex-end', justifyContent:'center', paddingRight:10}}>
                <Image source={require('../TokoDistributor/src/image/icons/mic.png')} style={{height:25, width:25}} />
              </View>
            </View>

            <View style={{height:100, width:'100%', marginTop:20, justifyContent:'center', alignItems:'center'}}>
              <View style={{height:100, width:350, justifyContent:'center', alignItems:'center'}}>
                <Carousel
                ref={this.ref}
                data={this.state.carouselItems}
                renderItem={this._renderItem}
                itemWidth={350}
                sliderWidth={350}
                onSnapToItem={(index: number) => this.setState({ activeIndex: index })}
              />
              </View>
            </View>

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
  

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
