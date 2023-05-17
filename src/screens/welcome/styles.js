import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

const styles = StyleSheet.create({
    imageBackground: {
        width: "100%",
        height: "100%"
    },


    darkBackground: {
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.2)"
    },


    textLogo: {
        marginLeft: 8,
        marginTop: 386,
        fontFamily: 'FiraSans-Regular',
        fontSize: 44,
        color: theme.colors.white
    },


    title: {
        marginLeft: 16,
        fontFamily: 'FiraSans-Regular',
        fontSize: 20,
        color: theme.colors.white
    },


    signInButton:{
        marginTop: 40,
        backgroundColor: theme.colors.primary,
    },


    signInText:{
        fontFamily: 'FiraSans-Regular',
        fontSize: 18,
        color: theme.colors.white
    },


    logInButton: {       
        marginTop: 20,
        backgroundColor: theme.colors.white,
    },


    logInText:{
        fontFamily: 'FiraSans-Regular',
        fontSize: 18,
        color: theme.colors.black
    },


    privacity:{
        marginTop:12,
        marginHorizontal: 44,
        fontFamily: 'FiraSans-Light',
        fontSize: 10,
        textAlign: "center",
        lineHeight: 16,
        color: theme.colors.white
    },


    spanText:{
        textDecorationLine: "underline",
        color: theme.colors.textUnderscore
    }
});

export default styles