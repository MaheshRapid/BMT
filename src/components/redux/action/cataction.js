import {apiconfig} from '../../../constants/apiconfig';
import axios from 'axios';
import {cat_fetch_status,cat_fetch_sucess,cat_fetch_failure,cat_add_status,cat_add_sucess,cat_add_failure} from "./actioncontants"
 

export const cate_fetch_action = ({code}) => {
    
  return  function (dispatch) {
    dispatch(onfetching())
    const body = {
      grs_code:code,
    };
    const config = apiconfig('cat_list.php', body, 'POST');
    axios(config)
      .then((response) => {
         console.log('response', response);
        return(dispatch(onsucess(response.data.content)))

      })
      .catch((error) => {
        dispatch(onerror(error))
      });
  };
  
  function onfetching(){
    return {
      type: cat_fetch_status,
  }
  }
  function onsucess(data){
    return {
        type: cat_fetch_sucess,
        data
    }
}

function onerror(errormsg){
    return {
        type: cat_fetch_failure,
        errormsg
    }

}
};
export const cate_add_action = ({cat_desc,code,catimg}) => {
  // console.log("action",name,prcolor,secolor,rsa_code)
  return function (dispatch) {
    dispatch(onfetching());
    const body = {
        cat_desc:cat_desc,
        grs_code:code,
        cat_img:catimg
    
    };
    const config = apiconfig('cat_create.php', body, 'POST');
    console.log(config);
    axios(config)
      .then((response) => {
        //   console.log("hello")
        console.log('response', response.data.Message);
        body["smsg"] = response.data.Message;
        console.log(body,"------")
        return dispatch(onsucess(body));
      })
      .catch((error) => {
         console.log("helloe",error)
        dispatch(onerror(error));
      });
  };

  function onfetching() {
    return {
      type: cat_add_status,
    };
  }
  function onsucess(data) {
    return {
      type: cat_add_sucess,
      data,
    };
  }

  function onerror(errormsg) {
    return {
      type: cat_add_failure,
      errormsg,
    };
  }
};


