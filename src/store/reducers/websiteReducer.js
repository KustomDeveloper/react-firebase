
const initState = {}

const websiteReducer = (state = initState, action) => {
  switch(action.type) {
    case 'ADD_WEBSITE':
      console.log('Added Website', action.website);
      return state;
    case 'ADD_WEBSITE_ERROR': 
      console.log('Add Website Error', action.err);
      return state;
    default: 
      return state;
  }
}

export default websiteReducer;