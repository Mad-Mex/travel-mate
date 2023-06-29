import React from 'react'
import {  Text, TextInput, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles'

const FormInput = (
  { 
    onChange, 
    placeholder, 
    secureTextEntry, 
    textContentType, 
    value, 
    iconName, 
    iconStyle, 
    autoCapitalize, 
    autoCorrect,
    error,
    hasError, 
    touched
  }) => {

  return (

    <View>

       <TextInput
        placeholder={ placeholder }
        placeholderTextColor={ styles.placeholderTextColor }
        style={ styles.input }
        autoCapitalize={ autoCapitalize }
        autoCorrect={ autoCorrect }
        value={ value }
      
        textContentType={ textContentType }
        secureTextEntry={ secureTextEntry }
        onChangeText={ onChange }
      />

      <MaterialCommunityIcons name={ iconName } style={ iconStyle } />

      { 
        hasError && touched  
        ? (
            <View style={ styles.errorContainer } >
              <Text style={ styles.errorMessage } > { error } </Text>
            </View>
        )
        : null
      }      
    </View>     
  )
}

export default FormInput
