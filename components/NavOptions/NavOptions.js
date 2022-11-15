import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc';
import { Button, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';
import { selectDestination, selectOrigin } from '../../slices/navSlice';
import { useSelector } from 'react-redux';

const data = [
    {
        id:"1",
        title:"Order Ride",
        image: "https://iili.io/H9qBrZX.png",
        screen: "MapScreen"
    },
    {
        id:"2",
        title:"Rides Info",
        image: "https://iili.io/H9qTVUu.png",
        screen: "RidesInfo"
    },
];

const NavOptions = ({props}) => {

    const origin = useSelector(selectOrigin);
    const navigation = useNavigation();
    return(
        <KeyboardAwareFlatList  
            keyExtractor={(item)=>item.id }
            horizontal
            
            data={data}
            renderItem = { ({item})=>(
                <TouchableOpacity 
                disabled={!props}
                onPress={()=> {
                    navigation.navigate(item.screen)}}
                    
                style={tw` p-2 pl-3 pb-8 pt-3 bg-green-800 mr-4 w-40 `}
                >
                    
                    <View style={tw`bg-`}>
                        <Image
                            style={{
                                width:100,
                                height:100,
                                resizeMode:"contain"
                            }}
                            source={{
                                uri: item.image
                            }}
                        />
                        <Text style={tw`mt-2 text-white  font-extrabold text-2xl`}>{item.title}</Text>
                        <Icon 
                            style={tw`rounded-2xl w-9 mt-2 bg-white p-1`}
                            color="green" name='arrowright' type='antdesign'/>
                    </View>
                </TouchableOpacity>
        )}
        />
    );
}

export default NavOptions
