// Mahesh

import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView, PickerIOS } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {size_add_action} from '../../redux/action/sizeaction';
import {size_fetch_action} from '../../redux/action/sizeaction';
import {useSelector, useDispatch} from 'react-redux';
import {Picker} from 'native-base';
import {catelist} from '../../redux/selector/cateselector';

import {
  rsacode
} from '../../redux/selector/appinfoselector';

export default function CreateSize() {
  const dispatch = useDispatch();
  const [catid, setcatid] = useState("");
  const [desc, setdesc] = useState("");
  const [stock, setstock] = useState("");
  const code = useSelector(rsacode);
  const clist = useSelector(catelist);

  console.log("stock",stock)
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
 
    if(desc==""){
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
       size_add_action({
           stock,
           code,
           desc
         }),
       );
       dispatch(
        size_fetch_action({
          code,
        }),
      );
      
    }

}



  return (

    <View style={{ backgroundColor: 'lightgrey' }}>

      <View style={{ marginTop: 20}}>
        <Text style={styles.heading}>Size
            </Text>
      </View>


      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ height: 1100 }}>

          <View style={{ margin: 30 }}>
            <Text style={styles.head_text}>Cat_Id
            </Text>
            <View style={styles.placeholder_view}>
             <Picker
              mode="dropdown"
              style={{ width: 120 }}
              style={styles.placeholder_text}
              selectedValue={stock}
              onValueChange={value => setstock(value)}
            >
 {clist.map((cat, index) => (
               
          <Picker.Item key={index+cat.cat_id} label={cat.cat_description} value={cat.cat_id} />
    ))}
 
            </Picker> 
             
            </View>
          </View>
          <View style={{ margin: 30, marginTop: 5 }}>
            <Text style={styles.head_text}>Size_Description
            </Text>
            <View style={styles.placeholder_view}>
              <TextInput
              onChangeText={(value) => setdesc(value)}
              style={styles.placeholder_text} placeholder="Enter your Description" />
            </View>
          </View>

        </View>
      </ScrollView>



      <View style={styles.b_view}>
      <View style={{paddingLeft:30, top:10}}>
          <TouchableOpacity>
            <Text style={styles.button}>
              Clear
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{marginLeft:30, top:10}}>
          <TouchableOpacity
           onPress={()=>{onsubmitapp()}}
          >
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
  b_view:{
    marginTop:hp('90%'),
     position: 'absolute',
      flexDirection: 'row', 
      backgroundColor:'lightgray', 
      width:500,
       height:100
  },
  head_text:{
    color: '#332443', 
    fontSize: hp('3%'),
    fontWeight: 'bold' 
  },
  placeholder_text:{
    marginLeft: 100, 
    fontWeight: 'bold', 
    color: 'red' 
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
  heading:{
    color: 'green', 
    fontSize: 40,
     fontWeight: 'bold', 
     textAlign: 'center'
  }
});