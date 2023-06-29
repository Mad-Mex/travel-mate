import React  from 'react'
import { Image, ScrollView, Text, View } from "react-native"
import { TravelCard } from "../../components/card"
import { useSelector } from 'react-redux'
import { styles } from './styles'


const Travels = () => {

  const travels = useSelector( state => state.travels )
  
  return (

    <ScrollView style={ styles.view } >

      {
        !travels.travel
        ? (
          <View style={ styles.imageContainer }>
            <Image source={ require("../../../assets/images/travel_3.png") } style={ styles.image } />
            <Text style={ styles.subtitle } > Aún no tienes ningún viaje </Text>
          </View>
        ) 
        : (
          <View style={ styles.container } >
            <Text style={ styles.title } > Mis Viajes </Text>
            <TravelCard 
              travels={ travels }
            />
          </View>
        )
      }
        
    </ScrollView>
  )
}

export default Travels
