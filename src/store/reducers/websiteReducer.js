
const initState = {
  websites: [
    {id:'1', url:'https://test.com', timestamp: '7-31-2009'},
    {id:'2', url:'https://test2.com', timestamp: '2-04-2012'},
    {id:'3', url:'https://test3.com', timestamp: '9-07-2016'}
  ]
}

const websiteReducer = (state = initState, action) => {
  switch(action.type) {
    case 'ADD_WEBSITE':
      console.log('Added Website', action.website)
  }
  
  return state;
}

export default websiteReducer;