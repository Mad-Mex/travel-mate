import { StyleSheet } from "react-native";
import { theme } from "../../constants"


export const styles = StyleSheet.create({

    inputContainer: {
        position: "relative"
    },

    input: {
        paddingLeft: 60,
        width: "100%",
        height: 64,
        fontSize: 16,
        borderBottomWidth: 2,
        borderBottomColor: theme.colors.gray
    },


    inputIcon: {
        position: "absolute",
        top: 21,
        left: 18,
        fontSize: 24,
        color: theme.colors.black
    }
})