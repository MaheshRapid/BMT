// Mahesh 22/09/2020
// Installed 'react-native-dash' package
// sachin
import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Dash from 'react-native-dash';


export default function App6() {
    return (
        <View style={{ margin: 20 }}>
            <View style={{ flexDirection: 'row', marginTop: 40 }}>
                <TouchableOpacity  >
                    {/* <Image source={require('../../assests/images/arrowback.png')} style={{ marginTop: 8, tintColor: 'black' }} /> */}
                </TouchableOpacity>

                <Text style={styles.heading}>OD-42589-N
            </Text>

                <View>
                    {/* <Image source={require('../../assests/images/small_img.png')} style={{ marginLeft: 60, tintColor: 'green', borderRadius: 30, width: 44, height: 44 }} /> */}

                </View>
            </View>


            <View style={{ flexDirection: 'row' }}>
                <View style={styles.date}>
                    <Text style={{ color: '#929292' }}>20/20, 10:00 AM</Text>
                </View>

                <View style={styles.date3}>
                    {/* <Image source={require('../../assests/images/small_img.png')} style={{ marginLeft: 30, tintColor: 'green', borderRadius: 30, width: 20, height: 20 }} /> */}
                </View>

                <View style={styles.date4}>
                    <Dash style={{ height: 80, flexDirection: 'column' }} />
                </View>

                <View style={styles.date2}>
                    <Text style={{ fontWeight: 'bold' }}>Order Signed</Text>
                    <Text style={{ fontWeight: 'bold' }}>Lagos State,Nigeria</Text>
                </View>
            </View>


            <View style={{ flexDirection: 'row', bottom:60}}>
                <View style={styles.date}>
                    <Text style={{ color: '#929292' }}>19/20, 01:00 PM</Text>
                </View>
                <View style={styles.date3}>
                    {/* <Image source={require('../../assests/images/small_img.png')} style={{ marginLeft: 30, tintColor: 'green', borderRadius: 30, width: 20, height: 20 }} /> */}
                </View>
                <View style={styles.date4}>
                    <Dash style={{ height: 80, flexDirection: 'column' }} />
                </View>

                <View style={styles.date2}>
                    <Text style={{ fontWeight: 'bold' }}>Order Processed</Text>
                    <Text style={{ fontWeight: 'bold' }}>Lagos State,Nigeria</Text>
                </View>

            </View>


            <View style={{ flexDirection: 'row', bottom:120 }}>
                <View style={styles.date}>
                    <Text style={{ color: '#929292' }}>18/20, 08:00 AM</Text>
                </View>
                <View style={styles.date3}>
                    {/* <Image source={require('../../assests/images/small_img.png')} style={{ marginLeft: 30, tintColor: 'green', borderRadius: 30, width: 20, height: 20 }} /> */}
                </View>
                <View style={styles.date4}>
                    <Dash style={{ height: 80, flexDirection: 'column' }} />
                </View>


                <View style={styles.date2}>
                    <Text style={{ fontWeight: 'bold' }}>Shipped</Text>
                    <Text style={{ fontWeight: 'bold' }}>Lagos State,Nigeria</Text>
                </View>

            </View>

            <View style={{ flexDirection: 'row', bottom:180 }}>
                <View style={styles.date}>
                </View>
                <View style={styles.date3}>
                    {/* <Image source={require('../../assests/images/small_img.png')} style={{ marginLeft: 30, tintColor: '#DDDDDD', borderRadius: 30, width: 20, height: 20 }} /> */}
                </View>
                <View style={styles.date4}>
                    <Dash style={{ height: 80, flexDirection: 'column' }} />
                </View>

                <View style={styles.date2}>
                    <Text style={{ fontWeight: 'bold' }}>Out For Delivery</Text>
                    <Text style={{ fontWeight: 'bold' }}>Lagos State,Nigeria</Text>
                </View>

            </View>


            <View style={{ flexDirection: 'row', bottom:250}}>
                <View style={styles.date}>
                </View>
                <View style={styles.date3}>
                    {/* <Image source={require('../../assests/images/small_img.png')} style={{ marginLeft: 30, tintColor: '#DDDDDD', borderRadius: 30, width: 20, height: 20 }} /> */}
                </View>
              

                <View style={styles.date2}>
                    <Text style={{ fontWeight: 'bold' }}>Deliverd</Text>
                    <Text style={{ fontWeight: 'bold' }}>Lagos State,Nigeria</Text>
                </View>

            </View>






        </View>
    );
}

const styles = StyleSheet.create({

    heading: {
        color: '#000000',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 110,
        top: ('2%')

    },
    date: {
        marginTop: 50,
        width: ('20%'),

    },
    date2: {
        marginTop: 50,
        width: ('40%'),
        marginLeft: ('20%'),

    }
    ,
    date3: {
        marginTop: 60,
        width: ('10%'),

    },
    date4: {
        marginTop: 80,
        marginLeft: 4

    }
});
