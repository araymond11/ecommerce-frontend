const cartReducer = (state,action) => {
  switch(action.type) {
  case 'add product': {
    const arr = [...state];
    let isAlreadyInCart;
    arr.find(x => {
      return x.id === action.product.id ? isAlreadyInCart = true : isAlreadyInCart = false;
    });
    if(isAlreadyInCart){
      let newArr = arr.map(x => {
        let temp = Object.assign({}, x);
        if(temp.id === action.product.id){
          temp.quantity += action.product.quantity;
        }
        return temp;
      }); 
      return newArr;
    }
    return [...state, action.product];
  }
  case 'remove product': {
    const arr = [...state];
    arr.splice(action.index, 1);
    return arr;
  }
  case 'update product': {
    const arr = [...state];
    let newArr = arr.map(x => {
      let temp = Object.assign({}, x);
      if(temp.id === action.prop.id){
        temp.quantity = parseInt(action.prop.number);
      }
      return temp;
    });
    return newArr;
  }
  default:
    throw new Error(`unknown action ${action.type}`);
  }
};

export default cartReducer;