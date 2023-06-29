import React, { useLayoutEffect } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Home, Maps, SearchResults, Search, HotelDetail, Booking, BookingCompleted } from "../../screens";
import { HeaderTitleHome } from "../../components";
import { theme } from "../../constants"


const Stack = createNativeStackNavigator()

const HomeNavigator = ({ navigation, route }) => {

    useLayoutEffect(() => {
        const routeName = ["SearchResults", "HotelDetail","Booking","BookingCompleted"  ]
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
            <Stack.Screen name="Search" component={ Search } options={{ title: "Búsqueda", headerStyle: { backgroundColor: theme.colors.secondary } }}   />
            <Stack.Screen name="Maps" component={ Maps } options={{ title: "Mapa", headerStyle: { backgroundColor: theme.colors.secondary } }} /> 
            <Stack.Screen name="SearchResults" component={ SearchResults } options={{ title: "Resultados", headerStyle: { backgroundColor: theme.colors.secondary } }}/>
            <Stack.Screen name="HotelDetail" component={ HotelDetail } options={{ title: "Detalle", headerStyle: { backgroundColor: theme.colors.secondary } }}  />
            <Stack.Screen name="Booking" component={ Booking } options={{ title: "Reservación", headerStyle: { backgroundColor: theme.colors.secondary } }}  />
            <Stack.Screen name="BookingCompleted" component={ BookingCompleted } options={{ headerShown: false }}  />
        </Stack.Navigator>
    )
}

export default HomeNavigator;