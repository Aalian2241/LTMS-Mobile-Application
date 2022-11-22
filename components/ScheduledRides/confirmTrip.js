import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Image } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import tw from "twrnc";
import { selectOrigin,selectDestination, selectProgress, setJobNo, setJobStatus, setDestination, setOrigin, setProgress, setStartDate, setLoadType, setTransporter, } from '../../slices/navSlice';
import { useDispatch, useSelector } from 'react-redux';


const completedRides = ({route,navigation}) => {
    const { origin, destination,id,date,status,scheduled_at, load_type } = route.params;
    const dispatch = useDispatch();
    const progress = useSelector(selectProgress)
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
                <Text style={text1}>Scheduled On </Text>
                <Text style={text2}>{scheduled_at}</Text>
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
                <Text style={text1}>Load Type </Text>
                <Text style={text2}>{load_type}</Text>
            </View>
            
        </View>
        <Button
          onPress={()=>{
              if(progress===true){
                  alert("You already have an ongoing trip")
              }
              else{
       
                  
                  dispatch(setProgress(true))
                  dispatch(setStartDate(scheduled_at))
                  dispatch(setTransporter("TCS"))
                  dispatch(setLoadType(load_type))
                  dispatch(setJobNo(id))
                  dispatch(setJobStatus("Picked-Up"))
                  navigation.navigate("MapScreen")
              }
          }}
          title="START TRIP"
          color="#f194ff"

      />
        </View>
        
  )
}
const text1 = tw`text-green-700 text-xl pt-2`
const text2 = tw`text-black text-xl pt-2`
export default completedRides

const styles = StyleSheet.create({})