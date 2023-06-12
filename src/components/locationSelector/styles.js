import { StyleSheet } from "react-native";
import theme from "../../constants/theme";


export const styles = StyleSheet.create({
    
    overallContainer: {
        marginHorizontal: 20,
        width: "auto",
        height: 50,
        backgroundColor: theme.colors.grayLight
    },


    flexContainer: {
        flexDirection: "row",
        alignItems: "center"
    },


    locationContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginRight: 8,
        width: 40,
        height: 50,
        
    },


    locationIcon: {
        fontSize: 22,
        color: "#1F3FE9"
    },

    
    currentLocation: {},


    container: {
        marginTop: 50,
        marginHorizontal: 20
    }
})