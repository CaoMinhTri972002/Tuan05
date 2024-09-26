import { StyleSheet, Text, View,Image, VirtualizedList, Pressable } from 'react-native'
import React from 'react'

export default function Screen1({}) {

  return (
    <View style={styles.container}>
     <View>
          <Image source={require('../assets/vs_blue.png')} 
           style={{height:361, width:301}}
          />

     </View>
         <View style={{flexDirection:'column'}}>
             <Text>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
             <View style={{flexDirection:'row'}}>
              <View style={{flexDirection:'row'}}>
                <Image source={require('../assets/star.png')}
                  style={{height:23, width:25}}
                />
                 <Image source={require('../assets/star.png')}
                  style={{height:23, width:25}}
                />
                <Image source={require('../assets/star.png')}
                  style={{height:23, width:25}}
                />
                <Image source={require('../assets/star.png')}
                  style={{height:23, width:25}}
                />
                 <Image source={require('../assets/star.png')}
                  style={{height:23, width:25}}
                />

              </View>
                   <Text>(Xem 828 đánh giá)</Text>

              </View>
              <Text>1.790.000 đ</Text>
              <View style={{flexDirection:'row'}}>
              <Text style={{fontWeight:'bold', color:'red'}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
              <Image
                source={require('../assets/Group 1.png')}
                style={{height:20, width:20}}
              />
              </View>
                <Pressable  onPress={() => navigation.navigate('Screen2')}     style={{justifyContent:'center', alignItems:'center', height:34, width:332, borderWidth:1, borderRadius:10}}><Text>4 MÀU-CHỌN MÀU</Text></Pressable>
                <Pressable   style={{justifyContent:'center',marginTop:50,alignItems:'center', height:34, width:332, borderWidth:1, borderRadius:10, backgroundColor:'red'}}><Text style={{color:'white', fontWeight:'bold'}}>CHỌN MUA</Text></Pressable>
         </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:'white',
      justifyContent:'center',
      alignItems:'center'
  }

})