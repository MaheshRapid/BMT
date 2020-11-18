
import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, Alert, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import DatePicker from 'react-native-datepicker';
import { citylist, statelist, quallist, explist, noticelist, subjectlist, gradelist, empcatlist } from '../../redux/selector/getallselector';
import ImagePicker from 'react-native-image-picker';
import { msgg } from '../../redux/selector/teacherselector';
import { teacher_add_action } from '../../redux/action/teacheraction';
import { useSelector, useDispatch } from 'react-redux';

const Screen31 = ({navigation}) => {
 
    return (
        <ScrollView
            style={{ flex: 1 }}
        >
            <View style={styles.container}>
                <View style={{ top: 42 }}>
                    <View>
                        {/* <Image style={{ alignSelf: 'center', width: 282, height: 80 }} source={require('../images/poster.png')} /> */}
                    </View>

                    {/* <View style={{ marginTop: 20 }}>
                        <Text style={{ fontSize: 25, color: '#02ABE5', textAlign: 'center' }}>
                            Teacher Profile
                        </Text>
                    </View> */}

                     <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: '#909090', fontSize: 15 }}>Previous Employment</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop:10}}>
                        <View>
                            <Text style={{ color: '#909090', fontSize: 12 }}>From</Text>
                            <View>
                                <DatePicker
                                    style={{ width: 132 }}
                                    mode="date"
                                    // date={datefrom}
                                    placeholder="2020-09-25"
                                    format="YYYY-MM-DD"
                                    minDate="1970-01-01"
                                    maxDate="2025-01-01"
                                    customStyles={{
                                        dateIcon: {
                                            position: 'absolute',
                                            left: 0,
                                            top: 10,
                                            marginLeft: 0
                                        },
                                        dateInput: {
                                            marginLeft: 0, borderRadius: 5, borderColor: '#95989A', height: 47, marginTop: 10
                                        }
                                    }}
                                    onDateChange={(date) => setdatefrom(date)}
                                />
                            </View>
                        </View>

                        <View>
                            <Text style={{ color: '#909090', fontSize: 12 }}>To</Text>
                            <View>
                                <DatePicker
                                    style={{ width: 132 }}
                                    // date={dateto}
                                    mode="date"
                                    placeholder="2020-09-25"
                                    format="YYYY-MM-DD"
                                    minDate="1970-01-01"
                                    maxDate="2025-01-01"
                                    customStyles={{
                                        dateIcon: {
                                            position: 'absolute',
                                            left: 0,
                                            top: 10,
                                            marginLeft: 0
                                        },
                                        dateInput: {
                                            marginLeft: 0, borderRadius: 5, borderColor: '#95989A', height: 47, marginTop: 10
                                        }
                                    }}
                                    onDateChange={(date) => setdateto(date)}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
                        <View>
                            <Text style={{ color: '#909090', fontSize: 12 }}>School Name</Text>
                            <View style={{ borderWidth: 1, height: 47, width: 132, borderColor: '#95989A', borderRadius: 5 }}>
                                <TextInput
                                    onChangeText={(value) => setname(value)}
                                    placeholder="Input" />
                            </View>
                        </View>

                        <View >
                            <Text style={{ color: '#909090', fontSize: 12 }}>Notice Period</Text>
                            <View style={{ borderWidth: 1, width: 132,height:47, borderRadius: 5, borderColor: '#95989A' }}>
                                <Picker
                                    mode="dropdown"
                                    style={{ width: 120 }}
                                    onValueChange={value => setgender(value)}
                                >
                                    <Picker.Item label="30 days" value="30d" />
                                    <Picker.Item label="25 days" value="25d" />
                                </Picker>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                        <View>
                            <Text style={{ color: '#909090', fontSize: 12 }}>Subjects Intersted In</Text>
                            <View style={{ borderWidth: 1, width: 132,height:47, borderRadius: 5, borderColor: '#95989A' }}>
                                <Picker
                                    mode="dropdown"
                                    style={{ width: 120 }}
                                    onValueChange={value => setgender(value)}
                                >
                                    <Picker.Item label="Science" value="science" />
                                    <Picker.Item label="Social" value="social" />
                                </Picker>
                            </View>
                        </View>

                        <View >
                            <Text style={{ color: '#909090', fontSize: 12 }}>Grades</Text>
                            <View style={{ borderWidth: 1, width: 132,height:47, borderRadius: 5, borderColor: '#95989A' }}>
                                <Picker
                                    mode="dropdown"
                                    style={{ width: 120 }}
                                    onValueChange={value => setgender(value)}
                                >
                                    <Picker.Item label="primary" value="30d" />
                                    <Picker.Item label="secondary" value="25d" />
                                </Picker>
                            </View>
                        </View>
                    </View>

                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>Employment Category</Text>
                        <View style={{ borderWidth: 1, width: 308, borderRadius: 5, borderColor: '#95989A' }}>
                        <Picker
                                    mode="dropdown"
                                    style={{ width: 310 }}
                                    onValueChange={value => setgender(value)}
                                >
                                    <Picker.Item label="Permanent" value="30d" />
                                    <Picker.Item label="Contract" value="25d" />
                                </Picker>
                        </View>
                    </View>





                 


                 

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 }}>
                    
                        <View style={{ marginLeft: 160 }}>
                            <TouchableOpacity>
                                <Text
                                   onPress={() => navigation.navigate('Screen32')}
                                    style={styles.button}>
                                    Next
            </Text>
                            </TouchableOpacity>
                        </View>
                    </View>



                </View>
            </View>
        </ScrollView>

    );
}
export default Screen31;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 80,
        alignItems: "center"
    },
    button: {
        color: 'white',
        padding: 15,
        borderRadius: 5,
        paddingLeft: 50,
        // bottom: 20,
        borderColor: 'black',
        width: 150,
        backgroundColor: '#02ACE6'
    },
    button_upload:
    {
        color: '#909090',
        padding: 15,
        borderRadius: 5,
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: '#95989A',
        // paddingLeft: 50,
        width: 165,
        backgroundColor: '#F8FAFC'
    },

});

