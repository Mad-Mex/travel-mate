import { StyleSheet } from "react-native";
import { theme } from "../../constants"


export const styles = StyleSheet.create({

    lodgingContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20,
        marginTop: 20,
        width: "auto",
        height: 60,
        borderBottomWidth: 0.4,
        borderBottomColor: theme.colors.black
    },

    
    person: {
        fontFamily: 'FiraSans-Regular',
        fontSize: 19,
        color: theme.colors.text
    },


    counterContainer: {
        flexDirection: "row"
    },


    counterButton: {
        justifyContent: "center",
        alignItems: "center",
        width: 30,
        height: 30,
        borderRadius: 30/2,
        backgroundColor: theme.colors.black
    },

    
    iconButton :{
        fontSize: 22,
        color: theme.colors.white
    },


    count: {
        marginHorizontal: 12,
        fontFamily: 'FiraSans-Regular',
        fontSize: 22,
        color: theme.colors.text
    }
})