export const addWebsite = (website) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

      // Call to DB
      const firestore = getFirestore();

      firestore.collection('websites').add({
        url: website, 
        authorID: 12345,
        createdAt: new Date()

      }).then(() => {
        dispatch({ type: 'ADD_WEBSITE', website });
      }).catch((err) => {
        dispatch({ type: 'ADD_WEBSITE_ERROR', err });
      })

     
    }
}