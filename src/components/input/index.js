import React from 'react'
import { TextInput } from 'react-native'
import styles from './styles'

const Input = ({ onChange, placeholder, secureTextEntry, textContentType, value }) => {

  return (

    <TextInput
        placeholder={ placeholder }
        placeholderTextColor={ styles.placeholderTextColor }
        style={ styles.input }
        value={ value }
        textContentType={ textContentType }
        secureTextEntry={ secureTextEntry }
        onChangeText={ onChange } 
       
        />
        
  )
}

export default Input
