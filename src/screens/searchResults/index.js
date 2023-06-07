import React from 'react'
import {  Image, ScrollView, Text, View } from "react-native"
import { Ionicons } from '@expo/vector-icons'
import { styles } from './styles'
import { CardInfoLodgingLarge } from '../../components'


const SearchResults = ({ navigation }) => {

  return (

   <ScrollView style={ styles.view } >    

    <View style={ styles.infoSearchContainer } >
      <View style={ styles.flexContainer } >
        <Ionicons name="calendar" style={ styles.icon }  />
        <Text style={ styles.textIcon } > 25 - 26 May </Text>
      </View>

      <View style={ styles.divider } ></View>

      <View style={ styles.flexContainer } >
        <Ionicons name="person" style={ styles.icon }  />
        <Text style={ styles.textIcon } > 1 huésped </Text>
      </View>  
    </View>

    <Image source={ require("../../../assets/images/google_map_2.jpg") } style={ styles.imageMap } />

    <Text style={ styles.title } > Resultados </Text> 

    <CardInfoLodgingLarge 
      url={ require("../../../assets/images/house_indoor_5.jpg") }
       lodging="Casa - pareja"
       hotelName="Casa Roma Azulejos"
       rankingText="8.5 - Muy bien"
       reviewNumber="250"
       price= "40"
       navigation={ navigation }
    />

   </ScrollView>
  )
}

export default SearchResults
