import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: theme.colors.white
    },


    title:{
        marginTop: 26,
        marginHorizontal: 12,
        fontFamily: 'FiraSans-Medium',
        fontSize: 24,
        color: theme.colors.text
    },


    subtitle: {
        marginTop: 24,
        marginHorizontal: 60,
        fontFamily: 'FiraSans-Regular',
        fontSize: 16,
        lineHeight: 24,
        textAlign: "center"
    },


    containerPicture: {
        alignItems: "center",
    },


    profilePicture: {
        marginTop: 10,
        marginBottom: 20,
        width: 140,
        height: 140
    },


    submitCreateAccount: {
        marginTop: 70,
        backgroundColor: theme.colors.primary
    },


    textButton: {
        fontFamily: 'FiraSans-Medium',
        fontSize: 18,
        color: theme.colors.white
    }
});

export default styles
