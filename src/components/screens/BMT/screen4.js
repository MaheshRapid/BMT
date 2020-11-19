import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, TextInput, Alert, TouchableOpacity, Image, ScrollView } from "react-native";
import DatePicker from 'react-native-datepicker';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';

const Screen4 = ({navigation}) => {
    const [selectedValue, setSelectedValue] = useState("");
    const [name, setname] = useState("");
    const [postal, setpostal] = useState("");
    const [contact, setcontact] = useState("");
    const [curriculum, setcurriculum] = useState("");
    const [sname, setsname] = useState("");
    const [scontact, setscontact] = useState("");
    const [rnumber, setrnumber] = useState("");
    const [scnumber, setscnumber] = useState("");

    const [stnumber, setstnumber] = useState("");
    const [email, setemail] = useState("");
    const [latitude, setlatitude] = useState("");
    const [longitude, setlongitude] = useState("");

    const onsubmitapp = () => {
        if (name == "") {
            Alert.alert(
                "Error",
                "Enter all values",
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
        }
        else {
            fetch('http://cement.buildemate.com/create_school.php', {
                method: 'post',
                header: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    // we will pass our input data to server
                    grs_code: 5000,
                    schoolname: name,
                    postaladdress: postal,
                    contact_details: contact,
                    curriculum: curriculum,

                    SPOC_NAME: sname,
                    SPOC_MOBILE: scontact,
                    REGISTRATIONNO: rnumber,
                    SCH_MOBILENO: scnumber,
                    SCH_LANDLINE: stnumber,

                    email: email,
                    LATITUDE: latitude,
                    LONGITUDE: longitude,
                })

            })
                .then((response) => response.json())
                .then((response) => {
                    console.log('response', response);
                    if (response.Message == "Successfully school added") {
                        alert("Successfully school added");

                    } else {
                        alert("Wrong Input Details");
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }


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
                        {/* <Image style={{ alignSelf: 'center'}} source={require('../images/promotion.png')} /> */}
                    </View>

                    <View>
                        <Text style={{ fontSize: 25, color: '#02ABE5', textAlign: 'center' }}>
                            School
            </Text>
                    </View>


                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>Name Of the School</Text>
                        <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#95989A', borderRadius: 5 }}>
                            <TextInput
                                onChangeText={(value) => setname(value)}
                                placeholder="Input" />
                        </View>
                    </View>
                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>Complete Postal Address</Text>
                        <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#95989A', borderRadius: 5 }}>
                            <TextInput
                                onChangeText={(value) => setpostal(value)}
                                placeholder="Input" />
                        </View>
                    </View>

                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>Contact Details</Text>
                        <View style={{ flexDirection: 'row', borderWidth: 1, height: 47, width: 308, borderColor: '#95989A', borderRadius: 5 }}>
                            <View style={{ marginLeft: 10, top: 8 }}>
                                <Image source={require('../../../Images/phone.png')} style={{ height: 20, width: 20, top: 5 }}></Image>
                            </View>
                            <TextInput
                                onChangeText={(value) => setcontact(value)}
                                placeholder="" />
                        </View>
                    </View>

                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>Curriculum Followed</Text>
                        <View style={{ borderWidth: 1, width: 308, borderRadius: 5, borderColor: '#95989A' }}>
                            <Picker
                                mode="dropdown"
                                style={{ width: 300 }}
                                selectedValue={curriculum}
                                onValueChange={value => setcurriculum(value)}
                            >
                                <Picker.Item label="Curriculum" value="Curriculum" />
                                <Picker.Item label="Curriculum2" value="Curriculum2" />
                            </Picker>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 }}>

                        <View style={{ marginLeft: 160 }}>
                            <TouchableOpacity style={styles.button}
                                onPress={() => navigation.navigate('Screen41')}>
                                <Text style={{ color: 'white' }}>Next</Text>
                            </TouchableOpacity>
                        </View>
                    </View>


                </View>
            </View>
        </ScrollView>

    );
}
export default Screen4;



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

