import React from 'react'
import { Image, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { Button } from "../../components"
import { MaterialIcons  } from "@expo/vector-icons"
import { styles } from './styles'

const BookingCompleted = ({ navigation }) => {

  const travels = useSelector( state => state.travels )
  const { travel } = travels
  const { hotelImage, hotelName, location, date, guest } = travel

  
  return (

    <View style={ styles.view } >
        <View style={ styles.container } >
            <Text style={ styles.title } > Pago completado </Text>
            <MaterialIcons name="check-circle" style={ styles.checkIcon } />

            <View style={ styles.flexContainer } >
                <Image source={ hotelImage } style={ styles.hotelImage } />
                <View>
                    <Text style={ styles.hotelName } > { hotelName }  </Text>
                    <Text style={ styles.hotelLocation } > { location } </Text>
                </View>
            </View>

            <Text style={ styles.subtitle }> Detalles </Text>
            
            <View style={ styles.flexContainer2 } >
                <MaterialIcons name="date-range" style={ styles.containerIcon } />
                <Text style={ styles.textContainer }> { date } </Text>
            </View>

            <View style={ styles.flexContainer2 } >
                <MaterialIcons name="person" style={ styles.containerIcon } />
                <Text style={ styles.textContainer } > { `${guest} persona(s)` } </Text>
            </View>


            <View style={ styles.pointsContainer } >
                <Text style={ styles.points } > Puntos generados: 200  </Text>
            </View>

            <Button buttonStyle={ styles.button } disabled={ false } onPress={ () => navigation.navigate("Home") } >
                <Text style={ styles.textButton } > Regresar al Inicio </Text>
            </Button>


            
           



        </View>

    </View>
  )
}

export default BookingCompleted
