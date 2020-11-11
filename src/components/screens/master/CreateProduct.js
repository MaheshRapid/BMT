// Mahesh

import React, { useState } from "react";
import { View, StyleSheet, Alert, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {catelist} from '../../redux/selector/cateselector';
import {sizelist} from '../../redux/selector/sizeselector';
import {brandlist} from '../../redux/selector/brandselector';
import {rsacode} from '../../redux/selector/appinfoselector';
import {product_add_action} from '../../redux/action/productaction';

import {useSelector, useDispatch} from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import {Picker} from 'native-base';

export default function CreateProduct() {
  const dispatch = useDispatch();
  const [category, setcate] = useState("");
  const [size, setsize] = useState("");
  const [brand, setbrand] = useState("");
  const clist = useSelector(catelist);
  const slist = useSelector(sizelist);
  const blist = useSelector(brandlist);
  const rsa_code = useSelector(rsacode);
  const [image, setimage] = useState('');

  const [pname, setname] = useState("");
  const [desc, setdesc] = useState("");
  const [mrp, setmrp] = useState("");
  const [price, setprice] = useState("");
  const [CGST, setCGST] = useState("");
  const [SGST, setSGST] = useState("");
  const [IGST, setIGST] = useState("");
  const [HSN, setHSN] = useState("");
  console.log("brandlist",blist)
  const handleChoosePhoto = () => {
    const options = {
      title: 'Banner',
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
        const source1111 = {uri: response.uri};
        const source = {
          uri: 'data:' + response.fileName + ';base64,' + response.data,
        };
        //  console.log(source)
        setimage(source);
      }
    });
  };
  const onsubmitapp=()=>{
  
    if(category==""){
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
      product_add_action({
           rsa_code,
           category,
           pname,
           desc,
           mrp,
           size,
           price,
           brand,
           image,
           CGST,
           SGST,
           IGST,
           HSN
         }),
       );
       

    }
  }
  return (

    <View style={{ backgroundColor: 'lightgrey' }}>

      <View style={{ marginTop: 20 }}>
        <Text style={styles.heading}>Product
            </Text>
      </View>


      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ height: 1100 }}>

          <View style={{ margin: 30, flexDirection:'row'}}>
            <Text style={styles.head_text}>Category
            </Text>
            <View style={{height: hp('6%'),width: wp('50%'), borderRadius: 5,backgroundColor: 'white',marginLeft:65}} >
             <Picker
              mode="dropdown"
              style={{ width: 120 }}
              style={styles.placeholder_text}
              selectedValue={category}
              onValueChange={value => setcate(value)}
            >
 {clist.map((cat, index) => (
               
          <Picker.Item key={index+cat.cat_id} label={cat.cat_description} value={cat.cat_id} />
    ))}
 
            </Picker> 
             
            </View>
          </View>

          <View style={{ margin: 30, marginTop: 5,flexDirection:'row'  }}>
            <Text style={styles.head_text}>Product Name
            </Text>
            <View style={{height: hp('6%'),width: wp('50%'), borderRadius: 5,backgroundColor: 'white',marginLeft:25}} >
              <TextInput 
              onChangeText={(value) => setname(value)}
              style={styles.placeholder_text} placeholder="Input" />
            </View>
          </View>

          <View style={{ margin: 30, marginTop: 5,flexDirection:'row'  }}>
            <Text style={styles.head_text}>Description
            </Text>
            <View style={{height: hp('6%'),width: wp('50%'), borderRadius: 5,backgroundColor: 'white',marginLeft:50}} >
              <TextInput 
              onChangeText={(value) => setdesc(value)}
              style={styles.placeholder_text} placeholder="Input" />
            </View>
          </View>

          <View style={{ margin: 30, marginTop: 5,flexDirection:'row' }}>
            <Text style={styles.head_text}>MRP
            </Text>
            <View style={{height: hp('6%'),width: wp('50%'), borderRadius: 5,backgroundColor: 'white',marginLeft:100}} >
              <TextInput 
              onChangeText={(value) => setmrp(value)}
              style={styles.placeholder_text} placeholder="Input" />
            </View>
          </View>

          <View style={{ margin: 30, marginTop: 5,flexDirection:'row' }}>
            <Text style={styles.head_text}>size
            </Text>
            <View style={{height: hp('6%'),width: wp('50%'), borderRadius: 5,backgroundColor: 'white',marginLeft:105}} >
             <Picker
              mode="dropdown"
              style={{ width: 120 }}
              style={styles.placeholder_text}
              selectedValue={size}
              onValueChange={value => setsize(value)}
            >
 {slist.map((size, index) => (
               
          <Picker.Item key={index+size.sizeid} label={size.sizedesc} value={size.sizeid} />
    ))}
 
            </Picker> 
             
            </View>
          </View>


          <View style={{ margin: 30, marginTop: 5,flexDirection:'row' }}>
            <Text style={styles.head_text}>Sprice
            </Text>
            <View style={{height: hp('6%'),width: wp('50%'), borderRadius: 5,backgroundColor: 'white',marginLeft:85}} >
              <TextInput 
              onChangeText={(value) => setprice(value)}
              style={styles.placeholder_text} placeholder="Input" />
            </View>
          </View>

          <View style={{ margin: 30, marginTop: 5,flexDirection:'row' }}>
            <Text style={styles.head_text}>Brand
            </Text>
            <View style={{height: hp('6%'),width: wp('50%'), borderRadius: 5,backgroundColor: 'white',marginLeft:90}} >
             <Picker
              mode="dropdown"
              style={{ width: 120 }}
              style={styles.placeholder_text}
              selectedValue={brand}
              onValueChange={value => setbrand(value)}
            >
 {blist.map((brand, index) => (
               
          <Picker.Item key={index+brand.brandid} label={brand.brand_name} value={brand.brandid} />
    ))}
 
            </Picker> 
             
            </View>
          </View>
          <View style={{ margin: 30, marginTop: 5,flexDirection:'row' }}>
            <Text style={styles.head_text}>CGST
            </Text>
            <View style={{height: hp('6%'),width: wp('50%'), borderRadius: 5,backgroundColor: 'white',marginLeft:90}} >
              <TextInput 
              onChangeText={(value) => setCGST(value)}
              style={styles.placeholder_text} placeholder="Input" />
            </View>
          </View>

          <View style={{ margin: 30, marginTop: 5,flexDirection:'row' }}>
            <Text style={styles.head_text}>SGST
            </Text>
            <View style={{height: hp('6%'),width: wp('50%'), borderRadius: 5,backgroundColor: 'white',marginLeft:90}} >
              <TextInput 
              onChangeText={(value) => setSGST(value)}
              style={styles.placeholder_text} placeholder="Input" />
            </View>
          </View>

          <View style={{ margin: 30, marginTop: 5,flexDirection:'row' }}>
            <Text style={styles.head_text}>IGST
            </Text>
            <View style={{height: hp('6%'),width: wp('50%'), borderRadius: 5,backgroundColor: 'white',marginLeft:95}} >
              <TextInput 
              onChangeText={(value) => setIGST(value)}
              style={styles.placeholder_text} placeholder="Input" />
            </View>
          </View>

          <View style={{ margin: 30, marginTop: 5,flexDirection:'row' }}>
            <Text style={styles.head_text}>HSN CODE
            </Text>
            <View style={{height: hp('6%'),width: wp('50%'), borderRadius: 5,backgroundColor: 'white',marginLeft:50}} >
              <TextInput 
              onChangeText={(value) => setHSN(value)}
              style={styles.placeholder_text} placeholder="Input" />
            </View>
          </View>

          {/* <View style={{ margin: 30, marginTop: 5,flexDirection:'row' }}>
            <Text style={styles.head_text}>Image
            </Text>
            <View style={{height: hp('6%'),width: wp('50%'), borderRadius: 5,backgroundColor: 'white',marginLeft:40}} >
              <TextInput style={styles.placeholder_text} placeholder="Input" />
            </View>
          </View> */}
          <View style={{marginTop: 0}}>
          <Text style={{fontSize: 20, marginTop:0}}>Image</Text>
          {image == '' ? (
            <>
            <Text>Please Upload Image </Text>
            </>
          ) : (
            <Image
              source={image}
              style={{width:'100%', height: 202, marginTop: 5}}
            />
          )}
        </View>
        <TouchableOpacity
          style={{
           // marginTop: 10,
            height: 45,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
            backgroundColor: '#508CF5',
          }}
          onPress={() => {
            handleChoosePhoto();
          }}> 
          <Text>{image==""?("Upload Image"):("Update Image")}</Text>
          </TouchableOpacity>
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
  b_view:{
    marginTop:hp('90%'),
     position: 'absolute',
      flexDirection: 'row', 
      backgroundColor:'lightgray', 
      width:'100%',
       height:'6%',
       alignItems:'center',
       justifyContent:'center'
  },
  head_text:{
    color: '#332443', 
    fontSize: hp('2.5%'),
    fontWeight: 'bold' 
  },
  placeholder_text:{
    marginLeft: 20, 
    fontWeight: 'bold', 
    fontSize: 20,
    color: 'red' 
  },
  placeholder_view:{
    // height: 50,
    //  width: 330,
    height: hp('6%'),
    width: wp('50%'), 
      borderRadius: 5,
       backgroundColor: 'white',
       marginLeft:60
  },
  heading:{
    color: 'green', 
    fontSize: 40,
     fontWeight: 'bold', 
     textAlign: 'center'
  }
});