import React from 'react'
import { Text, TouchableOpacity, View } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';

const ProfileOptionCard = ({ iconName, title, subtitle1, subtitle2 }) => {

  return (

    <View style={ styles.cardContainer } >

        <View style={ styles.horizontalContainer } >
            <MaterialIcons name={ iconName } style={ styles.icon } />
        </View>  

        <View style={ styles.textContainer } >
            <Text style={ styles.title } > { title }  </Text>
            <Text style={ styles.subtitle } > { subtitle1 }   </Text>

            { 
                subtitle2 !== "" 
                ? <Text style={ styles.subtitle } > { subtitle2 } </Text>
                : null
            }
            
        </View>  

        <TouchableOpacity 
            style={ styles.horizontalContainer } 
            onPress={() => console.log("Botón presionado")}  
            hitSlop={ 16 }
        >
            <MaterialIcons name="keyboard-arrow-right" style={ styles.icon } />
        </TouchableOpacity>  
    </View>
  )
}

export default ProfileOptionCard
