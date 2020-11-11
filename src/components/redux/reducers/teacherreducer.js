const teacherinitialState = {
    product:[],
    selectproduct:[],
    isfetchingpro: false,
    proerror: false,
    proerrormsg: '',
    prosucess: false,
    msg:'',
  };
  
  const teacherreducer = (state = teacherinitialState, action) => {
    // console.log("hello")
  
    switch (action.type) {
      case 'TEACEHER_ADD':
        return {
          ...state,
          isfetchingpro: true,
        };
      case 'TEACHER_ADD_SUCESS':
        console.log("ddd",action.data)
  
        return {
          ...state,
          msg:action.data,
          isfetchingpro: false,
          prosucess:true,
        };
  
      case 'TEACHER_ADD_FAILURE':
        return {
          ...state,
          isfetchingpro: false,
          proerror: true,
          proerrormsg: action.errormsg,
        };
        
      
  
      default:
        return state;
    }
  };
  export default teacherreducer;
  