import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon, Image } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import { selectDestination, selectProgress } from '../../slices/navSlice'
import { useNavigation } from '@react-navigation/native'
import tw from "twrnc";
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view'
import { TouchableOpacity } from 'react-native-gesture-handler'

const scheduledTrips = () => {
    const progress = useSelector(selectProgress)
    const destination = useSelector(selectDestination)
    
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const data = [
        {
          id:"LHASDIEAP1028",
          scheduled_at: "20 November, 2022",
          amount: "USD 23",
          origin: "Lahore, Punjab, Pakistan",
          destination: "Karachi, Sindh, Pakistan"
        }, 
        {
          id:"LHPSADOPQ1028",
          scheduled_at: "29 November, 2022",
          amount: "USD 35",
          origin: "Peshawar, KPK, Pakistan",
          destination: "Lahore, Punjab, Pakistan"
        }
      ]
  return (
    <></>
  )
}

export default scheduledTrips

const styles = StyleSheet.create({})