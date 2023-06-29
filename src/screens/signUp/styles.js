import { StyleSheet } from "react-native"
import { theme } from "../../constants"


export const styles = StyleSheet.create({

    view: {
        flex: 1,
        backgroundColor: theme.colors.white
    },


    containerLogo: {
        alignItems: "center",
        marginTop: 40,
        marginBottom: 10
    },


    container: {
        justifyContent: "center",
        alignItems: "center",
        width: 64,
        height: 64,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,

        shadowColor: theme.colors.primary,
        shadowOffset: {
	        width: 0,
	        height: 8,
        },
        shadowOpacity: 0.25,
        shadowRadius: 16,
        elevation: 16,
    },


    logoIcon: {
        width: 35,
        height: 35
    },


    textLogo: {
        marginTop: 6,
        marginBottom: 14,
        fontFamily: 'FiraSans-Medium',
        fontSize: 22,
        color: theme.colors.primary
    },


    inputIcon: {
        position: "absolute",
        top: 14,
        left: 34,
        fontSize: 26,
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
        elevation: 12
    },


    textButton: {
        fontFamily: 'FiraSans-Regular',
        fontSize: 19,
        color: theme.colors.white
    },


    terms: {
        marginTop: 12,
        fontFamily: 'FiraSans-Light',
        fontSize: 10,
        color: theme.colors.text,
        textAlign: "center"
    },


    span: {
        fontFamily: 'FiraSans-Regular',
        color: theme.colors.tertiary
    },


    containerLink:{
        flexDirection: "row",
        justifyContent: "center"
    },


    textAccount: {
        marginTop: 130,
        fontFamily: 'FiraSans-Regular',
        fontSize: 14,
        color: theme.colors.text
    },


    textAccountLink: {
        fontFamily: 'FiraSans-Medium',
        color: theme.colors.tertiary
    }
})

