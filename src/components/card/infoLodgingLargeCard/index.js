import React, { useState } from 'react'
import { Image , Pressable, Text, TouchableOpacity, View } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native';

const InfoLodgingLargeCard = ({ search }) => {

  const { hotelName, hotelImage, typeOfLodging, ranking, numberOfReviews, price, discount, discountPercentage } = search
  const [liked, setLiked] = useState(false)
  const navigation = useNavigation()

  
  return (
    
    <TouchableOpacity style={ styles.cardContainer } onPress={ ()=> navigation.navigate("HotelDetail", { search } ) } >

      <Image source={ hotelImage } style={ styles.cardImage } />
      <Pressable style={ styles.heartContainer } onPress={() => setLiked(!liked)  } >
        <MaterialCommunityIcons 
          name={ liked ? "cards-heart" : "cards-heart-outline" }
          style={[styles.heartIcon, liked ?  styles.heartIconFilled : styles.heartIconOutline  ]}  />
      </Pressable>
      
      <View style={ styles.contentContainer }  >

        <View style={ styles.lodgingContainer }  >
          <Text style={ styles.lodging } > { typeOfLodging } </Text>
          <Text style={ styles.hotelName } > { hotelName } </Text>
          <View style={ styles.flexContainer } >
            <View style={ styles.labelRankingContainer } >
              <Text style={ styles.rankingText } > { ranking } </Text> 
            </View>
            <Text style={ styles.reviewNumber } > { `${ numberOfReviews } evaluaciones` } </Text>
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
