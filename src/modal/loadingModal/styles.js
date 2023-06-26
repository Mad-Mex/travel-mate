import { StyleSheet } from "react-native";
import { theme } from "../../constants"


export const styles = StyleSheet.create({
    
    overallContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)"
    },


    modalContainer: {
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 16,
        width: "70%",
        height: 140,
        borderRadius: 8,
        backgroundColor: theme.colors.white 
    },


    modalTitle: {
        fontFamily: 'FiraSans-Regular',
        fontSize: 18,
        color: theme.colors.text
    }

})