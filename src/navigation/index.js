import { NavigationContainer } from "@react-navigation/native";
import SignInNavigator from "./signIn";



const Navigation = () => {
    return(
        <NavigationContainer>
            <SignInNavigator />
        </NavigationContainer>
    )
}

export default Navigation;