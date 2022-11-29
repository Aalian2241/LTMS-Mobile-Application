import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Icon, Image } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import {selectDestination, selectProgress, setDestination, setJobNo, setJobStatus, setOrigin, setProgress} from "../../slices/navSlice.js";
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import confirmTrip from './confirmTrip.js';
import scheduledTrips from './scheduledTrips.js';



const RideHistory = () => {
    const progress = useSelector(selectProgress)
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const data = [
        {
          id:"1501/LFINT/22/27",
          scheduled_at: "20 November, 2022",
          origin: "A ONE LOGISTICS, Mina Jabel Ali, Dubai",
          destination: "A ONE LOGISTICS, Industrial Area 5,Industrial area,Sharjah",
          transporter: "GENTLE TRANSPORTERS",
          status:"assigned",
          load_type:"Heavy",
        }, 
        {
          id:"1501/LCB/22/50", 
          scheduled_at: "29 November, 2022",
          origin: "Peshawar,Pakistan",
          destination: "Lahore, Punjab, Pakistan",
          status:"assigned",
        }
      ]
      const Stack = createStackNavigator();
  return (
    <View style={tw`flex-row justify-between `}>
        <FlatList
        keyExtractor={(item)=>item.id}
        
        data = {data}
        renderItem={({item})=>(
        
        <TouchableOpacity 
        onPress={()=>navigation.navigate('ConfirmTrip', item)}
        style={tw`flex border-green-700 border-b`}>
            
            <View style={tw`flex-row justify-between pb-4`}>
                
                <Text style={tw`text-green-700 text-left pt-2 px-2 font-bold text-2xl border-black`}>
                {item.id}
                </Text>
                <View style={tw`flex-row`}>
                    <Text style={tw`text-base pt-2 px-2`}>
                        {item.scheduled_at}
                    </Text>
                    <Icon name="chevron-right" type="fontawesome" size={35}/> 
                </View>
            </View>
            
            <View style={tw`flex-row border-b border-blue-100`}>
                    <Image
                    style={{
                        width:40,
                        height:40,
                        resizeMode:"contain"
                    }}
                    source={{
                        uri:'https://iili.io/H9qbSdg.png'
                    }}
                    />
                    <Text style={tw` text-sm pt-2`}>{item.origin}</Text>
            </View>
                <View style={tw`flex-row`}>
                    <Image
                    style={{
                        width:40,
                        height:35,
                        resizeMode:"contain"
                    }}
                    source={{
                        uri:'https://iili.io/H9qmCpj.png'
                    }}
                    />
                    <Text style={tw` text-sm pt-2`}>{item.destination}</Text>
                    
                </View>
                
                {/*  */}
            </TouchableOpacity>
        

        )}
        />
    </View>
    
  )
}

export default RideHistory

