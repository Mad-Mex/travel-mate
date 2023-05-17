import 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { UserProvider } from './context/UserProvider';
import { useFonts } from 'expo-font';
import theme from './constants/theme';
import AppNavigator from './navigation';



export default function App() {

  const Stack = createStackNavigator()

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
    <UserProvider>
      <AppNavigator />
    </UserProvider>
  );
}

