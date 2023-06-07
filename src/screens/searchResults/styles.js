import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({

    view: {
        flex: 1,
        backgroundColor: theme.colors.white
    },


    infoSearchContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 30,
        marginHorizontal: 20,
        width: "auto",
        height: 44,
        borderWidth: 1,
        borderColor: theme.colors.black,
        borderRadius: 8
    },
    
    
    flexContainer: {
        flexDirection: "row",
        
    },


    divider: {
        height: 28,
        borderWidth: 0.3,
        borderColor: theme.colors.black
    },


    icon: {
        marginRight: 8,
        fontSize: 16,
        color: theme.colors.text
    },


    textIcon: {
        fontFamily: 'FiraSans-Regular',
        fontSize: 15,
        color: theme.colors.text
    },


    imageMap: {
        marginVertical: 30,
        marginHorizontal: 20,
        width: "auto",
        height: 180
    },


    title: {
        marginBottom: 24,
        marginHorizontal: 20,
        fontFamily: 'FiraSans-Medium',
        fontSize: 22,
        color: theme.colors.text
    },

    
});