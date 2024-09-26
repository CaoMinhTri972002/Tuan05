import { Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Screen2({}) {
  
   const [color,setColor]= useState(require('../assets/vs_silver.png'))
   const navigation = useNavigation();
   
   useEffect(()=>{

   },[color])


  return (
    <View style={styles.container}> 
       <View style={{ flex:1 ,backgroundColor:'white'}}>
         <Image source={color} style={{width:114, height: 128}}  ></Image>
       </View>
       <View style={{backgroundColor:'#C4C4C4'}}>
                <View style={{flexDirection:'column', justifyContent:'center' , alignItems:'center'}}>
                 <Pressable  onPress={()=>{setColor(require('../assets/vs_silver.png'))}}          style={{height:80, width:85, backgroundColor:'#C5F1FB', marginTop:5}}></Pressable>
                 <Pressable onPress={()=>{setColor(require('../assets/vs_red.png'))}} style={{height:80, width:85, backgroundColor:'#F30D0D', marginTop:5}}></Pressable>
                 <Pressable onPress={()=>{setColor(require('../assets/vs_black.png'))}}  style={{height:80, width:85, backgroundColor:'#000000', marginTop:5}}></Pressable>
                 <Pressable onPress={()=>{setColor(require('../assets/vs_blue.png'))}}  style={{height:80, width:85, backgroundColor:'#234896', marginTop:5}}></Pressable>

                 <Pressable    onPress={() => navigation.navigate('Screen1',{ selectedColor: color })} // Truyền trạng thái color qua route params
            style={{height:44, width:326, backgroundColor:'#1952E294', marginTop:35, justifyContent:'center', alignItems:'center', borderRadius:10}}> <Text style={{color:'white', fontWeight:'bold'}}>XONG</Text></Pressable>




                </View>



       </View>



    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    }

})