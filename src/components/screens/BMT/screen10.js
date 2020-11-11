import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import DatePicker from 'react-native-datepicker';
import TimePicker from 'react-native-simple-time-picker';


const Screen10 = () => {
    const [selectedValue, setSelectedValue] = useState("");
    // state = {
    //     selectedHours: 5,
    //     selectedMinutes: 25,
    // }
    // const { selectedHours, selectedMinutes } = this.state;


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
                        <Text style={{ fontSize: 20, color: '#02ABE5', textAlign: 'center' }}>
                            Request for session from schools
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 40 }}>
                        <View>
                            <Text style={{ color: '#909090', fontSize: 12 }}>Date</Text>
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

                        <View >
                            <Text style={{color: '#909090', fontSize: 12 }}>Time</Text>
                            <View style={{ borderWidth: 1, width: 141, borderRadius: 5, borderColor: '#95989A' }}>
                               <TextInput placeholder="12.05AM" textAlign='center'/>
                            </View>
                        </View>
                    </View>



                    <View style={{ paddingTop: 20 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>Grades to which the lecture session is being planned</Text>
                        <View style={{ borderWidth: 1, width: 308, borderRadius: 5, borderColor: '#95989A' }}>
                            <Picker
                                selectedValue={selectedValue}
                                style={{ height: 47 }}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="Primary" value="1" />
                                <Picker.Item label="others" value="2" />
                            </Picker>
                        </View>
                    </View>

                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>Topic</Text>
                        <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#95989A', borderRadius: 5 }}>
                            <TextInput />
                        </View>
                    </View>




                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>Online/Classroom</Text>
                        <View style={{ borderWidth: 1, width: 308, borderRadius: 5, borderColor: '#95989A' }}>
                            <Picker
                                selectedValue={selectedValue}
                                style={{ height: 47 }}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="Online" value="1" />
                                <Picker.Item label="Classroom" value="2" />
                            </Picker>
                        </View>
                    </View>

                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>Add other comments</Text>
                        <View style={{ borderWidth: 1, height: 88, width: 308, borderColor: '#95989A', borderRadius: 5 }}>
                            <TextInput />
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
export default Screen10;



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
    time: {
            flex: 1,top:10,
            width:133,
            height:40,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth:1,borderRadius:5,
          },

});


// import React,{Component}from 'react';
// import { StyleSheet, View, Text } from 'react-native';
// import TimePicker from 'react-native-simple-time-picker';


// const Screen10 = () => {
//   state = {
//     selectedHours: 5,
//     selectedMinutes: 25,
//   }
// const { selectedHours, selectedMinutes } = this.state;
//     return (
//       <View style={styles.time}>
//            <Text>{selectedHours}hr:{selectedMinutes}min</Text>
//         <TimePicker
//           selectedHours={selectedHours}
//           selectedMinutes={selectedMinutes}

//           onChange={(hours, minutes) => this.setState({ 
//                selectedHours: hours, selectedMinutes: minutes 
//          })}
//         />
//       </View>
//     );
// }
// export default Screen10;


// const styles = StyleSheet.create({
//   time: {
//     flex: 1,
//     backgroundColor: '#fff',
//     marginLeft:50,
//     marginRight:50,
//     width:100,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
