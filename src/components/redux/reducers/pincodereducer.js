const pininitialState = {
    name:"",
    pincode:"",
    isfetching:false,
    error:false,
    rsacode:"1000",
    sucess:false
  };

  const pincodereducer = (state = pininitialState, action) => {
    // console.log("hello")

    switch (action.type) {

          case 'PINCODE_FETCH_SUCESS':
            // console.log("ddd",action.data)
           
            return {
              ...state,
              pincode:action.data.pincode,
              rsacode:action.data.rsa_code,
              isfetching:false,
             
            };
           
      
          case 'PINCODE_FETCH_FAILURE':
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
  export default pincodereducer;