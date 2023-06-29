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
        fontSize: 17,
        color: theme.colors.gray
    },


    image: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: 120
    },


    title: {
        marginTop: 60,
        marginBottom: 20,
        marginLeft: 16,
        fontFamily: 'FiraSans-Medium',
        fontSize: 18,
        color: theme.colors.text
    },

    
    imageContainer: {
        marginHorizontal: 20
    },


    imageAdventure: {
        marginRight: 18,
        width: 76,
        height: 130,
        borderRadius: 8
    }


    
});

