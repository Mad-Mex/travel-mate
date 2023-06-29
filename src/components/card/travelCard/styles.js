import { StyleSheet } from "react-native";
import { theme } from "../../../constants"


export const styles = StyleSheet.create({

    cardContainer: {
        flexDirection: "row",
        marginBottom: 30,
        width: "auto",
        height: 120,
        borderRadius: 8,
        backgroundColor: theme.colors.white
    },


    cardImage: {
        width: 120,
        height: "100%",
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    },


    contentContainer: {
        justifyContent: "center"
    },


    cardTitle: {
        marginLeft: 16,
        fontFamily: 'FiraSans-Medium',
        fontSize: 17,
        color: theme.colors.text
    },


    cardSubtitle: {
        marginLeft: 18,
        marginBottom: 2,
        fontFamily: 'FiraSans-Medium',
        fontSize: 12,
        color: theme.colors.gray
    },


    flexContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
        marginLeft: 20
    },


    cardIcon: {
        marginRight: 10,
        fontSize: 20,
        color: theme.colors.black
    },


    cardText: {
        fontFamily: 'FiraSans-Regular',
        fontSize: 15,
        color: theme.colors.text
    }


})