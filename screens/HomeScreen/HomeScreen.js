import { StyleSheet, Text,View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'twrnc'; 
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import React, {useState} from 'react'
import {GOOGLE_MAPS_APIKEY} from "@env";
import NavOptions from '../../components/NavOptions/NavOptions';
var logo = require ("../../assets/cab_logo.png");
import {useDispatch} from "react-redux";
import {setDestination, setOrigin} from "../../slices/navSlice";
import NavFavourites from '../../components/NavFavourites.js/NavFavourites';


const HomeScreen = () => {
  const [touchable, setTouchable] = useState(false);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-4`}>
        <Image
            style = {{
              width:100,
              height:90,
              resizeMode:"contain"
            }}
            source = {{ uri: "https://iili.io/yliv5X.jpg"}}
        />

      <GooglePlacesAutocomplete 
      onPress={(data,details=null)=>{
        dispatch(
          setOrigin({
          location: details.geometry.location,
          description: data.description,
              })
              );
        setTouchable(true);
        dispatch(setDestination(null));
      }}
      returnKeyType={"search"}
      enablePoweredByContainer={false}
        styles={TextBoxstyle}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: 'en',
            }}
        fetchDetails={true}

        placeholder='Where From?'
        debounce={300}
        minLength={2}
        onFail={error => console.error(GOOGLE_MAPS_APIKEY)}
        nearbyPlacesAPI= "GooglePlacesSearch"
      />  

      <NavOptions props={touchable}/>
      </View>
      <NavFavourites />
    </SafeAreaView>
  )
}

export default HomeScreen

const TextBoxstyle = StyleSheet.create({
  container:{
      backgroundColor:"white",
      paddingTop:12,
      marginTop:10,
      marginBottom:10,
      flex:0,
      border: "solid",
  },
  textInput:{
      borderRadius:0,
      fontSize:18,
  },
  textInputContainer:{
      paddingBottom:0,
      
  }
})