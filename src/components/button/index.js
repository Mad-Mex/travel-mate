import React from 'react';
import { TouchableOpacity } from 'react-native';
import { styles } from './styles';

const Button = ({  buttonStyle, children, onPress, disabled}) => {

  return (
    
    <TouchableOpacity 
      disabled={ disabled }
      style={[ styles.button, buttonStyle, disabled ? { opacity: 0.5 } : { opacity: 1 } ]} 
      onPress={ onPress }     >
         { children }
    </TouchableOpacity>
  )
}

export default Button
