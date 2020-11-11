import {apiconfig} from '../../../constants/apiconfig';
import axios from 'axios';
import {getall_fetch_status,getall_fetch_sucess,getall_fetch_failure} from "./actioncontants"
 

export const getall_fetch_action = ({code1}) => {
    
  return  function (dispatch) {
    dispatch(onfetching())
    const body = {
        rsa_code:code1,
    };
    console.log('inside')
    const config = apiconfig('all_list.php', body, 'POST');
    axios(config)
      .then((response) => {
         console.log('response  777777 all_list=================================================', response.data);
        return(dispatch(onsucess(response.data.city,response.data.state,response.data.qualification,response.data.experiance,response.data.notice_period,response.data.subjects,response.data.grade,response.data.emp_cat)))

      })
      .catch((error) => {
        dispatch(onerror(error))
      });
  };
  
  function onfetching(){
    return {
      type: getall_fetch_status,
  }
  }
  function onsucess(data1,data2,data3,data4,data5,data6,data7,data8){
    return {
        type: getall_fetch_sucess,
        data1,data2,data3,data4,data5,data6,data7,data8
    }
}

function onerror(errormsg){
    return {
        type: getall_fetch_failure,
        errormsg
    }

}
};
