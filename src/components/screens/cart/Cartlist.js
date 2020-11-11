/* 
Suchith Ponnuru 
react native developer
 */
import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
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
import {useSelector, useDispatch} from 'react-redux';
import CustomButton from '../../CustomComponents/Button';
import CustomBack from '../../CustomComponents/Back';
import CheckoutCard from '../../CustomComponents/CheckoutCard';
import {
  cart_list,
  cart_length,
  cart_tqty,
  cart_total,
  disc_total,
} from '../../redux/selector/cartselector';
import {tqtyint} from '../../redux/selector/appinfoselector';
import {qtycart,bagcart} from '../../redux/action/cartaction';
const CartList = ({navigation}) => {
  const dispatch = useDispatch();
  const cartliststate = useSelector(cart_list);
  const tqtyrange = useSelector(tqtyint);
  const total = useSelector(cart_total);
  const dtotal = useSelector(disc_total);
  console.log('..............', total);
  console.log('.............. tqty', tqtyrange);
  console.log('----dtotal----cartlist------------------------------------', dtotal);
  const buynav = () => {
    console.log(tqtyrange,total)
    if (total >= tqtyrange) {
      navigation.navigate('checkout');
    } else {
      Alert.alert(
        'Error',
        'Minimum total should be' + tqtyrange,
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

  //  console.log(cartlist)
  return (
    <Container style={{alignItems: 'center', justifyContent: 'center'}}>
      <Content style={styles.content}>
        <View>
          {/*     CUSTOM BACK ./customcomponents/Back */}
          {/* <CustomBack /> */}
          <View style={{height: hp(3)}} />
          <Text style={styles.title}>Checkout</Text>
          {/*     CUSTOM CARD  ./customcomponents/CheckoutCard*/}
          {/* <CheckoutCard />
        <View style={{height: hp(3)}} />
        <CheckoutCard /> */}

          {total == 0 ? (
           <View style={{ flex: 1, padding: 16 }}>
           <Text 
           style={{ 
             fontSize: 25, 
             textAlign: 'center', 
             marginBottom: 16
             }}>
               {/* Cart is Empty! */}
               </Text>
         </View>
          ) : (
            cartliststate.map((item, index) => (
              <>
                <CheckoutCard value={item} rangefun={rangecheck} bagfun={bagcheck} />
                <View style={{height: hp(3)}} />
              </>
            ))
          )}

          {/*     CUSTOM ADDRESS  ./customcomponents/Address*/}
          <View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              borderBottomColor: '#D8D8D8',
              borderBottomWidth: 0.3,
            }}
          />
          {/* CART INVOICE  */}

          {/* ------------------------------ */}
          <View style={{height: hp(3)}} />
          <View style={styles.bottom}>
            {total == 0 ? (
             <></>
            ) : (
              <CustomButton title="Buy" navfun={buynav} />
            )}
          </View>
        </View>
      </Content>
    </Container>
  );
};

export default CartList;

const styles = StyleSheet.create({
  content: {
    width: wp('95%'),
  },
  lefttext: {
    color: '#919191',
  },
  title: {
    fontSize: 30,
    fontFamily: 'Segoe UI',
  },
  container: {
    width: wp('90%'),
    flex: 1,
    // flexDirection: 'column',
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
