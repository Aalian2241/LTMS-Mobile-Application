import { StyleSheet, Text, View } from 'react-native'
import tw from 'twrnc';
import { Button, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { selectDestination, selectJobNo, selectJobStatus, selectLoadType, selectOrigin, selectProgress, selectStartDate, setJobStatus } from '../../slices/navSlice';
import SelectDropdown from 'react-native-select-dropdown'


const RideHistory = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const origin= useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const start_date = useSelector(selectStartDate);
    const job_status = useSelector(selectJobStatus);
    const progress = useSelector(selectProgress);
    const jobId = useSelector(selectJobNo);
    const load_type = useSelector(selectLoadType)

    const updateStatus = ["Picked-Up", "In-Transit", "Delivered", "Cancelled"]

  return (

    <View style={tw`flex-row justify-between `}>    
        <View style={tw`flex-1 border-green-700 p-1`}>
            <View style={tw`flex-row justify-between pb-4 border-b`}>
                
                <Text style={tw`text-left pt-2 px-2 font-bold text-2xl text-green-700 border-black`}>
                JOB NO. 
                </Text>
                <Text style={tw`text-left pt-2 px-2 font-bold text-2xl border-black`}>
                {jobId}
                </Text>
            </View>
            
            <View style={tw`flex-row border-b border-blue-100`}>
                    <Icon
                        name = "truck-outline"
                        type="material-community"
                        color="green"
                        size={35}
                    />
                    <Text style={tw`text-teal-700 text-lg w-100 pt-2`}>{origin.description}</Text>
            </View>
                <View style={tw`flex-row border-b `}>
                <Icon
                  
                  name = "location-outline"
                  type="ionicon"
                  color="green"
                  size={35}
                />
                    {/* <Image
                    style={{
                        width:40,
                        height:35,
                        resizeMode:"contain",
                        flex:1
                       
                    }}
                    source={{
                        uri:'https://iili.io/H9qmCpj.png'
                    }}
                    /> */}
                    <Text style={tw`text-teal-700 text-lg text-left  w-90 pt-4`}>{destination.description}</Text>
            </View>
                

            <View style={tw`flex-row justify-between mt-2 border-b border-zinc-300`}>
                <Text style={text1}>Scheduled On </Text>
                <Text style={text2}>{start_date}</Text>
            </View>
            
            <View style={tw`flex-row justify-between mt-2 border-b border-zinc-300`}>
                <Text style={text1}>Transporter</Text>
                <Text style={text2}>TCS</Text>
            </View>
            <View style={tw`flex-row justify-between mt-2 border-b border-zinc-300` }>
                <Text style={text1}>Load Type </Text>
                <Text style={text2}>Heavy</Text>
            </View>
            
            <View style={tw`justify-between flex-row mt-2 border-b border-zinc-300 `}>
                <Text style={text1}>UPDATE STATUS</Text>
                <Text style={text2}>Picked Up</Text>
                {/* <View >
                    <SelectDropdown
                        disabled={!progress}
                        buttonStyle={tw`bg-green-700  h-10 w-30`}
                        buttonTextStyle={tw`text-white`}
                        dropdownIconPosition={'left'}
                        data={updateStatus}
                        defaultValue={progress? job_status:"Select an Option"}
                        onSelect={(selectedItem, index) => {
                            dispatch(setJobStatus(selectedItem));
                        }}
                        buttonTextAfterSelection={(selectedItem, index) => {
                            // text represented after item is selected
                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                            return selectedItem
                        }}
                        rowTextForSelection={(item, index) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item
                        }}
                    />
                </View> */}
                
            </View>
            
        </View>
    </View>
        
    )
}
const text1 = tw`text-green-700 font-bold text-2xl pt-2`
const text2 = tw`text-black  text-xl pt-2`

export default RideHistory

