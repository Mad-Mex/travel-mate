import { StyleSheet } from "react-native";
import { theme } from "../../constants"



export const styles = StyleSheet.create({

    view: {
        flex: 1,
        backgroundColor: theme.colors.white
    },

    imageContainer: {
        position: "relative",
    },


    image: {
        width: "100%",
        height: 200
    },


    heartIconContainer: {
        position: "absolute",
        top: 16,
        right: 90,
    },


    shareIconContainer: {
        position: "absolute",
        top: 16,
        right: 26,
    },


    iconImage: {
        fontSize: 30
    },


    iconColor: { 
        color: theme.colors.white
    },


    iconColorFulfilled: {
        color: theme.colors.error
    },


    lodging:{
        marginTop: 26,
        marginLeft: 20,
        fontFamily: 'FiraSans-Regular',
        fontSize: 14,
        color: theme.colors.text
    },


    hotelName: {
        marginLeft: 17,
        fontFamily: 'FiraSans-SemiBold',
        fontSize: 24,
        color: theme.colors.text
    },


    flexContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 22
    },


    rankingLabelContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 20,
        marginRight: 12,
        width: 120,
        height: 30,
        backgroundColor: theme.colors.success
    },


    ranking: {
        fontFamily: 'FiraSans-Regular',
        fontSize: 14,
        color: theme.colors.white
    },


    numberReview: {
        fontFamily: 'FiraSans-Regular',
        fontSize: 14,
        color: theme.colors.text
    },


    divider: {
        marginHorizontal: 20,
        width: "auto",
        borderWidth: 0.2,
        borderColor: theme.colors.gray
    },


    titleSection: {
        marginTop: 22,
        marginLeft: 18,
        marginBottom: 10,
        fontFamily: 'FiraSans-Medium',
        fontSize: 18,
        color: theme.colors.text
    },


    descriptionContainer: {
        marginBottom: 20
    },


    description: {
        marginHorizontal: 18,
        fontFamily: 'FiraSans-Regular',
        fontSize: 14,
        color: theme.colors.text
    },


    flexContainer2: {
        flexDirection: "row",
        marginTop: 20,
        marginHorizontal: 20,
        marginBottom: 22
    },


    icon: {
        marginRight: 16,
        fontSize: 28,
        color: theme.colors.black
    },


    featureTitle: {
        marginBottom: 2,
        fontFamily: 'FiraSans-Medium',
        fontSize: 16,
        color: theme.colors.text
    },


    featureSubtitle: {
        fontFamily: 'FiraSans-Regular',
        fontSize: 13,
        color: theme.colors.text
    },


    flexContainer3: {
        flexDirection: "row",
        marginTop: 10,
        marginHorizontal: 20,
        marginBottom: 22
    },


    flexContainer4: {        
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 10,
        marginHorizontal: 20,
        marginBottom: 136,
        width: "auto",
        height: 40,
    },


    flexContainer5: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
        width: 140,
        height: 40,
    },


    serviceIcon: {
        marginRight: 6,
        fontSize: 26,
        color: theme.colors.black
    },


    textIcon: {
        fontFamily: 'FiraSans-Regular',
        fontSize: 15,
        color: theme.colors.text
    },

    
    imageLocation: {    
        marginTop: 22,
        marginHorizontal: 20,
        marginBottom: 12, 
        width: "auto",
        height: 160,
        backgroundColor: "rgba(0,0,0,0.5)"
    },


    marginBottom: {
        marginBottom: 22
    },


    cancellation: {
        marginHorizontal: 20,
        fontFamily: 'FiraSans-Regular',
        fontSize: 14,
        color: theme.colors.text
    },


    span: {
        fontFamily: 'FiraSans-SemiBold'
    },


    bookingContainer: {
        width: "100%",
        height: 130, 
        borderWidth: 1,
        borderColor: theme.colors.gray,
        backgroundColor: theme.colors.white,
        zIndex: 10
    },


    bookingPrice: {
        marginTop: 12,
        marginBottom: 16,
        marginLeft: 20,
        fontFamily: 'FiraSans-Bold',
        fontSize: 20,
        color: theme.colors.text
    },


    bookingButton: {
        backgroundColor: theme.colors.primary
    },


    bookingTextButton:{
        fontFamily: 'FiraSans-Regular',
        fontSize: 18,
        color: theme.colors.white
    }


    



})