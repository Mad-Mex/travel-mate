import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({

    

    input: {
        position: "relative",
        marginHorizontal: 20, 
        paddingLeft: 54,
        width: "auto",
        height: 44,
        borderWidth: 2,
        borderColor: theme.colors.accent2,
        borderRadius: 44 / 2,
    },


    closeIcon: {
        position: "absolute",
        top: 52,
        right: 40,
        fontSize: 20,
        color: theme.colors.text
    },


    searchIcon: {
        position: "absolute",
        top: 50,
        left: 36,
        zIndex: 10,
        marginRight: 16,
        fontSize: 22,
        color: theme.colors.black
    }
});