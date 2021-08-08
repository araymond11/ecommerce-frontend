import React, {useContext, createContext, useReducer} from 'react';
import cartReducer from './cart-reducer';

const StateContext = createContext();
const DispatchContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, []);

  return(
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export const useCartProvider = () => useContext(StateContext);
export const useDispatch = () => useContext(DispatchContext);