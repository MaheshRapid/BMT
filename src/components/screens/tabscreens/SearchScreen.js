import React,{useContext} from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, Dimensions, TouchableOpacity } from "react-native";

// import Icon from 'react-native-vector-icons/Ionicons';

// import { Button } from "react-native-paper";


export default SearchScreen = ({}) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, padding: 16 }}>
          <Text 
          style={{ 
            fontSize: 25, 
            textAlign: 'center', 
            marginBottom: 16
            }}>
              search Screen!
              </Text>
             
        </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
}
});

