import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import MapScreen from "./screens/MapScreen/MapScreen";
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {useHeaderHeight} from "@react-navigation/elements";
import { SearchBar } from '@rneui/themed'
import tw from "twrnc";
import { KeyboardAwareFlatList, KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LoginScreen from './screens/Login/LoginScreen'
import Signup from './screens/Signup/Signup';
import ForgotPasswrord from './screens/ForgotPassword.js/ForgotPasswrord';
import RidesInfo from './screens/RidesInfo/RidesInfo';
import { Button } from 'react-native-elements';
import { auth } from './firebase';
import { useEffect, useState } from 'react';
import confirmTrip from './components/ScheduledRides/confirmTrip';
import CompletedRides from './components/completedRides/CompletedRides';
// flex box is in column for react native

// STEPS:
// 1) setup redux
// 2) 
export default function App() {
  
  const Stack = createStackNavigator();
  const [login, setLogin] = useState(null);
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user=>{
      if (user){
        setLogin(user)
      }
      
    })
    return unsubscribe
  }, [])
  return (
    <Provider store={store}>
      <NavigationContainer>
        <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={{ flex: 1 }}
              keyboardVerticalOffset={Platform.OS === "ios" ? -64 :-50}
            >  
          <Stack.Navigator>
            {login? (
              <Stack.Group>
                  <Stack.Screen          
                  name="HomeScreen" 
                  component={HomeScreen}
                  options={{
                    headerShown:false,
                  }}/>
                  <Stack.Screen 
                  name="MapScreen" 
                  component={MapScreen}
                  options={{
                    headerStyle: {
                      backgroundColor: 'green',
                      height:70
                    },
                    headerTitle:`ACTIVE TRIP`,
                    headerTitleStyle:{color:'white'},
                    headerShown:true,
                    gestureEnabled:false,
                  }}/>
                  <Stack.Screen 
                  name="RidesInfo" 
                  component={RidesInfo}
                  options={{
                    headerStyle: {
                      backgroundColor: 'green'
                    },
                    headerShown:true,
                    headerTitle:"Rides Info",
                    
                  }}/>
                  <Stack.Screen 
                  name="CompletedRides" 
                  component={CompletedRides}
                  options={{
                    headerStyle: {
                      backgroundColor: 'green'
                    },
                    headerShown:true,
                    headerTitle:"Completed",
                  }}/>
                  <Stack.Screen 
                  name="ConfirmTrip" 
                  component={confirmTrip}
                  options={{
                    headerStyle: {
                      backgroundColor: 'green'
                    },
                    headerShown:true,
                    headerTitle:"Completed",
                  }}/>
              </Stack.Group>

            ):(
              <Stack.Group>
                <Stack.Screen          
                  name="LoginScreen" 
                  component={LoginScreen}
                  options={{
                    headerShown:false,
                  }}/>
                  <Stack.Screen          
                  name="Signup" 
                  component={Signup}
                  options={{
                    headerShown:false,
                  }}/>
                  <Stack.Screen          
                  name="ForgotPassword" 
                  component={ForgotPasswrord}
                  options={{
                    headerShown:false,
                  }}/>
              </Stack.Group>

            )}
            
            
            
            </Stack.Navigator>
         {/* <HomeScreen/> */}
         </KeyboardAvoidingView>
      
      </NavigationContainer>
           
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
