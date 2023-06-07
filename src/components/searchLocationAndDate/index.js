import React from 'react'
import { ImageBackground, Text, TextInput, View } from "react-native";
import { styles } from './styles'
import { Button } from "../../components";
import { Ionicons } from '@expo/vector-icons';

const SearchLocationAndDate = () => {
    
    return(

        <ImageBackground style={ styles.imageContainer } source={ require("../../../assets/images/search_location.jpg") }    >
            <View style={ styles.overallContainer } >

                <View style={ styles.topContainer  } >
                    <View style={ styles.locationContainer }>
                        <Text style={ styles.searchTitle } > Elige una ciudad </Text>
                        <View style={ styles.inputContainer } >
                            <TextInput
                                style={ styles.input }
                                textContentType="location"
                                placeholder='Buenos Aires'
                                placeholderStyle={ styles.placeholder } 
                            />
                            <Ionicons name="location-sharp" style={ styles.locationIcon }  />
                        </View>
                        
                    </View>

                    <View style={ styles.dateContainer }>
                        <Text style={ styles.searchTitle }   > Elige una fecha </Text>
                        <View style={ styles.inputContainer } >
                            <TextInput
                                style={ styles.input }
                                textContentType="location"
                                placeholder='26 - 27 Mayo ' 
                            />
                            <Ionicons name="calendar-outline" style={ styles.dateIcon }  />
                        </View>
                    </View>
                </View>

                <View style={ styles.bottomContainer } >  
                    <Button  
                        buttonStyle={ styles.button }
                        disabled={ false }
                        onPress={()=> console.log("Button pressed") }
                    >
                        <Text style={ styles.textButton } > Buscar </Text>
                    </Button>
                </View>
            </View>
        </ImageBackground>
    )

}


export default SearchLocationAndDate
