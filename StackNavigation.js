import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DonateScreen from './screens/DonateScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RewiewPage from './screens/RewiewPage';
import SingupScreen from './screens/SingupScreen';



const Stack = createNativeStackNavigator()

const StackNavigation = ()=> {
return(
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="login" component={LoginScreen} options={{headerShown: false}} />
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
      <Stack.Screen name="review" component={RewiewPage} options={{headerShown: false}} />
      <Stack.Screen name="donate" component={DonateScreen} options={{headerShown: false}} />
 
      <Stack.Screen name="singup" component={SingupScreen} options={{headerShown: false}} />
    </Stack.Navigator>
  </NavigationContainer>
)
}

export default StackNavigation