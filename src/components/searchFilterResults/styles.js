import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({

    cardContainer: {
        marginHorizontal: 20,
        marginBottom: 20,
        paddingTop: 4,
        paddingLeft: 10,
        height: 80,
        backgroundColor: theme.colors.grayLight,
    },


    flexContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 6
    },


    cardIcon: {
        fontSize: 38,
        marginRight: 10
    },


    cardName: {
        fontFamily: 'FiraSans-SemiBold',
        fontSize: 20
    },


    cardLocation: {
        fontFamily: 'FiraSans-Regular',
        fontSize: 15
    }
});