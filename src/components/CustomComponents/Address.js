/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Card, CardItem, Left, Body, Right, Icon, Badge} from 'native-base';
// import Bluedot from "../../assets/js/Bluedot"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {ship_add, pin_code} from '../redux/selector/userselector';
import {useSelector, useDispatch} from 'react-redux';

const CustomAddress = () => {
  const ship = useSelector(ship_add);
  const pin = useSelector(pin_code);
  return (
    <Card transparent>
      <CardItem>
        <Left>
          <View style={{width: wp(65)}}>
          <Text>Address:</Text>
            <Text>{ship}</Text>
            {/* <Text>House no: 938 </Text>
          <Text>Road no: 9</Text> */}
            <Text>PinCode : {pin}</Text>
          </View>
        </Left>
        <Right>{/* <Bluedot/> */}</Right>
      </CardItem>
    </Card>
  );
};
export default CustomAddress;

const styles = StyleSheet.create({});
