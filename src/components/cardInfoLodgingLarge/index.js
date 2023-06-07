import React from 'react'
import { Image , Pressable, Text, TouchableOpacity, View } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles'

const CardInfoLodgingLarge = ({ url, lodging, hotelName, rankingText, reviewNumber, price, navigation, liked }) => {

  return (
    
    <TouchableOpacity style={ styles.cardContainer } onPress={ ()=> navigation.navigate("HotelDetail") } >

      <Image source={ url } style={ styles.cardImage } />
      <Pressable style={ styles.heartContainer } >
        <Ionicons name="heart" style={ styles.heartIcon }  />
      </Pressable>
      
      <View style={ styles.contentContainer }  >

        <View style={ styles.lodgingContainer }  >
          <Text style={ styles.lodging } > { lodging } </Text>
          <Text style={ styles.hotelName } > { hotelName } </Text>
          <View style={ styles.flexContainer } >
            <View style={ styles.labelRankingContainer } >
              <Text style={ styles.rankingText } > { rankingText } </Text> 
            </View>
            <Text style={ styles.reviewNumber } > { `${ reviewNumber} evaluaciones` } </Text>
          </View>
        </View>

        <View style={ styles.priceContainer } >
          <Text style={ styles.price } > { `$${ price }` } </Text>
          <Text style={ styles.priceSubtitle } > c/noche </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default CardInfoLodgingLarge
