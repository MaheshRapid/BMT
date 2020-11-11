/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Icon} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { useRoute, useNavigation } from '@react-navigation/native';

// import Backarrow from '../../assets/js/backarrowsvg';
const CustomBack = () => {
  
  const navigation = useNavigation();
  
  return (
    <>
      <View>
        <View style={{height: hp(2)}} />

        <View>
          <View style={{alignItems: 'flex-start'}}>
            <TouchableOpacity onPress={() => navigation.goBack()} >
              {/* <Backarrow /> */}
              <Text>back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export default CustomBack;

const styles = StyleSheet.create({});
