import { useEffect, useState } from 'react'
import { Pressable, FlatList, Text, View } from 'react-native'
import { Button, Input } from '../../components'
import useNewUser from '../../hooks/useNewUser'
import { Ionicons } from '@expo/vector-icons';
import styles from './styles'


const requirements = [
    "- Al menos 8 carácteres",
    "- Al menos un carácter especial",
    "- Al menos un número",
    "- Es necesario utilizar minúsculas y mayúsculas"
];
  
const regex = new RegExp( "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");




const SignInForm = ({ navigation }) => {

  const [inputName, setInputName] = useState("")
  const [inputEmail, setInputEmail] = useState("")
  const [inputPassword, setInputPassword] = useState("")
  const [hidePassword, setHidePassword] = useState(true)

  const [validationName, setValidationName] = useState(false)
  const [validationEmail, setValidationEmail] = useState(false)
  const [validationPassword, setValidationPassword] = useState(false)

  const [enabled, setEnabled] = useState(false)
  const {newUser, setNewUser}  = useNewUser()  


  useEffect(() => {
    if( inputName !== ""  ) {
      setValidationName(true)
    }
  }, [inputName])


  useEffect(() => {
    if( inputEmail !== "") {
      setValidationEmail(true)
    }
  }, [inputEmail])


  useEffect(() => {
    if( regex.test(inputPassword)   ) {
      setValidationPassword(true)
    }
  }, [inputPassword])


  useEffect(() => {
    if( validationName && validationEmail &&  validationPassword ) {
        setEnabled(true)
    }
  }, [validationEmail, validationEmail, validationPassword])


  const onHandleSubmitForm = () => {
    if( enabled ){

      const data = {
        name: inputName,
        email: inputEmail,
        password: inputPassword
      }

      setNewUser( data )
      navigation.navigate("ProfilePicture")
    }
  }

  return (

    <View style={ styles.view } >
        <Text style={ styles.title } > Crear Cuenta </Text>

        <Input 
            placeholder="Nombre"
            textContentType="emailAddress"
            secureTextEntry={ false }
            value={ inputName }
            onChange={ text => setInputName(text)  }
        />

        <Input 
            placeholder="Correo"
            textContentType="emailAddress"
            secureTextEntry={ false }
            value={ inputEmail }
            onChange={ text => setInputEmail(text) }
        />

        <View style={ styles.passwordContainer } >
            <Input 
                placeholder="Contraseña"
                textContentType="password"
                secureTextEntry={ hidePassword }
                value={ inputPassword }
                onChange={ text => setInputPassword(text) }
            />
            <Pressable 
                style={ styles.eyeIconContainer } 
                onPress={ () => setHidePassword(!hidePassword)   }
            >
                <Ionicons name={ hidePassword ? "eye-off" : "eye" } style={ styles.icon } />
            </Pressable>
        </View>

        <Text style={ styles.passwordRequirements } > Requisitos </Text>

        {
            requirements.map((item, index) =>(

                <View style={ styles.requirementListContainer } key={ index }  >
              <Text 
              style={[ styles.textRequirement, validationPassword ? styles.textSuccessColor : styles.textNeutralColor ]} >
                { item }
              </Text>
            </View>

            ))
        }

        <Button
            buttonStyle={ styles.submitFormButton }
            onPress={ onHandleSubmitForm }
            enabled={ enabled }
        >
            <Text style={ styles.textButton } > Continuar  </Text>
        </Button> 
    </View>
  )
}

export default SignInForm
