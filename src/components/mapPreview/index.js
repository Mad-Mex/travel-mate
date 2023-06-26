import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { URL_MAPS } from "../../constants"
import { styles } from './styles'

const MapPreview = ({ location }) => {
  
  const navigation = useNavigation()
  const { lat, lng } = location || {}  
  const mapPreviewUrl = location ? URL_MAPS( lat, lng ) : ""  

  return (

    <View>
        {
            location 
            ?(
              <TouchableOpacity style={ styles.mapContainer } onPress={() => navigation.navigate("Maps", { location })} >
                <Image source={{ uri: mapPreviewUrl }} style={ styles.map } />
              </TouchableOpacity>
            )  
            : null
        }
    </View>
  )
}

export default MapPreview
