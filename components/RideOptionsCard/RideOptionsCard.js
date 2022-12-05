import { SafeAreaView,StyleSheet, Text, View,TouchableOpacity } from 'react-native'
//import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState } from 'react'
import { Button, Icon, Image } from 'react-native-elements';
import tw from "twrnc";
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../../slices/navSlice';
import reactNativeIntl from 'react-native-intl';

import "intl";
import "intl/locale-data/jsonp/en";
const SURGE_CHARGE_RATE=1.5
const RideOptionsCard = () => {
  const data = [
    {
        id: "Uber-X-123",
        title: "Mini Truck",
        multiplier: 1,
        image:"https://iili.io/H9qC6OB.png" 
        //"https://iili.io/ylgRkJ.png"
    },
    {
        id: "Uber-XL-456",
        title: "Truck",
        multiplier: 1.2,
        image: "https://iili.io/H9qC6OB.png"
        
        //"https://iili.io/ylvncb.png"
    },
    {
        id: "Uber-LUX-123",
        title: "Heavy Truck",
        multiplier: 1.75,
        image: "https://iili.io/H9qC6OB.png"
    },
]

  const SEARCH_CHARGE_RATE = 1.5
  const [selected,setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-1 `}>
      <View>
        <TouchableOpacity 
            onPress={()=> navigation.navigate("NavigateCard")}
            style={tw`absolute left-5 z-50 rounded-full`}>
          <Icon name="chevron-left" type="fontawesome" size={30}/>  
        </TouchableOpacity>
          <Text style={tw`text-center text-xl `}>Select Your Ride - {travelTimeInformation?.distance.text}</Text>  
      </View>

      <KeyboardAwareFlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item :{id,title, multiplier, image}, item}) => (
            <TouchableOpacity
                style={tw`flex-row items-center justify-between px-5 ${id===selected?.id && "bg-green-700"}`}
                onPress={() => setSelected(item)}>
                <Image
                    style={{
                      width:80,
                      height:80,
                      resizeMode:"contain",
                    }}
                    source={{ uri: image}
                    
                    }/>
                <View style={tw`flex-row items-center justify-between flex-1 `}>
                    <View>
                        {/* <Text style={tw`text-xl font-bold text-white`}>{item.title}</Text> */}
                        <Text style={tw`text-lg text-white text-gray-600 ${id===selected?.id && "text-black"} `}> Travel time - {travelTimeInformation?.duration.text}</Text>
                    </View>
                    <Text style={tw`text-gray-800 text-lg`}>
                        {new Intl.NumberFormat('en-us', {
                            style: 'currency',
                            currency: 'USD'
                        }).format(
                            (travelTimeInformation?.duration.value * 
                              SURGE_CHARGE_RATE 
                              * multiplier) / 100
                        )} 
                    </Text>
                </View>
            </TouchableOpacity>
        )}
        />

        <View>
          <TouchableOpacity 
          disabled={!selected}
          style={tw`bg-green-700 py-3 m-3 ${!selected && "bg-lime-100"}`}>
            <Text style={tw`text-center text-xl bottom-2 ${!selected && "text-black"} ${selected && "text-white"}`}>Choose {selected?.title} </Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})