import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./auth";
import TabsNavigator from "./tabs";




const Navigation = () => {
    return(
        <NavigationContainer>
            <TabsNavigator />
            
        </NavigationContainer>
    )
}

export default Navigation;