import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RideHistory from './inProgress';
import { useSelector } from 'react-redux';
import { selectDestination, selectProgress } from '../../slices/navSlice';
import tw from "twrnc"

const ProgressComp = () => {
  const progress = useSelector(selectProgress)
  const destination = useSelector(selectDestination)
  if (progress && destination)
    {
      return ( <RideHistory/> );
    }
    else
    {
      return (
        <Text style={tw`text-center font-bold text-3xl p-30`}>START A TRIP FIRST</Text>
      );
    }
}

export default ProgressComp

const styles = StyleSheet.create({})