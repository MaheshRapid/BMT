const colorinitialState = {
  app_name: '',
  app_logo: '',
  app_pcolor: '#508CF5',
  app_scolor: '#FF6969',
  isfetching: false,
  error: false,
  errormsg: '',
  rsacode: '',
  sucess: false,
  sucessfetc: false,
  banner: '',
  stock: '',
  paymentgateway: '',
  tqty: '',
  tqtyint:'',
  discount:'',
  sgst:'',
  cgst:'',
  igst:'',
  vcode:'',
};

const appinforeducer = (state = colorinitialState, action) => {
  // console.log("hello")

  switch (action.type) {
    case 'APP_INFO':
      return {
        ...state,
        isfetching: true,
      };
    case 'APP_INFO_SUCESS':
       console.log("ddd",action.data)

      return {
        ...state,
        sucessfetc:true,
        isfetching: false,
        app_pcolor: action.data.app_primarycolor,
        app_scolor: action.data.app_secondarycolor,
        app_name: action.data.app_name,
        rsacode: action.data.grs_code,
       
        
        banner: action.data.banner,
        stock: action.data.stock,
        paymentgateway: action.data.payment_gateway,
        tqtyint: parseInt(action.data.TQTY),
        tqty: action.data.TQTY,
        discount:action.data.DISCOUNT,
        sgst:action.data.SGST,
        cgst:action.data.CGST,
        igst:action.data.IGST,
        vcode:action.data.vcode,
      };

    case 'APP_INFO_FAILURE':
      return {
        ...state,
        isfetching_login: false,
        error: true,
        errormsg: action.errormsg,
      };

    /////

    case 'APP_UPDATE_INFO':
      return {
        ...state,
        isfetching: true,
        error: false,
      };
    case 'APP_INFO_UPDATE_SUCESS':
      // console.log("ddd",action.data)
      return {
        ...state,
        app_pcolor: action.data.pcolor,
        app_scolor: action.data.scolor,
        app_name: action.appname,
        banner:action.banner,
        stock:action.stock,
        paymentgateway:action.paygate,
        tqty:action.tqty,
        isfetching: false,
        sucess: true,
      };

    case 'APP_INFO_UPDATE_FAILURE':
      return {
        ...state,
        isfetching: false,
        error: true,
        errormsg: action.errormsg,
      };

    default:
      return state;
  }
};
export default appinforeducer;
