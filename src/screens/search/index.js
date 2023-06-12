import React, { useEffect, useState } from 'react'
import { Text, View } from "react-native"
import { LocationSelector, SearchInput, SearchFilterResults } from '../../components';
import { locations } from '../../constants';
import { styles } from './styles'

const Search = () => {

  const [searchInput, setSearchInput] = useState("")  

  return (

    <View style={styles.view}>

      <SearchInput
        onChange={ text => setSearchInput(text) }
        value={ searchInput }
        styleAlign={ styles.searchInput }
      />

      <LocationSelector />

      { 
        searchInput !== "" 
        ? (
            <View>
              <Text style={ styles.result } > Resultados </Text>
              <SearchFilterResults 
                data={ locations }
                searchInput={ searchInput }
              /> 
            </View>
          )
        : null
      }
        
  
  </View>
  )
}

export default Search
