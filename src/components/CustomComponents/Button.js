/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet,TouchableOpacity} from 'react-native';
import {Button, Text} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CustomButton = (props) => {
  return (
    <TouchableOpacity onPress={()=>{props.navfun()}}>
    <View style={styles.buttoncontainer}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#7990DD', '#374ABE']}
        style={styles.linearGradient}>
        <Text style={styles.buttonText}> {props.title} </Text>
      </LinearGradient>
    </View>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  buttoncontainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  linearGradient: {
    height: hp('7'),
    width: wp('85'),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
  },
  button: {},
  buttonText: {
    fontSize: 18,
    fontFamily: 'Segoe UI',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
