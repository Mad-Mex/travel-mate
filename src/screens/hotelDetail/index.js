import React, { useState } from "react"
import { Image, Pressable, ScrollView, Text, View } from "react-native"
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { Button } from "../../components"
import { styles } from "./styles";


const HotelDetail = ({ navigation, route }) => {

    const [ liked, setLiked] = useState(false)
    const { search } = route.params
    const { 
        hotelName, 
        hotelImage, 
        typeOfLodging, 
        ranking, 
        numberOfReviews, 
        price,
        description,
        description2,
        description3,
        bedSize,
        bedSizeIconName,
        cancelationDays,
        services
        } = search



    return(

        <>
        
        <ScrollView style={ styles.view } >

            <View style={ styles.imageContainer } >
                <Image source={ hotelImage } style={ styles.image }/>
                <Pressable style={ styles.heartIconContainer } onPress={() => setLiked(!liked)  }  >
                    <Ionicons name="heart" style={[ styles.iconImage, liked ? styles.iconColorFulfilled : styles.iconColor  ]  } />
                </Pressable>
                <Pressable style={ styles.shareIconContainer } >
                    <Ionicons name="share-social" style={[ styles.iconImage, styles.iconColor ] }  />
                </Pressable>
            </View>
            
            
            <View>
                <Text style={ styles.lodging } > { typeOfLodging } </Text>
                <Text style={ styles.hotelName } > { hotelName } </Text>
                <View style={ styles.flexContainer } >
                    <View style={ styles.rankingLabelContainer } >
                        <Text style={ styles.ranking } > { ranking } </Text>
                    </View>
                    <Text style={ styles.numberReview } > { `${ numberOfReviews } valoraciones` } </Text>
                </View>
            </View>

            <View style={ styles.divider } ></View>

            <View style={ styles.descriptionContainer } >
                <Text style={ styles.titleSection } > Características </Text>
                <Text style={ styles.description } > { description } </Text>
                <Text style={ styles.description }  > { description2 } </Text>
                <Text style={ styles.description }  > { description3 } </Text>  
            </View> 


            <View style={ styles.divider } ></View>

            <>
                <Text style={ styles.titleSection }  > Tu habitación </Text>
                <View style={ styles.flexContainer3 } >
                    <MaterialCommunityIcons name={ bedSizeIconName } style={ styles.icon } />
                    <View>
                        <Text style={ styles.featureTitle } > 1 Cama </Text>
                        <Text style={ styles.featureSubtitle } > { bedSize } </Text>
                    </View>
                </View>
            </>

            <View style={ styles.divider } ></View>


            <>
                <Text style={ styles.titleSection } > Servicios </Text>

                <View style={ styles.flexContainer4 } >
                    { services.map( ( service, index )  =>  (
                        (
                            <View style={ styles.flexContainer5 } key={ index }  >
                                <MaterialCommunityIcons name={ service.iconName } style={ styles.serviceIcon }  />
                                <Text style={ styles.textIcon } > { service.name }  </Text>
                            </View>
                        )
                    ))}
                </View>
            </>

            <View style={ styles.divider } ></View>


            <View style={ styles.divider } ></View>

            <>
                <Text style={ styles.titleSection } > Cancelación </Text>
                <Text style={ styles.cancellation } > Cancelación gratuita antes de 
                            <Text style={ styles.span } > { ` ${ cancelationDays } días` } </Text>
                de la fecha de </Text>
                <Text style={ [styles.cancellation, styles.marginBottom ] } > tu reservación </Text>
            </>

        </ScrollView>    

        <View style={ styles.bookingContainer } >
            <Text style={ styles.bookingPrice } > { `Precio : $${ price } ` } </Text>
            <Button buttonStyle={styles.bookingButton} onPress={ () => navigation.navigate("Booking", { search } ) }  >
                <Text style={ styles.bookingTextButton } > Reservar </Text>
            </Button>
        </View> 
        </>        
    )
}   

export default HotelDetail
