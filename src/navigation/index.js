import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./auth";
import TabsNavigator from "./tabs";


const Navigation = () => {
    return(
        <NavigationContainer>
            <AuthNavigator />
        </NavigationContainer>
    )
}

export default Navigation;