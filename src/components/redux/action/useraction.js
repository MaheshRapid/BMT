import {apiconfig} from '../../../constants/apiconfig';
import axios from 'axios';
import {login_sucess,login_failure,signup_sucess,signup_failure,login_fetch,sign_post,users_fetch_failure,users_fetch_status,users_fetch_sucess,users_update_sucess,users_update_failure,users_update_fetch} from "./actioncontants"


export const userlogin = ({email, password}) => {
    
  return  function (dispatch) {
    dispatch(onfetching());
    const body = {
      email: email,
      password: password,
    };
    const config = apiconfig('login.php', body, 'POST');
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
      type: login_fetch,
  };
  }
  function onsucess(data){
    return {
        type: login_sucess,
        data,
    };
}

function onerror(errormsg){
    return {
        type: login_failure,
        errormsg,
    };

}
};

export const usersignup = ({email,password,name,mobileno,code}) => {
    
    return  function (dispatch) {
      dispatch(onposting())
      const body = {
            email: email,
            password: password,
            username: name,
            mobileno: mobileno,
            rsa_code:code
      };
      const config = apiconfig('signup.php', body, 'POST');
      // console.log(config)
      axios(config)
        .then((response) => {
          console.log('response', response);
          return(dispatch(onsucessign(response.data.content)))
  
        })
        .catch((error) => {
            console.log('error', error);
          dispatch(onerrorsign(error))
        });
    };

    function onposting(){
      return {
        type: sign_post,
    }
  }
    function onsucessign(data){
      return {
          type: signup_sucess,
          data
      }
  }
  
  function onerrorsign(errormsg){
      return {
          type: signup_failure,
          errormsg
      }
  
  }
  };

export const users_fetch_action = ({user_id, code}) => {
    return function (dispatch) {
      dispatch(onfetching());
      const body = {
        ccode: user_id,
        rsa_code: code,
      };
      const config = apiconfig('get_customer.php', body, 'POST');
      axios(config)
        .then((response) => {
           console.log('response>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>get_customer', response);
          return(dispatch(onsucess(response.data.content)))
  
        })
        .catch((error) => {
          dispatch(onerror(error))
        });
    };
  
    function onfetching() {
      return {
        type: users_fetch_status,
      };
    }
    function onsucess(data) {
      return {
        type: users_fetch_sucess,
        data,
      };
    }
  
    function onerror(errormsg) {
      return {
        type: users_fetch_failure,
        errormsg,
      };
    }
  };

  export const users_update = ({rsa_code,c_id,username,email,mobile,address1,city2,pincode}) => {
    
    return  function (dispatch) {
      dispatch(onposting())
      const body = {
            grs_code:rsa_code,
            ccode:c_id,
            email: email,
            username: username,
            mobileno: mobile,
            address:address1,
            city:city2,
            pincode:pincode

        
      };
      const config = apiconfig('update_customer.php', body, 'POST');
      // console.log(config)
      axios(config)
        .then((response) => {
          console.log('response   update profile', response);
          return(dispatch(onsucessign(response.data.content)))
  
        })
        .catch((error) => {
            console.log('error', error);
          dispatch(onerrorsign(error))
        });
    };

    function onposting(){
      return {
        type: users_update_fetch,
    }
  }
    function onsucessign(data){
      return {
          type: users_update_sucess,
          data
      }
  }
  
  function onerrorsign(errormsg){
      return {
          type: users_update_failure,
          errormsg
      }
  
  }
  };