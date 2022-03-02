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
                autoplay={true}
                inactiveSlideOpacity={1}
                inactiveSlideScale={1}
                loop={true}
                //onSnapToItem={(index: number) => this.setState({ activeIndex: index })}
              />
              </View>
            </View>
            <View style={{ height:90, width:'100%', marginTop:20, flexDirection:'row', alignItems:'center', paddingLeft:20}}>
              <ScrollView horizontal={true} style={{height:90}}>
                <View style={{height:80, width:80, backgroundColor:'white', alignItems:'center', marginRight:10, shadowColor: "#000", shadowOffset: { width: 2, height: 4, },  shadowOpacity: 0.32, shadowRadius: 5.46, elevation: 9,  }}>
                  <View style={{height:50, width:50, justifyContent:'center', alignItems:'center'}} >
                    <Image source={require('../TokoDistributor/src/image/menu/Sembako1.png')} style={{height:50, width:50}} />                   
                  </View>
                  <Text style={{fontSize:12, color:'black', marginTop:5}}>Sembako</Text>
                </View>
                <View style={{height:80, width:80, backgroundColor:'white', alignItems:'center', marginRight:10, shadowColor: "#000", shadowOffset: { width: 2, height: 4, },  shadowOpacity: 0.32, shadowRadius: 5.46, elevation: 9,  }}>
                  <View style={{height:50, width:50, justifyContent:'center', alignItems:'center'}} >
                    <Image source={require('../TokoDistributor/src/image/menu/elektronik.jpeg')} style={{height:50, width:50}} />                   
                  </View>
                  <Text style={{fontSize:12, color:'black', marginTop:5}}>Lauk Pauk</Text>
                </View>
                <View style={{height:80, width:80, backgroundColor:'white', alignItems:'center', marginRight:10, shadowColor: "#000", shadowOffset: { width: 2, height: 4, },  shadowOpacity: 0.32, shadowRadius: 5.46, elevation: 9,  }}>
                  <View style={{height:50, width:50, justifyContent:'center', alignItems:'center'}} >
                    <Image source={require('../TokoDistributor/src/image/menu/sayuran.jpeg')} style={{height:50, width:50}} />                   
                  </View>
                  <Text style={{fontSize:12, color:'black', marginTop:5}}>Sayuran</Text>
                </View>
                <View style={{height:80, width:80, backgroundColor:'white', alignItems:'center', marginRight:10, shadowColor: "#000", shadowOffset: { width: 2, height: 4, },  shadowOpacity: 0.32, shadowRadius: 5.46, elevation: 9,  }}>
                  <View style={{height:50, width:50, justifyContent:'center', alignItems:'center'}} >
                    <Image source={require('../TokoDistributor/src/image/menu/laukpauk.jpeg')} style={{height:50, width:50}} />                   
                  </View>
                  <Text style={{fontSize:12, color:'black', marginTop:5}}>Lauk Pauk</Text>
                </View>
                <View style={{height:80, width:80, backgroundColor:'white', alignItems:'center', marginRight:10, shadowColor: "#000", shadowOffset: { width: 2, height: 4, },  shadowOpacity: 0.32, shadowRadius: 5.46, elevation: 9,  }}>
                  <View style={{height:50, width:50, justifyContent:'center', alignItems:'center'}} >
                    <Image source={require('../TokoDistributor/src/image/menu/fashion.jpeg')} style={{height:50, width:50}} />                   
                  </View>
                  <Text style={{fontSize:12, color:'black', marginTop:5}}>Fashion</Text>
                </View>
                <View style={{height:80, width:80, backgroundColor:'white', alignItems:'center', marginRight:10, shadowColor: "#000", shadowOffset: { width: 2, height: 4, },  shadowOpacity: 0.32, shadowRadius: 5.46, elevation: 9,  }}>
                  <View style={{height:50, width:50, justifyContent:'center', alignItems:'center'}} >
                    <Image source={require('../TokoDistributor/src/image/menu/handphone.jpeg')} style={{height:50, width:50}} />                   
                  </View>
                  <Text style={{fontSize:12, color:'black', marginTop:5}}>Handphone</Text>
                </View>
                <View style={{height:80, width:80, backgroundColor:'white', alignItems:'center', marginRight:10, shadowColor: "#000", shadowOffset: { width: 2, height: 4, },  shadowOpacity: 0.32, shadowRadius: 5.46, elevation: 9,  }}>
                  <View style={{height:50, width:50, justifyContent:'center', alignItems:'center'}} >
                    <Image source={require('../TokoDistributor/src/image/menu/rumahtangga.jpeg')} style={{height:50, width:50}} />                   
                  </View>
                  <Text style={{fontSize:12, color:'black', marginTop:5}}>Perabotan</Text>
                </View>
                <View style={{height:80, width:80, backgroundColor:'white', alignItems:'center', marginRight:10, shadowColor: "#000", shadowOffset: { width: 2, height: 4, },  shadowOpacity: 0.32, shadowRadius: 5.46, elevation: 9,  }}>
                  <View style={{height:50, width:50, justifyContent:'center', alignItems:'center'}} >
                    <Image source={require('../TokoDistributor/src/image/menu/ibu.jpeg')} style={{height:50, width:50}} />                   
                  </View>
                  <Text style={{fontSize:12, color:'black', marginTop:5}}>Ibu & Anak</Text>
                </View>
                <View style={{height:80, width:80, backgroundColor:'white', alignItems:'center', marginRight:10, shadowColor: "#000", shadowOffset: { width: 2, height: 4, },  shadowOpacity: 0.32, shadowRadius: 5.46, elevation: 9,  }}>
                  <View style={{height:50, width:50, justifyContent:'center', alignItems:'center'}} >
                    <Image source={require('../TokoDistributor/src/image/menu/alattulis.jpeg')} style={{height:50, width:50}} />                   
                  </View>
                  <Text style={{fontSize:12, color:'black', marginTop:5}}>Alat Tulis</Text>
                </View>
                
              </ScrollView>              
            </View>

            <ScrollView style={{flex:1, width:'100%', marginTop:20, }}>
              <View style={{alignItems:'center', flexDirection:'row', flexWrap:'wrap', paddingBottom:20, paddingHorizontal:12, justifyContent:'space-between'}}>
                <View style={{height:100, width: 190, backgroundColor:'white', marginTop:10, alignItems:'center'}}>
                  <View style={{height:60, width:60, backgroundColor:'red', marginBottom:5}}>
                    <Image source={require('./src/image/feed/1.png')} />
                  </View>
                  <Text style={{textAlign:'center', fontSize:12, color:'black', width:170}}>
                    Rp.56.000 Dress Gwan
                  </Text>
                </View>

                <View style={{height:100, width: 190, backgroundColor:'white', marginTop:10, alignItems:'center'}}>
                  <View style={{height:60, width:60, backgroundColor:'red', marginBottom:5}}>
                    <Image source={require('./src/image/feed/2.png')} />
                  </View>
                  <Text style={{textAlign:'center', fontSize:12, color:'black', width:170}}>
                    Rp.115.000 Dress Regina
                  </Text>
                </View>
                
                <View style={{height:100, width: 190, backgroundColor:'white', marginTop:10, alignItems:'center'}}>
                  <View style={{height:60, width:60, backgroundColor:'red', marginBottom:5}}>
                    <Image source={require('./src/image/feed/3.png')} />
                  </View>
                  <Text style={{textAlign:'center', fontSize:12, color:'black', width:170}}>
                    Rp. 124.000 Dziner826
                  </Text>
                </View>

                <View style={{height:100, width: 190, backgroundColor:'white', marginTop:10, alignItems:'center'}}>
                  <View style={{height:60, width:60, backgroundColor:'red', marginBottom:5}}>
                    <Image source={require('./src/image/feed/4.png')} />
                  </View>
                  <Text style={{textAlign:'center', fontSize:12, color:'black', width:170}}>
                    Rp. 105.000 JBL Speaker
                  </Text>
                </View>

                <View style={{height:100, width: 190, backgroundColor:'white', marginTop:10, alignItems:'center'}}>
                  <View style={{height:60, width:60, backgroundColor:'red', marginBottom:5}}>
                    <Image source={require('./src/image/feed/5.png')} />
                  </View>
                  <Text style={{textAlign:'center', fontSize:12, color:'black', width:170}}>
                    Rp. 95.000 Karet 2 Kepala
                  </Text>
                </View>

                <View style={{height:100, width: 190, backgroundColor:'white', marginTop:10, alignItems:'center'}}>
                  <View style={{height:60, width:60, backgroundColor:'red', marginBottom:5}}>
                    <Image source={require('./src/image/feed/6.png')} />
                  </View>
                  <Text style={{textAlign:'center', fontSize:12, color:'black', width:170}}>
                    Rp. 90.000 QuickShine
                  </Text>
                </View>

                <View style={{height:100, width: 190, backgroundColor:'white', marginTop:10, alignItems:'center'}}>
                  <View style={{height:60, width:60, backgroundColor:'red', marginBottom:5}}>
                    <Image source={require('./src/image/feed/7.png')} />
                  </View>
                  <Text style={{textAlign:'center', fontSize:12, color:'black', width:170}}>
                    Rp. 105.000 Saklar Lampu
                  </Text>
                </View>

                <View style={{height:100, width: 190, backgroundColor:'white', marginTop:10, alignItems:'center'}}>
                  <View style={{height:60, width:60, backgroundColor:'red', marginBottom:5}}>
                    <Image source={require('./src/image/feed/8.png')} />
                  </View>
                  <Text style={{textAlign:'center', fontSize:12, color:'black', width:170}}>
                    Rp. 82.000 Skmei 1823 
                  </Text>
                </View>

                <View style={{height:100, width: 190, backgroundColor:'white', marginTop:10, alignItems:'center'}}>
                  <View style={{height:60, width:60, backgroundColor:'red', marginBottom:5}}>
                    <Image source={require('./src/image/feed/9.png')} />
                  </View>
                  <Text style={{textAlign:'center', fontSize:12, color:'black', width:170}}>
                    Rp. 74.000 Stelan Anak Pedal 
                  </Text>
                </View>

                <View style={{height:100, width: 190, backgroundColor:'white', marginTop:10, alignItems:'center'}}>
                  <View style={{height:60, width:60, backgroundColor:'red', marginBottom:5}}>
                    <Image source={require('./src/image/feed/10.png')} />
                  </View>
                  <Text style={{textAlign:'center', fontSize:12, color:'black', width:170}}>
                    Rp. 22.500 Taffpack Lakban 
                  </Text>
                </View>
                
              </View>
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
