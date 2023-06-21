import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { styles } from './styles';


const SearchFilterResults = ({ data, searchInput, onLocation }) => {

  return (

    <FlatList
        data={ data }
        nestedScrollEnabled={ true }
        renderItem={({ item }) => {

            const city = item.city.toLowerCase()
            const country = item.country.toLowerCase()
            const search = searchInput.toLowerCase()

            if( searchInput === "" ) return

            if( city.includes( search ) || country.includes(search)){

                return(

                    <TouchableOpacity 
                        style={ styles.cardContainer } 
                        onPress={() =>  {
                            onLocation(item.city)
                            console.log(item.city);        
                        }}>

                        <View style={ styles.flexContainer } >
                            <View>
                                <AntDesign name="enviromento" style={styles.cardIcon} />
                            </View> 

                            <View >
                                <Text style={ styles.cardName } > { item.city } </Text>
                                <Text style={ styles.cardLocation } > { item.country } </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            }
        }}
    />
  )
}

export default SearchFilterResults

