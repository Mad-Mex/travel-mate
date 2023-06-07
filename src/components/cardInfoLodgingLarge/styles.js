import { StyleSheet } from "react-native";
import theme from "../../constants/theme";


export const styles = StyleSheet.create({

    cardContainer: {
        position: "relative",    
        marginHorizontal: 20,
        marginBottom: 10,
        width: "auto",
        height: 264,
        borderWidth: 0.7,
        borderColor: theme.colors.gray,
        borderRadius: 8,    
    },


    cardImage: {
        width: "auto",
        height: 160,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },


    heartContainer: {
        position: "absolute",
        top: 12,
        right: 14,
    },


    heartIcon: {
        fontSize: 26,
        color: theme.colors.white
    },


    contentContainer: {
        flexDirection: "row",
        alignItems: "center"
    },


    lodgingContainer: {
        width: "70%"        
    },


    priceContainer: {
        width: "30%",
    },


    lodging: {
        marginTop: 10,
        marginLeft: 8,
        fontFamily: 'FiraSans-Medium',
        fontSize: 12,
        color: theme.colors.text
    },


    hotelName: {
        marginTop: -2,
        marginBottom: 4,
        marginLeft: 6,
        fontFamily: 'FiraSans-SemiBold',
        fontSize: 20,
        color: theme.colors.text
    },


    flexContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 8
    },


    labelRankingContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 4,
        marginRight: 8,
        width: 86,
        height: 26,
        backgroundColor: theme.colors.success
    },


    rankingText: {
        fontFamily: "FiraSans-Regular",
        fontSize: 10,
        color: theme.colors.white
    },


    reviewNumber: {
        fontFamily: "FiraSans-Regular",
        fontSize: 10,
        color: theme.colors.text
    },


    price: {
        marginLeft: 22,
        fontFamily: 'FiraSans-Medium',
        fontSize: 32,
        color: theme.colors.text
    },


    priceSubtitle: {
        marginTop: -6,
        marginRight: 20,
        fontFamily: 'FiraSans-Regular',
        fontSize: 10,
        textAlign: "right",
        color: theme.colors.text
    }
});