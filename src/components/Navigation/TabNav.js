import React, {useEffect} from 'react';
import {Text, View, StyleSheet, Image, ActivityIndicator} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/tabscreens/HomeScreen';
import SearchScreen from '../screens/tabscreens/SearchScreen';
import CartScreen from '../screens/tabscreens/CartScreen';
import ProfileScreen from '../screens/tabscreens/ProfileScreen';
import MoreScreen from '../screens/tabscreens/MoreScreen';
import MyOrders from '../screens/master/MyOrders';
import CategoryScreen from '../screens/CategoryScreen';
import homeimage from '../../assests/images/home.png';
import ProductDetails from '../screens/ProductDetail';
import CartList from '../screens/cart/Cartlist';
import {scolor, pcolor, appname, rsacode} from '../redux/selector/appinfoselector';
import AppinfoScreen from '../screens/AppinfoScreen';
import {cart_length} from '../redux/selector/cartselector';
import Checkout from '../screens/cart/Checkout';
import InvDetail from '../screens/master/invdetail';
import LoginNav from './LoginNav';
import Login from '../screens/login/Login1';
import Dashboard from '../screens/master/Dashboard';
import {useSelector, useDispatch} from 'react-redux';
import {cart_total} from '../redux/selector/cartselector';
import {app_info_action} from '../redux/action/appinfoaction';
import { cate_fetch_action } from '../redux/action/cataction';
import { userlogin } from "../redux/action/useraction"
import App from '../../../App';

// import {PaymentConfirm} from '../../components/screens/cart/Confirmation';

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const cartStack = createStackNavigator();
const invStack = createStackNavigator();
const Stack = createStackNavigator();

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    {/* <HomeStack.Screen name="appinfo" component={AppinfoScreen} /> */}
    <HomeStack.Screen name="Home" component={HomeScreen} />
    <HomeStack.Screen name="Category" component={CategoryScreen} />
    <HomeStack.Screen name="productdetail" component={ProductDetails} />
   
    <HomeStack.Screen name="LoginNav" component={LoginNav} />
  </HomeStack.Navigator>
);

const cartStackScreen = ({navigation}) => (
  <cartStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    {/* <HomeStack.Screen name="appinfo" component={AppinfoScreen} /> */}
    <cartStack.Screen name="cart" component={CartList} />
    <cartStack.Screen name="checkout" component={Checkout} />
    {/* <cartStack.Screen name="finalpage" component={PaymentConfirm} /> */}
  </cartStack.Navigator>
);
const ordersStackScreen = ({navigation}) => (
  <ordersStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
  
    <ordersStack.Screen name="MyOrders" component={MyOrders} />

    <ordersStack.Screen name="InvDetail" component={InvDetail} />
  
  </ordersStack.Navigator>
);

const InvdStackScreen = ({navigation}) => (
  <invStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <invStack.Screen name="MyOrders" component={MyOrders} />
    <invStack.Screen name="Dashboard" component={Dashboard} />

    <invStack.Screen name="invdetail" component={InvDetail} />
  </invStack.Navigator>
);

const ProfileHomeScreen = ({navigation}) => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    {/* <HomeStack.Screen name="appinfo" component={AppinfoScreen} /> */}
    <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
    <Stack.Screen name="Login" component={App} />

    {/* <cartStack.Screen name="finalpage" component={PaymentConfirm} /> */}
  </Stack.Navigator>
);


export default function TabNav() {
  const primary = useSelector(pcolor);
  const len = useSelector(cart_total);
  const secondary = useSelector(scolor);
  const name = useSelector(appname);
  const cart = useSelector(cart_length);
  const code = useSelector(rsacode);

  const dispatch = useDispatch();
  useEffect(() => {
    console.log("code",code)
    dispatch(
      app_info_action({
        code,
      }),
    );
    dispatch(
      cate_fetch_action({
        code,
      }),
    );
    dispatch(
    userlogin({
      email,
      password
    }),
  );
  }, [])

  return (

    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: secondary,
        inactiveTintColor: '#000000',
        style: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 0,
          shadowOffset: {width: 5, height: 3},
          shadowColor: '#000000',
          shadowOpacity: 0.5,
          elevation: 5,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarIcon: ({}) => (
            <Image
              source={require('../../assests/images/home.png')}
              resizeMode="contain"
              style={{
                width: 18.98,
                height: 18.6,
                tintColor: '#000000',
                borderColor: '#FF6969',
                opacity: 100,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({}) => (
            <Image
              source={require('../../assests/images/Search.png')}
              resizeMode="contain"
              style={{
                width: 17,
                height: 17,
                tintColor: '#000000',
                opacity: 100,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={cartStackScreen}
        options={{
          tabBarBadge: cart,
          tabBarIcon: ({}) => (
            <>
              <Image
                source={require('../../assests/images/shopping-cart.png')}
                resizeMode="contain"
                style={{
                  width: 18.54,
                  height: 18,
                  tintColor: '#000000',
                  borderColor: '#FF6969',
                  opacity: 100,
                }}
              />
            </>
          ),
        }}
      />
       <Tab.Screen
        name="MyOrders"
        component={ordersStackScreen}
        options={{
          tabBarIcon: ({}) => (
            <>
              <Image
                source={require('../../assests/images/shopping-cart.png')}
                resizeMode="contain"
                style={{
                  width: 18.54,
                  height: 18,
                  tintColor: '#000000',
                  borderColor: '#FF6969',
                  opacity: 100,
                }}
              />
            </>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileHomeScreen}
        options={{
          tabBarIcon: ({}) => (
            <Image
              source={require('../../assests/images/user.png')}
              resizeMode="contain"
              style={{
                width: 18,
                height: 18,
                tintColor: '#000000',
                borderColor: '#FF6969',
                opacity: 100,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="My Order"
        component={InvdStackScreen}
        options={{
          tabBarIcon: ({}) => (
            <Image
              source={require('../../assests/images/bars.png')}
              resizeMode="contain"
              style={{
                width: 18,
                height: 15,
                borderColor: '#000000',
                opacity: 100,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>

  );
}
