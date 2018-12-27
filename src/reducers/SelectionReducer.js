export default (state = null, action) => {
  switch (actyion.type) {
    case 'select_library':
      return action.payload;
  
    default:
      return state;
  }
};