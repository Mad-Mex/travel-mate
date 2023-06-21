import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    cardContainer: {
        flexDirection: "row",
        marginTop: 16,
        width: "100%",
        height: 104,
        backgroundColor: "#fff"
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
        color: "#000000"
    },


    subtitle: {
        marginLeft: 6,
        fontFamily: 'FiraSans-Regular',
        fontSize: 13,
        color: "#000000"
    },


    icon: {
        fontSize: 32,
        color: "#000000"
    }
});