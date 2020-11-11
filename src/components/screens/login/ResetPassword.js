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
    Dimensions,
    Alert
} from 'react-native';
import colors from '../../../assests/styles/stylesheet/colors';
import styles from './Styles';
import AlertScreen from '../../CustomComponents/AlertScreen';

const ResetPassword = ({ navigation }) => {
    
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
                        <View style={{ marginTop: 90 ,marginBottom:30}}>
                            <View style={[styles.textContainer]}>

                                <TextInput
                                    placeholder='Enter New Password'
                                    style={[styles.Textinput]}
                                    // value={email}
                                    keyboardType="default"
                                    autoCapitalize="none"
                                    secureTextEntry={true}
                                    autoCorrect={false}
                                    enablesReturnKeyAutomatically={true}
                                    returnKeyType="next"
                                //  onChangeText={(value) => setemail(value)}
                                // placeholder="ANDJGFYINA"
                                // placeholderTextColor={colors.white}
                                />

                            </View>
                            <View style={[styles.textContainer]}>

                            <TextInput
                                placeholder='Confirm Password'
                                style={[styles.Textinput]}
                                // value={email}
                                keyboardType="default"
                                autoCapitalize="none"
                                secureTextEntry={true}
                                autoCorrect={false}
                                enablesReturnKeyAutomatically={true}
                                returnKeyType="next"
                            //  onChangeText={(value) => setemail(value)}
                            // placeholder="ANDJGFYINA"
                            // placeholderTextColor={colors.white}
                            />

                        </View>
                        </View>

                        <View style={{ marginTop: 100, marginBottom: 50 }}>
                            <View style={[styles.Btncontainer]}>
                                <TouchableOpacity
                                    //onPress={() => submit()} 
                                    style={[styles.button]}>
                                    <Text style={[styles.text]}>SAVE</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </View>

            </ScrollView>
        </SafeAreaView>
    );

};

export default memo(ResetPassword);
