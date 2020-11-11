/* ==================================
   NAME : ANOOP REDDY VANTERU
   
   ROLE : REACT NATIVE DEVELOPER 
   ==================================== */

import React, { useState,useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';

// import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

import { useSelector, useDispatch } from 'react-redux';
import {
  scolor,
  pcolor,
  appname,
  rsacode,
  banner
} from '../../redux/selector/appinfoselector';
import { productfetch } from '../../redux/action/productaction';
import {
  productfetchstatus,
  producterror,
  producterrmsg,
  productsucess,
  productlist,
} from '../../redux/selector/productselector';

import {
  catelist,
  catfetch,
  caterr,
  cateerrmsg,
  catesucess,
} from '../../redux/selector/cateselector';

import {
  sizelist,
  sizefetch,
  sizeerr,
  sizeerrmsg,
  sizesucess,
} from '../../redux/selector/sizeselector';
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-community/async-storage';
import { apiurl } from '../../../constants/apiconfig'
import { cate_fetch_action } from '../../redux/action/cataction';
import { users_fetch_action } from "../../redux/action/useraction";
import { getall_fetch_action } from '../../redux/action/getallaction';
import { responsiveFontSize } from '../../../assests/styles/stylesheet/responsiveSize';
import { AuthContext } from '../login/context';

const { width, height } = Dimensions.get('screen');



// let userToken =  AsyncStorage.getItem('userToken');
// console.log('user token: ', userToken);

const HomeScreen = ({ }) => {
  const dispatch = useDispatch();
  const primary = useSelector(pcolor);
  const secondary = useSelector(scolor);
  const name = useSelector(appname);
  const pstatus = useSelector(productsucess);
  const navigation = useNavigation();
  const categorylist = useSelector(catelist);
  const code = useSelector(rsacode);
  const app_banner = useSelector(banner)

  useEffect(() => {
    setTimeout(async () => {
      const user_id = await AsyncStorage.getItem('userToken');
      console.log("////////////////////", user_id)
      dispatch(
        getall_fetch_action({
          code1:'8000',
        }),
      );
      dispatch(
        users_fetch_action({
          user_id,
          code,
        }),
      );
    }, 1000);
  }, []);

  // let userToken =  AsyncStorage.getItem('userToken');
  // console.log("async value",userToken)

  console.log('banner', app_banner);

  const fetching = useSelector(catfetch);

  console.log('apiurl', apiurl);

  const txtstyle = {
    color: secondary,
  };

  const catsub = (value) => {
    let catid = value;
    dispatch(
      productfetch({
        code,
        catid,
      }),
    );
    setTimeout(() => {
      navigation.navigate('Category');
    }, 1000);
  };
  const { signOut } = React.useContext(AuthContext);
  return (

    <SafeAreaView>
    <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: 'lightWhite', width: width }}>
        <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
            <Text style={{ color: "grey", fontSize: 20, fontWeight: 'bold', textAlign: 'center', width: width, alignItems: 'center', justifyContent: 'center' }}>
                Home Page
            </Text>
            
            <Text  style={{ color: "grey", fontSize: 20, fontWeight: 'bold', textAlign: 'center', width: width, alignItems: 'center', justifyContent: 'center' }}
             onPress={() => {signOut()}}>
                Logout
            </Text>
            
        </View>

    </View>
</SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    fontSize: 14,
    color: '#989FA7',
  },
  backgroundImage: {
    width: width,
    height: 170,
    resizeMode: 'contain'
  },
  searchBarAlign: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    marginTop: '2%',
    marginBottom: '2%',
  },
  searchInput: {
    width: '95%',
    height: 48,
    borderWidth: 2,
    borderColor: '#FFFFFF',
    paddingLeft: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
  },
  elementGrid1: {
    width: '95%',
    height: 350,
    backgroundColor: '#ffffff',
    margin: '2%',
    flex: 1,
    flexDirection: 'column',
    paddingBottom: 10
  },
  gridRow: {
    flex: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  element: {
    flexDirection: 'column',
    alignItems: 'center',
    flex: 3.3,
  },
  Image: {
    resizeMode: 'cover',
    // marginTop: '5%',
    margin: '5%',
    width: width / 3.5,
    height: 130,
    borderRadius: 10
  },
  popular: {
    width: '95%',
    height: 43,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  BannerImage: {
    marginTop: 5,
    width: '100%',
    height: 180,
  }
});

export default HomeScreen;
