// Mahesh

import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {cate_add_action} from '../../redux/action/cataction';
import {cate_fetch_action} from '../../redux/action/cataction';
import ImagePicker from 'react-native-image-picker';
import {useSelector, useDispatch} from 'react-redux';
import {rsacode} from '../../redux/selector/appinfoselector';

export default function CreateCategory() {
  const dispatch = useDispatch();
  const [cat_desc, setname] = useState(cat_desc);
  const code = useSelector(rsacode);
  const [catimg, setcatimg] = useState("");
 

  const handleChoosePhoto = () => {
    const options = {
      title: 'category',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // const source1111 = {uri: response.uri};
        const source = {
          uri: 'data:' + response.fileName + ';base64,' + response.data,
        };
        //  console.log(source)
        setcatimg(source.uri);
      }
    });
  };

  const onsubmitapp=()=>{
  
    if(cat_desc==""){
     Alert.alert(
         "Error",
         "Enter all values",
         [
           {
             text: "Cancel",
             onPress: () => console.log("Cancel Pressed"),
             style: "cancel"
           },
           { text: "OK", onPress: () => console.log("OK Pressed") }
         ],
         { cancelable: false }
       );
    }
    else{
     // console.log(typeof(prcolor)+secolor+rsa_code)
     dispatch(
      cate_add_action({
           cat_desc,
           code,
           catimg
         }),
       );
       dispatch(
        cate_fetch_action({
          code,
        }),
      );
    }
  }
  return (
    <View style={{ backgroundColor: 'lightgrey', height: 1500 }}>

      <View style={{ marginTop: 20 }}>
        <Text style={styles.heading}>Category
          </Text>
      </View>


      <View style={{ margin: 30, marginTop: 100 }}>
            <Text style={styles.head_text}>Category Description
            </Text>
            <View style={styles.placeholder_view}>
              <TextInput
               onChangeText={(value) => setname(value)}
               style={styles.placeholder_text} placeholder="Enter detailed description" />
            </View>
          </View>


      <View style={{ flexDirection: 'row', top: 100, marginLeft: 30 }}>
          <View>
            <TouchableOpacity>
              <Text style={styles.button2}>
                Upload from Computer
          </Text>
            </TouchableOpacity>
          </View>

        <TouchableOpacity 
         onPress={()=>{handleChoosePhoto()}} >
          <Text style={styles.uploadtext}>
            Photo Upload
            </Text>
        </TouchableOpacity>
      </View>



      <View style={styles.b_view}>
        <View style={{ paddingLeft: 30, top: 10 }}>
          <TouchableOpacity>
            <Text style={styles.button}>
              Clear
          </Text>
          </TouchableOpacity>
        </View>

        <View style={{ marginLeft: 30, top: 10 }}>
          <TouchableOpacity>
            <Text 
             onPress={()=>{onsubmitapp()}}
            style={styles.button}>
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
  button2: {
    color: 'black',
    padding: 15,
    borderRadius: 5,
    textAlign:'center',
    width: 200,
    backgroundColor:'lightblue'
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
    marginLeft: 90, 
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
  },
  uploadtext:{
    fontWeight: 'bold',
     paddingLeft: 10,
      marginTop:10, 
      fontSize:20, 
      color:'blue'
  }
});














// import React from 'react'
// import { View, Text, Image, Button } from 'react-native'
// import ImagePicker from 'react-native-image-picker'
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// export default class App extends React.Component {
//   state = {
//     photo: null,
//   }

//   handleChoosePhoto = () => {
//     const options = {
//       noData: true,
//     }
//     ImagePicker.launchImageLibrary(options, response => {
//       if (response.uri) {
//         this.setState({ photo: response })
//       }
//     })
//   }

//   render() {
//     const { photo } = this.state
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         {photo && (
//           <Image
//             source={{ uri: photo.uri }}
//             style={{ width: 300, height: 300 }}
//           />
//         )}
//         <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
//       </View>
//     )
//   }
// }
