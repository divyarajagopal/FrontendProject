import { Home } from '../screens/home';
import { TradeHistory } from '../screens/TradeHistory';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator  } from '@react-navigation/stack';
import { useFonts } from 'expo-font';

const Stack = createStackNavigator();

const Root = () => {
   const [loaded] = useFonts({
      MarkProBold: require('../../Fonts/MarkPro-Bold.otf'),
      MarkProHeavy: require('../../Fonts/MarkPro-Heavy.otf'),
      SFProTextMedium: require('../../Fonts/SF-Pro-Text-Medium.otf'),
      SFProTextRegular: require('../../Fonts/SF-Pro-Text-Regular.otf'),
    });
    
    if (!loaded) {
      return null;
    }
  
   return (
      <NavigationContainer>
         <Stack.Navigator screenOptions={{headerBackTitleVisible:true,}}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="TradeHistory" component={TradeHistory}/>
         </Stack.Navigator>
      </NavigationContainer>
   );
};
export default Root;
