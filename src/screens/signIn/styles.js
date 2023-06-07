import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: "#F5F5F5"
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
        height: 120,
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