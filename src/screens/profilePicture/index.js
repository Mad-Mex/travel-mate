import { Image, Pressable, Text, View } from "react-native"
import { Button, UserInfoBox } from '../../components'
import { useSelector } from 'react-redux'
import styles from './styles'



const ProfilePicture = ({ navigation }) => {

  const { user } = useSelector( state => state.user ) 

  
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
          userName={ user.name }
       />

        <UserInfoBox 
          label="Correo"
          userName={ user.email }
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
