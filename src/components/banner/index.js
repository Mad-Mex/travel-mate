import React from 'react'
import {  ImageBackground, Text, TouchableOpacity,  View } from "react-native"
import { styles } from './styles'

const Banner = ({ title, subtitle1, subtitle2, subtitle3, url }) => {

  return (
    
    <ImageBackground source={ url } style={ styles.image } >

        <View style={ styles.darkBackground } >
            <View style={ styles.sponsorContainer }>
                <Text style={ styles.sponsorText } > Patrocinado </Text> 
            </View>

            <Text style={ styles.title }> { title } </Text>
            <Text style={ styles.subtitle }> { subtitle1 } </Text>
            <Text style={ styles.subtitle }> { subtitle2 } </Text>
            <Text style={ styles.subtitle }> { subtitle3 } </Text>
        
            <TouchableOpacity style={ styles.button } hitSlop={ 16 }  >
              <Text style={  styles.textButton  } > Ver más </Text>
            </TouchableOpacity>
        </View>
       
    </ImageBackground>
  )
}

export default Banner
