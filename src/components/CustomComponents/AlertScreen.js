/* ==================================
   NAME : Suchith Ponnuru
   
   ROLE : REACT NATIVE DEVELOPER 

   Time:13-09-2020 8:24pm
   ==================================== */

import React, {useState, useEffect} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Modal,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';

const AlertScreen = (props) => {
  const [alert, setalert] = useState(props.screen);
  const [isvisible, setisvisible] = useState(true);
  const [msg, setmsg] = useState(props.message == '' ? '' : props.message);
  //   const color = "red"
  console.log(isvisible);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isvisible}
      onRequestClose={() => {
        props.fun();
      }}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={[styles.Alert_Main_View, {borderColor: alert.bocolor}]}>
          <Text style={styles.Alert_Title}>{alert.title}</Text>

          <View
            style={{width: '100%', height: 2, backgroundColor: alert.bocolor}}
          />

          <Text style={styles.Alert_Message}>
            {' '}
            {msg == '' ? alert.defaultmsg : msg}{' '}
          </Text>

          <View
            style={{width: '100%', height: 1, backgroundColor: alert.bocolor}}
          />

          <View style={{flexDirection: 'row', height: '30%'}}>
            <TouchableOpacity
              style={styles.buttonStyle}
              onPress={() => {
                props.fun();
              }}
              activeOpacity={0.7}>
              <Text style={styles.TextStyle}> OK </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Platform.OS == 'ios' ? 20 : 0,
  },

  Alert_Main_View: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: 200,
    width: '90%',
    borderWidth: 2,
    borderRadius: 7,
  },

  Alert_Title: {
    fontSize: 25,
    color: '#000',
    textAlign: 'center',
    padding: 10,
    height: '28%',
  },

  Alert_Message: {
    fontSize: 22,
    color: '#000',
    textAlign: 'center',
    padding: 10,
    height: '42%',
  },

  buttonStyle: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  TextStyle: {
    color: '#000',
    textAlign: 'center',
    fontSize: 22,
    marginTop: -5,
  },
});

export default AlertScreen;
