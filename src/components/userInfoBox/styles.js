import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

const styles = StyleSheet.create({

    label:{
        marginHorizontal: 20,
        fontFamily: 'FiraSans-Regular',
        fontSize: 14,
        color: theme.colors.text
    },


    userDataContainer: {
        justifyContent: "center",
        marginTop: 6,
        marginBottom: 26,
        marginHorizontal: 20,
        paddingLeft: 12,
        height: 44,
        backgroundColor: theme.colors.grayLight,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.black
    },


    userName: {
        fontFamily: 'FiraSans-Regular',
        fontSize: 16,
        color: theme.colors.text
    }
});

export default styles;