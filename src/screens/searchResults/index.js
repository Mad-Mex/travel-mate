import React from 'react'
import { FlatList, Text, View } from "react-native"
import { InfoLodgingLargeCard } from "../../components/card"
import { styles } from './styles'



const SearchResults = ({ navigation, route }) => {

  const { data, city } = route.params
  

  return (

   <View style={ styles.view } >

    <FlatList
      data={ data }
      ListHeaderComponent={(
        <Text style={ styles.title } > { city } </Text> 
      )}
      
      keyExtractor={ item => item.id}
      renderItem={({ item }) => (
        
        <InfoLodgingLargeCard 
          url={ item.image }
          lodging={ item.lodging }
          hotelName={ item.hotelName }
          rankingText="8.5 - Muy bien"
          reviewNumber="250"
          price= { item.price }
          navigation={ navigation }
        />
      )}
    />    

   </View>
  )
}

export default SearchResults
