import {apiconfig} from '../../../constants/apiconfig';
import axios from 'axios';
import {teacher_add_status,teacher_add_sucess,teacher_add_failure} from "./actioncontants"
import {  Alert } from "react-native";





export const teacher_add_action = ({grs_code,name,gender,plotno,landmark,city,state,pincode,mobile,amobile,qual,exp,datefrom,dateto,sname,notice,subject,grade,empcat,additional,banner}) => {
  return function (dispatch) {
    dispatch(onfetching());
    const body = {
        grs_code:grs_code,
        teachername:name,
        gender:gender,
        flat_plotno:plotno,
        aptment_localoty:landmark,

        cityid:city,
        stateid:state,
        pincode:pincode,
        mobileno:mobile,
        alternatemobileno:amobile,

        qualificationid:qual,
        expid:exp,
        pefromdate:datefrom,
        petodate:dateto,
        peschoolname:sname,

        noticeperiodid:notice,
        subject:subject, 
        gradeid:grade,
        emp_catid:empcat,
        addlnotes:additional,

        PHOTO:banner,
       
    };
    const config = apiconfig('create_teacher.php', body, 'POST');
    console.log(config);
    axios(config)
      .then((response) => {
        //   console.log("hello")
        console.log('response', response.data.Message);
        body["smsg"] = response.data.Message;
        Alert.alert(response.data.Message);
        console.log(body,"------")
        return dispatch(onsucess(response.data.Message));
      })
      .catch((error) => {
         console.log("helloe",error)
        dispatch(onerror(error));
      });
  };

  function onfetching() {
    return {
      type: teacher_add_status,
    };
  }
  function onsucess(data) {
    return {
      type: teacher_add_sucess,
      data,
    };
  }

  function onerror(errormsg) {
    return {
      type: teacher_add_failure,
      errormsg,
    };
  }
};


