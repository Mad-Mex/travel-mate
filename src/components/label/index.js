import React from 'react'
import { Text, View } from "react-native"
import { styles } from './styles'

const Label = ({ children, label }) => {

  return (

    <View>
        <Text style={ styles.label } > { label } </Text>
            { children }
    </View>
  )
}

export default Label
