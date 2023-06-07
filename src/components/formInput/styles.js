import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

const styles= StyleSheet.create({

    

    input: {
        position: "relative",
        marginBottom: 30,
        marginHorizontal: 20,
        paddingLeft: 50,
        height: 54,
        fontFamily: 'FiraSans-Regular',
        fontSize: 18,
        borderWidth: 1,
        borderColor: theme.colors.gray,
    },
    

    placeholderTextColor: {
        color: theme.colors.text
    },    


    errorContainer: {
        marginTop: -24,
        marginBottom: 22
    },


    errorMessage: {
        marginLeft: 17,
        fontFamily: 'FiraSans-Regular',
        fontSize: 12,
        color: theme.colors.primary
    }
});

export default styles;