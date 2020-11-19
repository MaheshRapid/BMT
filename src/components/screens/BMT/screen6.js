import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import { Table, Row, Rows } from 'react-native-table-component';
import DatePicker from 'react-native-datepicker'
import Icon from 'react-native-vector-icons/FontAwesome';

const Screen6 = () => {
    const [selectedValue, setSelectedValue] = useState("java");
    this.state = {
        tableHead: ['Teacher Name', 'Mobile No', 'Resume'],
        tableData: [
            ['Mahesh', '', ''],
        ]
    };
    const state = this.state;

    return (
        <ScrollView
            style={{ flex: 1 }}
        >
            <View style={styles.container}>
                <View style={{ top: 40 }}>
                    <View>
                        {/* <Image style={{ alignSelf: 'center', width: 282, height: 80 }} source={require('../images/poster.png')} /> */}
                    </View>

                    <View style={{ marginTop: 20 }}>
                        <Text style={{ fontSize: 20, color: '#02ACE6', textAlign: 'center' }}>Substitute Teacher List
            </Text>
                    </View>

                    <View style={{ top: 130, left: 140 }}>


                        <TouchableOpacity>
                            <Image source={require('../../../Images/phone.png')} style={{ height: 20, width: 20, top: 20 }}></Image>
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            height: 30, width: 60, marginLeft: 80,
                            backgroundColor: '#02ABE5',
                            borderRadius: 5
                        }}>
                            <Text style={{ color: 'white', textAlign: 'center', top: 7 }}>View</Text>
                        </TouchableOpacity>

                    </View>



                    <View style={{ paddingTop: 10 }}>
                        <Table borderStyle={{ borderWidth: 1, borderColor: '#95989A' }}>
                            <Row data={state.tableHead} style={styles.head} textStyle={styles.text} />
                            <Rows data={state.tableData} style={styles.head2} textStyle={styles.text}
                            />
                        </Table>
                    </View>



                    <View style={{ top: 20, borderWidth: 1, borderColor: '#707070', height:40 }}>
                        <Text style={{ fontSize: 20, color: '#807B7B', margin:5 }}>Click On View to get more details</Text>
                    </View>
                    <View style={{ marginTop: 40 }}>
                        <Text style={{ fontSize: 14, color: '#909090' }}>The following will be displayed</Text>
                    </View>



                    <View style={styles.view_1}>
                        <Text style={styles.text_View}>S.No</Text>
                        <Text style={styles.text_View}>:</Text>
                        <TextInput style={{ width: 110 }}></TextInput>
                    </View>

                    <View style={styles.view_1}>
                        <Text style={styles.text_View}>Exp</Text>
                        <Text style={styles.text_View}>:</Text>
                        <TextInput style={{ width: 110 }}></TextInput>
                    </View>

                    <View style={styles.view_1}>
                        <Text style={styles.text_View}>Gender</Text>
                        <Text style={styles.text_View}>:</Text>
                        <TextInput style={{ width: 110 }}></TextInput>
                    </View>

                    <View style={styles.view_1}>
                        <Text style={styles.text_View}>Allowance</Text>
                        <Text style={styles.text_View}>:</Text>
                        <TextInput style={{ width: 110 }}></TextInput>
                    </View>

                    <View style={styles.view_1}>
                        <Text style={styles.text_View}>EMail</Text>
                        <Text style={styles.text_View}>:</Text>
                        <TextInput style={{ width: 110 }}></TextInput>
                    </View>

                    <View style={styles.view_1}>
                        <Text style={styles.text_View}>Rating</Text>
                        <Text style={styles.text_View}>:</Text>
                        <TextInput style={{ width: 110 }}></TextInput>
                    </View>



                    {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
                        <View >
                            <Text style={{ color: '#909090', fontSize: 12 }}>From Date</Text>
                            <View>
                                <DatePicker
                                    style={{ width: 132 }}
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
                                            marginLeft: 0, borderRadius: 5, borderColor: '#95989A', height: 47, marginTop: 10
                                        }
                                    }}
                                // onDateChange={(date) => { this.setState({ date: date }) }}
                                />
                            </View>
                        </View>

                        <View>
                            <Text style={{ color: '#909090', fontSize: 12 }}>To Date</Text>
                            <View>
                                <DatePicker
                                    style={{ width: 132 }}
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
                                            marginLeft: 0, borderRadius: 5, borderColor: '#95989A', height: 47, marginTop: 10
                                        }
                                    }}
                                // onDateChange={(date) => { this.setState({ date: date }) }}
                                />
                            </View>

                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 30 }}>
                        <View >
                            <Text style={{ color: '#909090', fontSize: 12 }}>Grade</Text>
                            <View style={{ borderWidth: 1, width: 132, borderRadius: 5, borderColor: '#95989A' }}>
                                <Picker
                                    selectedValue={selectedValue}
                                    style={{ height: 47 }}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="Primary" value="1" />
                                    <Picker.Item label="Secondary" value="2" />
                                </Picker>
                            </View>
                        </View>
                        <View >
                            <Text style={{ color: '#909090', fontSize: 12 }}>Years Of Exp Required</Text>
                            <View style={{ borderWidth: 1, width: 132, borderRadius: 5, borderColor: '#95989A' }}>
                                <Picker
                                    selectedValue={selectedValue}
                                    style={{ height: 47 }}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="2" value="11" />
                                    <Picker.Item label="6" value="12" />
                                </Picker>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 30 }}>
                        <View >
                            <Text style={{ color: '#909090', fontSize: 12 }}>Allowance Range per day</Text>
                            <View style={{ borderWidth: 1, width: 132, borderRadius: 5, borderColor: '#95989A' }}>
                                <Picker
                                    selectedValue={selectedValue}
                                    style={{ height: 47 }}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="300" value="1" />
                                    <Picker.Item label="500" value="2" />
                                </Picker>
                            </View>
                        </View>
                        <View >
                            <Text style={{ color: '#909090', fontSize: 12 }}>Subject</Text>
                            <View style={{ borderWidth: 1, width: 132, borderRadius: 5, borderColor: '#95989A' }}>
                                <Picker
                                    selectedValue={selectedValue}
                                    style={{ height: 47 }}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="English" value="11" />
                                    <Picker.Item label="Social" value="12" />
                                </Picker>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 30 }}>
                        <View >
                            <Text style={{ color: '#909090', fontSize: 12 }}>Need By the date</Text>
                            <View >

                                <View>
                                    <DatePicker
                                        style={{ width: 132 }}
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
                                                marginLeft: 0, borderRadius: 5, borderColor: '#95989A', height: 47, marginTop: 10
                                            }
                                        }}
                                    // onDateChange={(date) => { this.setState({ date: date }) }}
                                    />
                                </View>
                            </View>
                        </View>
                        <View >
                            <Text style={{ color: '#909090', fontSize: 12 }}>Gender</Text>
                            <View style={{ borderWidth: 1, width: 132, borderRadius: 5, borderColor: '#95989A' }}>
                                <Picker
                                    selectedValue={selectedValue}
                                    style={{ height: 47 }}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="Male" value="11" />
                                    <Picker.Item label="Female" value="12" />
                                </Picker>
                            </View>
                        </View>
                    </View> */}




                    {/* <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 }}>
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
                    </View> */}


                </View>

            </View>
        </ScrollView>

    );
}
export default Screen6;



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
    text_View: {
        marginTop: 10,
        fontSize: 14,
        // fontWeight: 'bold',
        width: 100
    },

    view_1: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    container2: { flex: 1, padding: 16, paddingTop: 30 },
    head: { height: 60 },
    head2: { height: 100 },
    text: { margin: 6 }


});

