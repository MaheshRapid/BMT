/* 
Suchith Ponnuru 
react native developer
 */
import React, {useState} from 'react';
import {View, StyleSheet, Alert,TextInput} from 'react-native';
import {
  Title,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  Left,
  Right,
  Container,
} from 'native-base';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import moment from 'moment';
import {
  responsiveHorizontalSize,
  responsiveVerticalSize,
  responsiveFontSize,
  widthPercentageToDP,
  heightPercentageToDP,
} from '../../../assests/styles/stylesheet/responsiveSize';
import { flexVariable } from '../../../assests/styles/stylesheet/flexVariable';
import { fontFamily } from '../../../assests/styles/stylesheet/fonts';
import colors from '../../../assests/styles/stylesheet/colors';

import CustomButton from '../../CustomComponents/Button';
import CustomBack from '../../CustomComponents/Back';
import CheckoutCard from '../../CustomComponents/CheckoutCard';
import CustomAddress from '../../CustomComponents/Address';
import {
  cart_list,
  cart_length,
  cart_tqty,
  cart_total,
  bags_total,
  disc_total,
  cart_tax
} from '../../redux/selector/cartselector';

import {
  rsacode,
  app_discount,
  app_sgst,
  app_cgst,
  app_igst,
  tqty,
} from '../../redux/selector/appinfoselector';

import {final_cart_submit} from '../../redux/action/cartaction'

import {user_id} from '../../redux/selector/userselector'

import {submitdone} from '../../redux/selector/invoselection';
import {submit_inv} from '../../redux/action/invaction';
import {qtycart,bagcart} from '../../redux/action/cartaction';
import {useSelector, useDispatch} from 'react-redux';
import {get_invo} from '../../redux/action/invaction';

