import React, { useState } from 'react'
import { Image, ScrollView, Text, View } from 'react-native'
import { MaterialIcons } from "@expo/vector-icons"
import { useSelector } from 'react-redux' 
import { Button } from "../../components"

import { styles } from './styles'



const Booking = ({ route }) => {

  const bookingInfo = useSelector( state => state.booking )
  const { search } = route.params
  const { location, hotelName, hotelImage, price  } = search
    
  return (
    
    <ScrollView style={ styles.view } >
      <Text style={ styles.title } > Tu reservación </Text>

      <View style={ styles.hotelContainer } >
        <Image source={ hotelImage } style={ styles.hotelImage } />
        <View style={ styles.textContainer } >
          <Text style={ styles.hotelName } > { hotelName } </Text>
          <Text style={ styles.city } > { location } </Text>
        </View>
      </View>

      <Text style={ styles.subtitle }> Detalles del hospedaje </Text>

      <View style={ styles.flexContainer } >

        <View style={ styles.flexContainer2 }>
          <MaterialIcons name='date-range' style={ styles.icon } />
          <Text  style={ styles.infoContainer } > { bookingInfo.date } </Text> 
        </View>
      </View>

      <View style={ styles.flexContainer } >
        
        <View style={ styles.flexContainer2 }>
          <MaterialIcons name="person" style={ styles.icon } />
          <Text  style={ styles.infoContainer } > { `${ bookingInfo.guest } adultos` } </Text> 
        </View>
      </View>

      <View style={ styles.divider } ></View>

      <Text style={ styles.subtitle } > Desglose </Text>
      <View style={ styles.flexContainer } >
        <Text style={ styles.infoContainer } > 1 Cuarto </Text>
        <Text style={ styles.infoContainer } > { `$${ price }` } </Text>
      </View>

      <View style={ styles.divider } ></View>

      <Button buttonStyle={ styles.button } disabled={ false }>
        <Text style={ styles.textButton } > Pagar </Text>
      </Button>
      
    </ScrollView>
  )
}

export default Booking
