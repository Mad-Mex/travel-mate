import { StyleSheet } from "react-native";
import theme from "../../../constants/theme";

const styles = StyleSheet.create({
    view: {
       flex: 1,
       justifyContent: "center",
       alignItems: "center",
       backgroundColor: "rgba(0,0,0,0.6)"
    },


    container: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: "50%",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        backgroundColor: theme.colors.white
    },


    closeIcon: {
        marginTop: 20,
        marginLeft: "89%",
        fontSize: 24,
        color: theme.colors.black
    },


    title: {
        marginTop: 10,
        fontFamily: "FiraSans-Regular",
        fontSize: 24,
        textAlign: "center"
    },


    subtitle: {
        marginTop: 8,
        marginHorizontal: 50,
        fontFamily: 'FiraSans-Regular',
        fontSize: 13,
        textAlign: "center"
    },


    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },


    textButton: {
        marginRight: 14,
        fontFamily: 'FiraSans-Regular',
        fontSize: 18,
    },


    icon: {
        fontSize: 20
    },


    googleButton: {
        marginVertical: 22,
        borderWidth: 1,
        borderColor: theme.colors.gray,
        backgroundColor: theme.colors.white
    },


    textGoogleColor: {
        color: theme.colors.text
    },


    googleIcon:{
        width: 20,
        height: 20
    },


    facebookButton: {
        marginBottom: 22,
        backgroundColor: "#1877F2"
    },


    textFacebookColor: {
        color: theme.colors.white
    },


    iconFacebook: {
        fontSize: 26,
        color: theme.colors.white
    },


    mailButton: {
        backgroundColor: theme.colors.accent,
    },


    textMailColor: {
        color: theme.colors.white
    },


    iconMailColor:{
        color: theme.colors.white
    }
});

export default styles;