import {apiconfig} from '../../../constants/apiconfig';
import axios from 'axios';
import {product_fetch_status,product_fetch_sucess,product_fetch_failure,product_add_status,product_add_sucess,product_add_failure,product_select} from "./actioncontants"


export const productfetch = ({code, catid}) => {
    
  return  function (dispatch) {
    dispatch(onfetching())
    const body = {
        grs_code:code,
        catid:catid
    };
    const config = apiconfig('get_product.php', body, 'POST');
    axios(config)
      .then((response) => {
         console.log('response', response.data.content);
        return(dispatch(onsucess(response.data.content)))

      })
      .catch((error) => {
        dispatch(onerror(error))
      });
  };
  
  function onfetching(){
    return {
      type: product_fetch_status,
  }
  }
  function onsucess(data){
    return {
        type: product_fetch_sucess,
        data
    }
}

function onerror(errormsg){
    return {
        type: product_fetch_failure,
        errormsg
    }

}
};

export const productselect = ({product}) => {
    console.log(product)
 return{
   type:product_select,
   product
 }
  

}; 


export const product_add_action = ({rsa_code,category,pname,desc,mrp,size,price,brand,image,CGST,SGST,IGST,HSN}) => {
  // console.log("action",name,prcolor,secolor,rsa_code)
  return function (dispatch) {
    dispatch(onfetching());
    const body = {
        grs_code:rsa_code,
        catid:category,
        pname:pname,
        desc:desc,
        mrp:mrp,
        sizeid:size,
        sprice:price,
        brandid:brand,
        pimg:image,
        cgst:CGST,
        sgst:SGST,
        igst:IGST,
        HSN_CODE:HSN
    };
    const config = apiconfig('create_product.php', body, 'POST');
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
      type: product_add_status,
    };
  }
  function onsucess(data) {
    return {
      type: product_add_sucess,
      data,
    };
  }

  function onerror(errormsg) {
    return {
      type: product_add_failure,
      errormsg,
    };
  }
};


