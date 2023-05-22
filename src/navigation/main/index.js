import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Welcome,  CreatedAccount, SignInForm, ProfilePicture, Home  } from "../../screens";
import { HeaderTitleHome } from "../../components";

const Stack = createNativeStackNavigator()

const MainNavigator = () => {
    return(
        <Stack.Navigator initialRouteName="Home" >
            <Stack.Screen name='Welcome'  component={Welcome} options={{ headerShown:false }}  />
            <Stack.Screen name='SignInForm'  component={SignInForm} options={{ title: "" }}  />
            <Stack.Screen name="ProfilePicture" component={ProfilePicture } options={{ title: "" }}  />
            <Stack.Screen name='CreatedAccount' component={CreatedAccount} options={{ headerShown: false  }}  />
            <Stack.Screen name="Home" component={Home} options={{ headerTitle: (props) => <HeaderTitleHome {...props} />  }}  />
        </Stack.Navigator>
    )
}

export default MainNavigator;