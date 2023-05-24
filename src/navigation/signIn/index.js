import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome,  CreatedAccount, SignInForm, ProfilePicture } from "../../screens";


const Stack = createNativeStackNavigator()

const SignInNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Welcome" >
            <Stack.Screen name='Welcome'  component={Welcome} options={{ headerShown:false }}  />
            <Stack.Screen name='SignInForm'  component={SignInForm} options={{ title: "" }}  />
            <Stack.Screen name="ProfilePicture" component={ProfilePicture } options={{ title: "" }}  />
            <Stack.Screen name='CreatedAccount' component={CreatedAccount} options={{ headerShown: false  }}  />
        </Stack.Navigator>
    )
}

export default SignInNavigator;