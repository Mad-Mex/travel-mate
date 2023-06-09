import { StyleSheet } from "react-native";
import { theme } from "../../constants"


export const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: theme.colors.white
    },


    title: {
        marginTop: 40,
        marginLeft: 10,
        fontFamily: 'FiraSans-Medium',
        fontSize: 36,
        color: theme.colors.text
    },


    subtitle: {
        marginLeft: 18,
        marginBottom: 48,
        fontFamily: 'FiraSans-Regular',
        fontSize: 15,
        color: theme.colors.text
    },


    inputIcon: {
        position: "absolute",
        top: 14,
        left: 34,
        fontSize: 25,
        color: theme.colors.gray
    },


    eyeContainer: {
        position: "absolute",
        top: 50,
        right: 40
    },


    eyeIcon: {
        fontSize: 24,
        color: theme.colors.black
    },


    button: {
        marginTop: 20,
        backgroundColor: theme.colors.primary,
        shadowColor: theme.colors.primary,
        shadowOffset: {
	        width: 0,
	        height: 10,
        },
        shadowOpacity: 0.25 ,
        shadowRadius: 10,
        elevation: 12,
    },


    textButton: {
        fontFamily: 'FiraSans-Medium',
        fontSize: 18,
        color: theme.colors.white
    },


    containerLink: {
        flexDirection: "row",
        justifyContent: "center"
    },


    textNoAccount: {
        marginTop: 156,
        fontFamily: 'FiraSans-Regular',
        fontSize: 14,
        color: theme.colors.text
    },


    textNoAccountLink: {
        fontFamily: 'FiraSans-Medium',
        color: theme.colors.tertiary
    }
})