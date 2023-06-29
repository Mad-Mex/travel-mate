import React, { useReducer, useState } from 'react'
import { Pressable, Text, View } from "react-native"
import { Button, Label } from "../../components"
import { FormInput } from "../../components/input"
import { LoadingModal } from "../../modal"
import { clearError, signIn } from '../../store/actions';
import { UPDATE_FORM, onInputChange } from '../../utils/validateForm';
import { useDispatch, useSelector } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from './styles'



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



const SignIn = ({ navigation }) => {

  const [hidePassword, setHidePassword] = useState(true) 
  const [ formState, dispatchFormState ] = useReducer( formReducer, initialState )
  const dispatch = useDispatch()
  const { error, hasError, isLoading  } = useSelector( state => state.auth )

  const onHandlerAuth = () =>{
    dispatch(signIn({ email: formState.email.value, password: formState.password.value }))

    if(!isLoading && !hasError){
      setTimeout(() => {
        navigation.navigate("TabsNavigator")
      }, 250)
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
        
      <Text style={ styles.title }  > Iniciar sesión </Text>
      <Text style={ styles.subtitle } > Ingresa y descubre nuevos lugares  </Text>

      <Label label="Correo" >
        <FormInput 
          placeholder="Escribe tu correo"
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
        <Text style={ styles.textButton } > Iniciar sesión </Text>
      </Button>
      
      <View style={ styles.containerLink } > 
        <Text style={ styles.textNoAccount } > ¿ Aún no tienes cuenta ? </Text>
        <Text style={[ styles.textNoAccount, styles.textNoAccountLink ]} onPress={() => navigation.navigate("SignUp")  }   > Regístrate </Text>
      </View>


      <LoadingModal 
        animationType="fade"
        error={ error }
        isVisible={ hasError || isLoading }
        onClose={ onHandlerButtonModal }
      />
    
    </View>
  )
}

export default SignIn
