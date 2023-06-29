import { StyleSheet } from "react-native";
import { theme } from "../../constants"


export const styles = StyleSheet.create({

    image: {
        marginHorizontal: 20,
        marginTop: 40,
        marginBottom: 4,
        width: "auto",
        height: 160
    },


    darkBackground: {
        position: "relative",
        width: "auto",
        height: 160,
        backgroundColor: "rgba(0,0,0,0.3)"
    },


    sponsorContainer: {
        position: "absolute",
        top: 16,
        right: 16,
        justifyContent: "center",
        alignItems: "center",
        width: "18%",
        height: 20,
        backgroundColor: theme.colors.black,
        opacity: 0.7
    },


    sponsorText: {
        fontFamily: 'FiraSans-Regular',
        fontSize: 9,
        color: theme.colors.white
    },


    title: {
        marginTop: 28,
        marginBottom: 4,
        marginLeft: 13,
        fontFamily: 'FiraSans-Medium',
        fontSize: 16,
        color: theme.colors.white
    },


    subtitle: {
        marginTop: 2,
        marginLeft: 14,
        marginRight: 40,
        fontFamily: 'FiraSans-Regular',
        fontSize: 10,
        color: theme.colors.white
    },


    button: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 12,
        marginLeft: 16,
        width: "30%",
        height: 18,
        backgroundColor: theme.colors.white,
        borderRadius: 30/2
    },


    textButton:{
        fontFamily: 'FiraSans-Regular',
        fontSize: 10,
        color: theme.colors.black
    }
});