import React, { useState } from 'react';
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
  Alert,
} from 'react-native';
import styles from './Styles';
import AlertScreen from '../../CustomComponents/AlertScreen';
import Spinner from 'react-native-loading-spinner-overlay';
import {
  appname,
  appinfofetch,
  appinfoerror,
  appinfoerrormsg,
  statt1,
  rsacode
} from '../../redux/selector/appinfoselector';
import { useSelector, useDispatch } from 'react-redux';
import { cate_fetch_action } from '../../redux/action/cataction';
import { userlogin } from "../../redux/action/useraction"





import { AuthContext } from './context';
const { width, height } = Dimensions.get('screen');


const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const code = useSelector(rsacode);
  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const { signIn } = React.useContext(AuthContext);

  const submit = () => {
    // console.log("foundUser val",foundUser)
    if (email == 0 || password == 0) {
      Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
        { text: 'Okay' }
      ]);
      return;
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
      fetch('http://cement.buildemate.com/login.php', {
        method: 'post',
        header: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          // we will pass our input data to server
          email: email,
          password: password
        })

      })
        .then((response) => response.json())
        .then((response) => {
          console.log('response', response.content);
          if (response.Status_Code == 200) {
            // alert("Login done");
            const foundUser = response.content;
            console.log("login", foundUser.ccode, foundUser.name)
            signIn(foundUser);
          } else {
            alert("Wrong Login Details");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }


  return (
    <SafeAreaView >


      <ScrollView >
        <View style={styles.container}>
          {/* <ImageBackground source={require('../../../assests/images/login.jpg')} style={{ width: width, height: height }}> */}

          <View style={styles.v1}>
            <Text style={styles.t1}>
              Book My Teacher
              </Text>
          </View>
          <View style={styles.v2}>
            <Text style={styles.t1}>
              SIGN UP
              </Text>
          </View>


          <View style={styles.t3}>
            <Text style={styles.t2}>EMail</Text>
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#FBD203' }}>
              <TextInput
                placeholder='XXXXXXXXX@gmail.com'
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
          </View>

          <Text style={styles.or}>or</Text>

          <View style={styles.t3}>
            <Text style={{ color: '#FFFFFF', fontSize: 20 }}>Phone Number</Text>
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#FBD203' }}>
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
          </View>

          {/* <View style={[styles.textContainer]}>
             
              <TextInput
                placeholder='XXXXXXXXX@gmail.com'
                style={[styles.Textinput]}
                value={email}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                enablesReturnKeyAutomatically={true}
                returnKeyType="next"
                onChangeText={(value) => setemail(value)}
              />

              <TextInput
                placeholder='0123456789'
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
            </View> */}

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
              <Text style={[styles.text]}>Enter</Text>
            </TouchableOpacity>
          </View>
          {/* <View style={[styles.lineView]} /> */}
          <View style={[styles.signup]}>
            {/* <Text style={[styles.resetText]}>Don't have an account ?</Text> */}
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Signin");
              }}
            >
              <Text style={[styles.btnText]}> I want to Sign Up</Text>
            </TouchableOpacity>
          </View>
          {/* </ImageBackground> */}
        </View>

      </ScrollView>
    </SafeAreaView>

  );
};
export default Login;
