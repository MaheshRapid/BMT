import React, {useEffect} from 'react';
import {Text, View, StyleSheet, Image, ActivityIndicator} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/tabscreens/HomeScreen';
import Home from '../screens/tabscreens/Home';
import App from '../../../App';
import Support from '../screens/tabscreens/Support';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();



const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator
    >
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'Overview',
        headerLeft: () => (
            <Icon1.Button name="ios-menu" size={25} backgroundColor="#fff" color="#000" onPress={() => navigation.openDrawer()}></Icon1.Button>
        )
        }}/>
  
  </HomeStack.Navigator>
);

const SupportScreen = ({navigation}) => (
  <HomeStack.Navigator
    >
    <HomeStack.Screen name="Support" component={Support} options={{
        title:'Overview',
        headerLeft: () => (
            <Icon1.Button name="ios-menu" size={25} backgroundColor="#fff" color="#000" onPress={() => navigation.openDrawer()}></Icon1.Button>
        )
        }}/>
  
  </HomeStack.Navigator>
);



export default function TabNav () {


  return (

    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#000000',
        inactiveTintColor: '#FFFFFF',
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
        name="Support"
        component={SupportScreen}
        options={{
          tabBarIcon: ({}) => (
            <Icon
           
            name={'phone'}
            size={20}
           
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
    </Tab.Navigator>

  );
}
