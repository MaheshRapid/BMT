import {apiconfig} from '../../../constants/apiconfig';

import axios from 'axios';
import {
  invo_status,
  invo_sucess,
  invo_failure,
  invo_detail_status,
  invo_detail_sucess,
  invo_detail_failure,
  invo_submit_status,
  invo_submit_sucess,
  invo_submit_failure,
  r_invo_detail_status,
  r_invo_detail_sucess,
  r_invo_detail_failure,
} from './actioncontants';

export const get_invo = ({grs_code,ccode}) => {
  return function (dispatch) {
    dispatch(onfetching());
    const body = {
      grs_code: grs_code,
      vcode:'0001',
      ccode:ccode,
   
    };
    const config = apiconfig('invoice_list.php', body, 'POST');
    // console.log(config);
    axios(config)
      .then((response) => {
        //   console.log("hello")
        console.log('----response Invo----', response);
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
      type: invo_status,
    };
  }
  function onsucess(data) {
    return {
      type: invo_sucess,
      data,
    };
  }

  function onerror(errormsg) {
    return {
      type: invo_failure,
      errormsg,
    };
  }
};

export const get_invo_detail = ({grs_code, vcode, invno}) => {
  return function (dispatch) {
    dispatch(onfetching());
    const body = {
      grs_code: grs_code,
      vcode: vcode,
      invno: invno,
    };
    const config = apiconfig('invoice_details_list.php', body, 'POST');
    // console.log(config);
    axios(config)
      .then((response) => {
        //   console.log("hello")
        console.log('----response Invo detail----', response);
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
      type: invo_detail_status,
    };
  }
  function onsucess(data) {
    return {
      type: invo_detail_sucess,
      data,
    };
  }

  function onerror(errormsg) {
    return {
      type: invo_detail_failure,
      errormsg,
    };
  }
};


export const submit_inv = (result) => {
  return function (dispatch) {
    dispatch(onfetching());
    const body = result;
    const config = apiconfig('create_invoice.php', body, 'POST');
    console.log(config);
    axios(config)
      .then((response) => {
         console.log("hello")
        console.log('----response s Invo----', response);
        dispatch(onsucess(response.data.content));
      })
      .catch((error) => {
        console.log("helloe",error)
        dispatch(onerror(error));
      });
  };

  function onfetching() {
    return {
      type: invo_submit_status,
    };
  }
  function onsucess(data) {
    return {
      type: invo_submit_sucess,
      data,
    };
  }

  function onerror(errormsg) {
    return {
      type: invo_submit_failure,
      errormsg,
    };
  }
};


export const return_invo_detail = ({grs_code, invno, pid, return_date}) => {
  return function (dispatch) {
    dispatch(onfetching());
    const body = {
      grs_code: grs_code,
      invno: invno,
      pid: pid,
      return_date: return_date,
    };
    const config = apiconfig('invdtl_prod_cancel_api.php', body, 'POST');
    // console.log(config);
    axios(config)
      .then((response) => {
        //   console.log("hello")
        console.log('----response Invo detail return----', response);
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
      type: r_invo_detail_status,
    };
  }
  function onsucess(data) {
    return {
      type: r_invo_detail_sucess,
      data,
    };
  }

  function onerror(errormsg) {
    return {
      type: r_invo_detail_failure,
      errormsg,
    };
  }
};

export const return_invo_details = ({grs_code, invno, pid, return_date}) => {
  return function (dispatch) {
    dispatch(onfetching());
    const body = {
      grs_code: grs_code,
      invno: invno,
      pid: pid,
      return_date: return_date,
    };
    const config = apiconfig('invdtl_cancel.php', body, 'POST');
    // console.log(config);
    axios(config)
      .then((response) => {
        //   console.log("hello")
        console.log('----response Invo detail return----', response);
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
      type: r_invo_detail_status,
    };
  }
  function onsucess(data) {
    return {
      type: r_invo_detail_sucess,
      data,
    };
  }

  function onerror(errormsg) {
    return {
      type: r_invo_detail_failure,
      errormsg,
    };
  }
};