import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RideHistory from './inProgress';
import { useSelector } from 'react-redux';
import { selectDestination, selectProgress } from '../../slices/navSlice';


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
        <Text>START A TRIP FIRST</Text>
      );
    }
}

export default ProgressComp

const styles = StyleSheet.create({})