import React from 'react'
import {  ActivityIndicator, Button, Modal, Text, View } from 'react-native'
import { theme } from "../../../constants"
import { styles } from './styles'


const LoadingModal = ({ visible, animationType, error, onHandlerError  }) => {

  return (

    <Modal visible={ visible } transparent animationType={ animationType } >
        <View style={ styles.overallContainer } >
          <View style={ styles.modalContainer }>
            <Text style={ styles.modalTitle } > { error ? error : "Cargando" } </Text>

              {
                error 
                
                ? (
                  <Button  title='Ok' disabled={ false } onPress={ onHandlerError } />
                )
                
                : <ActivityIndicator size="large" color={ theme.colors.primary }   />
              }

          </View>
        </View>
      </Modal>

  )
}

export default LoadingModal
