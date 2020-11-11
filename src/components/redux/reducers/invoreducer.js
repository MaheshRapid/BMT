
const invoinitialState = {
  invo: [],
  invodetail: [],
  isfetchinginvo: false,
  isfetchinginvodeta: false,
  issubmit:false,
  issucess:false,
  returnissucess:false,

  err: '',
};

const invoreducer = (state = invoinitialState, action) => {
  // console.log("hello")

  switch (action.type) {
    case 'INVO':
      return {
        ...state,
        isfetchinginvo: true,
        invo:[],
      };

    case 'INVO_SUCESS':
      console.log("inv dispact",action.data)
      return {
        ...state,
        invo: action.data,
      };
   
    case 'INVO_DETAIL':
      return {
        ...state,
        isfetchinginvodeta: true,
        invodetail:[],
      };
      case 'INVO_DETAIL_SUCESS':
        console.log("inv dtl dispact",action.data)
        return {
          ...state,
          invodetail: action.data,
        };


      case 'R_INVO_DETAIL':
      return {
        ...state,
        returnissucess:true,
      };
    case 'R_INVO_DETAIL_SUCESS':

      return {
        ...state,
        returnissucess:true,
      };
    case 'R_INVO_DETAIL_FAILURE':
      return {
        ...state,
        isfetchinginvodeta: true,
      };

    case 'INVO_SUBMIT':
      return{
        ...state,
        issubmit:true,
        isfetchinginvo: false,
        isfetchinginvodeta: false,
        issucess:false,

      };
    case "INVO_SUBMIT_SUCESS":
      return{
        ...state,
        issubmit:false,
        issucess:true
      };
      case "INVO_SUBMIT_FAILURE":
        return{
          ...state,
          issubmit:false,
          err:action.errormsg
        };
  


    default:
      return state;
  }
};
export default invoreducer;
