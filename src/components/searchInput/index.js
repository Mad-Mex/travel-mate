import React from 'react'
import { TextInput, View } from "react-native"
import { AntDesign } from '@expo/vector-icons'
import { styles } from './styles'

const SearchInput = ({ value, onChange, styleAlign }) => {

  return (

    <View>
    
      <TextInput
        style={[styles.input, styleAlign ]}
        placeholder="Busca un país o una ciudad "
        onChangeText={ onChange }
        value={ value }
      />
    
    { 
      value !== ""

      ? <AntDesign name="closecircleo" style={styles.closeIcon} onPress={() => onChange("") } /> 
      : null
    }

    <AntDesign name="search1" style={styles.searchIcon} />
</View>

  )
}

export default SearchInput
