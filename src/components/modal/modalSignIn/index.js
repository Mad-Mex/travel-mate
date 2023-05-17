import React from 'react'
import {  Image, Modal,Pressable,Text, View } from 'react-native';
import { Button } from "../..";
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import styles from './styles';


const ModalSignIn = ({ isVisible, animationType, onCancel, onNavigate }) => {

  return (

   <Modal visible={ isVisible } animationType={ animationType } transparent    >
        <View style={ styles.view }  >
            <View style={ styles.container } >
                <Pressable onPress={ onCancel }  >
                    <AntDesign name="closecircle" style={ styles.closeIcon } />
                </Pressable>
                <Text style={ styles.title } > Regístrate </Text>
                <Text style={ styles.subtitle } > Encuentra tu próximo destino, planifica tu visita y reserva fácilmente </Text>


                {/* TO DO [Login con autentificación de cuenta mediante Firebase]  */}

                <Button
                    buttonStyle={ styles.googleButton }
                    enabled={ false }
                >  
                    <View style={ styles.buttonContainer }  >
                        <Text style={[ styles.textButton, styles.textGoogleColor  ] }> Regístrate con Google </Text>
                        <Image source={ require("../../../../assets/images/google_icon.png")}  style={ styles.googleIcon } /> 
                    </View>
                </Button>

                <Button
                    buttonStyle={ styles.facebookButton }
                    enabled={ false }
                >  
                    <View style={ styles.buttonContainer }  >
                        <Text style={[ styles.textButton, styles.textFacebookColor  ] }> Regístrate con Facebook </Text>
                        <EvilIcons name="sc-facebook" style={styles.iconFacebook} />
                    </View>
                </Button>

                <Button
                    buttonStyle={ styles.mailButton }
                    enabled={ true }
                    onPress={ onNavigate }
                >  
                    <View style={ styles.buttonContainer }  >
                        <Text style={[ styles.textButton, styles.textMailColor  ]}> Regístrate con el correo </Text>
                        <AntDesign name="mail" style={[ styles.icon, styles.iconMailColor  ] } />
                    </View>
                </Button>

                

                
            </View>
        </View>
           
            
        
   </Modal>
  )
}

export default ModalSignIn
