export const initialState = {
  basket: [],
};

export default (state, action) => {
  
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };

    default:
      return state;
  }
};
