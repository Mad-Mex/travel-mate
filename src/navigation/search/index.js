import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Search } from "../../screens";



const Stack = createNativeStackNavigator()

const SearchNavigator = () => {

    return(

        <Stack.Navigator initialRouteName="Search">
            <Stack.Screen name="Search" component={ Search }  options={{ title: "" }} />   
        </Stack.Navigator>
    )
}

export default SearchNavigator;