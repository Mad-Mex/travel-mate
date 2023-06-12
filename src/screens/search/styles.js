import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: theme.colors.white
    },


    searchInput: {
        marginTop: 40,
        marginBottom: 20
    },

 
    result: {
        marginTop: 30,
        marginLeft: 16,
        marginBottom: 20,
        fontFamily: 'FiraSans-Regular',
        fontSize: 22,
        color: theme.colors.text    
    },


});