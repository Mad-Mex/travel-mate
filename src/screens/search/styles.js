import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: theme.colors.grayLight
    },


    sectionTitle: {
        marginTop: 26,
        marginLeft: 12,
        marginBottom: 18,
        fontFamily: 'FiraSans-Medium',
        fontSize: 24,
        color: theme.colors.text
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