import React, { useLayoutEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Home, Maps, SearchResults, Search, HotelDetail, Booking,  } from "../../screens";
import { HeaderTitleHome } from "../../components";


const Stack = createNativeStackNavigator()

const HomeNavigator = ({ navigation, route }) => {

    useLayoutEffect(() => {
        const routeName = ["SearchResults", "HotelDetail"]
        if(routeName.includes(getFocusedRouteNameFromRoute(route)) ){
            navigation.setOptions({ tabBarStyle: { display: "none" } })
        }else {
            navigation.setOptions({ tabBarStyle: { display: "flex" }  })
        }
        
    }, [navigation, route])

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
            <Stack.Screen name="HotelDetail" component={ HotelDetail } options={{ title: "Detalle"  }}  />
            <Stack.Screen name="Booking" component={ Booking } options={{ title: "Reservación" }}  />
        </Stack.Navigator>
    )
}

export default HomeNavigator;