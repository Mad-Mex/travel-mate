import React from 'react'
import { FlatList, Modal, Pressable, Text, View } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { allServices } from '../../constants';
import { styles } from './styles';



const ServicesModal = ({ isVisible, animationType, onCancel }) => {

  return (

    <Modal 
      style={ styles.viewModal } 
      visible={ isVisible } 
      animationType={ animationType }   
    >

        <Pressable style={ styles.closeIconContainer } onPress={ onCancel }  >
            <MaterialCommunityIcons name="close" style={ styles.closeIcon } />
        </Pressable>

        <View style={ styles.titleContainer } >
          <Text style={ styles.title } > Lista de Servicios </Text>
        </View>
        
        
        <FlatList 
          data={ allServices }
          keyExtractor={ item => item.id }
          renderItem={({ item }) => (

            <View>
              <Text style={ styles.category } > { item.category } </Text>
              
              <FlatList 
                data={ item.services }
                keyExtractor={ item => item.id }
                renderItem={({ item }) => (

                  <View style={ styles.flexContainer } key={ item.id  } >
                    <MaterialCommunityIcons name={ item.iconName } style={ styles.icon } />
                    <Text style={ styles.serviceText } > { item.name }  </Text>
                  </View>
                )}  
              />

            </View>
          )}
        />
    </Modal>
  )
}

export default ServicesModal
