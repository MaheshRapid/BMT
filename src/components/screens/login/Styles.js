import { StyleSheet, } from 'react-native';

import {
    responsiveHorizontalSize,
    responsiveVerticalSize,
    responsiveFontSize,
    widthPercentageToDP,
    heightPercentageToDP,
} from '../../../assests/styles/stylesheet/responsiveSize';
import { flexVariable } from '../../../assests/styles/stylesheet/flexVariable';
import { fontFamily } from '../../../assests/styles/stylesheet/fonts';
import colors from '../../../assests/styles/stylesheet/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#02ACE6',
        height: 850,
      
        //paddingBottom: 0,
        // alignItems: "center"
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        opacity: 1,
        paddingBottom: 100
    },
    or:{
        color: '#FFFFFF', fontSize: 25, textAlign: 'center'
    },
    textContainer: {

        alignItems: 'center',
        justifyContent: 'center',

    },
    label: {
        color: colors.brown,
        alignSelf: flexVariable.flexStart,
        fontFamily: fontFamily.segoeuiRegular,
        fontSize: responsiveFontSize(18),
    },
    Textinput: {
        fontFamily: fontFamily.segoeuiRegular,
        fontSize: responsiveFontSize(18),
        // backgroundColor: 'white',
        height: 40,
        width: '80%',
        // borderBottomWidth:1, borderBottomColor:'#FBD203'
       
    },
    lineView: {
        borderBottomColor: colors.suvaGrey,
        borderBottomWidth: 2,
        width: '90%',
        alignSelf: 'center',
        margin: 30
    },

    reset: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    resetText: {
        color: colors.grey,
        fontSize: responsiveFontSize(16),
        fontWeight: 'bold'
        // fontFamily: fontFamily.segoeuiRegular,
    },
    btnText: {
        marginTop:150,
        color: colors.white,
        fontSize: responsiveFontSize(20),
        fontWeight: 'bold',
        fontFamily: fontFamily.segoeuiRegular,
        paddingLeft: responsiveHorizontalSize(2)
    },
    signup: {
        marginTop: 25,
        marginBottom: 25,
        width: '98%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    v1:{
        marginTop: 90
    },v2:{
        marginTop: 30
    },
    t1:{
        textAlign: 'center', fontWeight: 'bold', fontSize: 25, color: 'white'
    },
    t2:{
        color: '#FFFFFF', fontSize: 20 
    },
    t3:{
        marginLeft: 50, marginRight: 50, paddingTop: 10 
    },

    Btncontainer: {
        marginTop: 10,
        alignItems: flexVariable.center,
        justifyContent: flexVariable.center,

    },

    button: {
        marginTop: 10,
        alignSelf: 'center',
        alignItems: flexVariable.center,
        justifyContent: flexVariable.center,
        backgroundColor: '#FBD203',
        padding: 10,
        borderRadius: 10,
        width: '50%',
        height: 50,
    },
    text: {
        textAlign: 'center',
        color: colors.white,
        fontFamily: fontFamily.segoeuiSemiBold,
        fontSize: responsiveFontSize(22)
    },
    signupContainer: {
        //  paddingTop: responsiveVerticalSize(31.5)
    },
    conditionView: {
        flexDirection: 'column',
        width: '80%',
        paddingLeft: responsiveHorizontalSize(3.5),
        paddingTop: responsiveVerticalSize(2),
        paddingBottom: responsiveVerticalSize(5)

    },
    conditionText: {
        color: colors.dimGrey,
        fontFamily: fontFamily.segoeuiRegular,
        fontSize: responsiveFontSize(16),
        paddingRight: responsiveVerticalSize(2)
    },
    conditionBtnView: {
        flexDirection: 'row'
    },
    conditionBtnText: {
        color: colors.brown,
        fontSize: responsiveFontSize(15),
        fontFamily: fontFamily.segoeuiRegular,
        paddingRight: responsiveHorizontalSize(2)
    }
});
export default styles;