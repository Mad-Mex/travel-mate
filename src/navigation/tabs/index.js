import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileNavigator from "../profile";
import HomeNavigator from "../home";
import TravelsNavigator from "../travels";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "./styles";
import { theme } from "../../constants"

const BottomTab = createBottomTabNavigator()

const TabsNavigator = () => {

    return (

        <BottomTab.Navigator 
            initialRouteName="HomeTab" 
            screenOptions={{ 
                headerShown:  false, 
                tabBarHideOnKeyboard: true,
                tabBarStyle: styles.tabBar,
                tabBarLabelStyle: styles.label,
                tabBarActiveTintColor: theme.colors.primary,
                tabBarInactiveTintColor: theme.colors.gray,
            }}  
        
        >
            
            <BottomTab.Screen 
                name="HomeTab" 
                component={ HomeNavigator } 
                options={{ 
                    tabBarLabel: "Inicio" ,
                    tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            name={ focused ? "home" : "home-outline" } 
                            style={[ styles.icon,  focused?  styles.iconFocused : styles.iconOutline ]} 
                        />
                    )        
                
                }} 
                 
            />

            <BottomTab.Screen 
                name="TravelsTab" 
                component={ TravelsNavigator } 
                options={{ 
                    tabBarLabel: "Viajes", 
                    tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            name={ focused ? "briefcase" : "briefcase-outline" } 
                            style={[ styles.icon,  focused?  styles.iconFocused : styles.iconOutline ]} 
                        />
                    )    
                
                }}  
            />

            <BottomTab.Screen 
                name="ProfileTab" 
                component={ ProfileNavigator } 
                options={{ 
                    tabBarLabel: "Perfil", 
                    tabBarIcon: ({ focused }) => (
                        <Ionicons 
                            name={ focused ? "person" : "person-outline" } 
                            style={[ styles.icon,  focused?  styles.iconFocused : styles.iconOutline ]} 
                        />
                    )    
                
                }}  
            />

        </BottomTab.Navigator>
    )
}

export default TabsNavigator