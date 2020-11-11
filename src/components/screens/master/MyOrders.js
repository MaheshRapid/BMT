// Mahesh

import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Alert,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import moment from 'moment';
import {useSelector, useDispatch} from 'react-redux';
import {rsacode} from '../../redux/selector/appinfoselector';
import {involist} from '../../redux/selector/invoselection';
import {user_id} from '../../redux/selector/userselector';
import { AppConstants } from '../../../constants/appconstants';
import {get_invo, get_invo_detail} from '../../redux/action/invaction';
import {return_invo_detail} from '../../redux/action/invaction';
export default function MyOrders({navigation}) {
  const dispatch = useDispatch();
  const grs_code = useSelector(rsacode);
  const inlist = useSelector(involist);
  const ccode = useSelector(user_id);
  
  useEffect(() => {
    function invoget() {
      dispatch(
        get_invo({
          grs_code,
          ccode
        }),
      );
    }
    invoget();
  }, []);

  const getinvdet = (invno, vcode) => {
    dispatch(
      get_invo_detail({
        grs_code,
        vcode,
        invno,
      }),
    );
    console.log("request ",grs_code,vcode,invno)
    setTimeout(() => {
     ``
      navigation.navigate('invdetail');
    }, 1000);
  };
  console.log("inv list>>>>>>>>>>>>>>>>>>??????????",inlist)

  const invreturn = (grs_code,invno) => {

    dispatch(
      return_invo_detail({
           grs_code:grs_code,
           invno:invno,
           return_date:moment().format(),
         }),
       );
     
      setTimeout(() => {
        Alert.alert(
          "Message",
          "Your Order is Canceled",
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
      navigation.navigate('MyOrders');
      }, 1000);
    

}
  return (
    <View style={{margin: 20}}>
      <View style={{flexDirection: 'row', marginTop: 40}}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={AppConstants.Back} />
        </TouchableOpacity>
        <Text style={styles.heading}>Track Orders</Text>
      </View>

      <ScrollView contentContainerStyle={{flexGrow: 1, paddingBottom: 120}}>
        {inlist.map((inv, index) => (
          <View style={styles.pv4} key={index}>
            <View style={styles.date}>
        
            </View>
            {inv.inv_cancel==""? (
            <TouchableOpacity
              onPress={() => {
                getinvdet(inv.invno, inv.vcode);
              }}>
              <View style={styles.card}>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <View style={{margin: 20}}>
                      <Text style={{fontSize:16,fontWeight:'900'}}>INV_NO:{inv.invno}</Text>
                      <Text style={{color: '#000', marginTop: 10,fontSize:16,fontWeight:'900'}}>
                          INV DATE: {inv.invdate}
                      </Text>
                      <Text style={{color: '#000', marginTop: 10,fontSize:16,fontWeight:'900'}}>
                        Gross Amt {inv.grossamt}
                      </Text>
                      <Text style={{color: '#000', marginTop: 10,fontSize:16,fontWeight:'900'}}>
                        Discount Amt {inv.discamt}
                      </Text>
                      <Text style={{ marginTop: 10}}>LABOUR: {inv.labour}</Text>
                      <Text style={{ marginTop: 10}}>Total Amt: {inv.tot_amt}</Text>
                       {inv.dmobileno==""? (
                         <TouchableOpacity 
                         onPress={() => invreturn(inv.grs_code,inv.invno)}
                                style={{
                                  height: 30,
                                  width: 80,
                                  backgroundColor: 'green',
                                  borderRadius: 5,
                                  top: 10,
                                }}>
                                <Text style={styles.status_text} >Cancel</Text>
                              </TouchableOpacity>
                       ):(
                         <>
                         </>
                       )}
                       {inv.dmobileno!==""? (
                         <TouchableOpacity 
                         onPress={() => invreturn(inv.grs_code,inv.invno)}
                                style={{
                                  height: 30,
                                  width: 80,
                                  backgroundColor: 'green',
                                  borderRadius: 5,
                                  top: 10,
                                }}>
                                <Text style={styles.status_text} >Dispatched</Text>
                              </TouchableOpacity>
                       ):(
                         <>
                         </>
                       )}
                       
                      

                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
             ):(
                <View>
             
              <View style={styles.card}>
                <View style={{flexDirection: 'row'}}>
                  <View>
                    <View style={{margin: 20}}>
                      <Text style={{fontSize:16,fontWeight:'900'}}>INV_NO:{inv.invno}</Text>
                      <Text style={{color: '#000', marginTop: 10,fontSize:16,fontWeight:'900'}}>
                          INV DATE: {inv.invdate}
                      </Text>
                      <Text style={{color: '#000', marginTop: 10,fontSize:16,fontWeight:'900'}}>
                        Gross Amt {inv.grossamt}
                      </Text>
                      <Text style={{color: '#000', marginTop: 10,fontSize:16,fontWeight:'900'}}>
                        Discount Amt {inv.discamt}
                      </Text>
                      <Text style={{ marginTop: 10}}>LABOUR: {inv.labour}</Text>
                      <Text style={{ marginTop: 10}}>Total Amt: {inv.tot_amt}</Text>
                       
                         <View
                         onPress={() => invreturn(inv.grs_code,inv.invno)}
                                style={{
                                  height: 30,
                                  width: 80,
                                  backgroundColor: 'red',
                                  borderRadius: 5,
                                  top: 10,
                                }}>
                                <Text style={styles.status_text} >Cancelled</Text>
                              </View>
                      
                      

                    </View>
                  </View>
                </View>
              </View>
            </View>
              )}
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
    marginLeft: 110,
  },
  date: {
    marginTop: 30,
  },
  status_text: {
    textAlign: 'center',
    top: 5,
    color: '#FFFFFF',
  },
  card: {
    height: hp('35%'),
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
