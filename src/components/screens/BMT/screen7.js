import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import DatePicker from 'react-native-datepicker'

const Screen7 = () => {
    const [selectedValue, setSelectedValue] = useState("");
    return (
        <ScrollView
            style={{ flex: 1 }}
        >
            <View style={styles.container}>
                <View style={{ top: 42 }}>
                    <View>
                        {/* <Image style={{ alignSelf: 'center', width: 282, height: 80 }} source={require('../images/poster.png')} /> */}
                    </View>
                
                    <View style={{ marginTop: 20 }}>
                        <Text style={{ fontSize: 25, color: '#02ABE5', textAlign: 'center' }}>
                            I Need A Teacher
            </Text>
                    </View>

                    
                    
                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>School Name</Text>
                        <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#95989A', borderRadius: 5 }}>
                            <TextInput />
                        </View>
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
                        <View >
                            <Text style={{color: '#909090', fontSize: 12 }}>Grade</Text>
                            <View style={{ borderWidth: 1, width: 141, borderRadius: 5, borderColor: '#95989A' }}>
                                <Picker
                                    selectedValue={selectedValue}
                                    style={{ height: 47 }}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="Primary" value="11" />
                                    <Picker.Item label="other" value="21" />
                                </Picker>
                            </View>
                        </View>
                        <View >
                            <Text style={{ color: '#909090', fontSize: 12 }}>Subject</Text>
                            <View style={{ borderWidth: 1, width: 141, borderRadius: 5, borderColor: '#95989A' }}>
                                <Picker
                                    selectedValue={selectedValue}
                                    style={{ height: 47 }}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="Maths" value="30" />
                                    <Picker.Item label="Social" value="86" />
                                </Picker>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
                        <View >
                            <Text style={{color: '#909090', fontSize: 12 }}>Gender</Text>
                            <View style={{ borderWidth: 1, width: 141, borderRadius: 5, borderColor: '#95989A' }}>
                                <Picker
                                    selectedValue={selectedValue}
                                    style={{ height: 47 }}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="Male" value="11" />
                                    <Picker.Item label="Female" value="21" />
                                </Picker>
                            </View>
                        </View>
                        <View >
                            <Text style={{ color: '#909090', fontSize: 12 }}>Area</Text>
                            <View style={{ borderWidth: 1, width: 141, borderRadius: 5, borderColor: '#95989A' }}>
                                <Picker
                                    selectedValue={selectedValue}
                                    style={{ height: 47 }}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="KNR" value="30" />
                                    <Picker.Item label="HYD" value="86" />
                                </Picker>
                            </View>
                        </View>
                    </View>



                  
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop:10}}>
                        <View>
                            <Text style={{ color: '#909090', fontSize: 12 }}>From</Text>
                            <View>
                                <DatePicker
                                    style={{ width: 141 }}
                                    mode="date"
                                    placeholder="2020-09-25"
                                    format="YYYY-MM-DD"
                                    minDate="2016-05-01"
                                    maxDate="2016-06-01"
                                    customStyles={{
                                        dateIcon: {
                                            position: 'absolute',
                                            left: 0,
                                            top: 10,
                                            marginLeft: 0
                                        },
                                        dateInput: {
                                            marginLeft: 0, borderRadius: 5, borderColor: '#95989A', height:47, marginTop:10
                                        }
                                    }}
                                // onDateChange={(date) => { this.setState({ date: date }) }}
                                />
                            </View>
                        </View>

                        <View>
                            <Text style={{color: '#909090', fontSize: 12 }}>To</Text>
                            <View>
                                <DatePicker
                                    style={{ width: 141 }}
                                    mode="date"
                                    placeholder="2020-09-25"
                                    format="YYYY-MM-DD"
                                    minDate="2016-05-01"
                                    maxDate="2016-06-01"
                                    customStyles={{
                                        dateIcon: {
                                            position: 'absolute',
                                            left: 0,
                                            top: 10,
                                            marginLeft: 0
                                        },
                                        dateInput: {
                                            marginLeft: 0, borderRadius: 5, borderColor: '#95989A', height:47, marginTop:10
                                        }
                                    }}
                                // onDateChange={(date) => { this.setState({ date: date }) }}
                                />
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop:20 }}>
                        <View >
                            <Text style={{color: '#909090', fontSize: 12 }}>Contact Number</Text>
                            <View style={{ borderWidth: 1, width: 141, borderRadius: 5, borderColor: '#95989A' }}>
                               <TextInput placeholder="123456789"/>
                            </View>
                        </View>
                        <View >
                            <Text style={{ color: '#909090', fontSize: 12 }}>Expected in days</Text>
                            <View style={{ borderWidth: 1, width: 141, borderRadius: 5, borderColor: '#95989A' }}>
                                <Picker
                                    selectedValue={selectedValue}
                                    style={{ height: 47 }}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="15" value="30" />
                                    <Picker.Item label="30" value="86" />
                                </Picker>
                            </View>
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
                                <Text style={styles.button}>
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
export default Screen7;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom:80,
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
        borderWidth:2,
        borderStyle:'dashed',
        borderColor: '#95989A',
        // paddingLeft: 50,
        width: 165,
        backgroundColor: '#F8FAFC'
    },

});

