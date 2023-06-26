import React, { useEffect, useState } from 'react'
import { FlatList, Text, View } from "react-native"
import { MapPreview } from "../../components"
import { InfoLodgingLargeCard } from "../../components/card"
import { URL_GEOCODING } from "../../constants"
import { styles } from './styles'



const SearchResults = ({ route }) => {

  const { search, city } = route.params
  const [coords, setCoords] = useState("")


  useEffect(() => {    
    const getCoords = async( ) => {

      const response = await fetch( URL_GEOCODING(city))

      if( !response.ok) {
        return console.log("Algo salió mal");
      }

      const data = await response.json()
      
      if(!data.results){
        return console.log("No se encontraron las coordenadas")
      }

      const addressCoords = data.results[0].geometry.location
      setCoords( addressCoords )
    }

    getCoords()
  }, [])
  
  

  return (

   <View style={ styles.view } >

    <FlatList
      data={ search }
      ListHeaderComponent={(

        <>
          <Text style={ styles.title } > { city } </Text>
          <MapPreview 
            location={ coords }
          />
        </>
        
      )}
      
      keyExtractor={ item => item.id}
      renderItem={({ item }) => (
        
        <InfoLodgingLargeCard
          search={ item }
        />
      )}
    />    

   </View>
  )
}

export default SearchResults
