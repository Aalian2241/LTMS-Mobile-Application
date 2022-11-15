import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import tw from "twrnc";
import { Button, Image, Input } from 'react-native-elements';
import { auth } from '../../firebase';
import { useNavigation } from '@react-navigation/native';
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";


const LoginScreen = () => {
  const navigation = useNavigation();
  const [email,setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  
  const handleLogin=()=>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Successful")
      // Signed in 
      const user = userCredential.user;
      navigation.navigate("HomeScreen")
      // ...
    })
    .catch((error) => {
      alert(error.message);
  });
  }
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user=>{
      if (user){
        navigation.navigate("HomeScreen")
      }
      
    })
    return unsubscribe
  }, [])
  
  return (
  <SafeAreaView style={tw`flex-1 bg-white`}>
    
    <KeyboardAvoidingView style={tw`items-center justify-center flex-1`}>
        <Image
            style = {{
              width:150,
              height:150,
              marginBottom: 20,
              
            }}
            source = {{ uri: "https://iili.io/yliv5X.jpg"}}
        />

        <View style={tw`justify-center px-30`}>
          <Text style={tw`text-center text-2xl font-bold text-green-700`}>
            Welcome Back!
          </Text>
          <Text style={tw`text-center text-base font-bold text-green-500`}>
            We're excited to see you again! Lets Ride!
          </Text>
          <TextInput
          value={email}
          onChangeText={text=> setEmail(text)}
          style={tw`w-70 px-4 bg-white text-left m-1 py-2 border-solid border-2 border-green-500 rounded-1 text-green-700`}
          placeholder='Email'
          />
          <TextInput
          value={password}
          onChangeText={text=> setPassword(text)}
          style={tw`w-70 px-4 bg-white text-left m-1 py-2 border-solid border-2 border-green-500 rounded-1 text-black`}
          placeholder='Password'
          secureTextEntry
          />
          
        </View>
        <View>
        <TouchableOpacity style={tw`px-1  `}> 
              <Text style={tw`text-right text-blue-500 underline underline-offset-4`}>Forgot your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={handleLogin}
          style={tw`bg-green-700 py-2 mt-5 w-70 rounded-1`}>
          <Text style={tw`font-bold text-xl text-center text-white`}>
            Login
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity ><Text style={tw`text-green-700 text-center font-bold text-lg underline-offset-1` }> Dont have an account? Sign Up</Text></TouchableOpacity>

        </View>
        
    </KeyboardAvoidingView>
      
  </SafeAreaView>
      

  )
}

export default LoginScreen

const styles = StyleSheet.create({})