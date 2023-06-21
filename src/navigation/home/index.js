import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Maps, SearchResults, HotelDetail, Search  } from "../../screens";
import { HeaderTitleHome } from "../../components";


const Stack = createNativeStackNavigator()

const HomeNavigator = () => {

    return(

        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
                name="Home" 
                component={ Home } 
                options={{ headerTitle: (props) => <HeaderTitleHome {...props} /> }} 
            />   
            <Stack.Screen name="Search" component={ Search } options={{ title: "Búsqueda" }}   />
            <Stack.Screen name="Maps" component={ Maps } options={{ title: "" }} /> 
            <Stack.Screen name="SearchResults" component={ SearchResults } options={{ title: "Resultados" }}/>
            <Stack.Screen name="HotelDetail" component={ HotelDetail }  options={{ title: "" }} />   
        </Stack.Navigator>
    )
}

export default HomeNavigator;