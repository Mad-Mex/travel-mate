import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles'


const HeaderTitleHome = () => {

  const [notification, setNotification] = useState(false)  

  return (

    <View style={ styles.container } >
        <Text style={ styles.textLogo } > TravelMate  </Text>
        <View style={ styles.containerIcon } >
            <MaterialCommunityIcons name="bell" style={ styles.icon } />

            { 
                notification 
                
                ?   <View style={ styles.notificationContainer } >
                        <Text style={ styles.textNotification } > 5 </Text>
                    </View>

                : null
            }
             
        </View>
    </View>
  )
}

export default HeaderTitleHome;
