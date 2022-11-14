import { View,Text } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import tw from "twrnc";


const Login =()=>{
      return (
        <View style={tw`items-center justify-center flex-1 mb-10`}>
          <Text style={tw`text-center font-bold text-3xl text-green-700 mb-5`}>
            Welcome Back!
          </Text>
        
          <TextInput
          style={tw`w-70 px-4 bg-white text-left m-1 py-1 border-solid border-2 border-green-700 rounded-1 text-black`}
          placeholder='Email'
          />
          <TextInput
          style={tw`w-70 px-2 bg-white text-left m-1 py-1 border-solid border-2 border-green-700 rounded-1 text-black`}
          placeholder='Password'
          secureTextEntry
          />
          <TouchableOpacity style={tw`px-1 `}> 
              <Text style={tw`text-right text-blue-500 underline underline-offset-4`}>Forgot your password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={tw`bg-green-700  py-2 mt-5 px-25 rounded-2 `}>
            <Text style={tw`font-bold text-center text-xl text-white`}>
              Login
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity ><Text style={tw`text-blue-400 text-bold text-lg underline-offset-1 underline underline-offset-4` }> Dont have an account? Sign Up</Text></TouchableOpacity>

        </View>
        );
    }
export default Login