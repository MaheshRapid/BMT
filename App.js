/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {View, Text,YellowBox,ActivityIndicator} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import RootStackScreen from './src/components/Navigation/LoginNav1';
import TabNav from './src/components/Navigation/Tabnav1';
import MainNav from './src/components/Navigation/MainNav';
import {Provider} from 'react-redux';
import ConfigureStore from './src/components/redux/store/ConfigStore';
import AsyncStorage from '@react-native-community/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import { AuthContext } from './src/components/screens/login/context';
import {
  DrawerItem
} from '@react-navigation/drawer';

import Screen3 from './src/components/screens/BMT/screen3';
import Screen31 from './src/components/screens/BMT/screen31';
import Screen32 from './src/components/screens/BMT/screen32';
import Screen4 from './src/components/screens/BMT/screen4';
import Screen41 from './src/components/screens/BMT/screen41';
import Screen5 from './src/components/screens/BMT/screen5';
import Screen6 from './src/components/screens/BMT/screen6';
import Screen7 from './src/components/screens/BMT/screen7';
import Screen8 from './src/components/screens/BMT/screen8';
import Screen9 from './src/components/screens/BMT/screen9';
import Screen91 from './src/components/screens/BMT/screen91';
import Screen10 from './src/components/screens/BMT/screen10';
import Screen11 from './src/components/screens/BMT/screen11';

import { cate_fetch_action } from './src/components/redux/action/cataction';
const Drawer = createDrawerNavigator();

const Stack31 = createStackNavigator();

const StackScreen31 = ({navigation}) => (
  <Stack31.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack31.Screen name="Screen3" component={Screen3} />
    <Stack31.Screen name="Screen31" component={Screen31} />
    <Stack31.Screen name="Screen32" component={Screen32} />
    
  </Stack31.Navigator>
);


const Stack41 = createStackNavigator();

const StackScreen41 = ({navigation}) => (
  <Stack41.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack41.Screen name="Screen4" component={Screen4} />
    <Stack41.Screen name="Screen41" component={Screen41} />
  </Stack41.Navigator>
);

const Stack91 = createStackNavigator();

const StackScreen91 = ({navigation}) => (
  <Stack91.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack91.Screen name="Screen9" component={Screen9} />
    <Stack91.Screen name="Screen91" component={Screen91} />
  </Stack91.Navigator>
);



const store = ConfigureStore();

const App = () => {

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN': 
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  }


  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);


  const authContext = React.useMemo(() => ({
    signIn: async(foundUser) => {
      // setUserToken('fgkj');
      // setIsLoading(false);
      const userToken = String(foundUser.ccode);
      const userName = foundUser.name;
      const Aemail = foundUser.email;
      const Apassword = foundUser.password;
      console.log("..///////////////",Aemail,Apassword)
      try {
        await AsyncStorage.setItem('userToken', userToken);
        await AsyncStorage.setItem('Aemail', Aemail);
        await AsyncStorage.setItem('Apassword', Apassword);
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    signOut: async() => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
      // setUserToken('fgkj');
      // setIsLoading(false);
    },
    
  }), []);


  useEffect(() => {
    console.log("hai.......................................")
    setTimeout(async() => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000);
    
  }, []);
  if( loginState.isLoading ) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }

console.log("login token ",loginState.userToken)
  return (
    <AuthContext.Provider   value={authContext}>
      <Provider store={store}>
 <NavigationContainer>

   {loginState.userToken !== null ? (
     <Drawer.Navigator initialRouteName="Tab">
           <Drawer.Screen name="Tab" component={TabNav} />
           <Drawer.Screen name="Teacher profile" component={StackScreen31} />
           <Drawer.Screen name="School" component={StackScreen41} />
           <Drawer.Screen name="Substitute Teacher Request" component={Screen5} />
           <Drawer.Screen name="Substitute Teacher List" component={Screen6} />
           <Drawer.Screen name="I Need A Teacher" component={Screen7} />
           <Drawer.Screen name="Permanent Teacher List" component={Screen8} />
           <Drawer.Screen name="Master class module" component={StackScreen91} />
           <Drawer.Screen name="request for session" component={Screen10} />
           <Drawer.Screen name="session report" component={Screen11} />
         
          </Drawer.Navigator> 
           
   ) :(

    <RootStackScreen/> 
   )
   }
    </NavigationContainer>
    </Provider>
    </AuthContext.Provider>
  );
};
export default App;

