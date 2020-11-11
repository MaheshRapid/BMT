const getallinitialState = {
    city:[],
    state:[],
    qual:[],
    exp:[],
    notice:[],
    subject:[],
    grade:[],
    empcat:[],


    isfetchingcat: true,
    caterror: false,
    caterrormsg: '',
    catsucess: false,
  };
  
  const getallreducer = (state = getallinitialState, action) => {
    // console.log("hello")
  
    switch (action.type) {
     
      case 'GETALL_FETCH':
        return {
            ...state,
            isfetchingcat: true,
            city:[],
            state:[],
            qual:[],
            exp:[],
            notice:[],
            subject:[],
            grade:[],
            empcat:[],
        };
      case 'GETALL_FETCH_SUCESS':
        console.log("cacacac",action.data1,action.data2,action.data3,action.data4,action.data5,action.data6,action.data7,action.data8)
          return {
          ...state,
          city:action.data1,
          state:action.data2,
          qual:action.data3,
          exp:action.data4,
          notice:action.data5,
          subject:action.data6,
          grade:action.data7,
          empcat:action.data8,

          isfetchingcat: false,
          catsucess:true,
        };
  
      case 'GETALL_FETCH_FAILURE':
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
  export default getallreducer;
  