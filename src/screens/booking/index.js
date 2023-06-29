import React, { useState }  from 'react'
import { ActivityIndicator, Image, Modal, ScrollView, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux' 
import { createTravels  } from "../../store/actions"
import { Button } from "../../components"
 import { MaterialIcons } from "@expo/vector-icons"
 import { theme } from '../../constants'
import { styles } from './styles'


const Booking = ({ navigation, route }) => {

  const dispatch = useDispatch()
  const bookingInfo = useSelector( state => state.booking )
  const { date, guest  } = bookingInfo
  const { search } = route.params
  const { hotelImage, hotelName, location, price } = search
  const [ isLoading, setIsLoading] = useState(false) 
  
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
          <Text  style={ styles.infoContainer } > { date } </Text> 
        </View>
      </View>

      <View style={ styles.flexContainer } >
        
        <View style={ styles.flexContainer2 }>
          <MaterialIcons name="person" style={ styles.icon } />
          <Text  style={ styles.infoContainer } > { `${ guest } adultos` } </Text> 
        </View>
      </View>

      <View style={ styles.divider } ></View>

      <Text style={ styles.subtitle } > Desglose </Text>
      <View style={ styles.flexContainer } >
        <Text style={ styles.infoContainer } > 1 Cuarto </Text>
        <Text style={ styles.infoContainer } > { `$${ price }` } </Text>
      </View>

      <View style={ styles.divider } ></View>

      <Button 
        buttonStyle={ styles.button } 
        disabled={ false } 
        onPress={ () =>  {

            setIsLoading(true)
            
            dispatch( createTravels({
              travel: {
                hotelImage,
                hotelName,
                location,
                date,
                guest
              }
            }))

            setTimeout(() => {
              setIsLoading(true)
              setIsLoading(false)
              navigation.navigate("BookingCompleted")
            }, 3000);
     
        }} >

        <Text style={ styles.textButton } > Pagar </Text>
      </Button>


      <Modal visible={ isLoading } transparent animationType='fade'>
        <View style={ styles.overallContainer } >
          <View style={ styles.modalContainer }>
            <Text style={ styles.modalTitle } >  Procesando tu orden </Text>  
              <ActivityIndicator size="large" color={ theme.colors.primary } />
          </View>
        </View>
      </Modal>

     
    </ScrollView>
  )
}

export default Booking
