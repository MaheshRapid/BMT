/* ==================================
   NAME : ANOOP REDDY VANTERU
   
   ROLE : REACT NATIVE DEVELOPER 
   ==================================== */


import React, { useState } from 'react';
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
  Alert
} from "react-native";
import { AppConstants } from '../../../constants/appconstants';
import colors from '../../../assests/styles/stylesheet/colors';

import {
  responsiveHorizontalSize,
  responsiveVerticalSize,
  responsiveFontSize
} from '../../../assests/styles/stylesheet/responsiveSize';
import { useSelector, useDispatch } from 'react-redux';
import { flexVariable } from '../../../assests/styles/stylesheet/flexVariable';
import { fontFamily } from '../../../assests/styles/stylesheet/fonts';
import {
  rsacode
} from '../../redux/selector/appinfoselector';
import { emailid, name, mobile_number, user_id, ship_add, city, pin_code, statt } from "../../redux/selector/userselector"
import { AuthContext } from '../login/context';
import { users_update } from '../../redux/action/useraction';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const email_id = useSelector(emailid);
  const user_name = useSelector(name);
  const m_no = useSelector(mobile_number);
  const c_id = useSelector(user_id);
  const address = useSelector(ship_add);
  const city1 = useSelector(city);
  const pincode1 = useSelector(pin_code);
  const rsa_code = useSelector(rsacode);
  const stat = useSelector(statt);

  // const [name, setname] = useState(app_name);

  const [username, setname] = useState(user_name);
  const [email, setemail] = useState(email_id);
  const [mobile, setmobile] = useState(m_no);
  const [address1, setaddress] = useState(address);
  const [city2, setcity] = useState(city1);
  const [pincode, setpincode] = useState(pincode1);
  const { signOut } = React.useContext(AuthContext);


  console.log("pinooce==", pincode1)

  function nee() {
    if (stat) {
      navigation.navigate('Home');
    } else if (errorstatus) {
      Alert.alert(
        'Error',
        'Check ur inputs',
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
    } else {
    }
  }

  const onsubmitapp = () => {
    if (username == '' || email == '' || mobile == '' || address1 == '' || city2 == '' || pincode == '') {

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
    } else {

      fetch('http://api.b2bmart.org.in/check_pincode.php', {
        method: 'post',
        header: {
          'Accept': 'application/json',
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          pincode: pincode,
          grs_code: rsa_code
        })

      })
        .then((response) => response.json())
        .then((response) => {
          console.log('response pincode', response.content.status);
          if (response.content.status == "false") {
            Alert.alert(
              'Message',
              'we are not serving in your location will update you once we start your place',
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
            dispatch(
              users_update({
                rsa_code,
                c_id,
                username,
                email,
                mobile,
                address1,
                city2,
                pincode
              }),
            );
            setTimeout(() => {
              nee();
            }, 1000);
          } else {
            console.log("profile", rsa_code, c_id, username, email, mobile, address1, city2, pincode1)
            dispatch(
              users_update({
                rsa_code,
                c_id,
                username,
                email,
                mobile,
                address1,
                city2,
                pincode
              }),
            );
            setTimeout(() => {
              nee();
            }, 1000);
          }
        })
        .catch((error) => {
          console.error(error);
        });

    }
  };


  console.log("profile", email_id, user_name, m_no, c_id, address1, city2)
  return (

    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <SafeAreaView backgroundColor={colors.white}>
        <ScrollView >
          <View style={[styles.header]}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={AppConstants.Back} />
            </TouchableOpacity>
            {/* <View  style={[styles.pv_1]}>
                                <TouchableOpacity >
                            <Image source={AppConstants.Notification}  style={{ height: 30, width:14 }} />
                            </TouchableOpacity>
                        </View> */}

          </View>
          <View style={[styles.pv2]}>
            <Text style={[styles.title]}>
              Profile
            </Text>
          </View>
          <View style={[styles.textContainer]}>
            <Text style={[styles.label]}>
              Name
            </Text>
            <TextInput style={[styles.Textinput]}
              value={username}
              onChangeText={(value) => setname(value)}


            />
          </View>
          <View style={[styles.textContainer]}>
            <Text style={[styles.label]}>
              Address Lane
            </Text>
            <TextInput style={[styles.Textinput]}
              placeholder="Address"
              value={address1}
              onChangeText={(value) => setaddress(value)}

            />
          </View>
          <View style={[styles.textContainer]}>
            <Text style={[styles.label]}>
              City
            </Text>
            <TextInput style={[styles.Textinput]}
              placeholder="city"
              value={city2}
              onChangeText={(value) => setcity(value)}
            />
          </View>
          {/* <View style={[styles.textContainer]}>
                        <Text style={[styles.label]}>
                            Gender
                        </Text>
                        <TextInput style={[styles.Textinput]}
                            placeholder="Male"
                            keyboardType="default"
                            selectTextOnFocus={false}
                            editable={true}
                            placeholderTextColor={colors.black}
                        />
                    </View> */}
          <View style={[styles.textContainer]}>
            <Text style={[styles.label]}>
              Email
            </Text>
            <TextInput style={[styles.Textinput]}
              value={email}
              onChangeText={(value) => setemail(value)}
            />
          </View>
          <View style={[styles.textContainer]}>
            <Text style={[styles.label]}>
              Phone Number
            </Text>
            <TextInput style={[styles.Textinput]}
              value={mobile}
              onChangeText={(value) => setmobile(value)}
            />
          </View>

          <View style={[styles.textContainer]}>
            <Text style={[styles.label]}>
              Pincode
            </Text>
            <TextInput style={[styles.Textinput]}
              value={pincode}
              onChangeText={(value) => setpincode(value)}
            />
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingBottom: 20 }}>
            <TouchableOpacity
              style={{
                height: 50,
                width: '30%',
                backgroundColor: 'green',
                borderRadius: 5,
                top: 10,
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onPress={() => {
                onsubmitapp();
              }}>
              <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 50,
                width: '30%',
                backgroundColor: 'green',
                borderRadius: 5,
                top: 10,
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 10
              }}
              onPress={() => { signOut() }}>
              <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Log out</Text>
            </TouchableOpacity>

          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: responsiveVerticalSize(3),
    paddingLeft: responsiveHorizontalSize(3),
    flexDirection: flexVariable.row
  },
  pv_1: {
    alignItems: flexVariable.flexEnd,
    width: '90%',
    justifyContent: flexVariable.center,
    paddingLeft: responsiveHorizontalSize(2),

  },
  pv2: {
    paddingTop: responsiveVerticalSize(2),
    paddingLeft: responsiveHorizontalSize(3)
  },
  title: {
    fontFamily: fontFamily.segoeuiRegular,
    fontSize: responsiveFontSize(30),
    color: colors.black
  },
  textContainer: {
    padding: 10,
    width: '98%',
  },
  label: {
    color: colors.dimGrey,
    alignSelf: flexVariable.flexStart,
    fontFamily: fontFamily.segoeuiRegular,
    fontSize: responsiveFontSize(18),
  },
  Textinput: {
    fontFamily: fontFamily.segoeuiRegular,
    fontSize: responsiveFontSize(16),
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
    color: colors.black
  }
});

export default ProfileScreen;