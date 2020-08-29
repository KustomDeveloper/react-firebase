export const addWebsite = (website) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {

      // Call to DB
      const firestore = getFirestore();

      //Get profile state
      const profile = getState().firebase.profile;

      const authorId = getState().firebase.auth.uid;

      firestore.collection('websites').add({
        url: website, 
        authorID: authorId,
        createdAt: new Date(),
        lastCheckedTime: new Date()

      }).then(() => {
        dispatch({ type: 'ADD_WEBSITE', website });
      }).catch((err) => {
        dispatch({ type: 'ADD_WEBSITE_ERROR', err });
      })

     
    }
}