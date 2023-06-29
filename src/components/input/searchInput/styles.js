import { StyleSheet } from "react-native";
import { theme } from "../../../constants"


export const styles = StyleSheet.create({
    
    input: {
        position: "relative",
        marginHorizontal: 20, 
        paddingLeft: 52,
        width: "auto",
        height: 44,
        fontFamily: 'FiraSans-Regular',
        color: theme.colors.text,
        fontSize: 17,
        borderWidth: 2,
        borderColor: theme.colors.accent2,
        borderRadius: 44 / 2,
    },


    closeIconContainer: {
        position: "absolute",
        top: 34,
        right: 38,
    },

    
    closeIcon: {
        fontSize: 20,
        color: theme.colors.black
    }
    
})