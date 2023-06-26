import { StyleSheet } from "react-native";
import { theme } from "../../constants";

export const styles = StyleSheet.create({

    mapContainer: {
        marginBottom: 40, 
        marginHorizontal: 20,
        width: "auto",
        height: 160,
        borderWidth: 1.4,
        borderColor: theme.colors.gray
    },


    map: {
        width: "auto",
        height: "100%"
    }

})