import React from 'react'
import { View } from "react-native"
import { ProfileInfoCard, ProfileOptionCard } from '../../components'
import { styles } from './styles'


const Profile = () => {

  return (
    
    <View style={ styles.view } > 

      <ProfileInfoCard 
        userName="Nombre del usuario"
        userMail="Correo del usuario"
      />

      <ProfileOptionCard
        iconName="account-box"
        title="Cuenta"
        subtitle1="Accede a tu perfil y modifica tus"
        subtitle2="datos personales" 
      />

      <ProfileOptionCard
        iconName="notifications"
        title="Notificaciones"
        subtitle1="Consulta tus notificaciones"
        subtitle2="" 
      />

      <ProfileOptionCard
        iconName="credit-card"
        title="Métodos de pago"
        subtitle1="Estable tus métodos de pago"
        subtitle2="preferidos" 
      />
        
    </View>
  )
}

export default Profile
