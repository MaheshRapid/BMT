const cartinitialState = {
  cartlist: [],
  cartlength: 0,
  carttqty: [],
  carttotal: 0,
  carttax: 0,
  bagstotal: 0,
  disctotal: 0,
};

const cartreducer = (state = cartinitialState, action) => {
  // console.log('cartreducer');
  switch (action.type) {
    case 'CART_LIST_ADD':
      const existingProduct = state.cartlist.find(
        (existingPhone) => action.product.pid === existingPhone.pid,
      );
      const total = state.carttotal + parseInt(action.product.mrp);
      const dtotal = state.disctotal + parseInt(action.product.mrp-action.product.sprice);
      // const qtotal = state.bagstotal + qty;
      console.log("dd=================================================",dtotal)
      const taxtotal =
        state.carttax +
        parseInt(action.product.CGST) +
        parseInt(action.product.SGST) +
        parseInt(action.product.IGST);
      if (existingProduct) {
        // const objIndex = state.carttqty.findIndex(
        //   (obj) => obj.productid == action.product.pid,
        // );
        const existingtqty = state.carttqty.find(
          (existingPhone) => action.product.pid === existingPhone.productid,
        );
        existingtqty.qty += 1;

        return {
          ...state,

          cartlength: state.cartlength,
          carttotal: total,
          carttax: taxtotal,
          disctotal: dtotal,
          // bagstotal: btotal,
        };
      } else {
        const tqty = {
          productid: action.product.pid,
          qty: 1,
          bag:1,
          mrp: parseInt(action.product.mrp),
        };

        return {
          ...state,

          cartlist: [...state.cartlist, action.product],
          carttqty: [...state.carttqty, tqty],
          cartlength: state.cartlength + 1,
          carttotal: total,
          carttax: taxtotal,
          disctotal: dtotal,
        };
      }

    case 'CART_LIST_CANCEL':
      const edittotal = state.carttqty.findIndex(
        (obj) => obj.productid == action.product_id,
      );
      // const taxtotal = state.carttax+cartlist[edittotal].CGST+existingtqty.SGST+existingtqty.IGST

      const removeitem = state.cartlist.filter(
        (cart) => action.product_id !== cart.pid,
      );
      const removetqty = state.carttqty.filter(
        (tqt) => action.product_id !== tqt.productid,
      );

      return {
        ...state,
        carttotal: carttotal - parseInt(carttqty[edittotal].mrp),
        cartlist: removeitem,

        cartlength: state.cartlength - 1,
        carttqty: removetqty,
      };

    case 'CART_QTY':
      const existingtqty = state.carttqty.find(
        (existingPhone) => action.data.product_id === existingPhone.productid,
      );

      const existinglist = state.cartlist.find(
        (elist) => action.data.product_id === elist.pid,
      );
      console.log('--pp--', existinglist);

      const diff = action.data.quantity - existingtqty.qty;
      existingtqty.qty = existingtqty.qty + diff;
      // const dd= action.data.mrp-action.product.sprice;
      const newtotal = diff * parseInt(action.data.mrp) + state.carttotal;
      const newdtotal = diff * parseInt(action.data.mrp-action.data.sprice) + state.disctotal;
      // const newbtotal = diff + state.bagstotal;
      const taxtotal1 =
        state.carttax +
        parseInt(existinglist.CGST) +
        parseInt(existinglist.SGST) +
        parseInt(existinglist.IGST);

      return {
        ...state,
        carttotal: newtotal,
        disctotal: newdtotal,
        // bagstotal: newbtotal,
        carttax: taxtotal1,
      };

      case "CART_BAG":
        const existingtbag = state.carttqty.find(
          (existingbagss) => action.data.product_id === existingbagss.productid,
        );
        console.log("bagreducer",existingtbag)
        const diffbag = action.data.bagssss - existingtbag.bag;


        existingtbag.bag+=diffbag
        return{
          ...state,
        };
         

    case 'CART_FINAL_SUBMIT':
      return {
        ...state,
        cartlist: [],
        cartlength: 0,
        carttqty: [],
        carttotal: 0,
        disctotal:0,
        carttax: 0,
      };

    default:
      return state;
  }
};
export default cartreducer;
