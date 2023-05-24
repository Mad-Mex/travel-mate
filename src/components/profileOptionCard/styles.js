import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({

    cardContainer: {
        flexDirection: "row",
        marginTop: 16,
        width: "100%",
        height: 104,
        backgroundColor: theme.colors.white
    },


    horizontalContainer: {
        justifyContent:"center",
        alignItems: "center",
        width: "18%",  
    },


    textContainer: {
        justifyContent: "center",
        paddingHorizontal: 6,
        width: "64%",
    },


    title: {
        marginLeft: 4,
        fontFamily: 'FiraSans-Medium',
        fontSize: 20,
        color: theme.colors.text
    },


    subtitle: {
        marginLeft: 6,
        fontFamily: 'FiraSans-Regular',
        fontSize: 13,
        color: theme.colors.text
    },


    icon: {
        fontSize: 32,
        color: theme.colors.text
    }
});