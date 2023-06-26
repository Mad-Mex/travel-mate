import { StyleSheet } from "react-native";
import { theme } from "../../constants"



export const styles = StyleSheet.create({

    view: {
        flex: 1,
        backgroundColor: theme.colors.white
    },

 
    title: {
        marginTop: 20,
        marginBottom: 24,
        marginLeft: 12,
        fontFamily: 'FiraSans-Medium',
        fontSize: 28,
        color: theme.colors.text
    },

    
});