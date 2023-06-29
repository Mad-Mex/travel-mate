import React from 'react'
import { ActivityIndicator, Modal, Text, View } from 'react-native'
import { Button } from "../../components"
import { theme } from "../../constants"
import { styles } from "./styles"

const LoadingModal = ({ animationType, error, isVisible, onClose }) => {

  return (

    <Modal visible={ isVisible } transparent animationType={ animationType }>
        <View style={ styles.overallContainer } >
          <View style={ styles.modalContainer }>
            <Text style={ styles.modalTitle } > { error ? "Se produjo un error" : "Cargando" } </Text>
              {
                error 
                ? (
                  <Button buttonStyle={ styles.button } disabled={ false } onPress={ onClose } 
                  >
                    <Text style={ styles.textButton } > Ok </Text> 
                  </Button>
                )
                
                : <ActivityIndicator size="large" color={ theme.colors.primary }   />
              }
          </View>
        </View>
      </Modal>
  )
}

export default LoadingModal



