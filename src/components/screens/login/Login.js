import React, { memo, useState, useEffect, useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Dimensions,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Alert,
  AsyncStorage,
} from 'react-native';
import colors from '../../../assests/styles/stylesheet/colors';
import styles from './Styles';
import { app_info_action } from '../../redux/action/appinfoaction';
import { useSelector, useDispatch } from 'react-redux';
import {loginfetch,error, error_msg} from '../../redux/selector/userselector';
import {
  appname,
  appinfofetch,
  appinfoerror,
  appinfoerrormsg,
  statt1,
  rsacode
} from '../../redux/selector/appinfoselector';
import { login } from '../../../constants/validate';
import { loginerror } from '../../../constants/alertmsg';
import AlertScreen from '../../CustomComponents/AlertScreen';
import Spinner from 'react-native-loading-spinner-overlay';
import { cate_fetch_action } from '../../redux/action/cataction';
import { size_fetch_action } from '../../redux/action/sizeaction';
import { brand_fetch_action } from '../../redux/action/brandaction';

import { userlogin } from "../../redux/action/useraction"

const Login = ({ navigation }) => {

  const { width, height } = Dimensions.get('screen');

  const dispatch = useDispatch();
  const fetchstatus = useSelector(appinfofetch);
  const errorstatus = useSelector(appinfoerror);
  const errormsg = useSelector(appinfoerrormsg);
  const sucessfetch = useSelector(statt1);
  const login1 = useSelector(loginfetch);

  const loginerror = useSelector(error);
  const loginerrormsg = useSelector(error_msg);
  const code = useSelector(rsacode);
  // const uid = useSelector(user_id);
  const application_name = useSelector(appname);
  const [alertscreen, setalertscreen] = useState('');
  const [alertmsg, setalertmsg] = useState('');
  const [email, setemail] = useState('');
  const [loginstat, setlogin] = useState(login1);
  const [password, setpassword] = useState('');
  const [visiblemodal, setvisiblemodal] = useState(false);


//   function usePrevious(value) {
//     const ref = useRef();
//     useEffect(() => {
//       ref.current = value;
//     });
//     return ref.current;
//   }
//   useEffect(()=>{
// const  prevLoginStatus = usePrevious({login1})
// if(prevLoginStatus.login1!==login1){
//   nee()
// }
//   },[login1])

  
  // const [effectup,seteffectup]= useState("")
  const emailreg = new RegExp(
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
  );

console.log("before update login 1",login1,loginerror)
  const onmodalchange = () => {
    setvisiblemodal(false);
    
  };

  function nee() {
    console.log("after APi 3",login1)
    console.log("---------------------",sucessfetch)
    if (login1) {
      AsyncStorage.setItem('user',email);  
      navigation.navigate('main', {screen: 'TabNav'});
    }
    else {
      setalertmsg("Please Enter valid Email or Password");
      setalertscreen(loginerror);
      setvisiblemodal(true);
    }

    // navigation.navigate('main', { screen: 'TabNav' });
  }


  const submit = () => {

    if (email == '' || password == '') {
      Alert.alert(
        'Error',
        'Enter all values',
        [
          
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
    }
    else if(emailreg.test(email) === false){
      Alert.alert(
        'Error',
        'Please Enter Valid Email',
        [
          
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
    }
  else {
      dispatch(
        userlogin({
          email,
          password
        }),
      );
      dispatch(
        cate_fetch_action({
          code,
        }),
      );

      dispatch(
        size_fetch_action({
          code,
        }),
      );

      dispatch(
        brand_fetch_action({
          code,
        }),
      );
      console.log("after APi 1",login1)
      setTimeout(() => {
        console.log("after APi 2",login1)
        nee();
      }, 1000);
  }
  };





  return (
    <SafeAreaView >
      {visiblemodal ? (
        <AlertScreen
          screen={alertscreen}
          message={alertmsg}
          fun={onmodalchange}
        />
      ) : (
          <></>
        )}

      <ScrollView >
        <View style={styles.container}>
          <ImageBackground source={require('../../../assests/images/login.jpg')}
            style={{
              flex: 1,
              resizeMode: "cover",
              justifyContent: "center",
              opacity: 1,
              height: height,
              width: width,

            }}>
            <Spinner
              visible={fetchstatus}
              textContent={'Loading...'}
            // textStyle={styles.spinnerTextStyle}
            />
            <View style={{ marginTop: 30 }}>
              <Text style={{ textAlign: 'center', fontWeight: '900', fontSize: 25, color: 'white' }}>
                Welcome To
              </Text>
            </View>
            <View style={{ marginTop: 30 }}>
              <Text style={{ textAlign: 'center', fontWeight: '900', fontSize: 70, color: 'white' }}>
                B 2 B
              </Text>
            </View>
            <View style={[styles.textContainer]}>

              <TextInput
                placeholder='User/Email'
                style={[styles.Textinput]}
                value={email}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType="next"
                onChangeText={(value) => setemail(value)}
              // placeholder="ANDJGFYINA"
              // placeholderTextColor={colors.white}
              />

              <TextInput
                placeholder='Password'
                style={[styles.Textinput]}
                value={password}
                keyboardType="default"
                secureTextEntry={true}
                enablesReturnKeyAutomatically={true}
                returnKeyType="done"
                clearTextOnFocus={true}
                onChangeText={(value) => setpassword(value)}
                maxLength={15}
              />
            </View>

            <View style={[styles.reset]}>
              {/* <TouchableOpacity 
               onPress={() => {
                navigation.navigate("ForgetPassword");
              }}
              style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={[styles.resetText]}>Forgot Password ?</Text>
              </TouchableOpacity> */}
            </View>
            <View style={[styles.Btncontainer]}>
              <TouchableOpacity onPress={() => submit()} style={[styles.button]}>
                <Text style={[styles.text]}>LOGIN</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.lineView]} />
            <View style={[styles.signup]}>
              <Text style={[styles.resetText]}>Don't have an account ?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Signin");
                }}
              >
                <Text style={[styles.btnText]}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>

      </ScrollView>
    </SafeAreaView>

  );
};
export default memo(Login);
