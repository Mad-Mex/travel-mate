import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HotelDetail, Maps, Search, SearchResults } from "../../screens";



const Stack = createNativeStackNavigator()

const SearchNavigator = () => {

    return(

        <Stack.Navigator initialRouteName="Search">
            <Stack.Screen name="Search" component={ Search }  options={{ title: "Búsqueda" }} />
            <Stack.Screen name="Maps" component={ Maps } options={{ title: "" }} /> 
            <Stack.Screen name="SearchResults" component={ SearchResults } options={{ title: "Resultados" }}/>
            <Stack.Screen name="HotelDetail" component={ HotelDetail }  options={{ title: "" }} />   
        </Stack.Navigator>
    )
}

export default SearchNavigator;