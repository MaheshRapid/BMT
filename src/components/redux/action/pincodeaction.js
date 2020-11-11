import {apiconfig} from '../../../constants/apiconfig';
import {useSelector, useDispatch} from 'react-redux';

import axios from 'axios';
import {
  pincode_add_status,
  pincode_add_sucess,
  pincode_add_failure,
  pincode_fetch_failure,
  pincode_fetch_status,
  pincode_fetch_sucess
} from './actioncontants';

export const pincode_fetch_action = ({code}) => {
  return function (dispatch) {
    dispatch(onfetching());
    const body = {
      code: code,
    };
    const config = apiconfig('get_pincode.php', body, 'POST');
    // console.log(config);
    axios(config)
      .then((response) => {
        //   console.log("hello")
        // console.log('response', response);
        dispatch(onsucess(response.data.content));
        // NavigationService.navigate('main', {screen: 'TabNav'})
      })
      .catch((error) => {
        // console.log("helloe",error)
        dispatch(onerror(error));
      });
  };

  function onfetching() {
    return {
      type: pincode_fetch_status,
    };
  }
  function onsucess(data) {
    return {
      type: pincode_fetch_sucess,
      data,
    };
  }

  function onerror(errormsg) {
    return {
      type: pincode_fetch_failure,
      errormsg,
    };
  }
};

export const pincode_add_action = ({pincode,rsa_code}) => {
  // console.log("action",name,prcolor,secolor,rsa_code)
  return function (dispatch) {
    dispatch(onfetching());
    const body = {
      
        rsa_code:rsa_code,
        pincode:pincode
    
    };
    const config = apiconfig('create_pincode.php', body, 'POST');
    console.log(config);
    axios(config)
      .then((response) => {
        //   console.log("hello")
        console.log('response', response);
        return dispatch(onsucess(body));
      })
      .catch((error) => {
         console.log("helloe",error)
        dispatch(onerror(error));
      });
  };

  function onfetching() {
    return {
      type: pincode_add_status,
    };
  }
  function onsucess(data) {
    return {
      type: pincode_add_sucess,
      data,
    };
  }

  function onerror(errormsg) {
    return {
      type: pincode_add_failure,
      errormsg,
    };
  }
};
