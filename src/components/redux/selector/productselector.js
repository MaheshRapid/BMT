// const productinitialState = {
//     product=[],
//     isfetchingpro: false,
//     proerror: false,
//     proerrormsg: '',
//     prosucess: false,
//   };



export const productfetchstatus = state => state.productreducer.isfetchingpro;
export const producterror = state => state.productreducer.proerror;
export const producterrmsg = state => state.productreducer.proerrormsg;
export const productsucess = state => state.productreducer.prosucess;
export const productlist = state => state.productreducer.product;
export const productselect = state=>state.productreducer.selectproduct;
export const statt = state => state.productreducer.sucess;
export const rsacode = state => state.productreducer.rsacode;


// productfetch,producterror,producterrmsg,productsucess,productlist