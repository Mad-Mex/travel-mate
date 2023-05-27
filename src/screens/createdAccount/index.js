import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles'
import { Button } from '../../components';


const listBenefits = [
  {
    iconName: "plane",
    benefit: "Hospedaje en más de 1,000,000 sitios turísticos"
  },

  {
    iconName: "tag",
    benefit: "Ofertas relámpago exclusivas"
  },

  {
    iconName: "ticket",
    benefit: "Reservaciones ilimitadas"
  },

  {
    iconName: "gift",
    benefit: "Recompensas, bonificaciones y descuentos"
  },


]

const CreatedAccount = ({ navigation }) => {

  return (

    <View style={ styles.view } >

    <View style={ styles.imageContainer }>
          <Image 
            source={ require("../../../assets/images/travel_draw.png") }
            style={ styles.image }
          />
        </View>

        <Text style={ styles.title }> ¡ Gracias por unirte a  </Text>
        <Text style={ styles.title }>  
          <Text style={ styles.logoText } > TravelMate </Text>
          ! 
        </Text>

        <Text style={ styles.subtitle }> Con tu cuenta obtienes los siguientes beneficios: </Text>

        <View style={ styles.listContainer } >
          <FlatList 
            data={ listBenefits }
            renderItem={({ item, index }) => (
              <View style={ styles.container } key={ index }  >
                <FontAwesome name={ item.iconName } style={ styles.icon } />
                <Text style={ styles.benefit } > { item.benefit } </Text>
              </View>
            )}
          />
        </View>
        

    <Button 
      buttonStyle={ styles.button }
      enabled={ true }
      onPress={ () => navigation.navigate("TabsNavigator")}
      >
        <Text style={ styles.textButton }> Entendido </Text>
    </Button>        
        
    </View>
  )
}

export default CreatedAccount
