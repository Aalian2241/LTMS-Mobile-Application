import {Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import MapView, { Marker } from 'react-native-maps';
var axios = require('axios');
import tw from "twrnc";
import { useDispatch, useSelector } from 'react-redux';
import { selectDescription, selectDestination, selectLocation, selectOrigin, setTravelTimeInformation } from '../../slices/navSlice';
import MapViewDirections from "react-native-maps-directions";
import {GOOGLE_MAPS_APIKEY} from "@env";

const Map =  () => {
    const destination = useSelector(selectDestination)
    const origin = useSelector(selectOrigin);
    const dispatch = useDispatch();
    const {height, width} = Dimensions.get('window');
    const halfHeight = height;
    const [lat,setLat] = useState(0.02)
    const [long,setLong] = useState(0.02)
 
    const mapRef = useRef(null);
    useEffect(
      ()=>{
        if (!origin || !destination) return;
        // zoom and fit to markers
        mapRef.current.fitToSuppliedMarkers(["origin","destination"],{
            edgePadding: { top:50, right:50, bottom:500, left:50}, 
        });

      }, [origin,destination]);
    
    useEffect(()=>{
      if (!origin || !destination) return;
      const getTravelTime= async()=>{
        
        fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin.description}&destinations=${destination.description}&units=imperial&key=${GOOGLE_MAPS_APIKEY}`)
        .then((res)=> res.json())
        .then((res)=>{
          setLong(0.2);
          // console.log("res: "+res)
          setLat(0.2);
          dispatch(setTravelTimeInformation(res.rows[0].elements[0]));
        })
        .catch(function(err) {
          console.log('There has been a problem with your fetch operation: ' + err.message);
           // ADD THIS THROW error
            throw err;
          }); 
        }
      getTravelTime();
    },[origin,destination,GOOGLE_MAPS_APIKEY])
    

  return (
    
      <MapView
      ref= {mapRef}
      style={{
          width,
          height:halfHeight,
      }}
      mapType="mutedStandard"
      region={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: lat,
        longitudeDelta: long,
      }}
      >
        {origin && destination &&(
          <MapViewDirections
            origin = {origin.description}
            destination={destination.description}
            apikey= {GOOGLE_MAPS_APIKEY}
            strokeWidth={3}
            strokeColor="blue"
          />
        )}
          {origin?.location && (
                  <Marker
                  coordinate={{
                    latitude: origin.location.lat,
                    longitude: origin.location.lng,
                  }}
                  title="Pick Up"
                  description={origin.description}
                  identifier="Origin"
                  />
                )
          }

          {destination?.location && (
                  <Marker
                  coordinate={{
                    latitude: destination.location.lat,
                    longitude: destination.location.lng,
                  }}
                  title="Drop Off"
                  description={destination.description}
                  identifier="Destination"
                  />
                )
          }
      </MapView>
    
  )
}

export default Map
