import React, { useState } from 'react'
import { FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Banner, Button } from '../../components'
import { InfoLodgingSmallCard } from "../../components/card"
import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import {styles} from './styles'


const lodging = [

  {
      id: "1",
      name: "Hotel",
      iconName: "bed" 
  },

  {
      id: "2",
      name: "Casa",
      iconName: "home-city" 
  },

  {
      id: "3",
      name: "Cabaña",
      iconName: "greenhouse" 
  },

  {
      id: "4",
      name: "Piscina",
      iconName: "pool" 
  },

  {
      id: "5",
      name: "Comida",
      iconName: "silverware-fork-knife" 
  },

  {
      id: "6",
      name: "Castillo",
      iconName: "castle" 
  },
]


const adventures = [
  {
    id: "1",
    url: require("../../../assets/images/climbing_3.jpg")
  },

  {
    id: "2",
    url: require("../../../assets/images/camping.jpg")
  },

  {
    id: "3",
    url: require("../../../assets/images/llama.jpg")
  },

  {
    id: "4",
    url: require("../../../assets/images/ballon_1.jpg")
  },

  {
    id: "5",
    url: require("../../../assets/images/land_rover_jungle.jpg")
  },

  {
    id: "6",
    url: require("../../../assets/images/snorkeling.jpg")
  },
]



const Home = ({ navigation }) => {

  
  return (

    <ScrollView style={ styles.view }>

      <Image 
        style={ styles.image }
        source={ require("../../../assets/images/search_location.jpg") }
      />

      <Button buttonStyle={ styles.button } onPress={ () => navigation.navigate("Search") }>
        <MaterialIcons name="search" style={ styles.searchIcon} />
        <Text style={ styles.textButton } > Encuentra tu próximo destino </Text>
      </Button>

      <Text style={ styles.title } > Explora </Text>

      <InfoLodgingSmallCard
        url={ require("../../../assets/images/cottage.jpg") }
        discount= { false }
        discountPercentage= ""
        lodging="Hotel - Familiar"
        hotelName="Fuente Grande"
        city="Cd. de México, México"
        previousPrice=""
        price="60"
      />

      
      <View style={ styles.containerFlexRow } >
        <Text style={ styles.title} > Descuentos Hot Sale </Text> 
        <Ionicons name="flame-sharp" style={ styles.flameIcon } />
      </View>

      <InfoLodgingSmallCard
        url={ require("../../../assets/images/la_barranquita.jpg") }
        discount={ true }
        discountPercentage= "20%"
        lodging="Hotel - Familiar"
        hotelName="La Barranquita"
        city="B.C.N., México"
        previousPrice="30"
        price="24"
      />


      <Text style={ styles.title } > Tipo de alojamiento </Text>

      <View style={ styles.listContainer } >
        <FlatList
          data={ lodging }
          horizontal
          showsHorizontalScrollIndicator={ false }
          keyExtractor={ item => item.id }
          renderItem={({ item }) => (
            <View style={ styles.containerFlexRow2 }   >
              <View style={ styles.containerIcon }  >
                <MaterialCommunityIcons name={ item.iconName } style={ styles.lodgingIcon } />
              </View>
              <Text style={ styles.category } > { item.name } </Text>
              
            </View>
          )} 
        />
      </View>

      <Banner 
        title="Descubre Islandia"
        subtitle1="Visita las cascadas de Selfoss, adéntrate en "    
        subtitle2="las cavernas de Lofthellir o contempla las"
        subtitle3="hermosas auroras boreales."
        

        url={ require("../../../assets/images/iceland_banner.jpg") }
      />

      <Text style={ styles.title } > Relájate en Buenos Aires </Text>

      <InfoLodgingSmallCard
        url={ require("../../../assets/images/hotel_pool_night.jpg") }
        discount={ false }
        discountPercentage= ""
        lodging="Hotel - Familiar"
        hotelName="La Plata Resort"
        city="La Plata, Argentina"
        previousPrice=""
        price="15"
      />

      <Text style={ styles.title } > Vive aventuras extremas </Text>

      <View style={ styles.imageContainer } >
        <FlatList 
          data={ adventures }
          horizontal
          showsHorizontalScrollIndicator={ false }
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Image 
              source={ item.url }
              style={ styles.imageAdventure }
            />
          )}
        />
      </View>

    </ScrollView>
  )
}

export default Home
