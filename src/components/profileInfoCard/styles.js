import { StyleSheet } from "react-native";
import theme from "../../constants/theme";


export const styles = StyleSheet.create({
    
    containerUserInfo: {
        flexDirection: "row",
        width: "100%",
        height: 180,
        backgroundColor: theme.colors.white
    },


    containerImageProfile: {
        justifyContent: "center",
        alignItems: "center",
        width: "26%",
       
    },


    iconUser: {
        fontSize: 84,
        color: theme.colors.text
    },


    containerContent: {
        justifyContent: "center",
        width: "74%",
       
    },


    name: {
        marginLeft: 10,
        fontFamily: 'FiraSans-Regular',
        fontSize: 23,
        color: theme.colors.text
    },


    email: {
        marginTop: 2,
        marginLeft: 12,
        fontFamily: 'FiraSans-Light',
        fontSize: 16,
        color: theme.colors.text
    },


    flexContainer: {
        alignItems: "center",
    },


    divider: {
        marginTop: 20,
        marginBottom: 16,
        width: "86%",
        borderBottomWidth: 0.5,
        borderBottomColor: theme.colors.gray
    },


    flexContainer2: {
        flexDirection: "row",
        justifyContent: "space-around"
    },


    category: {
        fontFamily: 'FiraSans-Medium',
        fontSize: 13,
        color: theme.colors.textUnderscore
    },


    number: {
        fontFamily: 'FiraSans-Light',
        fontSize: 14,
        color: theme.colors.text
    }
})