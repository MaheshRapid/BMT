
import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    Linking,
    Dimensions,
    Alert
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const { width, height } = Dimensions.get('screen');

const dialCall = () => {

    let phoneNumber = '';

    if (Platform.OS === 'android') {
        phoneNumber = 'tel:+91${6300560921}';
    }
    else {
        phoneNumber = 'telprompt:+91${6300560921}';
    }

    Linking.openURL(phoneNumber);
};

export default function Support({ navigation }) {
    return (
        <SafeAreaView>
            <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: 'lightWhite', width: width }}>
                <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
                    <Text style={{ color: "grey", fontSize: 20, fontWeight: 'bold', textAlign: 'center', width: width, alignItems: 'center', justifyContent: 'center' }}>
                        For Support and Enquiry call us
                    </Text>
                </View>

                {/* <TouchableOpacity
                    style={{
                        marginTop: 10,
                        height: 50,
                        width: width / 3,
                        backgroundColor: 'green',
                        borderRadius: 5,
                        top: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row'
                    }}
                    onPress={() => dialCall()} activeOpacity={0.7}>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Support</Text>
                    <View style={{ paddingLeft: 5 }}>
                        <Icon
                            name={'phone'}
                            size={20}
                            color='white'
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        marginTop: 10,
                        height: 50,
                        width: width / 3,
                        backgroundColor: 'green',
                        borderRadius: 5,
                        top: 10,
                        alignItems: 'center',
                        justifyContent: 'center',

                        flexDirection: 'row'
                    }}
                    onPress={() => dialCall()} activeOpacity={0.7}>
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Whatsapp</Text>
                    <View style={{ paddingLeft: 5 }}>
                        <Icon
                            name={'whatsapp'}
                            size={20}
                            color='white'
                        />
                    </View>
                </TouchableOpacity>
                <View style={{ marginTop: 20, flexDirection: 'row', width: width, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>
                        E-Mail :
                    </Text>
                    <TouchableOpacity onPress={() => Linking.openURL('mailto: sangamtradingmart@gmail.com')}>
                        <Text style={{ color: 'orange', fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>
                            sangamtradingmart@gmail.com
                    </Text>
                    </TouchableOpacity>
                </View> */}
            </View>
        </SafeAreaView>


    );
}