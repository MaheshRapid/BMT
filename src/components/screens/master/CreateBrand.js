// Mahesh

import React, { useState } from "react";
import { View,  StyleSheet, Text, TextInput, TouchableOpacity, Alert,Image, ScrollView } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {brand_add_action} from '../../redux/action/brandaction';
import {brand_fetch_action} from '../../redux/action/brandaction';
import {useSelector, useDispatch} from 'react-redux';
import {
  rsacode
} from '../../redux/selector/appinfoselector';

export default function CreateBrand() {
  const dispatch = useDispatch();
  const [name, setname] = useState(name);
  const code = useSelector(rsacode);
  // const stat = useSelector(statt);
  // const errorstatus = useSelector(branderror);
  // function nee(){
  //   if (stat) {
  //       navigation.navigate('Home')
  //   } else if (errorstatus) {
  //       Alert.alert(
  //           "Error",
  //           "Check ur inputs",
  //           [
  //             {
  //               text: "Cancel",
  //               onPress: () => console.log("Cancel Pressed"),
  //               style: "cancel"
  //             },
  //             { text: "OK", onPress: () => console.log("OK Pressed") }
  //           ],
  //           { cancelable: false }
  //         );
  //   } else {
  //   }
  // }

  const onsubmitapp=()=>{
  
    if(name==""){
    //  Alert.alert(
    //      "Error",
    //      "Enter all values",
    //      [
    //        {
    //          text: "Cancel",
    //          onPress: () => console.log("Cancel Pressed"),
    //          style: "cancel"
    //        },
    //        { text: "OK", onPress: () => console.log("OK Pressed") }
    //      ],
    //      { cancelable: false }
    //    );
    }
    else{
     // console.log(typeof(prcolor)+secolor+rsa_code)
     dispatch(
       brand_add_action({
           name,
           code
         }),
       );
       dispatch(
        brand_fetch_action({
          code,
        }),
      );
      //  setTimeout(() => {
      //    nee()
      //    }, 1000);
    }

}
  return (

    <View style={{ backgroundColor: 'lightgrey' }}>

      <View style={{ marginTop: 20}}>
        <Text style={styles.heading}>Brand</Text>
      </View>

      {/* <ScrollView contentContainerStyle={{ flexGrow: 1 }}> */}
        <View style={{ height: 1100 }}>
          <View style={{ margin: 30 }}>
            <Text style={styles.head_text}>Brand Name
            </Text>
            <View style={styles.placeholder_view}>
              <TextInput 
              onChangeText={(value) => setname(value)}
              style={styles.placeholder_text} placeholder="Enter Name here" />
            </View>
          </View>
        </View>
      {/* </ScrollView> */}



      <View style={styles.b_view}>
      <View style={{paddingLeft:30, top:10}}>
          <TouchableOpacity>
            <Text style={styles.button}>
              Clear
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{marginLeft:30, top:10}}>
          <TouchableOpacity  onPress={()=>{onsubmitapp()}}>
            <Text style={styles.button}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  button: {
    color: 'white',
    padding: 15,
    borderRadius: 5,
    paddingLeft: 50,
    // bottom: 20,
    borderColor: 'black',
    width: 150,
    backgroundColor: '#2575FC'
  },
  heading:{
    color: 'green', 
    fontSize: 40,
     fontWeight: 'bold', 
     textAlign: 'center'
  },
  head_text:{
    color: '#332443', 
    fontSize: hp('3%'),
    fontWeight: 'bold' 
  },
  placeholder_view:{
    // height: 50,
    //  width: 330,
    height: hp('7%'), // 70% of height device screen
    width: wp('85%'), // 80% of width device screen
      borderRadius: 5,
       backgroundColor: 'white', 
       top: 20 
  },
  placeholder_text:{
    marginLeft: 100, 
    fontWeight: 'bold', 
    color: 'red' 
  },
  b_view:{
    marginTop:hp('90%'),
     position: 'absolute',
      flexDirection: 'row', 
      backgroundColor:'lightgray', 
      width:500,
       height:100
  },


});