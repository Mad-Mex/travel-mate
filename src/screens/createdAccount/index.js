import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { Button } from '../../components';
import { benefits } from '../../constants';
import { FontAwesome } from '@expo/vector-icons';
import styles from './styles'



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
            data={ benefits }
            renderItem={({ item, index }) => (
              <View style={ styles.container } key={ index }  >
                <FontAwesome name={ item.iconName } style={ styles.icon } />
                <Text style={ styles.feature } > { item.feature } </Text>
              </View>
            )}
          />
        </View>
        

    <Button 
      buttonStyle={ styles.button }
      disabled={ false }
      onPress={ () => navigation.navigate("TabsNavigator")}
      >
        <Text style={ styles.textButton }> Entendido </Text>
    </Button>        
        
    </View>
  )
}

export default CreatedAccount
