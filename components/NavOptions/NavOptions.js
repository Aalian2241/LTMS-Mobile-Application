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
        image: "https://iili.io/yeTqvV.png",
        screen: "MapScreen"
    },
    {
        id:"2",
        title:"Order Food",
        image: "https://links.papareact.com/28w",
        screen: "EatScreen"
    },
];

const NavOptions = ({props}) => {

    const origin = useSelector(selectOrigin);
    console.log(props);
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
                    
                style={tw` p-2 pl-3 pb-8 pt-3 bg-green-700 mr-4 w-40 `}
                >
                    <View>
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
                        <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
                        <Icon 
                            style={tw`rounded-full w-9 mt-2 bg-black p-1`}
                            color="white" name='arrowright' type='antdesign'/>
                    </View>
                </TouchableOpacity>
        )}
        />
    );

}

export default NavOptions
