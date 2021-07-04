import React, {useContext, createContext, useReducer} from 'react';

const StateContext = createContext();
const DispatchContext = createContext();

const reducer = (state,action) => {
  switch(action.type) {
  case 'add product':
    return [...state, action.product];
  default:
    throw new Error();
  }
};

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  return(
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export const useCart = () => useContext(StateContext);
export const useDispatch = () => useContext(DispatchContext);