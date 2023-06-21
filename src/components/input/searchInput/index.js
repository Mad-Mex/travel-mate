import React from 'react'
import { TextInput, TouchableOpacity, View } from 'react-native'
import { AntDesign  } from "@expo/vector-icons"
import { styles } from './styles'

const SearchInput = ({ styleAlign, placeholder, value, onChange, onBlur, iconStyle }) => {

  return (

    <View>
        <TextInput 
          style={[ styles.input, styleAlign ]  }
          placeholder={ placeholder }
          value={ value }
          onChangeText={ onChange }
          onBlur={ onBlur }
        />
        <AntDesign name='search1' style={ iconStyle } />

        {
          value !== ""
          ? (
            <TouchableOpacity style={ styles.closeIconContainer } onPress={() => onChange("") }  >
              <AntDesign name="closecircle" style={ styles.closeIcon } />
            </TouchableOpacity>
            
          )
          : null
        }

    </View>
  )
}

export default SearchInput
