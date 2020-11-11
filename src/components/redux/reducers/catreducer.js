const catinitialState = {
    category:[],
    isfetchingcat: true,
    caterror: false,
    caterrormsg: '',
    catsucess: false,
  };
  
  const catreducer = (state = catinitialState, action) => {
    // console.log("hello")
  
    switch (action.type) {
      case 'CAT_ADD':
        return {
          ...state,
          isfetchingcat: true,
        };
      case 'CAT_ADD_SUCESS':
        console.log("cacacac",action.data)
          return {
          ...state,
          // category:action.data,
          isfetchingcat: false,
          catsucess:true,
        };
  
      case 'CAT_ADD_FAILURE':
        return {
          ...state,
          isfetchingcat: false,
          caterror: true,
          caterrormsg: action.errormsg,
        };
      case 'CAT_FETCH':
        return {
          ...state,
          isfetchingcat: true,
          category:[],
        };
      case 'CAT_FETCH_SUCESS':
        console.log("cacacac",action.data)
          return {
          ...state,
          category:action.data,
          isfetchingcat: false,
          catsucess:true,
        };
  
      case 'CAT_FETCH_FAILURE':
        return {
          ...state,
          isfetchingcat: false,
          caterror: true,
          category:[],
          caterrormsg: action.errormsg,
        };
  
      default:
        return state;
    }
  };
  export default catreducer;
  