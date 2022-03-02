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

 interface caraouselState{
    carouselItems : any;
  };
  
  interface ItemProps {
    title: string;
    url: any;
  }
  interface haProps{

  }

class CarouselHome extends Component<any, any>{
    ref = React.createRef<any>();
    state: caraouselState = {
      carouselItems: [
        {
          title: "Item 1",
          url : require('../../image/carousel/banner1.png')
        },
        {
          title: "Item 2",
          url : require('../../image/carousel/banner2.png')
        },
        {
          title: "Item 3",
          url : require('../../image/carousel/banner3.png')
        },
        {
          title: "Item 4",
          url : require('../../image/carousel/banner4.png')
        },
        {
          title: "Item 5",
          url : require('../../image/carousel/banner5.png')
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
        )
    }
}

export default CarouselHome;