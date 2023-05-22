import { StyleSheet } from "react-native";
import theme from "../../constants/theme";

export const styles = StyleSheet.create({
   view: {
    flex: 1,
    backgroundColor: theme.colors.white
   },

    title: {
        marginTop: 26,
        marginBottom: 20,
        marginLeft: 16,
        fontFamily: 'FiraSans-Medium',
        fontSize: 18,
        color: theme.colors.text
    },

    containerFlexRow: {
        flexDirection: "row",
        alignItems: "center"
    },

  
    flameIcon: {
        marginLeft: 8,
        fontSize: 22,
        color: theme.colors.primary
    },


    listContainer: {
        marginHorizontal: 12,
    },


    containerFlexRow2: {
        alignItems: "center",
        width: 80
    },

    
    containerIcon: {
        marginBottom: 10,
        justifyContent: "center",
        alignItems: "center",
        width: 48,
        height: 48,
        borderWidth: 1,
        borderColor: theme.colors.textUnderscore,
        borderRadius: 48 / 2
    },


    lodgingIcon: {
        fontSize: 23,
        color: theme.colors.textUnderscore
    },


    category:{

        fontFamily: 'FiraSans-SemiBold',
        fontSize: 16,
        color: theme.colors.textUnderscore
    },


    imageContainer: {
        marginHorizontal: 20,
        marginBottom: 40,
    },


    imageAdventure: {
        marginRight: 18,
        width: 76,
        height: 130,
        borderRadius: 8
    }
});

