import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc';
import { Button, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view';
import { selectDestination, selectJobNo, selectJobStatus, selectOrigin, selectProgress } from '../../slices/navSlice';
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
        title:"Activities",
        image: "https://iili.io/H9qTVUu.png",
        screen: "RidesInfo"
    },
];

const NavOptions = ({props}) => {
    const jobId= useSelector(selectJobNo);
    console.log(jobId)

    const origin = useSelector(selectOrigin);
    const navigation = useNavigation();
    const destination = useSelector(selectDestination);
    const job_status = useSelector(selectJobStatus);
    const progress = useSelector(selectProgress);
    return(
    <View style={tw`flex-row`}>
        
    <TouchableOpacity 
        disabled={!progress}
        onPress={()=> {
            navigation.navigate("MapScreen",{jobId}) }}    
        style={tw` p-2 pl-3 pb-8 pt-3 bg-green-800 mr-4 w-50 `}
        >
        {progress?(
        <View>
            <View style={tw`flex-row justify-between w-full mb-2 border-b border-slate-400`}>
                <Text style={text1}>Job No.</Text>
                <Text style={tw`text-white w-20 text-lg m-1`}>{jobId}</Text>
            </View>
            <View style={tw`flex-row justify-between w-45 mb-5 border-b border-slate-400`}>
                <Text style={tw`text-white  text-2xl font-bold mt-1`}>TO</Text>
                <Text style={tw`text-white w-26 text-lg m-1`}>{ destination?.description}</Text>
            </View>
            <View style={tw`flex-row justify-between w-full mb-3 border-b border-slate-400`}>
                <Text style={text1}>Status</Text>
                <Text style={text2}>{job_status}</Text>
            </View>
            <Text style={tw`mt-2 text-white  font-extrabold text-xl`}>ACTIVE TRIP</Text>
                <Icon 
                    style={tw`rounded-2xl  w-9 mt-2 bg-white p-1`}
                    color="green" name='arrowright' type='antdesign'/>
        </View>
           
        ):(
            <View style={tw``}>
                <Text style={tw`text-white font-extrabold text-2xl text-center mt-20 flex`}>NO ACTIVE TRIPS</Text>
                <Text style={tw`text-center text-white text-base`}>Go to Activites to start a Trip</Text>
            </View>
            
        )}
            
        </TouchableOpacity>    
    <TouchableOpacity 
        onPress={()=> {
            navigation.navigate("RidesInfo")}}    
        style={tw` p-2 pl-3 pb-8 pt-3 bg-green-800 mr-4 w-40 `}
        >
            
            <View>
                <Image
                    style={{
                        width:100,
                        height:100,
                        resizeMode:"contain"
                    }}
                    source={{
                        uri: "https://iili.io/H9qTVUu.png"
                    }}
                />
                <Text style={tw`mt-2 text-white  font-extrabold text-2xl`}>Activities</Text>
                <Icon 
                    style={tw`rounded-2xl w-9 mt-2 bg-white p-1`}
                    color="green" name='arrowright' type='antdesign'/>
            </View>
        </TouchableOpacity>
    </View>
    );
}

export default NavOptions
const text1= tw`text-white text-2xl font-bold `;
const text2= tw`text-white  text-lg w-20 `