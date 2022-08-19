export const initialState = {
  basket: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case 'ADD_TO_BASKET':
    return { ...state, ...payload }

  default:
    return state
  }
}
