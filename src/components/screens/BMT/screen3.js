import React, { useState } from "react";
import { View, Picker, StyleSheet, Text, Alert, TextInput, TouchableOpacity, Image, ScrollView } from "react-native";
import DatePicker from 'react-native-datepicker';
import { citylist, statelist, quallist, explist, noticelist, subjectlist, gradelist, empcatlist } from '../../redux/selector/getallselector';
import ImagePicker from 'react-native-image-picker';
import { msgg } from '../../redux/selector/teacherselector';
import { teacher_add_action } from '../../redux/action/teacheraction';
import { useSelector, useDispatch } from 'react-redux';


const Screen3 = ({ navigation }) => {
    const dispatch = useDispatch();

    const clist = useSelector(citylist);
    const slist = useSelector(statelist);
    const qlist = useSelector(quallist);
    const exlist = useSelector(explist);
    const nlist = useSelector(noticelist);
    const sublist = useSelector(subjectlist);
    const glist = useSelector(gradelist);
    const emlist = useSelector(empcatlist);
    const msg1 = useSelector(msgg);

    const [name, setname] = useState("");
    const [plotno, setplotno] = useState("");
    const [landmark, setlandmark] = useState("");
    const [city, setcity] = useState("");
    const [state, setstate] = useState("");

    const [pincode, setpincode] = useState("");
    const [mobile, setmobile] = useState("");
    const [amobile, setamobile] = useState("");
    const [qual, setqual] = useState("");
    const [exp, setexp] = useState("");

    const [sname, setsname] = useState("");
    const [notice, setnotice] = useState("");
    const [subject, setsubject] = useState("");
    const [grade, setgrade] = useState("");
    const [empcat, setempcat] = useState("");

    const [additional, setadditional] = useState("");

    const [datefrom, setdatefrom] = useState("");
    const [dateto, setdateto] = useState("");

    const [gender, setgender] = useState("");

    const [banner, setbanner] = useState('');


    const grs_code = '5000';
    console.log("before", gender)


    const handleChoosePhoto = () => {
        const options = {
            title: 'Banner',
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source1111 = { uri: response.uri };
                const source = {
                    uri: 'data:' + response.fileName + ';base64,' + response.data,
                };
                //  console.log(source)
                setbanner(source);
            }
        });
    };





    const onsubmitapp = () => {
        //  console.log(name,gender,plotno,landmark,city,state,pincode,mobile,amobile,qual,exp,datefrom,dateto,sname,notice,subject,grade,empcat,additional,banner,resume)
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
            // console.log(typeof(prcolor)+secolor+rsa_code)
            dispatch(
                teacher_add_action({ grs_code, name, gender, plotno, landmark, city, state, pincode, mobile, amobile, qual, exp, datefrom, dateto, sname, notice, subject, grade, empcat, additional, banner }),
            );


        }
        console.log("response=======================", msg1)
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
                        <Text style={{ fontSize: 25, color: '#02ABE5', textAlign: 'center' }}>
                            Teacher Profile
            </Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
                        <View>
                            <Text style={{ color: '#909090', fontSize: 12 }}>Name</Text>
                            <View style={{ borderWidth: 1, height: 47, width: 132, borderColor: '#95989A', borderRadius: 5 }}>
                                <TextInput
                                    onChangeText={(value) => setname(value)}
                                    placeholder="Input" />
                            </View>
                        </View>

                        <View >
                            <Text style={{ color: '#909090', fontSize: 12 }}>Gender</Text>
                            <View style={{ borderWidth: 1, width: 132, borderRadius: 5, borderColor: '#95989A' }}>
                                <Picker
                                    mode="dropdown"
                                    style={{ width: 120 }}
                                    selectedValue={gender}
                                    onValueChange={value => setgender(value)}
                                >
                                    <Picker.Item label="Male" value="Male" />
                                    <Picker.Item label="Female" value="Female" />
                                </Picker>
                            </View>
                        </View>
                    </View>



                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>HouseNo/FlatNo/PlotNo</Text>
                        <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#95989A', borderRadius: 5 }}>
                            <TextInput
                                onChangeText={(value) => setplotno(value)}
                                placeholder="Input" />
                        </View>
                    </View>
                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>Apartment Name/Locality/Landmark</Text>
                        <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#95989A', borderRadius: 5 }}>
                            <TextInput
                                onChangeText={(value) => setlandmark(value)}
                                placeholder="Input" />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
                        <View >
                            <Text style={{ color: '#909090', fontSize: 12 }}>City</Text>
                            <View style={{ borderWidth: 1, width: 136, borderRadius: 5, borderColor: '#95989A' }}>
                                <Picker
                                    mode="dropdown"
                                    style={{ width: 120 }}

                                    selectedValue={city}
                                    onValueChange={value => setcity(value)}
                                >
                                    {clist.map((city1, index) => (

                                        <Picker.Item key={index + city1.cityid} label={city1.cityname} value={city1.cityid} />
                                    ))}

                                </Picker>
                            </View>
                        </View>
                        <View >
                            <Text style={{ color: '#909090', fontSize: 12 }}>State</Text>
                            <View style={{ borderWidth: 1, width: 136, borderRadius: 5, borderColor: '#95989A' }}>
                                <Picker
                                    mode="dropdown"
                                    style={{ width: 120 }}
                                    selectedValue={state}
                                    onValueChange={value => setstate(value)}>
                                    {slist.map((state, index) => (
                                        <Picker.Item key={index + state.stateid} label={state.state_name} value={state.stateid} />
                                    ))}
                                </Picker>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                        <View>
                            <Text style={{ color: '#909090', fontSize: 12 }}>Zip/PinCode</Text>
                            <View style={{ borderWidth: 1, height: 47, width: 136, borderColor: '#95989A', borderRadius: 5 }}>
                                <TextInput
                                    onChangeText={(value) => setname(value)}
                                    placeholder="Input" />
                            </View>
                        </View>

                        <View >
                            <Text style={{ color: '#909090', fontSize: 12 }}>Allowance range per day</Text>
                            <View style={{ borderWidth: 1, width: 136, height: 47, borderRadius: 5, borderColor: '#95989A' }}>
                                <Picker
                                    mode="dropdown"
                                    style={{ width: 120 }}
                                    selectedValue={gender}
                                    onValueChange={value => setgender(value)}
                                >
                                    <Picker.Item label="800" value="8h" />
                                    <Picker.Item label="100" value="10h" />
                                </Picker>
                            </View>
                        </View>
                    </View>


                    <View style={{ paddingTop: 10 }}>
                        <Text style={{ color: '#909090', fontSize: 12 }}>Alternative Contact Number</Text>
                        <View style={{ borderWidth: 1, height: 47, width: 308, borderColor: '#95989A', borderRadius: 5 }}>
                            <TextInput
                                onChangeText={(value) => setmobile(value)}
                                placeholder="Enter alternate mobile number" />
                        </View>
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 10 }}>
                        <View >
                            <Text style={{ color: '#909090', fontSize: 12 }}>Qualification</Text>
                            <View style={{ borderWidth: 1, width: 132, borderRadius: 5, borderColor: '#95989A' }}>
                                <Picker
                                    mode="dropdown"
                                    style={{ width: 120, height: 47 }}

                                    selectedValue={qual}
                                    onValueChange={value => setqual(value)}
                                >
                                    {qlist.map((qual, index) => (
                                        <Picker.Item key={index + qual.qualificationid} label={qual.qualification} value={qual.qualificationid} />
                                    ))}

                                </Picker>
                            </View>
                        </View>
                        <View >
                            <Text style={{ color: '#909090', fontSize: 12 }}>Exp of Years</Text>
                            <View style={{ borderWidth: 1, width: 132, borderRadius: 5, borderColor: '#95989A' }}>
                                <Picker
                                    mode="dropdown"
                                    style={{ width: 120, height: 47 }}
                                    selectedValue={exp}
                                    onValueChange={value => setexp(value)}
                                >
                                    {exlist.map((exp, index) => (
                                        <Picker.Item key={index + exp.expid} label={exp.experiance} value={exp.expid} />
                                    ))}

                                </Picker>
                            </View>
                        </View>
                    </View>


                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 }}>

                        <View style={{ marginLeft: 160 }}>
                            <TouchableOpacity style={styles.button}
                                onPress={() => navigation.navigate('Screen31')}>
                                <Text style={{ color: 'white' }}>Next</Text>
                            </TouchableOpacity>
                        </View>
                    </View>



                </View>
            </View>
        </ScrollView>

    );
}
export default Screen3;



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

