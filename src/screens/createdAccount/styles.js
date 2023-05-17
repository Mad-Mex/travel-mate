import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: theme.colors.accent2
    },

    imageContainer: {
        marginTop: 30,
        alignItems: "center"
    },

    image: {
        width: 310,
        height: 310
    },


    title: {
        marginLeft: 14,
        fontFamily: 'FiraSans-Regular',
        fontSize: 27,
        lineHeight: 34,
        color: theme.colors.white
    },


    logoText: {
        fontFamily: 'FiraSans-SemiBold',
    },


    subtitle: {
        marginTop: 14,
        marginHorizontal: 18,
        fontFamily: 'FiraSans-Regular',
        fontSize: 15,
        color: theme.colors.white
    },


    listContainer: {
        marginHorizontal: 22,
        marginTop: 14,
        borderColor: theme.colors.white
    },


    container: {
        marginTop: 12,
        flexDirection: "row",
        alignItems: "center"
    },


    icon: {
        marginRight: 12,
        fontSize: 22,
        color: theme.colors.white,
    },


    benefit: {
        fontFamily: 'FiraSans-Regular',
        fontSize: 14,
        color: theme.colors.white
    },


    button: {
        marginTop: 70,
        backgroundColor: theme.colors.white
    },


    textButton: {
        fontFamily: 'FiraSans-Medium',
        fontSize: 18,
        color: theme.colors.text
    }


});

export default styles;