import { StyleSheet } from "react-native";
import theme from "../../constants/theme";


export const styles = StyleSheet.create({

    viewModal:{
        position: "relative",
        flex: 1,
        backgroundColor: theme.colors.white
    },


    closeIconContainer: {
        position: "absolute",
        top: 10,
        right: 12
    },


    closeIcon: {
        fontSize: 24,
        color: theme.colors.text
    },


    titleContainer: {
        marginTop: 70,
        marginHorizontal: 18,
        paddingBottom: 10
    },


    title: {
        fontFamily: 'FiraSans-Medium',
        fontSize: 25,
        color: theme.colors.text
    },


    category:{
        marginTop: 46,
        marginBottom: 12,
        marginLeft: 18,
        fontFamily: 'FiraSans-Medium',
        fontSize: 22,
        color: theme.colors.text
    },


    flexContainer:{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
        marginBottom: 20,
        marginLeft: 22,
    },


    icon:{
        marginRight: 12,
        fontSize: 27,
        color: theme.colors.text
    },


    serviceText: {
        fontFamily: 'FiraSans-Regular',
        fontSize: 18,
        color: theme.colors.text
    }
});