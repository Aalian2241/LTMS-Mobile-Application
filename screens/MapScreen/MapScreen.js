import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from "twrnc";
import Map from '../../components/Map/Map';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { selectDestination, selectInvoiceSig, selectInvoiceURI, selectJobNo, selectJobStatus, setInvoiceSig, setInvoiceURI, setJobNo, setJobStatus, setProgress } from '../../slices/navSlice';
import { Button, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';



const MapScreen = ({route,navigation}) => {
  const invoiceSig = useSelector(selectInvoiceSig)
  const invoiceURI = useSelector(selectInvoiceURI)
  const dispatch = useDispatch();
  const jobId = useSelector(selectJobNo);
  const destination = useSelector(selectDestination)
  const job_status = useSelector(selectJobStatus);
  const Stack = createStackNavigator();

  const showConfirmDialog = () => {
    return Alert.alert(
      "END TRIP?",
      "Are you sure you want to end this trip?",
      [
        // The "Yes" button
        
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: "No",
        },
        {
          text: "Yes",
          onPress: () => {
            dispatch(setProgress(false))
            dispatch(setJobStatus(null))
            dispatch(setJobNo(null))
            dispatch(setInvoiceURI(null))
            dispatch(setInvoiceSig(null))
            navigation.navigate("HomeScreen")
          },
        },
      ]
    );
  };

  return (
    <View style={tw`flex-grow`}>
       <View style={tw`h-100 absolute`}>
         <Map/>
       </View>
       
       <View style={tw`flex-row justify-between  bg-gray-800 ml-1 mt-2 mr-1 rounded-lg`}>
          <View style={tw`flex-1 border-r border-gray-500 m-2`}>
            <Text style={header}>JOB NO.</Text>
            <Text style={underHeader}>{jobId}</Text>
            <Text style={tw ` text-white  font-extrabold text-lg `}>(IN-TRANSIT)</Text>
          </View>
          <View style={tw` flex-2 w-50 m-2 pb-2`}>
            <Text style={header} >DESTINATION</Text>
            <Text style={underHeader}>{destination.description}</Text>
          </View>
       </View>
      
       <View style={tw`mt-auto items-center flex-row justify-center `}>
       <Button
              buttonStyle={tw`w-80 h-20 bg-red-800 rounded-xl`}
              containerStyle={tw`m-2`}
              disabled={!invoiceSig || !invoiceURI }
              disabledStyle={tw`bg-gray-400`}
              disabledTitleStyle={tw`text-white text-5xl`}
              linearGradientProps={null}
              
              loadingProps={{ animating: true }}
              loadingStyle={{}}
              onPress={()=>showConfirmDialog()}
              title="END TRIP"
              titleProps={{}}
              titleStyle={tw`text-5xl `}
            />
          <View style={tw``}>
            <Button
            onPress={()=>navigation.navigate("SignatureScreen", navigation)}
            buttonStyle={tw`bg-green-700 w-10 mb-2`}
              icon={
                <Icon
                  name="pencil-outline"
                  size={24}
                  color="white"
                  type="ionicon"
                />
              }
            />
            <Button   
            onPress={()=>navigation.navigate("UploadInvoice", navigation)}
            buttonStyle={tw`bg-green-700 w-10`}
              icon={
                <Icon
                  name="cloud-upload-outline"
                  size={24}
                  color="white"
                  type="ionicon"
                />
              }
            />
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