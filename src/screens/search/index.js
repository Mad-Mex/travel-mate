import React, { useEffect, useState } from 'react'
import { Text, View } from "react-native"
import { SearchInput, SearchResults } from '../../components';
import { locations } from '../../constants';
import { styles } from './styles'

const Search = ({ navigation }) => {

  const [searchInput, setSearchInput] = useState("")  

  
  return (

    <View style={styles.view}>

        <Text style={ styles.sectionTitle } > Búsqueda </Text>

        <SearchInput
            onChange={ text => setSearchInput(text) }
            value={ searchInput }
        />

        <Text style={ styles.result }> Resultados </Text>

        <SearchResults 
          data={ locations }
          searchInput={ searchInput }
          navigation={ navigation } 
        />
  </View>
  )
}

export default Search
