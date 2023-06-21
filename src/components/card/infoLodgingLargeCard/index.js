import React, { useState } from 'react'
import { Image , Pressable, Text, TouchableOpacity, View } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles'

const InfoLodgingLargeCard = ({ 
  url, 
  lodging, 
  hotelName, 
  rankingText, 
  reviewNumber, 
  price, 
  navigation }) => {


  const [liked, setLiked] = useState(false)

  
  return (
    
    <TouchableOpacity style={ styles.cardContainer } onPress={ ()=> navigation.navigate("HotelDetail") } >

      <Image source={ url } style={ styles.cardImage } />
      <Pressable style={ styles.heartContainer } onPress={() => setLiked(!liked)  } >
        <MaterialCommunityIcons 
          name={ liked ? "cards-heart" : "cards-heart-outline" }
          style={[styles.heartIcon, liked ?  styles.heartIconFilled : styles.heartIconOutline  ]}  />
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

export default InfoLodgingLargeCard
