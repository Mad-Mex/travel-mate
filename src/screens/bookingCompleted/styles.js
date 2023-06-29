import { StyleSheet } from "react-native";
import { theme  } from "../../constants"

export const styles = StyleSheet.create({

    view:{
        flex: 1,
        backgroundColor: theme.colors.white
    },


    container: {
        marginVertical: 60,
        marginHorizontal: 20,
        width: "auto",
        height: 650,
        borderWidth: 1.2,
        borderColor: theme.colors.gray,
        borderRadius: 10
    },


    title: {
        marginTop: 30,
        marginLeft: 12,
        fontFamily: 'FiraSans-Medium',
        fontSize: 26,
        textAlign: "center",
        color: theme.colors.success
    },


    checkIcon: {
        marginTop: 6,
        fontSize: 40,
        textAlign: "center",
        color: theme.colors.success
    },


    flexContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 16,
        marginTop: 20,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.gray
    },


    hotelImage: {
        marginRight: 12,
        width: "24%",
        height: 70,
        borderRadius: 4
    },


    hotelName: {
        fontFamily: 'FiraSans-Medium',
        fontSize: 18,
        color: theme.colors.text
    },


    hotelLocation: {
        fontFamily: 'FiraSans-Medium',
        fontSize: 14,
        color: theme.colors.gray
    },


    subtitle: {
        marginTop: 18,
        marginHorizontal: 16,
        fontFamily: 'FiraSans-Medium',
        fontSize: 18,
        color: theme.colors.gray      
    },


    
    flexContainer2: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        marginTop: 10,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: theme.colors.gray
    },


    containerIcon: {
        marginRight: 8,
        fontSize: 20,
        color: theme.colors.black
    },


    textContainer: {
        fontFamily: 'FiraSans-Regular',
        fontSize: 16,
        color: theme.colors.text
    },


    pointsContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40,
        marginHorizontal: 16,
        width: "auto",
        height: 50,
        borderWidth: 2,
        borderColor: theme.colors.tertiary,
    },


    points: {
        fontFamily: 'FiraSans-Medium',
        fontSize: 18,
        color: theme.colors.tertiary
    },


    button: {
        marginTop: 100,
        backgroundColor: theme.colors.black
    },


    textButton: {
        fontFamily: 'FiraSans-Regular',
        fontSize: 19,
        color: theme.colors.white
    }
})