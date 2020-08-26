import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const WebsiteDetails = (props) => {
    const { website, auth } = props;

    if(!auth.uid) return <Redirect to='/signin' />

        if (website) {
          return(
          <div className="container section website-details">
            <div className="card z-depth-0">
              <span className="card-content">{website.url}</span>
              {moment(website.createdAt.toDate()).calendar()}
            </div>
          </div>
          )
        } else {
          return(
            <div className="container section website-details">
              <div className="card z-depth-0">
                <span className="card-content">Loading website...</span>
              </div>
            </div>
            )
        }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const websites = state.firestore.data.websites;
  const website = websites ? websites[id] : null;
  return{
    website: website,
    auth: state.firebase.auth
  }

}
export default compose ( 
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'websites' }
  ]))
  ( WebsiteDetails )