/* eslint-disable prettier/prettier */
import React, {Component, useState} from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Card, CardItem, Left, Body, Right, Text, Icon} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import NumericInput from 'react-native-numeric-input';
import {cart_list, cart_length,cart_tqty,cart_total,cateqty} from '../redux/selector/cartselector';

import {useSelector, useDispatch} from 'react-redux';
import {cancelcart} from '../redux/action/cartaction'




const CheckoutCard = (props) => {
  const val = useSelector(cart_tqty);
  const objIndex = val.findIndex(
    (obj) => obj.productid == props.value.pid,
  );
  const [ran,setran]=useState(val[objIndex].qty)
  const [bagsss,setbagsss]=useState(val[objIndex].bag)
   console.log('...', ran);
  // const [ran, setran] = useState(1)
  const dispatch = useDispatch();

  

  const handlecancelcart=(product_id)=>{
    dispatch(
      cancelcart({
        product_id,
      }),
    );


  }


  return (
    <Card style={styles.card}>
      <CardItem>
        <Left>
          <View>
            <Image
              source={{uri: props.value.product_img}}
              style={{height: 150, width: 150}}
            />
          </View>
          <View style={{width: wp(3)}} />
        </Left>
        <Right>
          {/* <TouchableOpacity style={{alignSelf: 'flex-end', marginRight: 3}} onPress={()=>{handlecancelcart(props.value.pid)}}>
            <Text style={{color: '#979797', fontSize: 12}}>X</Text>
          </TouchableOpacity> */}
          <Body>
            <View style={{width: wp(40)}}>
              <Text style={styles.itemtitle}>{props.value.productname}</Text>
              <Text style={styles.brandname}>{props.value.productname}</Text>
              <Text style={styles.money}>Rs {props.value.mrp}</Text>
              <Text style={styles.money}>Discount {props.value.mrp-props.value.sprice}</Text>
              <Text style={styles.money}>Qty</Text>
              <NumericInput
                rounded
                rightButtonBackgroundColor="#F6F6F6"
                value={ran}
                borderColor="transparent"
                leftButtonBackgroundColor="#F6F6F6"
                onChange={(value) => {setran(value);props.rangefun(props.value.pid,props.value.mrp,props.value.sprice,value)}}
                totalWidth={wp(25)}
                totalHeight={50}
                containerStyle={{backgroundColor: '#F6F6F6'}}
              />
               {/* <Text style={styles.money}>Bags</Text>
              <NumericInput
                rounded
                rightButtonBackgroundColor="#F6F6F6"
                value={bagsss}
                borderColor="transparent"
                leftButtonBackgroundColor="#F6F6F6"
                onChange={(value) => {setbagsss(value);props.bagfun(props.value.pid,value)}}
                totalWidth={wp(25)}
                totalHeight={50}
                containerStyle={{backgroundColor: '#F6F6F6'}}
              /> */}
            </View>
          </Body>
        </Right>
      </CardItem>
    </Card>
  );
};

export default CheckoutCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    elevation: 2,
    borderColor: 'white',
    borderWidth: 0,
  },
  itemtitle: {
    fontSize: 20,
    height: hp(3),
  },
  brandname: {
    fontSize: 12,
    color: '#919191',
    height: hp(3),
  },
  money: {
    fontSize: 16,
    color: '#374ABE',
    height: hp(3),
  },
});
