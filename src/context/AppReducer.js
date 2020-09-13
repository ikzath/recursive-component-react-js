export default (state, action) => {
switch(action.type) {
  case 'DELETE_ACTION' :
     return{
       ...state,
       transactions: state.transactions.filter(id => id.id !== action.payload)
     }

  case 'ADD_ACTION' :
      return{
        ...state,
        transactions: [action.payload, ...state.transactions]
      }

    default:
      return state;
}

}