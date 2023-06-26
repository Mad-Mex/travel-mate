import React, {  useEffect, useState }  from 'react'
import { ScrollView, Text, TouchableOpacity } from "react-native"
import { Button, CalendarDate, Counter, SearchContainerFolded  } from "../../components"
import { SearchInput } from "../../components/input"
import { LoadingModal } from "../../modal"
import { useDispatch } from 'react-redux'
import { booking } from "../../store/actions"
import { getLodgingByCity  } from "../../utils"
import { styles } from './styles'


const Search = ({ navigation }) => {

  const [inputLocation, setInputLocation] = useState("")
  const [inputDate, setInputDate] = useState("")
  const [inputGuest, setInputGuest] = useState(1)

  const [isLocationFolded, setIsLocationFolded] = useState(false)
  const [isDateFolded, setIsDateFolded] = useState(true)
  const [isGuestFolded, setIsGuestFolded] = useState(true)

  const [isMainButtonDisabled, setIsMainButtonDisabled] = useState(true)
  const [error, setError] = useState("")
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [selected, setSelected] = useState("")

  const dispatch = useDispatch()
  
  useEffect(() => {
    if( inputLocation !== "" && inputDate !== "" ){
      setIsMainButtonDisabled(false)
    }
  }, [inputLocation, inputDate ])

  const onHandlerButtonModal = () => {
    setError("")
    hasError(false)
  }
  


  return (

    <ScrollView style={ styles.view } >

      {
        !isLocationFolded 
        ? (
            <TouchableOpacity style={ styles.searchContainer } >
              <Text style={ styles.title }> ¿A dónde quieres ir?  </Text>
              <SearchInput 
                styleAlign={ styles.searchInput }
                placeholder="Busca una ciudad"
                onChange={ text => setInputLocation( text ) }
                value={ inputLocation }
                iconStyle={ styles.searchIcon }
                onBlur={ ()=> setIsLocationFolded(true) }
              />
            </TouchableOpacity>

        ) : (
              <SearchContainerFolded 
                iconName="location-on"
                value={ inputLocation ? inputLocation : "Ubicación" }
                onUnfold={ () => setIsLocationFolded(false) }
              />
            )
      }


      {
        !isDateFolded
        ? (
            <TouchableOpacity style={ styles.searchContainer }   >
              <Text style={ styles.title }> Elige una fecha </Text>

              <CalendarDate 
                calendarStyle={ styles.calendar }
                selected={ selected }
                onSelect={ setSelected } 
              />
  
              <Button 
                buttonStyle={ styles.button } 
                disabled={ selected == "" ? true : false }  
                onPress={ () => {
                  setInputDate( selected )
                  setIsDateFolded(true)
                }}
              >
                <Text style={ styles.textButton } > Aplicar </Text>
              </Button> 
            </TouchableOpacity> 

        ) : (
              <SearchContainerFolded 
                iconName="date-range"
                value={ inputDate ? inputDate : "Fecha de viaje" }
                onUnfold={ () => setIsDateFolded(false) }
              />
            )
      }


      {
        !isGuestFolded 
        ? (
            <TouchableOpacity style={ styles.searchContainer } >
              <Text style={ styles.title }> Hospedaje </Text>
  
              <Counter 
                category="Adultos"
                onGuest={ text => setInputGuest(text) }
                guest={ inputGuest }
              /> 
  
              <Button buttonStyle={ styles.button }  onPress={ () => setIsGuestFolded(true) }  >
                <Text style={ styles.textButton } > Aplicar </Text>
              </Button>
            </TouchableOpacity>

        ) : (
              <SearchContainerFolded 
                iconName="person"
                value={ inputGuest ? inputGuest : "Número de personas" }
                onUnfold={ () => setIsGuestFolded(false) }
              />
            )
      }

      <Button 
        buttonStyle={[styles.mainButton, isMainButtonDisabled ? styles.mainButtonDisabled : styles.mainButtonEnabled ]} 
        disabled={ isMainButtonDisabled }
        onPress={ () => {
          
          dispatch( booking({ date: inputDate, guest: inputGuest }))
          
          setIsLoading(true)

          getLodgingByCity( inputLocation )
            .then( result => {
              setIsLoading(false)
              navigation.navigate("SearchResults", { search: result[0].places, city: inputLocation })
            })
            .catch( error =>{
              setHasError(true)
              setError(error)
            })
        }}
      >
        <Text style={ styles.textButton } > Realizar búsqueda </Text>
      </Button>

      <LoadingModal 
        animationType="fade"
        error={ error }
        visible={ hasError || isLoading }
        onHandlerError = { onHandlerButtonModal }
      /> 

    </ScrollView>
  )
}

export default Search
