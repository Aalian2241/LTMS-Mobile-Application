import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view'
import tw from 'twrnc';
import { Image } from 'react-native-elements';


const RideHistory = () => {
const data = [
        {
          id:"1",
          time: "TBD",
          amount: "USD 23",
          origin: "Lahore, Punjab, Pakistan",
          destination: "Karachi, Sindh, Pakistan"
        }, 
        {
          id:"2",
          time: "TBD",
          amount: "USD 35",
          origin: "Peshawar, KPK, Pakistan",
          destination: "Lahore, Punjab, Pakistan"
        }
      ]

  return (
    <View style={tw`flex-row justify-between justify-items-center`}>
        <KeyboardAwareFlatList
        keyExtractor={(item)=>item.id}
        
        data = {data}
        renderItem={({item})=>(
        
        <View style={tw`flex border-green-700 border-b`}>
            <View style={tw`flex-row justify-between pb-4`}>
                
                <Text style={tw`text-left pt-2 px-2 font-semibold text-xl border-black`}>
                {item.time}
                </Text>

                <Text style={tw`text-lg pt-2 px-2`}>
                TBD
                </Text>
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
                    <Text style={tw`text-teal-700 text-sm pt-2`}>{item.origin}</Text>
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
                    <Text style={tw`text-teal-700 text-sm pt-2`}>{item.destination}</Text>
                </View>

            </View>
        

        )}
        />
    </View>
  )
}

export default RideHistory

