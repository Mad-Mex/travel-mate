import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import { useFonts } from 'expo-font';
import AppNavigator from './navigation';


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
        <ActivityIndicator size={ 24 }  color="orange"  />
    )
  }


  return (
    <Provider store={ store } >
      <AppNavigator />
    </Provider>
  );
}

