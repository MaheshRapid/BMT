import React, {useState, useEffect} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Button,
  Alert,
  Image,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  scolor,
  pcolor,
  appname,
  rsacode,
  appinfofetch,
  appinfoerror,
  appinfoerrormsg,
  statt,
  tqty
} from '../redux/selector/appinfoselector';
import Icon from 'react-native-vector-icons/Feather';
import DropDownPicker from 'react-native-dropdown-picker';

import {app_info_update} from '../redux/action/appinfoaction';
import Spinner from 'react-native-loading-spinner-overlay';
import ImagePicker from 'react-native-image-picker';
import tinycolor from 'tinycolor2';
import ColorPicker from 'react-native-material-color-picker';

const AppinfoScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const primary_color = useSelector(pcolor);
  const tqtyrange = useSelector(tqty);
  const secondary_color = useSelector(scolor);
  const app_name = useSelector(appname);
  const rsa_code = useSelector(rsacode);
  const stat = useSelector(statt);
  const fetchstatus = useSelector(appinfofetch);
  const errorstatus = useSelector(appinfoerror);
  const errormsg = useSelector(appinfoerrormsg);


  const [name, setname] = useState(app_name);
  const [tqty1, settqty] = useState(tqtyrange);
  const [prcolor, setprcolor] = useState('000000');
  const [secolor, setsecolor] = useState('ffffff');
  const [stock, setstock] = useState('y');
  const [banner, setbanner] = useState('');
  const [paygate, setpaygate] = useState('y');
  

  const gbgb = [{name:"suchith",value:"124",sgh:"ssss"},{name:"akfil",value:"124444",sgh:"ssss"}]
  // const [test, settest] = useState(plist.map((product, index) => ( 
  //   {
  //     label: product.name,
  //               value: product.value,
  //   }
  // )));

  console.log("tqty",tqty1,"name",name)
 
  useEffect(() => {
    setprcolor(primary_color);
    setsecolor(secondary_color);
  }, []);

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
        const source1111 = {uri: response.uri};
        const source = {
          uri: 'data:' + response.fileName + ';base64,' + response.data,
        };
        //  console.log(source)
        setbanner(source);
      }
    });
  };
  //  console.log(banner)
  function nee() {
    if (stat) {
      navigation.navigate('Home');
    } else if (errorstatus) {
      Alert.alert(
        'Error',
        'Check ur inputs',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
    } else {
    }
  }

  const onsubmitapp = () => {
    if (name == '' || prcolor == '' || secolor == '') {
      Alert.alert(
        'Error',
        'Enter all values',
        [
          
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
    } else {
       console.log(tqty1)
      dispatch(
        app_info_update({
          name,
          prcolor,
          secolor,
          rsa_code,
          banner,
          stock,
          paygate,
          tqty1
        }),
      );
      setTimeout(() => {
        nee();
      }, 1000);
    }
  };

  const pchangeColor = (colorRgb) => {
    //  console.log("pri",colorRgb )
    setprcolor(colorRgb);
  };
  const schangecolor = (colorRgb) => {
    setsecolor(colorRgb);
    // console.log("sec",colorRgb )
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <Spinner
          visible={fetchstatus}
          textContent={'Loading...'}
          //   textStyle={styles.spinnerTextStyle}
        /> */}

        <Text style={{margin: 20, fontSize: 30}}>App Info</Text>
        <View>
          <Text style={{fontSize: 20}}>App Name</Text>
          <TextInput
            placeholder="App Name"
            value={name}
            onChangeText={(value) => setname(value)}
            style={{borderWidth: 1, borderColor: 'black', margin: 20}}
          />


          <Text style={{fontSize: 20}}>Primary Color</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View>
              <TextInput
                placeholder="Primary Color"
                value={prcolor}
                style={{
                  height: 50,
                  borderWidth: 1,
                  borderColor: 'black',
                  margin: 20,
                }}
              />
            </View>
            <View
              style={{height: 50, width: 100, backgroundColor: prcolor}}></View>
          </View>
          <View
            style={{
              backgroundColor: 'black',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {/* --------------------------------------------------------------------------- */}
            {/* Primary picker */}
            <ColorPicker
              //  ref={colorPicker}
              oldColor={prcolor}
              onColorChange={(color) => {
                pchangeColor(color);
              }}
              style={{width: 200, height: 200}}
            />
            {/* -------------------------------------------------------------------------------------- */}
          </View>
          <Text style={{fontSize: 20, marginTop: '2%'}}>Secondary Color</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View>
              <TextInput
                placeholder="secondary Color"
                value={secolor}
                style={{
                  height: 50,
                  borderWidth: 1,
                  borderColor: 'black',
                  margin: 20,
                }}
              />
            </View>
            <View
              style={{height: 50, width: 100, backgroundColor: secolor}}></View>
          </View>
          <View
            style={{
              backgroundColor: 'black',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {/* --------------------------------------------------------------------------- */}
            {/* secondary picker */}
            <ColorPicker
              //  ref={colorPicker}
              oldColor={secolor}
              onColorChange={(color) => {
                schangecolor(color);
              }}
              style={{width: 200, height: 200}}
            />
            {/* -------------------------------------------------------------------------------------- */}
          </View>
        </View>

        {/* image picker */}
        <View style={{marginTop: '1%'}}>
          <Text style={{fontSize: 20, marginTop: '2%'}}>Banner Upload</Text>
          {banner == '' ? (
            <>
            <Text>Please Upload Banner </Text>
            </>
          ) : (
            <Image
              source={banner}
              style={{width:'100%', height: 202, marginTop: 5}}
            />
          )}
        </View>

        <TouchableOpacity
          style={{
            marginTop: 10,
            height: 45,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
            backgroundColor: '#508CF5',
          }}
          onPress={() => {
            handleChoosePhoto();
          }}>
          <Text>{banner==""?("Upload Banner"):("Update banner")}</Text>
        </TouchableOpacity>

        <Text style={{fontSize: 20, marginTop: '2%'}}>Stock</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <DropDownPicker
            items={[
              {
                label: 'YES',
                value: 'y',
                icon: () => <Icon name="thumbs-up" size={18} color="#339966" />,
              },
              {
                label: 'NO',
                value: 'n',
                icon: () => <Icon name="thumbs-down" size={18} color="#900" />,
              },
            ]}
            defaultValue={stock}
            containerStyle={{height: 40,width:100}}
            style={{backgroundColor: '#fafafa'}}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={(item) => setstock(item.value)}
          />
        </View>

        <Text style={{fontSize: 20, marginTop: '2%'}}>PaymentGateway</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <DropDownPicker
            items={[
              {
                label: 'YES',
                value: 'y',
                icon: () => <Icon name="thumbs-up" size={18} color="#339966" />,
              },
              {
                label: 'NO',
                value: 'n',
                icon: () => <Icon name="thumbs-down" size={18} color="#900" />,
              },
            ]}
            defaultValue={paygate}
            containerStyle={{height: 40,width:100}}
            style={{backgroundColor: '#fafafa'}}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={(item) => setpaygate(item.value)}
          />
        </View>

        <Text style={{fontSize: 20}}>TQTY</Text>


        <TextInput
          placeholder="tqty"
          value={tqty1}
          onChangeText={(value) => settqty(value)}
          style={{borderWidth: 1, borderColor: 'black', margin: 20}}
        />

       

        {/* -------------------------- */}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '2%',
          }}>
          <View>
            <TouchableOpacity
              style={{
                marginTop: 5,
                height: 45,
                width: 150,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 30,
                backgroundColor: '#508CF5',
              }}
              onPress={() => {
                navigation.navigate('Home');
              }}>
              <Text style={styles.addToCardBtnText}> Cancel </Text>
            </TouchableOpacity>
          </View>
          <View style={{width: '7%'}}></View>
          <View>
            <TouchableOpacity
              style={{
                marginTop: 5,
                height: 45,
                width: 150,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 30,
                backgroundColor: '#508CF5',
              }}
              onPress={() => {
                onsubmitapp();
              }}>
              <Text style={styles.addToCardBtnText}>Submit </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  addToCardBtnText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default AppinfoScreen;
