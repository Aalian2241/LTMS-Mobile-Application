import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from "twrnc";
import Map from '../../components/Map/Map';
import { createStackNavigator } from '@react-navigation/stack';
import NavigateCard from '../../components/NavigateCard/NavigateCard';
import RideOptionsCard from '../../components/RideOptionsCard/RideOptionsCard';
const MapScreen = () => {
  const Stack = createStackNavigator();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
        <View style={tw`h-1/2`}>
          <Map/>
        </View>
        {/* ====================================== */}

        <View style={tw`h-1/2`}>
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
        </View>
    </SafeAreaView>
    
  )
}

export default MapScreen

const styles = StyleSheet.create({})