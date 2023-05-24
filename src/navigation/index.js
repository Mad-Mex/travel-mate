import { NavigationContainer } from "@react-navigation/native";
import SignInNavigator from "./signIn";
import TabsNavigator from "./tabs";


const Navigation = () => {
    return(
        <NavigationContainer>
            <TabsNavigator />
        </NavigationContainer>
    )
}

export default Navigation;