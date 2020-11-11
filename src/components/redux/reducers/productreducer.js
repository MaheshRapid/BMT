const productinitialState = {
  product:[],
  selectproduct:[],
  isfetchingpro: false,
  proerror: false,
  proerrormsg: '',
  prosucess: false,
};

const productreducer = (state = productinitialState, action) => {
  // console.log("hello")

  switch (action.type) {
    case 'PRODUCT_ADD':
      return {
        ...state,
        isfetchingpro: true,
      };
    case 'PRODUCT_ADD_SUCESS':
      // console.log("ddd",action.data)

      return {
        ...state,
        product:action.data,
        rsacode:action.data.rsa_code,
        isfetchingpro: false,
        prosucess:true,
      };

    case 'PRODUCT_ADD_FAILURE':
      return {
        ...state,
        isfetchingpro: false,
        proerror: true,
        proerrormsg: action.errormsg,
      };
      
    case 'PRODUCT_FETCH':
      return {
        ...state,
        isfetchingpro: true,
        product:[],
      };
    case 'PRODUCT_FETCH_SUCESS':
      // console.log("ddd",action.data)

      return {
        ...state,
        product:action.data,
        isfetchingpro: false,
        prosucess:true,
      };

    case 'PRODUCT_FETCH_FAILURE':
      return {
        ...state,
        product:[],
        isfetchingpro: false,
        proerror: true,
        proerrormsg: action.errormsg,
      };
      case 'PRODUCT_SELECT':
        // console.log("dddiii",action.product)
        return{
          ...state,
          selectproduct:action.product
        }

    default:
      return state;
  }
};
export default productreducer;
