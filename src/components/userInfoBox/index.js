import React from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

const UserInfoBox = ({ label, userName }) => {

  return (

    <View>
        <Text style={ styles.label }> { label }  </Text>
        <View style={ styles.userDataContainer } >
            <Text style={ styles.userName } > { userName } </Text>
        </View>
  </View>
  )
}

export default UserInfoBox
