import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import DatePicker from 'react-native-datepicker'

const Screen11 = () => {
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
                            Session Report
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop:10,justifyContent:'space-between'}}>
                        <Text>School</Text>
                        <Text>From date</Text>
                        <Text>To date</Text>
                        <Text>Master Speaker</Text>
                    </View>
                    <View style={{borderBottomWidth:1, marginTop:10, borderBottomColor:'#555555'}}></View>
                    <View style={styles.view_1}>
                        <Text style={styles.text_View}>Date</Text>
                        <Text style={styles.text_View2}>:</Text>
                        <TextInput style={{ width: 110 }}><Text style={{color:'#555555'}}>20/20/20</Text></TextInput>
                    </View>

                    <View style={styles.view_1}>
                        <Text style={styles.text_View}>Time</Text>
                        <Text style={styles.text_View2}>:</Text>
                        <TextInput style={{ width: 110 }}><Text style={{color:'#555555'}}>09:45AM</Text></TextInput>
                    </View>

                    <View style={styles.view_1}>
                        <Text style={styles.text_View}>Master speaker</Text>
                        <Text style={styles.text_View2}>:</Text>
                        <TextInput style={{ width: 110 }}><Text style={{color:'#555555'}}>Raju</Text></TextInput>
                    </View>

                    <View style={styles.view_1}>
                        <Text style={styles.text_View}>Grades</Text>
                        <Text style={styles.text_View2}>:</Text>
                        <TextInput style={{ width: 110 }}><Text style={{color:'#555555'}}>Primary</Text></TextInput>
                    </View>

                    <View style={styles.view_1}>
                        <Text style={styles.text_View}>Topic</Text>
                        <Text style={styles.text_View2}>:</Text>
                        <TextInput style={{ width: 110 }}><Text style={{color:'#555555'}}>Politics</Text></TextInput>
                    </View>

                    <View style={styles.view_1}>
                        <Text style={styles.text_View}>Online/Classroom</Text>
                        <Text style={styles.text_View2}>:</Text>
                        <TextInput style={{ width: 110 }}><Text style={{color:'#555555'}}>Online</Text></TextInput>
                    </View>
                    <View style={styles.view_1}>
                        <Text style={styles.text_View}>Comments</Text>
                        <Text style={styles.text_View2}>:</Text>
                        <TextInput style={{ width: 110 }}><Text style={{color:'#555555'}}>Good</Text></TextInput>
                    </View>






                </View>
            </View>
        </ScrollView>

    );
}
export default Screen11;



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
    text_View: {
        marginTop: 10,
        fontSize: 14,
        // fontWeight: 'bold',
        width: 150
    },
    text_View2: {
        marginTop: 10,
        fontSize: 14,
        // fontWeight: 'bold',
        width: 30
    },

    view_1: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },

});

