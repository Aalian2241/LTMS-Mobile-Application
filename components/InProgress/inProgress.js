import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view'
import tw from 'twrnc';
import { Button, Icon, Image } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import NavigateCard from '../NavigateCard/NavigateCard';
import { useDispatch, useSelector } from 'react-redux';
import { selectJobNo, selectJobStatus, selectLoadType, selectOrigin, selectProgress, selectStartDate, setJobStatus } from '../../slices/navSlice';
import SelectDropdown from 'react-native-select-dropdown'


const RideHistory = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const {description}= useSelector(selectOrigin);

    const start_date = useSelector(selectStartDate);
    const job_status = useSelector(selectJobStatus);
    const progress = useSelector(selectProgress);
    console.log("Job Status: "+job_status)
    const jobId = useSelector(selectJobNo);
    const load_type = useSelector(selectLoadType)
    const updateStatus = ["Picked-Up", "In-Transit", "Delivered", "Cancelled"]

  return (

    <View style={tw`flex-row justify-between `}>    
        <View style={tw`flex-1 border-green-700 p-1`}>
            <View style={tw`flex-row justify-between pb-4 border-b`}>
                
                <Text style={tw`text-left pt-2 px-2 font-bold text-2xl text-green-700 border-black`}>
                JOB NO. 
                </Text>
                <Text style={tw`text-left pt-2 px-2 font-bold text-2xl border-black`}>
                {jobId}
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
                    <Text style={tw`text-teal-700 text-lg w-100 pt-2`}>{description}</Text>
            </View>
                <View style={tw`flex-row border-b `}>
                    <Image
                    style={{
                        width:40,
                        height:35,
                        resizeMode:"contain",
                        flex:1
                       
                    }}
                    source={{
                        uri:'https://iili.io/H9qmCpj.png'
                    }}
                    />
                    <Text style={tw`text-teal-700 text-lg w-100 pt-4`}>destination</Text>
            </View>
                

            <View style={tw`flex-row justify-between mt-2 border-b border-zinc-300`}>
                <Text style={text1}>Scheduled On </Text>
                <Text style={text2}>{start_date}</Text>
            </View>
            
            <View style={tw`flex-row justify-between mt-2 border-b border-zinc-300`}>
                <Text style={text1}>Transporter</Text>
                <Text style={text2}>TCS</Text>
            </View>
            <View style={tw`flex-row justify-between mt-2 border-b border-zinc-300` }>
                <Text style={text1}>Load Type </Text>
                <Text style={text2}>Heavy</Text>
            </View>
            
            <View style={tw`justify-between flex-row mt-2 border-b border-zinc-300 `}>
                <Text style={text1}>UPDATE STATUS</Text>
                <View style={tw``}>
                    <SelectDropdown
                        disabled={!progress}
                        buttonStyle={tw`bg-green-700  h-10 w-30`}
                        buttonTextStyle={tw`text-white`}
                        dropdownIconPosition={'left'}
                        data={updateStatus}
                        defaultValue={progress? job_status:"Select an Option"}
                        onSelect={(selectedItem, index) => {
                            dispatch(setJobStatus(selectedItem));
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            // text represented after item is selected
                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item
                        }}
                    />
                </View>
                
            </View>
            
        </View>
    </View>
        
    )
}
const text1 = tw`text-green-700 font-bold text-2xl pt-2`
const text2 = tw`text-black  text-xl pt-2`

export default RideHistory

