import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({

    tabBar: {
        paddingTop: 8,
        height: 68,
        shadowColor: "#000000",
        shadowOffset: {
	        width: 0,
	        height: -60,
        },
        shadowOpacity: 5,
        shadowRadius: 10,
        elevation: 30,
    },


    label: {
        marginBottom: 6,
        fontFamily: 'FiraSans-Medium',
        fontSize: 14
    },


    icon: {
        fontSize: 26,
    },


    iconFocused: {
        color: theme.colors.primary
    },


    iconOutline: {
        color: theme.colors.gray
    }
})