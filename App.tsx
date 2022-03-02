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
  Modal,
  Alert,
  TouchableOpacity,
  TextInput
} from 'react-native';

// import Carousel from 'react-native-snap-carousel';
import { CarouselHome, FeedHome, MenuHome, SearchHome } from './src/component';

interface homeProps {

};

interface homeState{
  count : number;
  carouselItems : any;
  activeIndex : number;
  modalVisibleContact : boolean;
  modalVisibleGaleri : boolean;
  noHandphone : string;
  nama: string;
  pesan : string;
};

interface ItemProps {
  title: string;
  url: any;
}

class App extends Component<homeProps, homeState>{
  ref = React.createRef<any>();
  state: homeState = {
    modalVisibleGaleri:false,
    pesan:'',
    nama:'',
    noHandphone : '+62',
    modalVisibleContact : false,
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

  setModalVisible(flag : string){
    console.log("sini");
    flag == "Contact" ? this.setState({ modalVisibleContact : true }) : this.setState({ modalVisibleGaleri : true }); 
  }

  deteksiOperatorSeluler(phone : any) {
      const prefix = phone.slice(0, 4);
      if (['0831', '0832', '0833', '0838'].includes(prefix)) return 'axis';
      if (['0895', '0896', '0897', '0898', '0899'].includes(prefix)) return 'three';
      if (['0817', '0818', '0819', '0859', '0878', '0877'].includes(prefix)) return 'xl';
      if (['0814', '0815', '0816', '0855', '0856', '0857', '0858'].includes(prefix)) return 'indosat';
      if (['0812', '0813', '0852', '0853', '0821', '0823', '0822', '0851', '0811'].includes(prefix)) return 'telkomsel';
      if (['0881', '0882', '0883', '0884', '0885', '0886', '0887', '0888', '0889'].includes(prefix)) return 'smartfren';
      return null;
  }

  normalisasiNomorHP(phone : any) {
      phone = String(phone).trim(); 
      if (phone.startsWith('+62')) {
          phone = '0' + phone.slice(3);
      } else if (phone.startsWith('62')) {
          phone = '0' + phone.slice(2);
      }else
      {
        var tmp = phone.substring(0, 2);
      }
      return phone.replace(/[- .]/g, '');
  }

  tesNomorHP(phone : any) {
    if (!phone || !/^08[1-9][0-9]{7,10}$/.test(phone)) {
        return false;
    }
    return true;
  }

  submit(){
    //console.log("submit");
    if(this.state.nama == '' || this.state.pesan == '' || this.state.noHandphone == '+62'){
      console.log('Nama = ' + this.state.nama);
      console.log('Pesan = ' + this.state.pesan); 
      console.log('noHandphone = ' + this.state.noHandphone);
      Alert.alert("Pliss Insert Nama, NoHandphone, and Pesan");
    }else{
      console.log('sana');
      var notelp = this.normalisasiNomorHP(this.state.noHandphone);
      var hasil = this.deteksiOperatorSeluler(notelp);
      if(hasil == null){
        Alert.alert("NoHandphone no Valid!!");
      }else{
        this.setState({
          modalVisibleContact : false
        })
      }
    }
    
    
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

          <View style={{width:'100%', height:50, flexDirection:'row', borderTopWidth:1, borderTopColor:'#C4C4C4'}}>
            <TouchableOpacity onPress={() =>{this.setModalVisible("Galeri")}} style={{backgroundColor:'white', flex:1, justifyContent:'center', alignItems:'center'}}>
              <Text>Galeri</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>{this.setModalVisible('Contact')}} style={{backgroundColor:'white', flex:1, justifyContent:'center', alignItems:'center'}}>
              <Text>Contact</Text>
            </TouchableOpacity>
          </View>
          
        </View>

        <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisibleContact}
        // onRequestClose={() => {
        //   Alert.alert("Modal has been closed.");
        //   // this.setState({
        //   //   modalVisibleContact : false
        //   // })
        // }}
      >
        <View style={{flex:1, backgroundColor:'white'}}>
          <View style={{flex:1, alignItems:'center',  justifyContent:'center',}}>
            <View>
                <View style={{marginBottom:10}}>
                  <Text style={{fontSize:18, fontWeight:'800'}}>Nama</Text>
                </View>
                <View style={{height:70, width:340, backgroundColor:'white', paddingLeft:2}}>
                  <TextInput 
                  style={{width:300, height:60, borderWidth:1, borderColor:'#C4C4C4', borderRadius:6, paddingLeft:8}} 
                  placeholder="Nama"
                  onChangeText={(text) => this.setState({nama : text})}
                  value={this.state.nama}
                  />
                </View>
              </View>
            
            <View>
              <View style={{marginBottom:10}}>
                <Text style={{fontSize:18, fontWeight:'800'}}>No Handphone</Text>
              </View>
              <View style={{height:70, width:340, backgroundColor:'white', paddingLeft:2}}>
                <TextInput
                keyboardType="numeric" 
                style={{width:300, height:60, borderWidth:1, borderColor:'#C4C4C4', borderRadius:6, paddingLeft:8}} 
                placeholder="No Handphone"
                onChangeText={(text) => this.setState({noHandphone : text})}
                value={this.state.noHandphone}
                />
              </View>
            </View>

            <View>
              <View style={{marginBottom:10}}>
                <Text style={{fontSize:18, fontWeight:'800'}}>Pesan</Text>
              </View>
              <View style={{height:100, width:340, backgroundColor:'white', paddingLeft:2}}>
                <TextInput 
                style={{width:300, height:100, borderWidth:1, borderColor:'#C4C4C4', borderRadius:6, paddingLeft:8}} 
                placeholder="Pesan"
                onChangeText={(text) => this.setState({pesan : text})}
                value={this.state.pesan}
                multiline={true}
                numberOfLines={4}
                />
              </View>
            </View>
          </View>

          <View style={{height:70, width:'100%', backgroundColor:'grey', marginTop:10, flexDirection:'row'}}>
            <TouchableOpacity onPress={() =>{this.submit()}} style={{flex:1, backgroundColor:'#00EA41', alignItems:'center', justifyContent:'center'}}>
                <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>{this.setState({ modalVisibleContact : false})}} style={{flex:1, backgroundColor:'#E91A1A', alignItems:'center', justifyContent:'center'}}>
                <Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>Back</Text>
            </TouchableOpacity>
          </View>
          
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisibleGaleri}
      >
        <View style={{flex:1, backgroundColor:'green', opacity:0.8}}>
          <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:24, fontWeight:'bold', color:'white',}}>Galeri</Text>
          </View>
          <TouchableOpacity onPress={() =>{this.setState({ modalVisibleGaleri : false})}} style={{height:70, width:'100%', backgroundColor:'red', justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize:24, fontWeight:'bold', color:'white'}}>Back</Text>
          </TouchableOpacity>
          
        </View>
      </Modal>
        
      </SafeAreaView>
    )
  }
}
  

export default App;
