import React, { useState } from 'react'
import { Alert, Text, TouchableOpacity, View } from "react-native"
import { getCurrentPositionAsync, requestForegroundPermissionsAsync  } from "expo-location"
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles'


const LocationSelector = () => {

  const navigation = useNavigation()
  const [pickedLocation, setPickedLocation] = useState(null)  

  const verifyPermission = async() =>{
    const { status } = await requestForegroundPermissionsAsync()

    if(status !== "granted"){
        Alert.alert( "Permisos insuficientes. Necesitamos tu permiso para obtener la ubicación", [
            { text: "Entendido" }
        ]);
        return false
    }

    return true
  }; 


  const onHandleGetLocation = async( isMaps = false ) => {
    const isLocationPermissionGranted = await verifyPermission()
    if(!isLocationPermissionGranted) return
    
    const location = await getCurrentPositionAsync({
        timeout: 5000
    })

    const {  latitude, longitude  } = location.coords
    setPickedLocation({ lat: latitude, lng: longitude })

    if(isMaps) {
      navigation.navigate("Maps", { coords: { lat: latitude, lng: longitude } } )
    } 
  }

  return (

    <TouchableOpacity style={ styles.overallContainer } onPress={ () =>  onHandleGetLocation(true) } >

      <View style={ styles.flexContainer } >
        <View style={ styles.locationContainer } >
          <MaterialIcons name="my-location" style={ styles.locationIcon } />
        </View>
        <Text style={ styles.currentLocation } > Usar ubicación actual </Text>
      </View>

    </TouchableOpacity>
  )
}

export default LocationSelector


