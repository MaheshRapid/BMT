import React, { memo, useState, useEffect, useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Dimensions,
  Alert,
} from 'react-native';
import colors from '../../../assests/styles/stylesheet/colors';
import styles from './Styles';
import AlertScreen from '../../CustomComponents/AlertScreen';
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-community/async-storage';
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
import { size_fetch_action } from '../../redux/action/sizeaction';
import { brand_fetch_action } from '../../redux/action/brandaction';
import { userlogin } from "../../redux/action/useraction"


const Login = ({ navigation }) => {

  const { width, height } = Dimensions.get('screen');
    const dispatch = useDispatch();
    const fetchstatus = useSelector(appinfofetch);
    const [visiblemodal, setvisiblemodal] = useState(false);
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const code = useSelector(rsacode);
    const emailreg = new RegExp(
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,
      );
    const onmodalchange = () => {
        setvisiblemodal(false);
        
      };

      const submit = async () =>{

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
        fetch('http://api.b2bmart.org.in/login1.php',{
			method:'post',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
				// we will pass our input data to server
				email: email,
				password: password
			})
			
        })
        .then((response) => response.json())
		 .then((response)=>{
            console.log('response', response);
			 if(response == "ok"){
             AsyncStorage.setItem('userToken', email);
                navigation.navigate('TabNav');
				 // redirect to profile page
         //this.setState({ loading: false });
         // AsyncStorage.setItem('user',emailerrormessage);  
		//		 this.props.navigation.navigate("Home");
			 }else{
				 alert("Wrong Login Details");
			 }
		 })
		 .catch((error)=>{
		 console.error(error);
		 });
      }
    }  


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

            }}> <Spinner
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
