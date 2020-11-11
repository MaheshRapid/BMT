// Mahesh

import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import moment from 'moment';
import {useSelector, useDispatch} from 'react-redux';
import {rsacode} from '../../redux/selector/appinfoselector';
import {invodetaillist} from '../../redux/selector/invoselection';
import {return_invo_details} from '../../redux/action/invaction';
import {user_id} from '../../redux/selector/userselector';
import {get_invo, get_invo_detail} from '../../redux/action/invaction';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';

export default function InvDetail({navigation}) {
  const dispatch = useDispatch();
  const grs_code = useSelector(rsacode);
  const indetlist = useSelector(invodetaillist);
  const ccode = useSelector(user_id);

   
  const invdreturn = (grs_code,invno,pid,vcode) => {

    dispatch(
      return_invo_details({
           grs_code:grs_code,
           invno:invno,
           pid:pid,
           return_date:moment().format(),
         }),
       );
       dispatch(
        get_invo({
          grs_code,
          ccode,
        }),
      );
      dispatch(
        get_invo_detail({
          grs_code,
          vcode,
          invno,
        }),
      );
     
      setTimeout(() => {
        Alert.alert(
          "Message",
          "Your product is returned",
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
// console.log("inv detail",indetlist)

  return (
    <View style={{margin: 20}}>
      <View style={{flexDirection: 'row', marginTop: 40}}>
        <Text style={styles.heading}>Invoice Detail</Text>
      </View>


      
      <ScrollView contentContainerStyle={{flexGrow: 1, paddingBottom: 120}}>
        {indetlist.map((invd, index) => (
          <View style={styles.pv4} key={index}>
            <View style={styles.card}>
              <Text style={{fontWeight: 'bold',fontSize: 18,margin:10}}>Product Name: {invd.productname}</Text>
  
                <View style={{flexDirection: 'row',marginLeft:10}}>
                  <Text style={{marginTop: 10}}>Quantity: </Text>
                  <Text style={{marginTop: 10}}>{invd.qty}</Text>
                </View>

                <View style={{flexDirection: 'row',marginLeft:10}}>
                  <Text style={{marginTop: 10}}>Rate: </Text>
                  <Text style={{marginTop: 10}}>{invd.rate}</Text>
                </View>

                <View style={{flexDirection: 'row',marginLeft:10}}>
                  <Text style={{marginTop: 10}}>Amount: </Text>
                  <Text style={{marginTop: 10}}>{invd.amount}</Text>
                </View>

                <View style={{flexDirection: 'row',marginLeft:10}}>
                  <Text style={{marginTop: 10}}>Discount: </Text>
                  <Text style={{marginTop: 10}}>{invd.discount}</Text>
                </View>
                 
                {invd.p_return=="N"? (
                         <TouchableOpacity 
                         onPress={() => invdreturn(invd.grs_code,invd.invno,invd.pid,invd.vcode)}
                                style={{
                                  height: 30,
                                  width: 80,
                                  backgroundColor: 'green',
                                  borderRadius: 5,
                                  top: 10,
                                }}>
                                <Text style={styles.status_text} >Return</Text>
                              </TouchableOpacity>
                       ):(
                        <View 
                               style={{
                                 height: 30,
                                 width: 80,
                                 backgroundColor: 'red',
                                 borderRadius: 5,
                                 top: 10,
                               }}>
                               <Text style={styles.status_text} >Returned</Text>
                             </View>
                       )}
              
            </View>
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
    textAlign: 'center',
    alignSelf: 'center',
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
    height: hp('28%'),
    width: wp('85%'),
    backgroundColor: 'white',
    borderRadius: 5,
    top: 20,
    marginBottom:5,
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
  }
});
