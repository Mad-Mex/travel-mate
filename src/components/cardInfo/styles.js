import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({

    cardContainer: {
        marginLeft: 20,
        width: 200,
        height: 162,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: theme.colors.gray
    },


    imageContainer: {
        position: "relative"
    },


    cardImage: {
        width: 200,
        height: 84,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },


    iconContainer: {
        position: "absolute",
        top: 10,
        right: 8,
    },


    heartIcon: {
        fontSize: 14
    },


    heartIconNeutralColor: {
        color: theme.colors.white
    },


    heartIconPressedColor: {
        color: theme.colors.primary
    },


    containerContent: {
        flexDirection: "row",
        backgroundColor: theme.colors.white
    },


    lodgingContainer: {
        marginRight: 18,
    },


    lodging: {
        marginTop: 10,
        marginLeft: 6,
        fontFamily: 'FiraSans-Medium',
        fontSize: 10,
        color: theme.colors.text
    },


    hotelName: {
        marginLeft: 5,
        fontFamily: 'FiraSans-Medium',
        fontSize: 16,
        lineHeight: 23,
        color: theme.colors.text

    },


    hotelLocation: {
        marginLeft: 7,
        fontFamily: 'FiraSans-Light',
        fontSize: 10,
        color: theme.colors.text
    },


    containerPrice: {
        justifyContent: "flex-end"
    },


    priceDiscount: {
        marginRight: 6,
        fontFamily: 'FiraSans-Regular',
        fontSize: 8,
        textDecorationStyle: "dashed",
        textAlign: "right",
        color: theme.colors.primary
    },


    price: {
        fontFamily: 'FiraSans-Medium',
        fontSize: 22,
        lineHeight: 26,
        color: theme.colors.text
    },


    textPrice: {
        marginRight: 6,
        fontFamily: 'FiraSans-Regular',
        fontSize: 10,
        textAlign: "right",
        color: theme.colors.text
    }
});

