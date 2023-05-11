import { StyleSheet } from "react-native";
import theme from "./constants/theme";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.white,
      alignItems: 'center',
      justifyContent: 'center',
    },

    title:{
        fontFamily: 'FiraSans-SemiBold',
        fontSize: 32,
        color: theme.colors.text
    }
  });

  export default styles;