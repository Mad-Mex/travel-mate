import React from 'react';
import {  ImageBackground, Text, View } from 'react-native';
import { Button } from '../../components';
import styles from './styles';


const Welcome = ({ navigation }) => {

  return (

    <View>

        <ImageBackground source={ require("../../../assets/images/air_balloon.jpg")} style={ styles.imageBackground }  >
           <View style={ styles.darkBackground } >
                <Text style={ styles.textLogo } > TravelMate </Text>
                <Text style={ styles.title } > Descubre nuevos lugares y </Text>
                <Text style={ styles.title } > planifia tu aventura  </Text>

                <Button   
                  buttonStyle={ styles.signUpButton }
                  disabled={ false }
                  onPress={ () =>  navigation.navigate("SignUp") }
                >  
                  <Text style={ styles.signUpText } > Registrarse </Text>
                </Button>
                
                <Button 
                  buttonStyle={ styles.signInButton }
                  disabled={ false }
                  onPress={ ()=> navigation.navigate("SignIn")   }
                >
                  <Text style={ styles.signInText } > Iniciar sesión </Text>
                </Button>

           </View>
        </ImageBackground>

        
    </View>
  )
}

export default Welcome
