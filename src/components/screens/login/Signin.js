import React, { memo, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Alert
} from 'react-native';
import colors from '../../../assests/styles/stylesheet/colors';
import styles from './Styles';
import { usersignup } from '../../redux/action/useraction'
import { useSelector, useDispatch } from 'react-redux';
import { signupfetch, error, error_msg, user_id, sign_sucess } from '../../redux/selector/userselector';
import { signup } from "../../../constants/validate"
import { signerror } from '../../../constants/alertmsg';
import AlertScreen from '../../CustomComponents/AlertScreen';
import Spinner from 'react-native-loading-spinner-overlay';
import { rsacode } from '../../redux/selector/appinfoselector';
import { cate_fetch_action } from '../../redux/action/cataction';
import { size_fetch_action } from '../../redux/action/sizeaction';
import { brand_fetch_action } from '../../redux/action/brandaction';

const Signin = ({ navigation }) => {


  const { width, height } = Dimensions.get('screen');
  const dispatch = useDispatch();
  const fetchstatus = useSelector(signupfetch);
  const sucesssingn = useSelector(sign_sucess);
  const errorstatus = useSelector(error);
  const uid = useSelector(user_id);
  const errormsg = useSelector(error_msg);
  const code = 3000;
  const [alertscreen, setalertscreen] = useState('');
  const [alertmsg, setalertmsg] = useState('');
  const [visiblemodal, setvisiblemodal] = useState(false);
  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [conpassword, setconpassword] = useState("")
  const [copass, setcopass] = useState("")
  const [mobileno, setmobileno] = useState("")
  const emailreg = new RegExp(
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
  );
  const phonereg = new RegExp(
    /^[98765]\d{9}$/,
  );
  const namereg = new RegExp(
    /^[a-zA-Z]+$/,
  );




  const onmodalchange = () => {
    setvisiblemodal(false);
  };



  const signupsubmit = () => {
    console.log("password>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>..", password, conpassword);
    const valid = signup(email, password, name, mobileno)

    if (email == '' || password == '' || name == '' || mobileno == '') {
      Alert.alert(
        'Error',
        'Enter all values',
        [

          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      );
    }
    else if (namereg.test(name) === false) {
      Alert.alert(
        'Error',
        'Please Enter Valid Name',
        [

          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      );
    }
    else if (phonereg.test(mobileno) === false) {
      Alert.alert(
        'Error',
        'Please Enter Valid Phone Number',
        [

          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      );
    }
    else if (emailreg.test(email) === false) {
      Alert.alert(
        'Error',
        'Please Enter Valid Email',
        [

          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      );
    }

    else if (password !== conpassword) {
      Alert.alert(
        'Error',
        'Please Enter valied confirm password',
        [

          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      );
    }
    else {
      Alert.alert(
        'Error',
        'Login is done',
        [

          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false },
      );

      dispatch(usersignup({
        email,
        password,
        name,
        mobileno,
        code
      }),


      );
      // dispatch(
      //   cate_fetch_action({
      //     code,
      //   }),
      // );

      // dispatch(
      //   size_fetch_action({
      //     code,
      //   }),
      // );

      // dispatch(
      //   brand_fetch_action({
      //     code,
      //   }),
      // );
      // navigation.navigate('main', {screen: 'TabNav'});
      setTimeout(() => {
        navigation.navigate('Login');
      }, 1000);


    }


  }
  return (

    <SafeAreaView>
      {visiblemodal ? (
        <AlertScreen
          screen={alertscreen}
          message={alertmsg}
          fun={onmodalchange}
        />
      ) : (
          <></>
        )}
      <ScrollView>
        <View style={styles.container}>
          {/* <ImageBackground source={require('../../../assests/images/login.jpg')} style={{ width: width, height: height }}> */}
            <Spinner
              visible={fetchstatus}
              textContent={'Loading...'}
              textStyle={styles.spinnerTextStyle}
            />
            <View style={{ marginTop: 40, marginBottom: 30 }}>
              <Text style={{ textAlign: 'center', fontWeight: '900', fontSize: 30, color: 'white' }}>
                BOOK MY TEACHER
              </Text>
            </View>
            <View style={styles.textContainer}>
              <TextInput
                placeholder='9988559977'
                style={[styles.Textinput]}
                value={email}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType="next"
                onChangeText={(value) => setemail(value)}
              />
            </View>

            <View style={[styles.textContainer]}>
              <TextInput
                placeholder="Email"
                style={[styles.Textinput]}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={email}
                onChangeText={(value) => setemail(value)}
                enablesReturnKeyAutomatically={true}
                returnKeyType="next"

              />
            </View>

            <View style={[styles.textContainer]}>
              <TextInput
                placeholder="Mobile"
                style={[styles.Textinput]}
                keyboardType="default"
                enablesReturnKeyAutomatically={true}
                returnKeyType="done"
                value={mobileno}
                onChangeText={(value) => setmobileno(value)}
                clearTextOnFocus={true}
                maxLength={15}
              />
            </View>

            <View style={[styles.textContainer]}>
              <TextInput
                placeholder="Password"
                style={[styles.Textinput]}
                keyboardType="default"
                secureTextEntry={true}
                enablesReturnKeyAutomatically={true}
                returnKeyType="done"
                value={password}
                onChangeText={(value) => setpassword(value)}
                clearTextOnFocus={true}
                maxLength={15}
              />
            </View>

            <View style={[styles.textContainer]}>
              <TextInput
                placeholder="Confirm Password"
                style={[styles.Textinput]}
                keyboardType="default"
                secureTextEntry={true}
                enablesReturnKeyAutomatically={true}
                returnKeyType="next"
                value={conpassword}
                onChangeText={(value) => setconpassword(value)}
                clearTextOnFocus={true}
                maxLength={15}
              />
            </View>
            <View style={[styles.Btncontainer]}>
              <TouchableOpacity
                onPress={() => signupsubmit()}
                style={[styles.button]}>

                <Text style={[styles.text]}>SIGN UP NOW</Text>

              </TouchableOpacity>
            </View>
            {/* <View style={[styles.lineView]} /> */}
            {/* <View style={[styles.signup]}>
              <Text style={[styles.resetText]}>Already have an account ?</Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                <Text style={[styles.btnText]}>Sign In</Text>
              </TouchableOpacity>
            </View> */}
          {/* </ImageBackground> */}
        </View>
      </ScrollView>
    </SafeAreaView>

  );
};

export default memo(Signin);
