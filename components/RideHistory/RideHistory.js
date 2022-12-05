import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { Image,Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const RideHistory = () => {
    const navigation = useNavigation();
const data = [
        {
          id:"1501/LFINT/22/28",
          date: "15 Nov, 4:18PM",
          status: "Delivered",
          origin: "Lahore, Punjab, Pakistan",
          destination: "Karachi, Sindh, Pakistan",
          completed_at: "16 Nov, 4:00PM",
        }, 
        {
          id:"1501/LCTSA/22/50",
          date: "11 Nov, 9:18PM",
          status: "Cancelled",
          origin: "Peshawar, KPK, Pakistan",
          destination: "Lahore, Punjab, Pakistan",
          completed_at: "20 Nov, 4:00PM",
        }
      ]

  return (
    <View style={tw`flex-row justify-between`}>
        <FlatList
        keyExtractor={(item)=>item.id}
        
        data = {data}
        renderItem={({item})=>(
        
        <TouchableOpacity 
        onPress={()=>navigation.navigate("CompletedRides",item)}
        style={tw`flex border-green-700 border-b`}>

            <View style={tw`flex-row justify-between pb-4`}>
                
                <Text style={tw`text-left pt-2 px-2 font-semibold text-xl border-black`}>
                {item.date}
                </Text>
                <View style={tw`flex-row`}>
                    <Text style={tw`text-xl pt-2 px-2`}>
                        {item.status}
                    </Text>
                    <Icon name="chevron-right" type="fontawesome" size={35}/> 
                </View>
                
            </View>
            <Text style={tw`text-3xl text-green-600 font-bold`}>{item.id}</Text>
        </TouchableOpacity>
        

        )}
        />
    </View>
  )
}

export default RideHistory

