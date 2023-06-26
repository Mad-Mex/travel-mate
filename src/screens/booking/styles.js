import { StyleSheet } from "react-native";
import { theme } from "../../constants";

export const styles = StyleSheet.create({

    view: {
        flex: 1,
        backgroundColor: theme.colors.white
    },


    title: {
        marginTop: 20,
        marginBottom: 16,
        marginLeft: 16,
        fontFamily: 'FiraSans-SemiBold',
        fontSize: 28,
        color: theme.colors.text
    },


    hotelContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 20,
        paddingBottom: 6,
        width: "auto",
        height: 90,
        borderBottomWidth: 0.6,
        borderBottomColor: theme.colors.gray
    },


    hotelImage: {
        marginVertical: 16,
        width: "16%",
        height: 60,
        borderRadius: 4 
    },


    textContainer: {
        justifyContent: "center",
    },


    hotelName: {
        marginLeft: 16,
        fontFamily: 'FiraSans-Medium',
        fontSize: 19,
        color: theme.colors.text
    },


    city: {
        marginLeft: 16,
        fontFamily: 'FiraSans-Regular',
        fontSize: 14,
        color: theme.colors.gray
    },


    subtitle: {
        marginTop: 12,
        marginLeft: 18,
        fontFamily: 'FiraSans-Medium',
        fontSize: 20,
        color: theme.colors.gray
    },


    flexContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 4,
        marginHorizontal: 20,
        width: "auto",
        height: 52,
    },


    flexContainer2: {
        flexDirection: "row",
        alignItems: "center"
    },


    icon: {
        fontSize: 24,
        color: theme.colors.black
    },


    infoContainer: {
        marginLeft: 4,
        fontFamily: 'FiraSans-Regular',
        fontSize: 18,
        color: theme.colors.text
    },


    divider: {
        marginTop: 6,
        marginHorizontal: 20,
        borderWidth: 0.6,
        borderColor: theme.colors.gray
    },


    button: {
        marginTop: 120,
        backgroundColor: theme.colors.primary
    },


    textButton: {
        fontFamily: 'FiraSans-Regular',
        fontSize: 18,
        color: theme.colors.white
    }
})