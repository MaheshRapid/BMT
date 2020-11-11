/* ==================================
   NAME : ANOOP REDDY VANTERU
   
   ROLE : REACT NATIVE DEVELOPER 
   ==================================== */

///need to edit done for test////

import React, {memo, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {AppConstants} from '../../constants/appconstants';
import colors from '../../assests/styles/stylesheet/colors';
import {useSelector, useDispatch} from 'react-redux';
import {scolor, pcolor, appname} from '../redux/selector/appinfoselector';
import {productlist} from '../redux/selector/productselector';
import {productselect} from '../redux/action/productaction';

import {
  responsiveHorizontalSize,
  responsiveVerticalSize,
  responsiveFontSize,
  widthPercentageToDP,
  heightPercentageToDP,
} from '../../assests/styles/stylesheet/responsiveSize';
import {flexVariable} from '../../assests/styles/stylesheet/flexVariable';
import {fontFamily} from '../../assests/styles/stylesheet/fonts';


  
const { width, height } = Dimensions.get('screen');

const Category = ({navigation}) => {
  const dispatch = useDispatch();
  const primary_color = useSelector(pcolor);
  const secondary_color = useSelector(scolor);
  const plist = useSelector(productlist);

  // console.log("plist",plist)
  // const app_name = useSelector(appname);
  const handleproduct = (product) => {
    dispatch(
      productselect({
        product,
      }),
    );

    setTimeout(() => {
      navigation.navigate('productdetail');
    }, 500);
  };

  return (
      <SafeAreaView backgroundColor={colors.white}>
        <ScrollView>
          {/* <View style={[styles.header, {backgroundColor: primary_color}]}>
            <TouchableOpacity>
                        <Image source={AppConstants.Shape} />
                    </TouchableOpacity>
            <View style={[styles.search]}>
              <View style={[styles.pv_1]}>
                <TouchableOpacity>
                                <Image
                                    source={AppConstants.Search} />
                            </TouchableOpacity> 
              </View>
                <View style={[styles.pv_1]}>
                  <TouchableOpacity>
                                  <Image style={{ height: 30, width: 14 }}
                                      source={AppConstants.Notify} />
                              </TouchableOpacity>
                </View>
            </View>
          </View> */}
          <View style={[styles.pv2, {backgroundColor: primary_color}]}>
            <Text style={[styles.title, {color: secondary_color}]}>
              Products
            </Text>
          </View>
          <View style={styles.pv3}>
            <FlatList
              data={plist}
              renderItem={({item}) => (
                <View style={styles.pv4}>
                  <TouchableOpacity
                    onPress={() => {
                      handleproduct(item);
                    }}>
                    <Image
                      source={{uri: item.product_img}}
                      style={[styles.img]}
                    />
                    <Text style={[styles.text]}>
                      Rs. {item.mrp}
                    </Text>
                    <Text style={[styles.text]}>
                      {item.productname}
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
              //Setting the number of column
              numColumns={2}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: responsiveVerticalSize(3),
    paddingLeft: responsiveHorizontalSize(3),
    flexDirection: flexVariable.row,
  },
  search: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    width: '170%',
  },
  pv_1: {
    alignItems: 'center',
    justifyContent: flexVariable.center,
    paddingLeft: responsiveHorizontalSize(3),
  },
  pv2: {
    alignItems: 'center',
    justifyContent: 'center',
    height:60
  },
  title: {
    fontFamily: fontFamily.segoeuiRegular,
    fontSize: responsiveFontSize(30),
  },
  pv3: {
    paddingTop: responsiveVerticalSize(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pv4: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: '50%',
    marginTop:'2%'
  },
  text: {
    textAlign:'center',
    fontSize: responsiveFontSize(17),
  },
  img: {
    height: 250, 
    width: width/2.2,
  borderRadius:10,
  resizeMode:'cover'
  },
});

export default memo(Category);
