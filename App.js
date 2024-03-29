import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform } from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import MapScreen from "./screens/MapScreen/MapScreen";
import EatScreen from './screens/EatScreen/EatScreen';
import { store } from './store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {useHeaderHeight} from "@react-navigation/elements";
import { SearchBar } from '@rneui/themed'
import tw from "twrnc";
import { KeyboardAwareFlatList, KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LoginScreen from './screens/Login/LoginScreen'
// flex box is in column for react native

// STEPS:
// 1) setup redux
// 2) 
export default function App() {
  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        
        <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={{ flex: 1 }}
              keyboardVerticalOffset={Platform.OS === "ios" ? -64 :-50}
            >

        
          <Stack.Navigator>
            <Stack.Screen          
            name="LoginScreen" 
            component={LoginScreen}
            options={{
              headerShown:false,
            }}/>
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
              headerShown:false,
              gestureEnabled:true,
            }}/>
            <Stack.Screen 
            name="EatScreen" 
            component={EatScreen}
            options={{
              headerShown:true,
            }}/>
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
