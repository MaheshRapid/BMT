const catinitialState = {
  size:[],
  isfetchingsize: true,
  sizeerror: false,
  sizeerrormsg: '',
  sizesucess: false,
  };

  const sizereducer = (state = catinitialState, action) => {
    // console.log("hello")
  
    switch (action.type) {
      case 'SIZE_FETCH':
        return {
          ...state,
          isfetchingsize: true,
        };
      case 'SIZE_FETCH_SUCESS':
        console.log("cacacac",action.data)
          return {
          ...state,
          size:action.data,
          isfetchingsize: false,
          sizesucess:true,
        };
  
      case 'SIZE_FETCH_FAILURE':
        return {
          ...state,
          isfetchingsize: false,
          sizeerror: true,
          sizeerrormsg: action.errormsg,
        };
        case 'SIZE_ADD':
        return {
          ...state,
          isfetchingsize: true,
        };
      case 'SIZE_ADD_SUCESS':
        console.log("cacacac",action.data)
          return {
          ...state,
          // size:action.data,
          isfetchingsize: false,
          sizesucess:true,
        };
  
      case 'SIZE_ADD_FAILURE':
        return {
          ...state,
          isfetchingsize: false,
          sizeerror: true,
          sizeerrormsg: action.errormsg,
        };
  
      default:
        return state;
    }
  };
  export default sizereducer;