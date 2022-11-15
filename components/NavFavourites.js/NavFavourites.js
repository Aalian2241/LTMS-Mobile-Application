import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import tw from "twrnc";
import { lightColors } from '@rneui/base';


const data = [
  {
      id:"3",
      icon:"home",
      location: "Home",
      destination: "Park View Villas, Lahore"
  },
    {
      id:"4",
      icon:"briefcase",
      location: "Work",
      destination: "Forman Christian College, Lahore"
  },
];
const NavFavourites = () => {
  return (
    <FlatList 
        keyExtractor={(item)=>item.id }
        data = {data}
        renderItem = { ({item:{location, destination,icon}})=>(

            <TouchableOpacity 
            // onPress={()=> navigation.navigate(item.screen)}
            style={tw`flex-row items-center p-4 border-lime-900  border-b`}
            >
                <Icon
                  style={tw`mr-4 rounded-full bg-green-700 p-3`}
                  name = {icon}
                  type="ionicon"
                  color="white"
                  size={18}
                />
            <View>
              <Text>{location}</Text>
              <Text>{destination}</Text>
            </View>
            </TouchableOpacity>
            
        )}
        />
  )
}

export default NavFavourites

const styles = StyleSheet.create({})