import { StyleSheet } from "react-native"
import { theme } from "../../constants"

export const styles = StyleSheet.create({

    searchContainerFolded: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 36,
        marginHorizontal: 20,
        width: "auto",
        height: 64,
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


    iconContainerFolded: {
        marginRight: 8,
        marginLeft: 20,
        fontSize: 22,
        color: theme.colors.black
    },


    textContainerFolded: {
        fontFamily: 'FiraSans-SemiBold',
        fontSize: 18,
        color: theme.colors.text
    }
})