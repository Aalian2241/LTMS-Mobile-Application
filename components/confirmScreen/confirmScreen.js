import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import tw from "twrnc";
import { selectOrigin,selectDestination, } from '../../slices/navSlice';


const completedRides = ({route,navigation}) => {
    const { origin, destination,id,date,status,completed_at } = route.params;
    console.log(origin)
    return (
        <View  style={tw`flex  border-blue-100 `}>
            <View style={tw`bg-green-100`}> 
                <View style={tw`flex-row border-blue-100`}>
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
                    <Text style={tw`text-teal-700 text-xl pt-2`}>{origin}</Text>
                </View>
                <View style={tw`flex-row`}>
                    <Image
                    style={{
                        width:40,
                        height:35,
                        resizeMode:"contain"
                    }}
                    source={{
                        uri:'https://iili.io/H9qmCpj.png'
                    }}
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
export default completedRides

const styles = StyleSheet.create({})