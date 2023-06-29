import React from 'react'
import { Image, Text, View } from 'react-native'
import { MaterialIcons } from "@expo/vector-icons"
import { styles } from './styles'

const TravelCard = ({ travels }) => {

  const { travel } = travels
  const { hotelImage, hotelName, location, date, guest } = travel

  return (

    <View style={ styles.cardContainer } >
        <Image source={ hotelImage } style={ styles.cardImage }  />
        
        <View style={ styles.contentContainer } >
            <Text style={ styles.cardTitle }> { hotelName } </Text>
            <Text style={ styles.cardSubtitle } > { location } </Text>

            <View style={ styles.flexContainer } >
                <MaterialIcons name='date-range' style={ styles.cardIcon } />
                <Text style={ styles.cardText } > { date } </Text>
            </View>

            <View style={ styles.flexContainer } >
                <MaterialIcons name='person' style={ styles.cardIcon } />
                <Text style={ styles.cardText } > { `${guest} persona(s)` } </Text>
            </View>
        </View>
    </View>

  )
}

export default TravelCard
