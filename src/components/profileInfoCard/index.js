import React from 'react'
import { Text, View } from "react-native"
import { Ionicons } from '@expo/vector-icons'
import { styles } from './styles'

const ProfileInfoCard = ({ userName, userMail }) => {

  return (
    <View style={ styles.containerUserInfo }>

          <View style={ styles.containerImageProfile }>
            <Ionicons name="md-person-circle-sharp" style={ styles.iconUser } />
          </View>

          <View style={ styles.containerContent } >
            <Text style={ styles.name } > { userName } </Text>
            <Text style={ styles.email } > { userMail } </Text>

            <View style={ styles.flexContainer } >
               <View style={ styles.divider } ></View>
            </View>

            <View style={ styles.flexContainer2 } >
              <View style={ styles.flexContainer } >
                <Text style={ styles.category } > Viajes </Text>
                <Text style={ styles.number } > 0 </Text>
              </View>

              <View style={ styles.flexContainer }>
                <Text style={ styles.category } > Reseñas </Text>
                <Text style={ styles.number } > 0 </Text>
              </View>

              <View style={ styles.flexContainer } >
                <Text style={ styles.category } > Puntos </Text>
                <Text style={ styles.number } > 0 </Text>
              </View>

            </View>
          </View>
        </View>
  )
}

export default ProfileInfoCard
