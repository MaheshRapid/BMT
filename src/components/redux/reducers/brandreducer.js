const brandinitialState = {
  brand:[],
  isfetchingbrand: true,
  branderror: false,
  branderrormsg: '',
  brandsucess: false,
  };

  const brandreducer = (state = brandinitialState, action) => {
    // console.log("hello")

    switch (action.type) {
      case 'BRAND_ADD':
      return {
        ...state,
        isfetchingbrand: true,
      };
    case 'BRAND_ADD_SUCESS':
      return {
          ...state,
          // brand:[...state.brand, action.data],
          isfetchingbrand: false,
          brandsucess:true,
      };

    case 'BRAND_ADD_FAILURE':
      return {
          ...state,
          isfetchingbrand: false,
          branderror: true,
          branderrormsg: action.errormsg,
      };
      case 'BRAND_FETCH':
        return {
          ...state,
          isfetchingbrand: true,
        };
      case 'BRAND_FETCH_SUCESS':
        console.log("cacacac",action.data)
          return {
          ...state,
          brand:action.data,
          isfetchingbrand: false,
          brandsucess:true,
        };
  
      case 'BRAND_FETCH_FAILURE':
        return {
          ...state,
          isfetchingbrand: false,
          branderror: true,
          branderrormsg: action.errormsg,
        };
     
  
      default:
        return state;
    }
  };
  export default brandreducer;