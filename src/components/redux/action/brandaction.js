import {apiconfig} from '../../../constants/apiconfig';
import {useSelector, useDispatch} from 'react-redux';

import axios from 'axios';
import {
  brand_add_status,
  brand_add_sucess,
  brand_add_failure,
  brand_fetch_failure,
  brand_fetch_status,
  brand_fetch_sucess
} from './actioncontants';

export const brand_fetch_action = ({code}) => {
  return function (dispatch) {
    dispatch(onfetching());
    const body = {
      grs_code: code,
    };
    const config = apiconfig('brand_list.php', body, 'POST');
    axios(config)
      .then((response) => {
         console.log('response', response);
        return(dispatch(onsucess(response.data.content)))

      })
      .catch((error) => {
        dispatch(onerror(error))
      });
  };

  function onfetching() {
    return {
      type: brand_fetch_status,
    };
  }
  function onsucess(data) {
    return {
      type: brand_fetch_sucess,
      data,
    };
  }

  function onerror(errormsg) {
    return {
      type: brand_fetch_failure,
      errormsg,
    };
  }
};

export const brand_add_action = ({name,code}) => {
  // console.log("action",name,prcolor,secolor,rsa_code)
  return function (dispatch) {
    dispatch(onfetching());
    const body = {
      
        rsa_code:code,
        brand_name:name
    
    };
    const config = apiconfig('create_brand.php', body, 'POST');
    console.log(config);
    axios(config)
      .then((response) => {
        //   console.log("hello")
        console.log('response', response);
        return dispatch(onsucess(response.data.content));
      })
      .catch((error) => {
         console.log("helloe",error)
        dispatch(onerror(error));
      });
  };

  function onfetching() {
    return {
      type: brand_add_status,
    };
  }
  function onsucess(data) {
    return {
      type: brand_add_sucess,
      data,
    };
  }

  function onerror(errormsg) {
    return {
      type: brand_add_failure,
      errormsg,
    };
  }
};
