import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { MaterialIcons } from "@expo/vector-icons"
import { styles } from './styles'

const SearchContainerFolded = ({ iconName, value, onUnfold }) => {
  
  return (

    <TouchableOpacity style={ styles.searchContainerFolded } onPress={ onUnfold }  >
        <MaterialIcons name={ iconName } style={ styles.iconContainerFolded } />
        <Text style={ styles.textContainerFolded  } > { value } </Text>
    </TouchableOpacity>
  )
}

export default SearchContainerFolded
