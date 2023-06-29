import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Travels } from "../../screens";
import { theme } from "../../constants"


const Stack = createNativeStackNavigator()

    const TravelsNavigator = () => {

    return(

        <Stack.Navigator initialRouteName="Travels">
            <Stack.Screen name="Travels" component={ Travels } options={{ title: "Viajes", headerStyle: { backgroundColor: theme.colors.primary } }}  />   
        </Stack.Navigator>
    )
}

export default TravelsNavigator;