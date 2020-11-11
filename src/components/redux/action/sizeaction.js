import {apiconfig} from '../../../constants/apiconfig';

import axios from 'axios';
import {
  size_add_status,
  size_add_sucess,
  size_add_failure,
  size_fetch_failure,
  size_fetch_status,
  size_fetch_sucess
} from './actioncontants';

export const size_fetch_action = ({code}) => {
  return function (dispatch) {
    dispatch(onfetching());
    const body = {
      grs_code: code,
    };
    const config = apiconfig('size_list.php', body, 'POST');
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
      type: size_fetch_status,
    };
  }
  function onsucess(data) {
    return {
      type: size_fetch_sucess,
      data
    };
  }

  function onerror(errormsg) {
    return {
      type: size_fetch_failure,
      errormsg
    };
  }
};

export const size_add_action = ({desc,code,stock}) => {
  // console.log("action",name,prcolor,secolor,rsa_code)
  return function (dispatch) {
    dispatch(onfetching());
    const body = {
      
        grs_code:code,
        desc:desc,
        catid:stock
    
    };
    const config = apiconfig('create_size.php', body, 'POST');
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
      type: size_add_status,
    };
  }
  function onsucess(data) {
    return {
      type: size_add_sucess,
      data,
    };
  }

  function onerror(errormsg) {
    return {
      type: size_add_failure,
      errormsg,
    };
  }
};
