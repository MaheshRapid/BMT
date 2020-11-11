const userinitialState = {
  email: '',
  username: '',
  mobileno: '',
  userid:'',
  pincode:'',
  shipping_add:'',
  city:'',
  isfetching_login:false,
  isposting_signup:false,
  error:false,
  errormsg:"",
  issignup_sucess:false,
  sucess:false,
};

const userReducer = (state = userinitialState, action) => {
  switch (action.type) {

    // Login reducer
    case 'LOGIN_FETCHING':
      return{
        ...state,
        isfetching_login:true,
        errormsg:"",
        error:false,

      }
    case 'LOGIN_SUCESS':
      return {
        ...state,
        userid: action.data.ccode,
        email: action.data.email_id,
        username: action.data.name,
        mobileno: action.data.mobileno,
        pincode:action.data.opincode,
        shipping_add:action.data.shipping_address,
        city:action.data.cityid,
        pincode:action.data.pincode,
        isfetching_login:true,
        sucess:true
      };

    case 'LOGIN_FAILURE':
      return {
        ...state,
        isfetching_login:false,
    error:true,
    errormsg:action.errormsg
      };


      case 'USERS_FETCH':
      return{
        ...state,
        isfetching_login:true,
        errormsg:"",
        error:false,

      }
    case 'USERS_FETCH_SUCESS':
      return {
        ...state,
        userid: action.data.ccode,
        email: action.data.email_id,
        username: action.data.name,
        mobileno: action.data.mobileno,
        pincode:action.data.opincode,
        shipping_add:action.data.shipping_address,
        city:action.data.cityid,
        pincode:action.data.pincode,
        isfetching_login:true,
        sucess:true
      };

    case 'USERS_FETCH_FAILURE':
      return {
        ...state,
        isfetching_login:false,
    error:true,
    errormsg:action.errormsg
      };

      // Signup reducer

    case 'SIGN_POSTING':
      return{
        ...state,
        isposting_signup:true,
        error:false,
        errormsg:"",

      };

    case 'SIGNUP_SUCESS':
      return {
        ...state,
        isposting_signup:false,
        issignup_sucess:true,
        userid: action.data.ccode,
        email:action.data.email_id,
        username: action.data.name,
        mobileno: action.data.mobileno,
      };
    case 'SIGNUP_FAILURE':
      return {
        ...state,
        isposting_signup:false,
        error:true,
        errormsg:action.errormsg
      };


      case 'USER_UPDATE_FETCHING':
        return{
          ...state,
          isfetching_login:true,
          errormsg:"",
          error:false,
  
        }
      case 'USER_UPDATE_SUCESS':
        return {
          ...state,
          userid: action.data.ccode,
          email: action.data.email_id,
          username: action.data.name,
          mobileno: action.data.mobileno,
          pincode:action.data.opincode,
          shipping_add:action.data.shipping_address,
          city:action.data.cityid,
          pincode:action.data.pincode,
          isfetching_login:true,
          sucess:true
        };
  
      case 'USER_UPDATE_FAILURE':
        return {
          ...state,
          isfetching_login:false,
      error:true,
      errormsg:action.errormsg
        };

    default:
      return state;
  }
};
export default userReducer;
