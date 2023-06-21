import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome, CreatedAccount, SignUp, SignIn } from "../../screens";
import TabsNavigator from "../tabs";


const Stack = createNativeStackNavigator()

const AuthNavigator = () => {

    return(
        <Stack.Navigator initialRouteName="Welcome" >
            <Stack.Screen name='Welcome'  component={Welcome} options={{ headerShown:false }}  />
            <Stack.Screen name='SignUp'  component={SignUp} options={{ title: "Crear cuenta" }}  />
            <Stack.Screen name='SignIn'  component={SignIn} options={{ title: "Iniciar sesión" }}  />
            <Stack.Screen name='CreatedAccount' component={CreatedAccount} options={{ headerShown: false  }}  />
            <Stack.Screen name="TabsNavigator" component={ TabsNavigator } options={{ headerShown: false  }} />
        </Stack.Navigator>
    )
}

export default AuthNavigator;