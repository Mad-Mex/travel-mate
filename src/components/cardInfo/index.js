import React, { useState } from 'react'
import { Image, Pressable, Text, View } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles'


const CardInfo = ({ url, discount, discountPercentage,  lodging, hotelName, city, previousPrice, price  }) => {

  const [liked, setLiked] = useState(false)

  return (

    <View style={ styles.cardContainer } >

        <View style={ styles.imageContainer } >
          <Image source={ url} style={ styles.cardImage} />
          <Pressable hitSlop={ 16 } style={ styles.iconContainer }  onPress={() => setLiked(!liked)}  >
            <AntDesign name="heart" style={ [styles.heartIcon, liked ? styles.heartIconPressedColor : styles.heartIconNeutralColor  ]} />
          </Pressable>  
        </View>

        <View style={ styles.containerContent } >

          <View style={ styles.lodgingContainer } >
            <Text style={ styles.lodging } > { lodging } </Text>
            <Text style={ styles.hotelName }> { hotelName } </Text>
            <Text style={ styles.hotelLocation } > { city } </Text>
          </View>

          <View style={ styles.containerPrice } >
            { discount === true ? <Text style={ styles.priceDiscount } > { `$${ previousPrice }` } </Text> : null }
            <View>
              <Text style={ styles.price } > { `$${ price }` } </Text>
              <Text style={ styles.textPrice } > c/noche </Text>
            </View>
          </View>
        </View>        
      </View>
  )
}

export default CardInfo
