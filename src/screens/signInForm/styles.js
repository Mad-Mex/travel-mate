import { StyleSheet } from "react-native";
import theme from "../../constants/theme";


const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: theme.colors.white
    },


    title: {
        marginTop: 26,
        marginHorizontal: 12,
        fontFamily: 'FiraSans-Medium',
        fontSize: 24,
        color: theme.colors.text
    },


    passwordContainer: {
        position: "relative"
    },


    eyeIconContainer: {
        position: "absolute",
        top: 40,
        right: 36
    },


    icon: {
        fontSize: 24,
        color: theme.colors.black
    },


    passwordRequirements: {
        marginHorizontal: 20,
        marginTop: 12,
        fontFamily: 'FiraSans-Medium',
        fontSize: 16
    },


    requirementListContainer : {
        flexDirection: "row",
        marginTop: 6,
        marginLeft: 24,
    },


    textRequirement: {
        fontFamily: 'FiraSans-Regular',
        fontSize: 14
    },


    textNeutralColor: {
        color: theme.colors.text
    },


    textSuccessColor: {
        color: theme.colors.success
    },


    submitFormButton:{
        
        marginTop: 140,
        backgroundColor: theme.colors.primary
    },


    textButton:{
        fontFamily: 'FiraSans-Medium',
        fontSize: 16,
        color: theme.colors.white
    }
});

export default styles;