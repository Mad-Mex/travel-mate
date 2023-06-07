import { useReducer, useState } from 'react'
import { ActivityIndicator, Modal, Pressable, Text, View } from 'react-native'
import { Button, FormInput, Label } from '../../components'
import { clearError, signUp } from '../../store/actions'
import { UPDATE_FORM, onInputChange } from '../../utils/validateForm'
import { useDispatch, useSelector } from 'react-redux'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles }  from './styles'
import theme from '../../constants/theme'

  
const initialState = {
  email: { value: "", error: "", touched: false, hasError: true },
  password: { value: "", error: "", touched: false, hasError: true },
  isFormValid: false
}

const formReducer = (state, action) => {
  switch (action.type) {

    case UPDATE_FORM:

      const { name, value, hasError, error, touched, isFormValid  } = action.data

      return {
        ...state,
        [name]: {
          ...state[name],
          value,
          hasError,
          error,
          touched
        },
        isFormValid
      }
    }
}



const SignUp= ({ navigation }) => {
 
  const [hidePassword, setHidePassword] = useState(true) 
  const [formState, dispatchFormState] = useReducer(formReducer, initialState )

  const dispatch = useDispatch()
  const { error, isLoading, hasError } = useSelector( state => state.auth  )


  const onHandlerAuth = () =>{
    dispatch( signUp({ email: formState.email.value, password: formState.password.value }))
    
    if(!isLoading && !hasError){
      setTimeout(() => {
        navigation.navigate("CreatedAccount")
      }, 900)
    }
  }

  const onHandlerInputChange = ({ value, name }) => {
    onInputChange({ name, value, dispatch: dispatchFormState, formState })
  }

  const onHandlerButtonModal = () => {
    dispatch( clearError())
  }
  

  return (

    <View style={ styles.view } >

      <View style={ styles.containerLogo } >
        <View style={ styles.container } >
          <MaterialCommunityIcons name="airballoon" style={ styles.logoIcon } />
        </View>
        <Text style={ styles.textLogo } > TravelMate </Text>
      </View>       

      <Label label="Correo" >
        <FormInput 
            placeholder="Añade un correo"
            autoCapitalie="none"
            autoCorrect={ false } 
            textContentType="emailAddress"
            secureTextEntry={ false }
            value={ formState.email.value }
            error={ formState.email.error }
            touched={ formState.email.touched }
            hasError={ formState.email.hasError }
            onChange={ text => onHandlerInputChange({ value: text, name: "email"  })   }
            iconName="email-outline"
            iconStyle={ styles.inputIcon }        
        />
      </Label>

      <Label label="Contraseña" >
        <FormInput 
            placeholder="Añade una contraseña"
            autoCapitalize="none"
            autoCorrect={ false }
            textContentType="password"
            secureTextEntry={ hidePassword }
            value={ formState.password.value }
            error={ formState.password.error }
            touched={ formState.password.touched }
            hasError={ formState.password.hasError } 
            onChange={ text => onHandlerInputChange({ value: text, name: "password" }) }
            iconName="lock-outline"
            iconStyle={ styles.inputIcon }        
        />
        <Pressable style={ styles.eyeContainer } onPress={() => setHidePassword(!hidePassword)} >
          <MaterialCommunityIcons name={ hidePassword ? "eye-off-outline" : "eye-outline" } style={ styles.eyeIcon } />
        </Pressable>
      </Label>


      <Button 
        buttonStyle={ styles.button } 
        disabled={ !formState.isFormValid }  
        onPress={ onHandlerAuth }   
       
      >
        <Text style={ styles.textButton } > Crear cuenta </Text>
      </Button>

      <Text style={ styles.terms } > Al continuar aceptas 
        <Text style={styles.span }  > nuestros términos y condiciones </Text>
      </Text>


      <View style={ styles.containerLink } >
        <Text style={ styles.textAccount } > ¿Ya tienes cuenta? </Text>
        <Text style={[ styles.textAccount, styles.textAccountLink ]} onPress={() => navigation.navigate("SignIn")  }  > Inicia sesión </Text>
      </View>


      <Modal visible={ hasError || isLoading } transparent animationType='fade'>
        <View style={ styles.overallContainer } >
          <View style={ styles.modalContainer }>
            <Text style={ styles.modalTitle } > { error ? error : "Cargando" } </Text>
              {
                error 
                ? (
                  <Button buttonStyle={ styles.button } disabled={ false } onPress={ onHandlerButtonModal } 
                  >
                    <Text style={ styles.textButton } > Ok </Text> 
                  </Button>
                )
                
                : <ActivityIndicator size="large" color={ theme.colors.primary }   />
              }
          </View>
        </View>
      </Modal>
        
    </View>
  )
}

export default SignUp
