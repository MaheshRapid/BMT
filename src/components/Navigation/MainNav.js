import * as React from 'react';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import CreateBrand from '../screens/master/CreateBrand';
import CreateCategory from '../screens/master/CreateCategory';
import CreateProduct from '../screens/master/CreateProduct';

import CreateSize from '../screens/master/CreateSize';
import Dashboard from '../screens/master/Dashboard';
import MyOrders from '../screens/master/MyOrders';
import InvDetail from '../screens/master/invdetail';
import CreatePincode from '../screens/master/CreatePincode';

import Screen3 from '../screens/BMT/screen3';
import Screen4 from '../screens/BMT/screen4';
import Screen5 from '../screens/BMT/screen5';
import Screen6 from '../screens/BMT/screen6';
import Screen7 from '../screens/BMT/screen7';
import Screen8 from '../screens/BMT/screen8';
import Screen9 from '../screens/BMT/screen9';
import Screen10 from '../screens/BMT/screen10';
import Screen11 from '../screens/BMT/screen11';
import {rsacode} from '../redux/selector/appinfoselector';4
import {useSelector, useDispatch} from 'react-redux';

import TabNav from './Tabnav1';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

export function goBack() {
  navigationRef.current?.goBack();
}

const Drawer = createDrawerNavigator();

const invStack = createStackNavigator();

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

function MainNav() {
  const code = useSelector(rsacode)
  return (
    <Drawer.Navigator initialRouteName="tab">
      <Drawer.Screen name="tab" component={TabNav} />


      {code=="3000"?(
        <>
      
        </>
      ):(
        <> <Drawer.Screen name="MBrand" component={CreateBrand} />
        <Drawer.Screen name="MCategory" component={CreateCategory} />
        <Drawer.Screen name="MProduct" component={CreateProduct} />
  
        <Drawer.Screen name="Size" component={CreateSize} />
        <Drawer.Screen name="Dashboard" component={InvdStackScreen} />
        <Drawer.Screen name="MyOrders" component={InvdStackScreen} />
        <Drawer.Screen name="Mpin" component={CreatePincode} />
  
        <Drawer.Screen name="Screen3" component={Screen3} />
        <Drawer.Screen name="Screen4" component={Screen4} />
        <Drawer.Screen name="Screen5" component={Screen5} />
        <Drawer.Screen name="Screen6" component={Screen6} />
        <Drawer.Screen name="Screen7" component={Screen7} />
        <Drawer.Screen name="Screen8" component={Screen8} />
        <Drawer.Screen name="Screen9" component={Screen9} />
        <Drawer.Screen name="Screen10" component={Screen10} />
        <Drawer.Screen name="Screen11" component={Screen11} /></>
      )}
      
    </Drawer.Navigator>
  );
}

export default MainNav;
