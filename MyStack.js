import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './Screens/SplashScreen/SplashScreen';
import StopWatchScreen from './Screens/StopWatchScreen/StopWatchScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      {/* <Stack.Screen
        name="IntroSliderScreen"
        component={IntroSliderScreen}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="MyBottomTabNavigator"
        component={MyBottomTabNavigator}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="StopWatchScreen"
        component={StopWatchScreen}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
}

export default MyStack;
