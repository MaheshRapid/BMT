import React, {Component, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
  SafeAreaView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {scolor, pcolor, appname,rsacode} from '../redux/selector/appinfoselector';
import {productlist, productselect} from '../redux/selector/productselector';
import {addcart} from '../redux/action/cartaction';
import Icon from 'react-native-vector-icons/Ionicons';
import AlertScreen from '../CustomComponents/AlertScreen';
import {cartadded} from '../../constants/alertmsg'
import { app_info_action } from "../redux/action/appinfoaction"

const ProductDetails = ({navigation}) => {
  const dispatch = useDispatch();
  const primary_color = useSelector(pcolor);
  const secondary_color = useSelector(scolor);
  const app_name = useSelector(appname);
  const code = useSelector(rsacode);
  const pdetail = useSelector(productselect);
  const [visiblemodal, setvisiblemodal] = useState(false);
  const [alertscreen, setalertscreen] = useState('');
  const [alertmsg, setalertmsg] = useState('');

  const [buttonno, setbuttonno] = useState(1);
  const producttab = () => {
    switch (buttonno) {
      case 1:
        return (
          <View style={{marginTop: '2%'}}>
            <View style={{marginLeft: '3%'}}>
              <Text style={{color: '#515C6F', fontWeight: '800'}}>Types</Text>
            </View>
            <View style={{marginTop: '3%', marginLeft: '3%'}}>
              <Text style={{color: '#515C6F', fontWeight: '900'}}>
                Tataiscon |2swnao steel |Vizag steel |Jairaj steel |Radha tmt{' '}
              </Text>
            </View>
            <View style={{marginTop: '3%', marginLeft: '3%'}}>
              <Text
                style={{color: '#515C6F', fontWeight: 'bold', fontSize: 15}}>
                SELECT SIZE (US)
              </Text>
            </View>
            <View
              style={{marginTop: '3%', marginLeft: '3%', flexDirection: 'row'}}>
              <View style={{marginLeft: '2%'}}>
                <TouchableOpacity style={styles.sizeBtn}>
                  <Text
                    style={
                      ([styles.sizeText],
                      {color: secondary_color, fontWeight: 'bold'})
                    }>
                    {' '}
                    5mm{' '}
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={{marginLeft: '2%'}}>
                <TouchableOpacity style={styles.sizeBtn}>
                  <Text
                    style={
                      ([styles.sizeText],
                      {color: secondary_color, fontWeight: 'bold'})
                    }>
                    {' '}
                    10mm{' '}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{marginLeft: '2%'}}>
                <TouchableOpacity style={styles.sizeBtn}>
                  <Text
                    style={
                      ([styles.sizeText],
                      {color: secondary_color, fontWeight: 'bold'})
                    }>
                    {' '}
                    12mm{' '}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{marginLeft: '2%'}}>
                <TouchableOpacity style={styles.sizeBtn}>
                  <Text
                    style={
                      ([styles.sizeText],
                      {color: secondary_color, fontWeight: 'bold'})
                    }>
                    {' '}
                    16mm{' '}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{marginLeft: '2%'}}>
                <TouchableOpacity style={styles.sizeBtn}>
                  <Text
                    style={
                      ([styles.sizeText],
                      {color: secondary_color, fontWeight: 'bold'})
                    }>
                    {' '}
                    20mm{' '}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{marginLeft: '3%', marginTop: '3%'}}>
              <Text style={{color: '#515C6F', fontWeight: '800', fontSize: 17}}>
                Description
              </Text>
            </View>
            <View
              style={{marginLeft: '3%', marginRight: '1%', marginTop: '3%'}}>
              <Text style={{color: '#515C6F', fontSize: 15}}>
                {pdetail.description}
              </Text>
            </View>
          </View>
        );
      case 2:
        return (
          <View>
            <Text>details</Text>
          </View>
        );
      case 3:
        return (
          <View>
            <Text>Revies</Text>
          </View>
        );
    }
  };



  const handleaddcart = (product) => {
    dispatch(
      addcart({
        product,
      }),
    );
    dispatch(
      app_info_action({
        code,
      }),
    );
    // setalertmsg("");

    // navigation.navigate('Cart');
  };
  return (
    <View style={styles.container}>
      <ScrollView>
     
        <View style={{alignItems: 'center', marginHorizontal: 30}}>
          <View style={styles.L1}>
            {/*         <Image source={require('./assets/back.png')} size={2} color="#FF6969" />  */}
            <Text style={styles.name}> {pdetail.productname}</Text>
            {/*      <Image source={require('./assets/shopping-cart.png')} size={2} color="#727C8E" borderColor='#727C8E' /> */}
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={styles.price}> Rs {pdetail.mrp} </Text>
            <TouchableOpacity
              style={{
                height: 19,
                width: 42,
                alignItems: 'center',
                // backgroundColor: '#FF6969',
                borderRadius: 60,
                marginLeft: 4,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
                backgroundColor: secondary_color,
                borderRadius: 60,
              }}>
              <Icon name="ios-star" size={10} color="#FFFFFF" />
              <Text style={styles.ratingText}>4.9</Text>
            </TouchableOpacity>
          </View>
          {/* <Image
            style={styles.productImg}
            source={require('../../assests/images/radha.jpg')}
          />
          <Image
            source={require('../../assests/images/radha.jpg')}
            style={styles.productImg}
          /> */}
          <Image
            source={{uri: pdetail.product_img}}
            style={styles.productImg}
          />
        </View>

        <View style={styles.btnSize}>
          <TouchableOpacity
            onPress={() => {
              setbuttonno(1);
            }}
            style={styles.btnStyle}>
            <Text style={{fontSize: 15, color: '#FF6969'}}>Product</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            //   onPress={()=>{setbuttonno(2)}}
            style={styles.btnStyle}>
            <Text>Details</Text>
          </TouchableOpacity>
          <TouchableOpacity
            //   onPress={()=>{setbuttonno(3)}}
            style={styles.btnStyle}>
            <Text>Reviews</Text>
          </TouchableOpacity> */}
        </View>

        {/* ////////////////////// */}
        {/* {producttab()} */}
        {/* ///////////////////////// */}

        <View style={{marginLeft: '3%', marginTop: '3%'}}>
              <Text style={{color: '#515C6F', fontWeight: '800', fontSize: 17}}>
                Description
              </Text>
            </View>
            <View
              style={{marginLeft: '3%', marginRight: '1%', marginTop: '3%'}}>
              <Text style={{color: '#515C6F', fontSize: 15}}>
                {pdetail.description}
              </Text>
            </View>



        <View style={styles.separator}></View>
        <View style={styles.addToCardContainer}>
          {/* <TouchableOpacity style={styles.shareBtn}>
            <Text style={styles.shareBtnText}>SHARE THIS</Text>
          </TouchableOpacity> */}
          <TouchableOpacity
            style={{
              marginTop: 5,
              height: 45,
              width: 150,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 30,
              backgroundColor: primary_color,
            }}
            onPress={() => {
              handleaddcart(pdetail);
            }}>
            <Text style={styles.addToCardBtnText}> ADD TO CART </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  productImg: {
    marginTop: 20,
    width: 220,
    height: 202,
  },
  L1: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 15,
    color: '#515C6F',
  },
  rating: {
    height: 19,
    width: 42,
    alignItems: 'center',
    // backgroundColor: '#FF6969',
    borderRadius: 60,
    marginLeft: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  ratingText: {
    color: 'white',
  },
  price: {
    marginTop: 5,
    fontSize: 18,
    color: '#515C6F',
    fontWeight: 'bold',
  },
  btnSize: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
  btnStyle: {
    height: 40,
    width: 80,
    borderRadius: 40,
    borderColor: '#778899',
    borderWidth: 1,
    marginHorizontal: 3,
    backgroundColor: 'white',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    height: 2,
    backgroundColor: '#eeeeee',
    marginTop: 30,
    marginHorizontal: 20,
  },
  addToCardContainer: {
    justifyContent: 'space-between',
    marginHorizontal: 20,
    flexDirection: 'row',
    marginTop: 1,
  },
  shareBtn: {
    marginTop: 5,
    height: 45,
    width: 150,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#F5F6F8',
  },
  addToCardBtn: {
    marginTop: 5,
    height: 45,
    width: 150,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#667EEA',
  },
  shareBtnText: {
    color: '#727C8E',
    fontSize: 12,
    fontWeight: 'bold',
  },
  sizeText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  sizeBtn: {
    marginTop: 5,
    height: 45,
    width: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#F5F6F8',
  },
  addToCardBtnText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
