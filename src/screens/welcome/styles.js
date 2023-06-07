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
        marginTop: 450,
        fontFamily: 'FiraSans-Regular',
        fontSize: 42,
        color: theme.colors.white
    },


    title: {
        marginLeft: 16,
        fontFamily: 'FiraSans-Regular',
        fontSize: 18,
        color: theme.colors.white
    },


    signUpButton:{
        marginTop: 30,
        backgroundColor: theme.colors.primary,
    },


    signUpText:{
        fontFamily: 'FiraSans-Regular',
        fontSize: 18,
        color: theme.colors.white
    },


    signInButton: {       
        marginTop: 20,
        backgroundColor: theme.colors.white,
    },


    signInText:{
        fontFamily: 'FiraSans-Regular',
        fontSize: 18,
        color: theme.colors.black
    }
});

export default styles