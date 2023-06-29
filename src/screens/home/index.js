import React  from 'react'
import { FlatList, Image, ScrollView, Text, View } from 'react-native'
import { Banner, Button } from '../../components'
import { adventures } from "../../constants"
import { MaterialIcons } from '@expo/vector-icons'
import { styles } from './styles'


const Home = ({ navigation }) => {

  return (

    <ScrollView style={ styles.view }>

      <Image source={ require("../../../assets/images/search_location.jpg")} style={ styles.image } />

      <Button buttonStyle={ styles.button } onPress={ () => navigation.navigate("Search") }>
        <MaterialIcons name="search" style={ styles.searchIcon} />
        <Text style={ styles.textButton } > Encuentra tu próximo destino </Text>
      </Button>

      <Text style={ styles.title } > Vive aventuras extremas </Text>

      <View style={ styles.imageContainer } >
        <FlatList 
          data={ adventures }
          horizontal
          showsHorizontalScrollIndicator={ false }
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <Image 
              source={ item.url }
              style={ styles.imageAdventure }
            />
          )}
        />
      </View>

      <Banner 
        title="Descubre Islandia"
        subtitle1="Visita las cascadas de Selfoss, adéntrate en "    
        subtitle2="las cavernas de Lofthellir o contempla las"
        subtitle3="hermosas auroras boreales."
        url={ require("../../../assets/images/iceland_banner.jpg") }
      />

    </ScrollView>
  )
}

export default Home
