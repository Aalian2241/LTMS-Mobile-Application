import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import RideHistory from './inProgress';
import { useSelector } from 'react-redux';
import { selectProgress } from '../../slices/navSlice';


const progressComp = () => {
  const progress = useSelector(selectProgress)
  if (progress)
    {
      return ( <RideHistory/> );
    }
    else
    {
      return (
        <Text>asdsd</Text>
      );
    }
}

export default progressComp

const styles = StyleSheet.create({})