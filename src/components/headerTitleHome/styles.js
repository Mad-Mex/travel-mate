import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "95%",
    },


    textLogo:{
        fontFamily: 'FiraSans-Medium',
        fontSize: 20,
        color: theme.colors.text
    },


    containerIcon:{
        position: "relative"
    },


    icon:{
        fontSize: 26,
        color: theme.colors.text
    },

    notificationContainer: {
        position: "absolute",
        top: -5,
        right: -3,
        justifyContent: "center",
        alignItems: "center",
        width: 18,
        height: 18,
        backgroundColor: theme.colors.primary,
        borderRadius: 18/ 2 
    },


    textNotification: {
        fontFamily: 'FiraSans-Regular',
        fontSize: 13,
        color: theme.colors.white
    }

});


