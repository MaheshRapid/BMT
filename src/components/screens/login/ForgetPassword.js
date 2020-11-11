import React, { memo, useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    ScrollView,
    ImageBackground,
    Alert,
    Dimensions
} from 'react-native';
import colors from '../../../assests/styles/stylesheet/colors';
import styles from './Styles';
import AlertScreen from '../../CustomComponents/AlertScreen';




const ForgetPassword = ({ navigation }) => {
    
const { width, height } = Dimensions.get('screen');
    return (
        <SafeAreaView >
            {/* {visiblemodal ? (
         <AlertScreen
           screen={alertscreen}
           message={alertmsg}
           fun={onmodalchange}
         />
       ) : (
           <></>
         )} */}

            <ScrollView >
                <View style={styles.container}>
                    <ImageBackground source={require('../../../assests/images/login.jpg')} style={{width:width,height:height}}>

                        <View style={{ marginTop: 90 }}>
                            <Text style={{ textAlign: 'center', fontWeight: '900', fontSize: 70, color: 'white' }}>
                                B 2 B
                            </Text>
                        </View>
                        <View style={{ marginTop: 70 }}>
                            <View style={[styles.textContainer]}>

                                <TextInput
                                    placeholder='User/Email'
                                    style={[styles.Textinput]}
                                    // value={email}
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    enablesReturnKeyAutomatically={true}
                                    returnKeyType="next"
                                //  onChangeText={(value) => setemail(value)}
                                // placeholder="ANDJGFYINA"
                                // placeholderTextColor={colors.white}
                                />

                            </View>
                        </View>

                        <View style={{ marginTop: 90, marginBottom: 30 }}>
                            <View style={[styles.Btncontainer]}>
                                <TouchableOpacity
                                     onPress={() => {
                                      //  navigation.navigate("ResetPassword");
                                      }}
                                    style={[styles.button]}>
                                    <Text style={[styles.text]}>RESET PASSWORD</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={[styles.lineView]} />
                        <View style={[styles.signup]}>
                            <Text style={[styles.resetText]}>Don't have an account ?</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate("Signin");
                                }}
                            >
                                <Text style={[styles.btnText]}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>

            </ScrollView>
        </SafeAreaView>
    );

};

export default memo(ForgetPassword);
