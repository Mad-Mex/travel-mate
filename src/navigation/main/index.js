import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome,  CreatedAccount, SignInForm, ProfilePicture, Home  } from "../../screens";

const Stack = createNativeStackNavigator()

const MainNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Welcome" >
            <Stack.Screen name='Welcome'  component={Welcome} options={{ headerShown:false }}  />
            <Stack.Screen name='SignInForm'  component={SignInForm} options={{ title: "" }}  />
            <Stack.Screen name="ProfilePicture" component={ProfilePicture } options={{ title: "" }}  />
            <Stack.Screen name='CreatedAccount' component={CreatedAccount} options={{ headerShown: false  }}  />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}

export default MainNavigator;