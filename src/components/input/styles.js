import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

const styles= StyleSheet.create({
    input: {
        marginHorizontal: 20,
        marginTop: 26,
        paddingLeft: 10,
        height: 54,
        fontFamily: 'FiraSans-Regular',
        fontSize: 18,
        borderWidth: 1,
        borderColor: theme.colors.gray,
        borderRadius: 6
    },


    placeholderTextColor: {
        color: theme.colors.text
    },    
});

export default styles;