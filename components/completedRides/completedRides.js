import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon, Image } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import tw from "twrnc";
import { selectOrigin,selectDestination, } from '../../slices/navSlice';


const CompletedRides = ({route,navigation}) => {
    const { origin, destination,id,date,status,completed_at } = route.params;
    return (
        <View  style={tw`flex  border-blue-100 `}>
            <View style={tw`bg-green-100`}> 
                <View style={tw`flex-row border-blue-100`}>
                    <Icon
                        name = "truck-outline"
                        type="material-community"
                        color="green"
                        size={35}
                    />
                    <Text style={tw`text-teal-700 text-xl pt-2`}>{origin}</Text>
                </View>
                <View style={tw`flex-row`}>
                    <Icon
                        name = "location-outline"
                        type="ionicon"
                        color="green"
                        size={35}
                    />
                    <Text style={tw`text-teal-700 text-xl pt-2`}>{destination}</Text>
                </View>
            </View>
        <View style={tw`p-2`}>
            <View style={tw`flex-row justify-between`}>
                <Text style={text1}>JobID</Text>
                <Text style={text2}>{id}</Text>
            </View>
            <View style={tw`flex-row justify-between`}>
                <Text style={text1}>Status</Text>
                <Text style={text2}>{status}</Text>
            </View>
            <View style={tw`flex-row justify-between`}>
                <Text style={text1}>Transporter</Text>
                <Text style={text2}>TCS</Text>
            </View>
            <View style={tw`flex-row justify-between`}>
                <Text style={text1}>Load Type: </Text>
                <Text style={text2}>Heavy</Text>
            </View>
            <View style={tw`flex-row justify-between`}>
                <Text style={text1}>Booking Date</Text>
                <Text style={text2}>{date}</Text>
            </View>
            <View style={tw`flex-row justify-between`}>
                <Text style={text1}>End Date: </Text>
                <Text style={text2}>{completed_at}</Text>
            </View>
        </View>
        </View>
        
  )
}
const text1 = tw`text-green-700 text-xl pt-2`
const text2 = tw`text-black text-xl pt-2`
export default CompletedRides

const styles = StyleSheet.create({})