import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from "twrnc";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { setDestination } from '../../slices/navSlice';
import {GOOGLE_MAPS_APIKEY} from "@env";
import { useDispatch } from 'react-redux';
import { Button, Icon } from 'react-native-elements';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from '@react-navigation/native';
import NavFavourites from '../NavFavourites.js/NavFavourites';
import { SearchBar } from '@rneui/themed'

const NavigateCard = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
  return (
      <SafeAreaView style={tw`bg-white flex-1`}>
            
            <View>
                <Text style={tw`text-center text-xl`}>SELECT DROPOFF</Text>
                <View>
                <GooglePlacesAutocomplete 
                    styles={TextBoxstyle}
                    onPress={(data,details=null)=>{
                        dispatch(
                        setDestination({
                        location: details.geometry.location,
                        description: data.description,
                                      })
                                );
                       
                        navigation.navigate("RideOptionsCard")
                    }}
                    returnKeyType={"search"}
                    enablePoweredByContainer={false}
                        
                        query={{
                        key: GOOGLE_MAPS_APIKEY,
                        language: 'en',
                            }}
                        fetchDetails={true}

                        placeholder='Where To?'
                        debounce={300}
                        minLength={2}
                        onFail={error => console.error(GOOGLE_MAPS_APIKEY)}
                        nearbyPlacesAPI= "GooglePlacesSearch"
                    />
                </View>
                <NavFavourites/>
            <View style={tw`flex-row bg-white justify-evenly py-1 mt-auto border-t`}>
                <TouchableOpacity 
                onPress={()=> navigation.navigate("RideOptionsCard")}
                style={tw`flex-row bg-green-700 rounded-full w-23 justify-between px-4 py-3 flex`}>
                        <Icon
                        name="car"
                        type="font-awesome"
                        color="white"
                        size={16}
                        />
                    <Text style={tw`text-center text-white`}> Rides</Text>
                </TouchableOpacity>
                            
                <TouchableOpacity style={tw`flex-row bg-green-700 rounded-full w-23 justify-between px-5 py-3 flex`}>
                        <Icon
                        name="fast-food-outline"
                        type="ionicon"
                        color="white"
                        size={16}
                        />
                    <Text style={tw`text-center text-white`}> Eat</Text>
                </TouchableOpacity>
            </View>
            </View>

            
      </SafeAreaView>
    
  )
}

export default NavigateCard

const TextBoxstyle = StyleSheet.create({
    container:{
        
        paddingTop:20,
        flex:0
    },
    textInput:{
        
        borderRadius:0,
        fontSize:18,
    },
    textInputContainer:{
        paddingHorizontal:20,
        paddingBottom:0
    }
})