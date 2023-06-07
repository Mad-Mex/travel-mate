import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./auth";



const Navigation = () => {
    return(
        <NavigationContainer>
            <AuthNavigator />
        </NavigationContainer>
    )
}

export default Navigation;