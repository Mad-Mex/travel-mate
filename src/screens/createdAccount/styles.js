import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: "orange"
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
        color: "#fff"
    },


    logoText: {
        fontFamily: 'FiraSans-SemiBold',
    },


    subtitle: {
        marginTop: 14,
        marginHorizontal: 18,
        fontFamily: 'FiraSans-Regular',
        fontSize: 15,
        color: "#fff"
    },


    listContainer: {
        marginHorizontal: 22,
        marginTop: 14,
        borderColor: "#fff"
    },


    container: {
        marginTop: 12,
        flexDirection: "row",
        alignItems: "center"
    },


    icon: {
        marginRight: 12,
        fontSize: 22,
        color: "#fff",
    },


    feature: {
        fontFamily: 'FiraSans-Regular',
        fontSize: 14,
        color: "#fff"
    },


    button: {
        marginTop: 70,
        backgroundColor: "#fff"
    },


    textButton: {
        fontFamily: 'FiraSans-Medium',
        fontSize: 18,
        color: "#000000"
    }


});

export default styles;