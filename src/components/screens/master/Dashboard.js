// Mahesh

import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useSelector, useDispatch} from 'react-redux';
import {rsacode} from '../../redux/selector/appinfoselector';
import {involist} from '../../redux/selector/invoselection';
import {get_invo, get_invo_detail} from '../../redux/action/invaction';
import DatePicker from 'react-native-datepicker';

export default function Dashboard({navigation}) {
  const dispatch = useDispatch();
  const grs_code = useSelector(rsacode);
  const inlist = useSelector(involist);

  useEffect(() => {
    function invoget() {
      dispatch(
        get_invo({
          grs_code,
        }),
      );
    }
    invoget();
  }, []);

  const getinvdet = (invcode,vcode) => {
    dispatch(
      get_invo_detail({
        grs_code,
        vcode,
        invcode,
      }),
    );
    setTimeout(() => {
      navigation.navigate('invdetail');
    }, 1000);
  };

  return (
    <View style={{margin: 20}}>
      <View style={{flexDirection: 'row', marginTop: 40}}>
        <TouchableOpacity>
          {/* <Image source={require('../../assests/images/arrowback.png')} style={{ marginTop: 8, tintColor: 'black' }} /> */}
        </TouchableOpacity>
        <Text style={styles.heading}>{" "}DashBoard</Text>
      </View>
      <View style={{flexDirection:'row', marginTop:50}}>
               <Text>From</Text>
            <View>
                <DatePicker
                    style={{ width: 140, }}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate="2016-05-01"
                    maxDate="2016-06-01"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4},
                    }}/>
            </View>
            <Text style={{marginLeft:10}}>To</Text>
            <View>
                <DatePicker
                    style={{ width: 140}}
                    mode="date"
                    placeholder="select date"
                    format="YYYY-MM-DD"
                    minDate="2016-05-01"
                    maxDate="2016-06-01"
                    customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                           },
                    }}/>
            </View>
            </View>

      <ScrollView contentContainerStyle={{flexGrow: 1, paddingBottom: 120}}>
        {inlist.map((inv, index) => (
          <View style={styles.pv4} key={index}>
            <View style={styles.date}>
              <Text>{inv.invdate}</Text>
            </View>
             <TouchableOpacity
              onPress={() => {
                getinvdet(inv.invno, inv.vcode);
              }}>
              <View style={styles.card}>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <View style={{margin: 20}}>
                      <Text>{inv.invno}</Text>
                      <Text style={{color: '#00C569', marginTop: 10}}>
                        Rs {inv.tot_amt}
                      </Text>
                      <Text>Paymentmode-{inv.payment_mode}</Text>
                      <View
                        style={{
                          height: 30,
                          width: 80,
                          backgroundColor: 'green',
                          borderRadius: 5,
                          top: 20,
                        }}>
                        <Text style={styles.status_text}>Sucess</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:"center",
    alignSelf:"center"
    // marginLeft: 110,
  },
  date: {
    marginTop: 50,
  },
  status_text: {
    textAlign: 'center',
    top: 5,
    color: '#FFFFFF',
  },
  card: {
    height: hp('20%'),
    width: wp('85%'),
    backgroundColor: 'white',
    borderRadius: 5,
    top: 20,
  },
  image: {
    marginLeft: 10,
    borderRadius: 5,
    height: hp('7.5%'),
    width: wp('15%'),
  },
  I_View: {
    flexDirection: 'row',
    paddingTop: 10,
  },
});
