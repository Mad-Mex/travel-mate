import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({

    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "95%",
    },


    textLogo:{
        fontFamily: 'FiraSans-Medium',
        fontSize: 20,
        color: "#000000"
    },


    containerIcon:{
        position: "relative"
    },


    icon:{
        fontSize: 26,
        color: "#000000"
    },

    notificationContainer: {
        position: "absolute",
        top: -5,
        right: -3,
        justifyContent: "center",
        alignItems: "center",
        width: 18,
        height: 18,
        backgroundColor: "blue",
        borderRadius: 18/ 2 
    },


    textNotification: {
        fontFamily: 'FiraSans-Regular',
        fontSize: 13,
        color: "#fff"
    }

});


