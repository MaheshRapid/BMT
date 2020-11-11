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
import Screen4 from './src/components/screens/BMT/screen4';
import Screen5 from './src/components/screens/BMT/screen5';
import Screen6 from './src/components/screens/BMT/screen6';
import Screen7 from './src/components/screens/BMT/screen7';
import Screen8 from './src/components/screens/BMT/screen8';
import Screen9 from './src/components/screens/BMT/screen9';
import Screen10 from './src/components/screens/BMT/screen10';
import Screen11 from './src/components/screens/BMT/screen11';

import { cate_fetch_action } from './src/components/redux/action/cataction';
const Drawer = createDrawerNavigator();

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
           <Drawer.Screen name="Teacher profile" component={Screen3} />
           <Drawer.Screen name="School" component={Screen4} />
           <Drawer.Screen name="Substitute teacher Request" component={Screen5} />
           <Drawer.Screen name="Substitute teacher Requests" component={Screen6} />
           <Drawer.Screen name="I Need A Teacher" component={Screen7} />
           <Drawer.Screen name="Teacher List" component={Screen8} />
           <Drawer.Screen name="Master class module" component={Screen9} />
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

