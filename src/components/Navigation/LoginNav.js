import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Signin from '../screens/login/Signin';
import Login from '../screens/login/Login1';
import ForgetPassword from '../screens/login/ForgetPassword';
import ResetPassword from '../screens/login/ResetPassword';
import colors from '../../assests/styles/stylesheet/colors';
import AsyncStorage from '@react-native-community/async-storage';
import MainNav from "./MainNav";
import TabNav from './TabNav';
// import { isReadyRef, navigationRef } from "react-navigation-helpers";
import {app_info_action} from '../redux/action/appinfoaction';
 import {useSelector, useDispatch} from 'react-redux';


const Stack = createStackNavigator();
const LoginStack = createStackNavigator();


function loginscreen() {
  return (
    <LoginStack.Navigator
    screenOptions={{
      headerShown: false
    }}>
    <LoginStack.Screen name={'Login'}
      component={Login} />
    <LoginStack.Screen name={'Signin'}
      component={Signin} />
    <LoginStack.Screen name={'ForgetPassword'}
      component={ForgetPassword} />
        <LoginStack.Screen name={'ResetPassword'}
      component={ResetPassword} />
  </LoginStack.Navigator>
  );
}

function LoginNav() {
  const dispatch = useDispatch();
  useEffect(() => {
    const code = 3000;
    dispatch(
      app_info_action({
        code,
      }),
    );
  }, [])
  return (

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
       <Stack.Screen name="TabNav" component={TabNav} />  
     <Stack.Screen name="signin" component={loginscreen} />
 


      </Stack.Navigator>

  );
}

export default LoginNav;

