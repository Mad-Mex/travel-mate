import { StyleSheet } from "react-native";
import { theme } from "../../constants"


export const styles = StyleSheet.create({

    view: {
        flex: 1,
        backgroundColor: theme.colors.white
    },


    button: {
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingLeft: 20,
        marginTop: 40,
        backgroundColor: theme.colors.white
    },


    searchIcon: {
        marginRight: 6,
        fontSize: 24,
        color: theme.colors.gray
    },


    textButton: {
        fontFamily: 'FiraSans-Regular',
        fontSize: 16,
        color: theme.colors.gray
    },

    image: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: 120
    },

    searchContainer: {
        marginTop: 26,
        marginHorizontal: 20,
        width: "auto",
        height: 280,
        backgroundColor: theme.colors.white,
        borderRadius: 12,
    },

    searchButton: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 24,
        marginHorizontal: 20,
        width: "auto",
        height: 40,
        backgroundColor: theme.colors.black,
        borderRadius: 40/2
    },


    searchButtonText: {
        fontSize: 18,
        color: theme.colors.white
    },


    title: {
        marginTop: 46,
        marginBottom: 20,
        marginLeft: 16,
        fontFamily: 'FiraSans-Medium',
        fontSize: 18,
        color: theme.colors.text
    },

    containerFlexRow: {
        flexDirection: "row",
        alignItems: "center"
    },

  
    flameIcon: {
        marginLeft: 8,
        fontSize: 22,
        color: theme.colors.primary
    },


    listContainer: {
        marginHorizontal: 12,
    },


    containerFlexRow2: {
        alignItems: "center",
        width: 80
    },

    
    containerIcon: {
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        width: 48,
        height: 48,
        borderWidth: 1,
        borderColor: theme.colors.tertiary,
        borderRadius: 48 / 2
    },


    lodgingIcon: {
        fontSize: 23,
        color: theme.colors.tertiary
    },


    category:{

        fontFamily: 'FiraSans-SemiBold',
        fontSize: 16,
        color: theme.colors.tertiary
    },


    imageContainer: {
        marginHorizontal: 20,
        marginBottom: 40,
    },


    imageAdventure: {
        marginRight: 18,
        width: 76,
        height: 130,
        borderRadius: 8
    }
});

