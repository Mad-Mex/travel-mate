import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profile } from "../../screens";



const Stack = createNativeStackNavigator()

const ProfileNavigator = () => {

    return(

        <Stack.Navigator initialRouteName="Profile">
            <Stack.Screen name="Profile" component={ Profile } options={{ title: "Perfil" }}  />   
        </Stack.Navigator>
    )
}

export default ProfileNavigator;