import React,{useEffect,useState} from 'react';

import MapViewDirections from 'react-native-maps-directions';
import MapView from 'react-native-maps';
import { Dimensions, StyleSheet, View, Text } from 'react-native';
import { Marker } from 'react-native-maps';  


const Map = ({navigation,route}) => {
  // const {OriLat,OriLong,} = route.params;
   const {OriLat,OriLong,curLat,curLong} = route.params;
const origin = {latitude: parseFloat(curLat), longitude: parseFloat(curLong)};
// const origin = {latitude: parseFloat(OriLat), longitude: parseFloat(OriLong)};
const destination = {latitude: parseFloat(OriLat), longitude: parseFloat(OriLong)};

const GOOGLE_MAPS_APIKEY = 'AIzaSyAC3l1uVE_dBJCjvMOSEyNnLvvZLILaTB0';
const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 22.48;
const LONGITUDE = 71.07;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
var mapView = null;

const  onReady = (result) => {
  mapView.fitToCoordinates(result.coordinates, {
    edgePadding: {
      right: (width / 10),
      bottom: (height / 10),
      left: (width / 10),
      top: (height / 10),
    },
  });
}
const [position, setPosition] = useState({
  latitude: 10,
  longitude: 10,
  latitudeDelta: 0.001,
  longitudeDelta: 0.001,
});

  return (
    <View style={StyleSheet.absoluteFill}>

    <MapView 
     initialRegion={{
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    }}  
    style={StyleSheet.absoluteFill}
          ref={c => mapView = c}
          >
           <Marker  coordinate={origin} title={'My Place'}  pinColor={'green'} />  
          <Marker  coordinate={destination} title={'Restaurant'}  pinColor={'green'} />  
    <MapViewDirections
      origin={origin}
      destination={destination}
      apikey={GOOGLE_MAPS_APIKEY}
      strokeWidth={3}
      strokeColor="green"
      waypoints={[]}
      onStart={(params) => {
        console.log(`Started routing between "${params.origin}" and "${params.destination}"${(params.waypoints.length ? " using waypoints: " + params.waypoints.join(', ') : "")}`);
      }}
      onReady={(result)=>onReady(result)}
      onError={(errorMessage) => {
        console.log('errorMessage=',errorMessage);
        alert('Not possible to find routes')
      }}
      resetOnChange={false}
    />
  </MapView>
  </View>
  )
}
export default Map;