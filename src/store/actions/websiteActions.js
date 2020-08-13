export const addWebsite = (website) => {
    return (dispatch, getState) => {
      // Call to DB
      // Dispatch Action
      dispatch({ type: 'ADD_WEBSITE', website: website });
    }
}