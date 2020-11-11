/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import CustomButton from '../../CustomComponents/Button';
// import CustomBack from './customcomponents/Back';
// import SucessSvg from '../assets/js/Sucess';
const PaymentConfirm = ({navigation}) => {

  const cback=()=>{
    navigation.navigate('Home');
  }
  return (
    <View style={styles.containerMain}>
      <View>
        {/* <SucessSvg /> */}
        <View style={{height: hp(2)}} />
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{fontSize: 30, color: '#434343'}}>Confirmation</Text>
          <Text style={{color:"#656565",fontSize:14}}>You have successfully </Text>
          <Text style={{color:"#656565",fontSize:14}}>completed your payment procedure</Text>
        </View>
        <View style={{height: hp(6)}} />
      </View>
      <View style={styles.bottomView}>
        <CustomButton title="Back to Home" navfun={cback}/>
      </View>
    </View>
  );
};
export default PaymentConfirm;

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomView: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },
});
