import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

const WebsiteDetails = (props) => {

    console.log(props);
    const { website } = props;

    if (website) {
      return(
      <div className="container section website-details">
        <div className="card z-depth-0">
          <span className="card-content">{website.url}</span>
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
    website: website
  }

}
export default compose ( 
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'websites' }
  ]),
  ( WebsiteDetails ))