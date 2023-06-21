import React, { useState } from "react"
import { FlatList, Image, Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { basicServices } from "../../constants";
import { styles } from "./styles";


const selectedOption = ["Detalles", "Reseñas"]

const HotelDetail = ({ navigation }) => {

    const [ isModalVisible, setIsModalVisible] = useState(false)
    const [ liked, setLiked] = useState(false)

    return(
        <ScrollView style={ styles.view } > 
            
            <View style={ styles.imageContainer } >
                <Image source={ require("../../../assets/images/house_indoor_5.jpg") } style={ styles.image }/>
                <Pressable style={ styles.heartIconContainer } onPress={() => setLiked(!liked)  }  >
                    <Ionicons name="heart" style={[ styles.iconImage, liked ? styles.iconColorFulfilled : styles.iconColor  ]  } />
                </Pressable>
                <Pressable style={ styles.shareIconContainer } >
                    <Ionicons name="share-social" style={[ styles.iconImage, styles.iconColor ] }  />
                </Pressable>
            </View>
            
            
            <View>
                <Text style={ styles.lodging } > Casa - pareja </Text>
                <Text style={ styles.hotelName } > Casa Roma Azulejos </Text>
                <Text style={ styles.hotelCity } > Cd. de México, México </Text>
                <View style={ styles.flexContainer } >
                    <View style={ styles.rankingLabelContainer } >
                        <Text style={ styles.ranking } > 8.6 - Muy bien </Text>
                    </View>
                    <Text style={ styles.numberReview } > 250 valoraciones </Text>
                </View>
            </View>

            <View style={ styles.divider } ></View>

            
            <>
                <FlatList 
                    data={ selectedOption }
                    horizontal
                    renderItem={({item}) => (
                        <View style={ styles.container } >
                            <Text style={ styles.hotelDetails } > { item } </Text>

                        </View>
                    )}
                />

                <Text style={ styles.titleSection } > Características </Text>
                <Text style={ styles.description } > Casa rodeada de arbustos y plantas. Contamos con </Text>
                <Text style={ styles.description }  > el servicio de spa y peluquería.  Cerca de la zona se </Text>
                <Text style={ styles.description }  > encuentra un centro comercial y un gimnasio . </Text>
                
                <View style={ styles.flexContainer2 } >
                    <Ionicons name="md-enter-outline" style={ styles.icon } />
                    <View>
                        <Text style={ styles.featureTitle } > Check-in </Text>
                        <Text style={ styles.featureSubtitle } > Registro en la terminal de la entrada principal </Text>
                        <Text style={ styles.featureSubtitle } > con el código QR del huésped </Text>
                    </View>
                </View>
            </> 

            <View style={ styles.divider } ></View>


            <>
                <Text style={ styles.titleSection }  > Tu habitación </Text>
                <View style={ styles.flexContainer3 } >
                    <Ionicons name="bed-outline" style={ styles.icon } />
                    <View>
                        <Text style={ styles.featureTitle } > 1 Cama </Text>
                        <Text style={ styles.featureSubtitle } > Tamaño matrimonial </Text>
                    </View>
                </View>
            </>

            <View style={ styles.divider } ></View>


            <>
                <Text style={ styles.titleSection } > Servicios </Text>

                <View style={ styles.flexContainer4 } >
                    { basicServices.map( service =>  (
                        (
                            <View style={ styles.flexContainer5 } key={ service.id }  >
                                <MaterialCommunityIcons name={ service.iconName } style={ styles.serviceIcon }  />
                                <Text style={ styles.textIcon } > { service.name }  </Text>
                            </View>
                        )
                    ))}
                </View>

                <View style={ styles.littleButtonContainer }>
                    <TouchableOpacity style={ styles.littleButton } onPress={() => setIsModalVisible(true)  }  >
                        <Text style={ styles.textButton } > Ver más </Text>
                    </TouchableOpacity> 
                </View>
            </>

            <View style={ styles.divider } ></View>


            <View style={ styles.divider } ></View>

            <>
                <Text style={ styles.titleSection } > Cancelación </Text>
                <Text style={ styles.cancellation } > Cancelación gratuita antes de 
                            <Text style={ styles.span } > 3 días </Text>
                de la fecha de </Text>
                <Text style={ [styles.cancellation, styles.marginBottom ] } > tu reservación </Text>
            </>
 
        </ScrollView>    
    )
}   

export default HotelDetail
