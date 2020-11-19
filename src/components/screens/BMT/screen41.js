import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, Alert, TouchableOpacity, Image, ScrollView } from "react-native";
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/FontAwesome';

const Screen41 = () => {

    return (
        <ScrollView
            style={{ flex: 1 }}
        >
            <View style={styles.container}>
                <View>

                    <View style={{ paddingTop: 20 }}>
                        <Text style={{ color: '#909090', fontSize: 16 }}>Single Point of Contact Details</Text>
                    </View>


                    <View style={{ paddingTop: 20 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>Name</Text>
                        <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#95989A', borderRadius: 5 }}>
                            <TextInput
                                placeholder="Input" />
                        </View>
                    </View>
                    <View style={{ paddingTop: 20 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>Number</Text>
                        <View style={{ flexDirection: 'row', borderWidth: 1, height: 47, width: 308, borderColor: '#95989A', borderRadius: 5 }}>
                            <View style={{ marginLeft: 10, top: 8 }}>
                                <Image source={require('../../../Images/phone.png')} style={{ height: 20, width: 20, top: 5 }}></Image>
                            </View>
                            <TextInput
                                placeholder="Input" />
                        </View>
                    </View>
                    <View style={{ paddingTop: 20 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>School Board Registration Number</Text>
                        <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#95989A', borderRadius: 5 }}>
                            <TextInput
                                placeholder="Input" />
                        </View>
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20 }}>
                        <View style={{}}>
                            <Text style={{ color: '#909090', fontSize: 12 }}>School Contact Number</Text>
                            <View style={{ flexDirection: 'row', borderWidth: 1, height: 47, width: 142, borderColor: '#95989A', borderRadius: 5 }}>
                                <View style={{ marginLeft: 10, top: 8 }}>
                                    <Image source={require('../../../Images/phone.png')} style={{ height: 20, width: 20, top: 5 }}></Image>
                                </View>
                                <TextInput
                                    // onChangeText={(value) => setscnumber(value)}
                                    placeholder="Input" />
                            </View>
                        </View>
                        <View style={{}}>
                            <Text style={{ color: '#909090', fontSize: 12 }}>School Telephone Number</Text>
                            <View style={{ flexDirection: 'row', borderWidth: 1, height: 47, width: 142, borderColor: '#95989A', borderRadius: 5 }}>
                                <View style={{ marginLeft: 10, top: 8 }}>
                                    <Image source={require('../../../Images/phone.png')} style={{ height: 20, width: 20, top: 5 }}></Image>
                                </View>
                                <TextInput
                                    placeholder="Input" />
                            </View>
                        </View>
                    </View>

                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>Email Id</Text>
                        <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#95989A', borderRadius: 5 }}>
                            <TextInput
                                placeholder="Input" />
                        </View>
                    </View>

                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>Latitude</Text>
                        <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#95989A', borderRadius: 5 }}>
                            <TextInput
                                placeholder="Input" />
                        </View>
                    </View>

                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>Longitude</Text>
                        <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#95989A', borderRadius: 5 }}>
                            <TextInput
                                // onChangeText={(value) => setlongitude(value)}
                                placeholder="Input" />
                        </View>
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 }}>
                        <View style={{ marginRight: 30 }}>
                            <TouchableOpacity>
                                <Text style={{ color: '#02ACE6', marginTop: 10 }}>
                                    Cancel
            </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginLeft: 60 }}>
                            <TouchableOpacity>
                                <Text
                                    //  onPress={()=>{onsubmitapp()}}
                                    style={styles.button}>
                                    Submit
            </Text>
                            </TouchableOpacity>
                        </View>
                    </View>



                </View>
            </View>
        </ScrollView>

    );
}
export default Screen41;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 80,
        alignItems: "center",
        marginTop: 50
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

