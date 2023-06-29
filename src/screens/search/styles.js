import { StyleSheet } from "react-native";
import { theme  } from "../../constants"

export const styles = StyleSheet.create({

    view: {
        flex: 1,
        backgroundColor: theme.colors.white
    },


    mainTitle: {
        marginTop: 30,
        marginLeft: 18,
        fontFamily: 'FiraSans-SemiBold',
        fontSize: 24,
        color: theme.colors.text
    },


    searchContainer: {
        marginTop: 36,
        marginHorizontal: 20,
        paddingTop: 26,
        paddingBottom: 34,
        width: "auto",
        height: "auto",
        borderWidth: 1.6,
        borderColor: theme.colors.gray,
        borderRadius: 10,
        backgroundColor: theme.colors.white,

        shadowColor: theme.colors.black,
        shadowOffset: {
	        width: 0,
	        height: 6,
        },
        shadowOpacity: 0.5,
        shadowRadius: 4.65,
        elevation: 6,
    },


    flexContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20
    },


    titleSection: {
        marginLeft: 16,
        fontFamily: 'FiraSans-SemiBold',
        fontSize: 22,
        color: theme.colors.text
    },


    searchInput: {
        marginTop: 22,
    },


    searchIcon: {
        position: "absolute",
        top: 36,
        left: 38,
        fontSize: 18
    },


    calendar: {
        marginTop: 40,
        marginBottom: 20
    },


    button: {
        marginTop: 40,
        backgroundColor: theme.colors.black
    },


    textButton: {
        fontFamily: 'FiraSans-Regular',
        fontSize: 19,
        color: theme.colors.white
    },


    mainButton: {
        marginTop: 50,
        backgroundColor: theme.colors.primary
    },


    mainButtonEnabled: {
        opacity: 1
    },


    mainButtonDisabled: {
        opacity: 0.5
    }   
 }
)