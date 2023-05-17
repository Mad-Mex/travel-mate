import React, { useState } from 'react';
import {  ImageBackground, Text, View } from 'react-native';
import { Button, ModalSignIn } from '../../components';
import styles from './styles';


const Welcome = ({ navigation }) => {

  const [isModalVisible, setIsModalVisible] = useState(false)

  return (

    <View>

        <ImageBackground source={ require("../../../assets/images/air_balloon.jpg")} style={ styles.imageBackground }  >
           <View style={ styles.darkBackground } >
                <Text style={ styles.textLogo } > TravelMate </Text>
                <Text style={ styles.title } > Descubre nuevos lugares y </Text>
                <Text style={ styles.title } > planifia tu aventura  </Text>

                <Button   
                  buttonStyle={ styles.signInButton }
                  enabled={ true }
                  onPress={ () => setIsModalVisible(true)}
                >  
                  <Text style={ styles.signInText } > Registrarse </Text>
                </Button>


                
                <Button 
                  buttonStyle={ styles.logInButton }
                  enabled={ false }
                >
                  <Text> Iniciar sesión </Text>
                </Button>


                <Text style={ styles.privacity } > Al continuar aceptas nuestros 
                    <Text style={ styles.spanText } > términos y condiciones </Text>
                    y
                    <Text style={ styles.spanText } > la política de privacidad </Text>
                </Text>
           </View>
        </ImageBackground>

        <ModalSignIn 
          isVisible={isModalVisible }
          animationType="slide"
          onCancel={ () => setIsModalVisible(false) }
          onNavigate={ () => navigation.navigate("SignInForm")   }
        /> 
        
        

    </View>
  )
}

export default Welcome
