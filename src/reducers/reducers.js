const initialState = {
  academies: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_DATA':
      return {
        ...state,
        academies: action.payload
      };
    case 'POST_DATA':
      return {
        ...state
      };
    default:
      return state;
  }
}