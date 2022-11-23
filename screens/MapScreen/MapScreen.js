import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from "twrnc";
import Map from '../../components/Map/Map';
import { createStackNavigator } from '@react-navigation/stack';
import NavigateCard from '../../components/NavigateCard/NavigateCard';
import RideOptionsCard from '../../components/RideOptionsCard/RideOptionsCard';
const MapScreen = ({route,navigation}) => {
  const {jobId} = route.params;
  const Stack = createStackNavigator();
  return (
    <View>
       <View style={tw`h-100 absolute`}>
         <Map/>
       </View>
       
       <View style={tw`flex-row justify-between  bg-gray-800 ml-1 mt-2 mr-1 rounded-lg`}>
          <View style={tw`flex-1 border-r border-gray-500 m-2`}>
            <Text style={header}>JOB NO.</Text>
            <Text style={underHeader}>{jobId}</Text>
          </View>
          <View style={tw` flex-2 w-50 border-r m-2 pb-2`}>
            <Text style={header} >DESTINATION</Text>
            <Text style={underHeader}>Peshawar, KPK, Pakistan</Text>
          </View>
       </View>
       
    </View>
        
        /* ====================================== */

        /* <View style={tw`h-1/2 pt-2`}>
          <Stack.Navigator>
            <Stack.Screen          
              name="NavigateCard" 
              component={NavigateCard}
              options={{
                headerShown:false,
                gestureEnabled:true,
              }}/>

            <Stack.Screen          
              name="RideOptionsCard" 
              component={RideOptionsCard}
              options={{
                headerShown:false,
                gestureEnabled:true,
              }}/> 


          </Stack.Navigator>
        </View> */

    
  )
}

const header = tw`text-white text-2xl pb-0.4 font-semibold  w-49`;
const underHeader = tw`text-green-400 text-lg font-semibold`

export default MapScreen

const styles = StyleSheet.create({})