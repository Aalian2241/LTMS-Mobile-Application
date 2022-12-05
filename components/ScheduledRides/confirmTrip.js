import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Button, Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import tw from "twrnc";
import { selectOrigin,selectDestination, selectProgress, setJobNo, setJobStatus, setDestination, setOrigin, setProgress, setStartDate, setTransporter, setTravelTimeInformation, setLocation, } from '../../slices/navSlice';
import { useDispatch, useSelector } from 'react-redux';


const completedRides = ({route,navigation}) => {
    
    const { origin, destination,id,date,status,scheduled_at,transporter } = route.params;
   
        const getDestination= async ()=>{    
            await fetch(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURI(destination)}&inputtype=textquery&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=AIzaSyDyRLpbLiE7n3Z-NkKcukXdtla0nyeS71I`)
            .then((res)=> res.json())
            .then((res)=>{
             //res: {"candidates":[{"formatted_address":"River Edge Housing Scheme Park View, Lahore, Punjab, Pakistan","geometry":{"location":{"lat":31.4527726,"lng":74.2025244},"viewport":{"northeast":{"lat":31.458837,"lng":74.2061986},"southwest":{"lat":31.4486734,"lng":74.1985595}}},"name":"River Edge Housing Scheme"},{"formatted_address":"Park View Villas Lahore, River Edge Housing Scheme Park View, Lahore, Punjab, Pakistan","geometry":{"location":{"lat":31.452933,"lng":74.20253749999999},"viewport":{"northeast":{"lat":31.45428282989272,"lng":74.20388732989272},"southwest":{"lat":31.45158317010728,"lng":74.20118767010727}}},"name":"Park View Villas Lahore"}],"status":"OK"}
              const destLoc = res["candidates"][0]["geometry"]["location"]
              const destDesc = res["candidates"][0]["formatted_address"]
              dispatch(setDestination({location: destLoc, description:destDesc})) 
            })
            .catch(function(err) {
              console.log('There has been a problem with your fetch operation: ' + err.message);
               // ADD THIS THROW error
                throw err;
              }); 
            }
        getDestination();
        
        const getOrigin= async ()=>{
            await fetch(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${encodeURI(origin)}&inputtype=textquery&fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&key=AIzaSyDyRLpbLiE7n3Z-NkKcukXdtla0nyeS71I`)
            .then((res)=> res.json())
            .then((res)=>{
                //res: {"candidates":[{"formatted_address":"River Edge Housing Scheme Park View, Lahore, Punjab, Pakistan","geometry":{"location":{"lat":31.4527726,"lng":74.2025244},"viewport":{"northeast":{"lat":31.458837,"lng":74.2061986},"southwest":{"lat":31.4486734,"lng":74.1985595}}},"name":"River Edge Housing Scheme"},{"formatted_address":"Park View Villas Lahore, River Edge Housing Scheme Park View, Lahore, Punjab, Pakistan","geometry":{"location":{"lat":31.452933,"lng":74.20253749999999},"viewport":{"northeast":{"lat":31.45428282989272,"lng":74.20388732989272},"southwest":{"lat":31.45158317010728,"lng":74.20118767010727}}},"name":"Park View Villas Lahore"}],"status":"OK"}
                const originLoc = res["candidates"][0]["geometry"]["location"]
                const originDesc = res["candidates"][0]["formatted_address"]
                dispatch(setOrigin({location: originLoc, description:originDesc}))
            })
            .catch(function(err) {
                console.log('There has been a problem with your fetch operation: ' + err.message);
                // ADD THIS THROW error
                throw err;
                }); 
            }
        getOrigin();   

    const dispatch = useDispatch();
    const progress = useSelector(selectProgress)
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
                <Text style={text1}>Scheduled On </Text>
                <Text style={text2}>{scheduled_at}</Text>
            </View>
            <View style={tw`flex-row justify-between`}>
                <Text style={text1}>Status</Text>
                <Text style={text2}>{status}</Text>
            </View>
            <View style={tw`flex-row justify-between`}>
                <Text style={text1}>Transporter</Text>
                <Text style={text2}>{transporter}</Text>
            </View>
            <View style={tw`flex-row justify-between`}>
                <Text style={text1}>Load Type </Text>
                <Text style={text2}>Heavy</Text>
            </View>
            
        </View>
        <Button
          onPress={()=>{
                  dispatch(setStartDate(scheduled_at))
                  dispatch(setTransporter(transporter))
                  dispatch(setJobNo(id))
                  dispatch(setJobStatus("Picked-Up"))
                  dispatch(setProgress(true))
                  navigation.navigate("HomeScreen")
          }}
          disabled={progress}
          title="START TRIP"
          color="#f194ff"
          accessibilityLabel="Learn more about this purple button"
      />
        </View>
        
  )
}
const text1 = tw`text-green-700 text-xl pt-2`
const text2 = tw`text-black text-xl pt-2`
export default completedRides

const styles = StyleSheet.create({})