import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Travels } from "../../screens";



const Stack = createNativeStackNavigator()

const TravelsNavigator = () => {

    return(

        <Stack.Navigator initialRouteName="Travels">
            <Stack.Screen name="Travels" component={ Travels } options={{ title: "" }}  />   
        </Stack.Navigator>
    )
}

export default TravelsNavigator;