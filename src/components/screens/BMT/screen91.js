import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import DatePicker from 'react-native-datepicker'
import Icon from 'react-native-vector-icons/FontAwesome';

const Screen91 = () => {
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

                   


                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>Conatct Details</Text>
                        <View style={{flexDirection:'row', borderWidth: 1, height: 47, width: 308, borderColor: '#95989A', borderRadius: 5 }}>
                       <View style={{marginLeft:10,top:8}}>
                         <Image source={require('../../../Images/phone.png')} style={{height:20, width:20}}></Image>
                         </View> 
                        <TextInput style={{width:'100%'}} />
                        </View>
                    </View>

                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>Alternate Mobile Number</Text>
                        <View style={{flexDirection:'row', borderWidth: 1, height: 47, width: 308, borderColor: '#95989A', borderRadius: 5 }}>
                       <View style={{marginLeft:10,top:8}}>
                       <Image source={require('../../../Images/phone.png')} style={{height:20, width:20}}></Image>
                           </View> 
                        <TextInput style={{width:'100%'}} />
                        </View>
                    </View>

                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>City where you stay</Text>
                        <View style={{ borderWidth: 1, width: 308, borderRadius: 5, borderColor: '#95989A' }}>
                            <Picker
                                selectedValue={selectedValue}
                                style={{ height: 47 }}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="Hyd" value="1" />
                                <Picker.Item label="Delhi" value="2" />
                            </Picker>
                        </View>
                    </View>
                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>Intersted in Online/Classroom</Text>
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
                        <Text style={{ color: '#909090', fontSize: 12 }}>Brief Introdution about yourself</Text>
                        <View style={{ borderWidth: 1, height: 88, width: 308, borderColor: '#95989A', borderRadius: 5 }}>
                            <TextInput />
                        </View>
                    </View>



                    <View style={{ flexDirection: 'row', marginTop:20}}>

                        <TouchableOpacity>
                            <Text style={styles.button_upload}>
                               Upload your photo
            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ fontWeight: 'bold', top: 15, paddingLeft: 50 }}>
                                Upload
            </Text>
                        </TouchableOpacity>
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
export default Screen91;



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
        padding: 10,
        borderRadius: 5,
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: '#95989A',
        width: 165,
        backgroundColor: '#F8FAFC'
    },

});

