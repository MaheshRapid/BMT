
import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, Alert, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import DatePicker from 'react-native-datepicker';
import { citylist, statelist, quallist, explist, noticelist, subjectlist, gradelist, empcatlist } from '../../redux/selector/getallselector';
import ImagePicker from 'react-native-image-picker';

const Screen32 = () => {

    return (
        <ScrollView
            style={{ flex: 1 }}
        >
            <View style={styles.container}>
                <View style={{ top: 42 }}>
                    <View>
                        {/* <Image style={{ alignSelf: 'center', width: 282, height: 80 }} source={require('../images/poster.png')} /> */}
                    </View>



                    <View style={{ flexDirection: 'row', marginTop: 40 }}>
                        <TouchableOpacity>
                            <Text style={styles.button_upload}>
                                <Image source={require('../../../../src/assests/images/file.png')}
                                    style={{ height: 25, width: 25 }}>
                                </Image>
                                Upload your photo
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ fontWeight: 'bold', top: 15, paddingLeft: 50 }}>
                                Upload
                           </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 40 }}>

                        <TouchableOpacity>
                            <Text style={styles.button_upload}>
                                <Image source={require('../../../../src/assests/images/file.png')}
                                    style={{ height: 25, width: 25 }}>
                                </Image>
                                Resume Upload
                             </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{ fontWeight: 'bold', top: 15, paddingLeft: 50 }}>
                                Upload
                          </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginTop: 30 }}>
                        <Text style={{ color: '#A49A9A' }}>Additional Note</Text>
                        <TextInput style={{
                            height: 78,
                            marginTop: 10,
                            width: 276,
                            borderWidth: 1,
                            borderColor: '#95989A',
                            borderRadius: 5
                        }}></TextInput>

                    </View>














                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
                        <View style={{ marginLeft: 30 }}>
                            <TouchableOpacity>
                                <Text style={{ color: '#02ACE6', marginTop: 10 }}>
                                    Cancel
            </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginLeft: 60 }}>
                            <TouchableOpacity>
                                <Text
                                    // onPress={() => { onsubmitapp() }}
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
export default Screen32;



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

