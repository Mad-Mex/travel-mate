import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import styles from './styles';
import theme from './constants/theme';

export default function App() {

  const [ loaded ] = useFonts({
    'FiraSans-Light' : require("../assets/fonts/FiraSans-Light.ttf"),
    'FiraSans-Regular' : require("../assets/fonts/FiraSans-Regular.ttf"),
    'FiraSans-Medium' : require("../assets/fonts/FiraSans-Medium.ttf"),
    'FiraSans-SemiBold' : require("../assets/fonts/FiraSans-SemiBold.ttf"),
    'FiraSans-Bold' : require("../assets/fonts/FiraSans-Bold.ttf"),
  });

  if(!loaded){
    return(
        <ActivityIndicator size={ 24 }  color={ theme.colors.secondary }  />
    )
  }


  return (

    <View style={styles.container}>
      <Text style={ styles.title } > Travel Mate </Text>
      <StatusBar style="auto" />
    </View>
  );
}

