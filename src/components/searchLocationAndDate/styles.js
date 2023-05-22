import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({
    imageContainer: {
        width: "100%",
        height: 260,
    },

    overallContainer: {
        marginVertical: 30,
        marginHorizontal: 20,
        width: "auto",
        height: 190,
        backgroundColor: theme.colors.white
    },


    topContainer: {
        flexDirection: "row",
        width: "100%",
        height: "50%",
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.grayLight
    },


    locationContainer: {
        alignItems: "center",
        width: "50%"
    },


    dateContainer:{
        alignItems: "center",
        width: "50%"
    },


    bottomContainer: {
        justifyContent: "center",
        width: "100%",
        height: "50%"
    },


    input: {
       paddingLeft: 32,
        width: 120,
        height: 26,
        fontFamily: 'FiraSans-Regular',
        fontSize: 11,
        backgroundColor: theme.colors.grayLight
    },

    
    inputContainer: {
        position: "relative",
    },


    searchTitle: {
        marginTop: 16,
        marginBottom: 10,
        fontFamily: 'FiraSans-Regular',
        fontSize: 14,
        color: theme.colors.text
    },


    locationIcon: {
        position: "absolute",
        top: 6,
        left: 10,
        fontSize: 14
    },


    dateIcon: {
        position: "absolute",
        top: 4,
        left: 10,
        fontSize: 14

    },



    button:{
        backgroundColor: theme.colors.black
    },

    textButton: {
        fontFamily: 'FiraSans-Regular',
        fontSize: 16,
        color: theme.colors.white
    }
})