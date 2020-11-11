import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Signin from '../screens/login/Signin';
import Login from '../screens/login/Login2';
import ForgetPassword from '../screens/login/ForgetPassword';
import ResetPassword from '../screens/login/ResetPassword';


const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => (
  <RootStack.Navigator headerMode='none'>
      <RootStack.Screen name="Login" component={Login}/>
      <RootStack.Screen name="Signin" component={Signin}/>
      <RootStack.Screen name="ForgetPassword" component={ForgetPassword}/>
      <RootStack.Screen name="ResetPassword" component={ResetPassword}/>
  </RootStack.Navigator>
);

export default RootStackScreen;
