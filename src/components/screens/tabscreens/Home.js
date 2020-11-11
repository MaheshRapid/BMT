
import React, { useState,useEffect } from 'react';
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
import { useSelector, useDispatch } from 'react-redux';
import { getall_fetch_action } from '../../redux/action/getallaction';
import { AuthContext } from '../login/context';

const { width, height } = Dimensions.get('screen');



export default function Home({ navigation }) {
    const dispatch = useDispatch();


    useEffect(() => {
        setTimeout(async () => {
          const user_id = await AsyncStorage.getItem('userToken');
          console.log("////////////////////", user_id)
          dispatch(
            getall_fetch_action({
              code1:'8000',
            }),
          );
          
        }, 1000);
      }, []);

      
    const { signOut } = React.useContext(AuthContext);
    return (
        <SafeAreaView>
            <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%', backgroundColor: 'lightWhite', width: width }}>
                <View style={{ marginHorizontal: 20, marginVertical: 10 }}>
                    <Text style={{ color: "grey", fontSize: 20, fontWeight: 'bold', textAlign: 'center', width: width, alignItems: 'center', justifyContent: 'center' }}>
                        Home Page
                    </Text>
                    
                    <Text  style={{ color: "grey", fontSize: 20, fontWeight: 'bold', textAlign: 'center', width: width, alignItems: 'center', justifyContent: 'center' }}
                     onPress={() => {signOut()}}>
                        Logout
                    </Text>
                </View>

            </View>
        </SafeAreaView>


    );
}