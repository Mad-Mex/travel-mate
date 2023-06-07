import { StyleSheet } from "react-native";
import theme from "../../constants/theme";


export const styles = StyleSheet.create({

    view: {
        flex: 1,
        backgroundColor: "#F5F5F5"
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
        backgroundColor: "#1F3FE9",
        borderRadius: 8,

        shadowColor: "#1F3FE9",
        shadowOffset: {
	        width: 0,
	        height: 8,
        },
        shadowOpacity: 0.25,
        shadowRadius: 16,
        elevation: 16,
    },


    logoIcon: {
        fontSize: 34,
        color: theme.colors.white
    },


    textLogo: {
        marginTop: 6,
        marginBottom: 14,
        fontFamily: 'FiraSans-Medium',
        fontSize: 22,
        color: "#1F3FE9"
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
        color: "#1F3FE9"
    },


    button: {
        marginTop: 20,
        backgroundColor: "#1F3FE9",

        shadowColor: "#1F3FE9",
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


    terms: {
        marginTop: 12,
        fontFamily: 'FiraSans-Light',
        fontSize: 10,
        color: theme.colors.text,
        textAlign: "center"
    },


    span: {
        fontFamily: 'FiraSans-Regular',
        color: "#1F3FE9"
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
        color: "#1F3FE9"
    },


    overallContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)"
    },


    modalContainer: {
        justifyContent: "space-between",
        alignItems: "center",
        width: "70%",
        height: 140,
        paddingVertical: 16,
        backgroundColor: theme.colors.white,
        borderRadius: 8
    },


    modalTitle: {
        fontFamily: 'FiraSans-Regular',
        fontSize: 18,
        color: theme.colors.text
    },


    button: {
        marginTop: 10,
        backgroundColor: theme.colors.secondary
    },


    textButton: {
        fontFamily: 'FiraSans-Regular',
        fontSize: 16,
        color: theme.colors.white
    }

});

