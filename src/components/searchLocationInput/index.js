import React from 'react'
import { TextInput, View } from 'react-native'
import { MaterialIcons  } from "@expo/vector-icons"
import { styles } from './styles'


const SearchLocationInput = ({ placeholder, iconName, onFocus, value, textContentType }) => {

  return (

    <View style={ styles.inputContainer }  >
        <TextInput 
            style={ styles.input }
            placeholder={ placeholder }
            onFocus={ onFocus }
            value={ value }
            textContentType={ textContentType }
        />
        <MaterialIcons 
            name={ iconName }
            style={ styles.inputIcon }
        />
    </View>
  )
}

export default SearchLocationInput
