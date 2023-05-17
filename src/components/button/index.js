import React from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './styles';

const Button = ({  buttonStyle, children, onPress, enabled}) => {
  return (
    <TouchableOpacity 
      enabled={ enabled }
      style={[ styles.button, buttonStyle, !enabled ? { opacity: 0.5 } : { opacity: 1 } ]} 
      onPress={ onPress }     >
         { children }
    </TouchableOpacity>
  )
}

export default Button
