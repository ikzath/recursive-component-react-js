import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// initial state
const initalState = {
    transactions: [
      { id: 1, text: 'Flower', amount: -20 },
      { id: 2, text: 'Salary', amount: 300 },
      { id: 3, text: 'Book', amount: -10 },
      { id: 4, text: 'Camera', amount: 150 }
    ]
};  


//Create context
export const GlobalContext = createContext(initalState);


//  Provider component
export const Globalprovider = ({ children }) => {
   const [state, dispatch] = useReducer(AppReducer, initalState);

// Actions
function deleteTransaction(id){
    dispatch({
       type: 'DELETE_ACTION',
       payload: id 
    });
}

// Add transaction
function addTransaction(transaction){
   dispatch({
      type: 'ADD_ACTION',
      payload: transaction
   });
}

return( <GlobalContext.Provider value={{ 
   transactions: state.transactions,
   deleteTransaction,
   addTransaction
}}>
{children}
</GlobalContext.Provider>);
} 