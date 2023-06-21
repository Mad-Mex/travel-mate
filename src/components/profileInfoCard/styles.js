import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    
    containerUserInfo: {
        flexDirection: "row",
        width: "100%",
        height: 180,
        backgroundColor: "fff"
    },


    containerImageProfile: {
        justifyContent: "center",
        alignItems: "center",
        width: "26%",
       
    },


    iconUser: {
        fontSize: 84,
        color: "#000000"
    },


    containerContent: {
        justifyContent: "center",
        width: "74%",
       
    },


    name: {
        marginLeft: 10,
        fontFamily: 'FiraSans-Regular',
        fontSize: 23,
        color: "#000000"
    },


    email: {
        marginTop: 2,
        marginLeft: 12,
        fontFamily: 'FiraSans-Light',
        fontSize: 16,
        color: "#000000"
    },


    flexContainer: {
        alignItems: "center",
    },


    divider: {
        marginTop: 20,
        marginBottom: 16,
        width: "86%",
        borderBottomWidth: 0.5,
        borderBottomColor: "#efefef"
    },


    flexContainer2: {
        flexDirection: "row",
        justifyContent: "space-around"
    },


    category: {
        fontFamily: 'FiraSans-Medium',
        fontSize: 13,
        color: "blue"
    },


    number: {
        fontFamily: 'FiraSans-Light',
        fontSize: 14,
        color: "#000000"
    }
})