const Checkout = ({navigation}) => {
  const dispatch = useDispatch();
  const cartliststate = useSelector(cart_list);
  const total = useSelector(cart_total);
  const btotal = useSelector(bags_total);
  const dtotal = useSelector(disc_total);
  const cartlen = useSelector(cart_length);
  const tqtyrange = useSelector(tqty);
  const submitsucess = useSelector(submitdone);
  const tax = useSelector(cart_tax);

  const ccode = useSelector(user_id);


 console.log('--urt-------', ccode);
 console.log('----dtotal----------------------------------------', dtotal);

  // ---------------------Discount------------------
  const discount = useSelector(app_discount);
  const sgst = useSelector(app_sgst);
  const cgst = useSelector(app_cgst);

  const igst = useSelector(app_igst);
  const c_qty = useSelector(cart_tqty);

  // ---------------------Discount------------------

  const code = useSelector(rsacode);
  const [rand, setrand] = useState(Math.round(Math.random() * 10));
  const [list, setlist] = useState([]);


  const [discount_cart, setdiscount_cart] = useState(0);
  // const [cart_bag, setcart_bag] = useState(1);

  // const [cart_bags, setcart_bags] = useState();

const cart_bag=()=>{
  let c= 0
  for (let i = 0; i < cartlen; i++) {
    c+=c_qty[i].bag


  }
  return c;
}

  const invd = () => {
    for (let i = 0; i < cartlen; i++) {
      console.log('cart', i);
      list.push({
        grs_code: code,
        invo: rand,
        vcode: '0001',
        pid: cartliststate[i].pid,
        tdate: moment().format(),
        catid: cartliststate[i].catid,
        qty: c_qty[i].qty,
        amount: cartliststate[i].mrp*c_qty[i].qty,
        bags: c_qty[i].bag,
        rate: cartliststate[i].mrp,
        p_return: 0,
        return_date: 0,
        discount: (cartliststate[i].mrp-cartliststate[i].sprice)*c_qty[i].qty,
        taxableval: parseInt(cartliststate[i].CGST)+parseInt(cartliststate[i].IGST)+parseInt(cartliststate[i].SGST),
        cgstrate: parseInt(cartliststate[i].CGST),
        cgstamt: (parseInt(cartliststate[i].CGST)/100)*(cartliststate[i].mrp*c_qty[i].qty),
        sgstrate: parseInt(cartliststate[i].SGST),
        sgstamt: (parseInt(cartliststate[i].SGST)/100)*(cartliststate[i].mrp*c_qty[i].qty),
        igstrate: parseInt(cartliststate[i].IGST),
        igstamt: (parseInt(cartliststate[i].IGST)/100)*(cartliststate[i].mrp*c_qty[i].qty),
      });
    }
  };

  function test() {
    console.log("test",submitsucess);
    setlist([]);
    dispatch(final_cart_submit());
    dispatch(
      get_invo({
        code,
        ccode
      }),
    );
    navigation.navigate('MyOrders');

    // if(submitsucess){
    //   setlist([]);
    //   dispatch(final_cart_submit());
    //   navigation.navigate('Home');

    // }
    // else{
    //   Alert.alert(
    //     'Error',
    //     'Error while submiting ',
    //     [
    //       {
    //         text: 'Cancel',
    //         onPress: () => console.log('Cancel Pressed'),
    //         style: 'cancel',
    //       },
    //       {text: 'OK', onPress: () => console.log('OK Pressed')},
    //     ],
    //     {cancelable: false},
    //   );

    // }

    

   
  }


  const invconfirm = () => {
    let tot_amtt = total-dtotal;
   
    console.log(tqtyrange, tot_amtt)
    if (tqtyrange <= tot_amtt) {
      invd();
      const result = {
        grs_code: code,
        vcode: '0001',
        invno: rand,
        invdate: moment().format(),
        ccode: ccode,
        grossamt: total,
        discamt:dtotal,
        taxable_amt:total-discount_cart,
        cgst:tax,
        sgst:tax,
        igst:tax,
        // transportation: '100',
        // labour: '0',
        // misc: '0',
        tot_amt: total-dtotal,
        delivery_time: moment().add(2, 'days').format("MM-DD-YYYY"),
        delivery_date: moment().add(2, 'days').format("hh:mm:ss"),
        inv_cancel: '0',
        inv_return: '0',
        payment_mode: '0',
        return_date: '0',
        time_stamp: moment().format("MM-Do-YY"),
        invoice_details: list,
      };

      dispatch(submit_inv(result));
      console.log("-----final-----",result)

      setTimeout(() => {
        test();
      }, 500);


    } else {
      Alert.alert(
        'Error',
        'Minimum Total Amount Should Be' + tqtyrange,
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
    }
  };

  const rangecheck = (pid, m, d, range) => {
    dispatch(
      qtycart({
        m,
        d,
        pid,
        range,
      }),
    );
  };

  const bagcheck = (pid,bag) => {
    dispatch(
      bagcart({
        bag,
        pid,
      }),
    );
  };

  return (
    <Container style={{alignItems: 'center', justifyContent: 'center'}}>
      <Content style={styles.content}>
        <View>
          {/*     CUSTOM BACK ./customcomponents/Back */}
          <CustomBack />
          <View style={{height: hp(2)}} />
          <Text style={styles.title}>Checkout</Text>
          {/*     CUSTOM CARD  ./customcomponents/CheckoutCard*/}
          {cartliststate.map((item, index) => (
            <>
              <CheckoutCard value={item} rangefun={rangecheck} bagfun={bagcheck} />
              <View style={{height: hp(3)}} />
            </>
          ))}
          {/*     CUSTOM ADDRESS  ./customcomponents/Address*/}
          {/* <CustomAddress /> */}
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              borderBottomColor: '#D8D8D8',
              borderBottomWidth: 0.3,
            }}
          />
          {/* CART INVOICE  */}
          <Card transparent>
            
          {/* <CardItem>
              <Left>
                <Body>
                  <Text style={styles.lefttext}>Bags</Text>
                </Body>
              </Left>
              <Right>
            <Text> {btotal} </Text>
        
              </Right>
            </CardItem> */}

            <CardItem>
              <Left>
                <Body>
                  <Text style={styles.lefttext}>Subtotal</Text>
                </Body>
              </Left>
              <Right>
                <Text>Rs {total}</Text>
              </Right>
            </CardItem>
            {discount == 'Y' ? (
              <CardItem>
                <Left>
                  <Body>
                    <Text style={styles.lefttext}>Discount</Text>
                  </Body>
                </Left>
                <Right>
                <Text>Rs {dtotal}</Text>
              </Right>
              </CardItem>

              
            ) : (
              <></>
            )}
             {/* <CardItem>
                <Left>
                  <Body>
                    <Text style={styles.lefttext}>Taxable Amount</Text>
                  </Body>
                </Left>
                <Right>
                  <Text>{total-discount_cart }</Text>
                </Right>
              </CardItem> */}


            {/* {sgst == 'Y' || igst == 'Y' || cgst == 'Y' ? (
              <CardItem>
                <Left>
                  <Body>
                    <Text style={styles.lefttext}>
                      Tax({sgst == 'Y' ? 'SGST' : ''}
                      {cgst == 'Y' ? ' CGST' : ''}
                      {igst == 'Y' ? 'IGST' : ''})
                    </Text>
                  </Body>
                </Left>
                <Right>
            <Text>{tax} </Text>
                </Right>
              </CardItem>
            ) : (
              <></>
            )} */}
            

           
            <View
              style={{
                borderBottomColor: '#D8D8D8',
                borderBottomWidth: 0.8,
              }}
            />
            <CardItem>
              <Left>
                <Body>
                  <Text>Total</Text>
                </Body>
              </Left>
              <Right>
                <Text>Rs {total - dtotal}</Text>
              </Right>
            </CardItem>
          </Card>

          {/* ------------------------------ */}
          <View style={{height: hp(3)}} />
          <View style={styles.bottom}>
            <CustomButton title="Confirm" navfun={invconfirm} />
            {/* <CustomButton title="Confirm" /> */}
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  content: {
    width: wp('90%'),
  },
  lefttext: {
    color: '#919191',
  },
  Textinput: {
    fontFamily: fontFamily.segoeuiRegular,
    fontSize: responsiveFontSize(17),
    borderBottomColor: colors.dimGrey,
    borderBottomWidth: 1.5,
    color: colors.black,
    paddingTop: 0
},

  title: {
    fontSize: 30,
    fontFamily: 'Segoe UI',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkoutcontainer: {
    width: wp('90%'),
  },
  bottom: {
    justifyContent: 'flex-end',
  },
});
