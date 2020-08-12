export const createWebsite = (website) => {
    return (dispatch, getState) => {
      // Call to DB
      // Dispatch Action
      dispatch({ type: 'CREATE_WEBSITE', website: website });
    }
}