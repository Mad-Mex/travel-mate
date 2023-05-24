import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../../screens";
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
        </Stack.Navigator>
    )
}

export default HomeNavigator;