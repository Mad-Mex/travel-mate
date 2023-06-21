import React, { useEffect, useState }  from 'react'
import { Text, TouchableOpacity, View } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { styles } from './styles'

const Counter = ({ category, guest, onGuest }) => {


  const onAdd = () => {
    onGuest( prev => prev + 1 )
  }

  const onSubtract = () => {  
    if(guest <= 1) return
    onGuest( prev => prev -1 )
  }
  
  

  return (

    <View style={ styles.lodgingContainer } >
          
        <Text style={ styles.person } > { category } </Text>
                
        <View style={ styles.counterContainer } >
            <TouchableOpacity  style={ styles.counterButton } onPress={ onSubtract }  > 
                <MaterialCommunityIcons name='minus' style={ styles.iconButton } />
            </TouchableOpacity>

            <Text style={ styles.count } > { guest } </Text>

            <TouchableOpacity style={ styles.counterButton }  onPress={ onAdd }> 
                <MaterialCommunityIcons name='plus' style={ styles.iconButton } />
            </TouchableOpacity>
        </View>

    </View>
    
  )
}

export default Counter
