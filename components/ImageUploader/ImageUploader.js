import React, { useState, useEffect } from 'react';
import {Image, View, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import { selectInvoiceURI, setInvoiceURI } from '../../slices/navSlice';
import { Button, Text } from 'react-native-elements';
import tw from 'twrnc';

export default function ImageUploader({route,navigation}) {
  const image = useSelector(selectInvoiceURI)
  const dispatch = useDispatch();
  

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      
      quality: 1,
    });

    if (!result.canceled) {
      dispatch(setInvoiceURI(result.uri));
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button buttonStyle={tw`bg-green-700 mb-2 pr-3 pl-3`} titleStyle={tw`text-xl`} title="Upload an image" onPress={pickImage} />
      {image && 

      <View>
        <Image source={{ uri: image }} style={{ width: 300, height: 300 , resizeMode:"contain"}} />
        <Text style={tw`text-center text-xl pt-3`}>Image Uploaded.</Text>
        <Button buttonStyle={tw`bg-green-700 mb-2 pr-3 pl-3`} titleStyle={tw`text-xl`} title="Confirm" onPress={()=>{navigation.navigate("MapScreen")}} />
      </View>
      }
    </View>
  );
}
