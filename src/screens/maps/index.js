import React, { useEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import { URL_GEOCODING } from '../../constants/maps'
import { styles } from './styles'


const Maps = ({ route }) => {

    const { coords } = route.params
    const [newAddress, setNewAddress] = useState(null)
    const [selectedLocation, setSelectedLocation] = useState(null)
  
    const initialRegion = {
      latitude: coords?.lat,
      longitude: coords?.lng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    }
  
  
    useEffect(() => {
      const geocodeLocation = async () => {
        const response = await fetch(URL_GEOCODING(coords.lat, coords.lng))
  
        if( !response.ok ) {
          return console.log("Algo salió mal");
        } 
  
        const data = await response.json()
        
        if(!data.results) {
          return console.log("No se encontró la dirección del lugar");
        }
  
        const address = data.results[0].formatted_address
        setNewAddress(address)        
      }
  
      geocodeLocation()
    
    }, [])
  
  
    const onHandlerPickedLocation = ( event  ) => {
      setSelectedLocation({
        lat: event.nativeEvent.coordinate.latitude,
        lng: event.nativeEvent.coordinate.longitude,
      })
    }  


  return (
    
    <MapView
      style={ styles.mapView }
      initialRegion={ initialRegion }
      onPress={ onHandlerPickedLocation }
      minZoomLevel={ 14 }
    >

    { 
      selectedLocation 

      ? (
        <Marker 
          title='Ubicación seleccionada'
          coordinate={{
            latitude: selectedLocation?.lat,
            longitude: selectedLocation?.lng
          }}
        />
      ) : null  
    }

  </MapView>
  
  )
}

export default Maps


