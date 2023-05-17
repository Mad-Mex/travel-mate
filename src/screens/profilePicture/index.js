import { useEffect, useState } from 'react'
import { Image, Pressable, Text, View } from "react-native"
import { Button, UserInfoBox } from '../../components'
import styles from './styles'
import useNewUser from '../../hooks/useNewUser'

const defaultProfileImage = require("../../../assets/images/user_icon.png")


const ProfilePicture = ({ navigation }) => {

  const [profileImage, setProfileImage] = useState( defaultProfileImage )
  const [enabled, setEnabled] = useState(false)
  const { newUser, setNewUser  } = useNewUser()
  

  useEffect(() => {
    if(profileImage !== defaultProfileImage ){
        setEnabled(true)
    }
  }, [profileImage])
    

  const onSubmitCreateAccount= () => {
    navigation.navigate("CreatedAccount")
  }

  
    
  return (

    <View style={ styles.view } >
        <Text style={ styles.title }  > Foto de Perfil </Text>
        <Text style={ styles.subtitle } > Añade una foto para identificarte durante el hospedaje </Text>

        <Pressable style={ styles.containerPicture } >
          <Image 
            source={ require("../../../assets/images/user_icon.png") }
            style={ styles.profilePicture }
        />
        </Pressable>

       <UserInfoBox 
          label="Nombre"
          userName={ newUser.name }
       />

        <UserInfoBox 
          label="Correo"
          userName= { newUser.email }
       />

        <Button
          buttonStyle={ styles.submitCreateAccount }
          enabled={ true }
          onPress= { onSubmitCreateAccount }
        >
            <Text style={ styles.textButton } > Crear cuenta </Text>
        </Button>
    </View>
  )
}
 

export default ProfilePicture
