import { StyleSheet } from "react-native";
import { theme } from "../../constants"


export const styles = StyleSheet.create({

    view: {
        flex: 1,
        color: theme.colors.white
    },


    imageContainer: {
        marginTop: "44%",
        alignItems: "center"
    },


    image: {
        width: "50%",
        height: 180
    },


    subtitle: {
        marginTop: 16,
        fontFamily: 'FiraSans-Regular',
        fontSize: 18,
        color: theme.colors.text
    },



    container: {
        marginHorizontal: 20,
    },


    title: {
        marginTop: 26,
        marginLeft: -6,
        marginBottom: 20,
        fontFamily: 'FiraSans-Medium',
        fontSize: 24,
        color: theme.colors.text
    }
    
});