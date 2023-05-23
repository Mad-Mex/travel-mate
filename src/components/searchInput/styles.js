import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({

    inputContainer: {
        position: "relative",
        marginHorizontal: 20
    },

    input: { 
        paddingLeft: 54,
        width: "auto",
        height: 44,
        backgroundColor: theme.colors.white,
        borderRadius: 44 / 2,
    },


    closeIcon: {
        position: "absolute",
        top: 12,
        right: 20,
        fontSize: 20,
        color: theme.colors.black
    },


    searchIcon: {
        position: "absolute",
        top: 12,
        left: 16,
        zIndex: 10,
        marginRight: 16,
        fontSize: 22,
        color: theme.colors.black
    }
});