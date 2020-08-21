import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addWebsite } from '../../store/actions/websiteActions';

const AddWebsite = (props) => {
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(props);
    props.addWebsite(url);
  }

  const formContainerStyle = {
    marginTop: "100px",
  }

  const titleStyle = {
    marginBottom: "50px",
  }

 return(
  <div style={formContainerStyle} className="container">
    <div className="row">
      <div className="col s4 offset-s4">
        <form onSubmit={ handleSubmit } className="white">
          <h4 style={titleStyle} className="grey-text text-darken-3 ">Add a Website</h4>

          <div className="input-field">
            <label htmlFor="url">Add Website Url</label>
            <input type="text" id="url" value={url} onChange={e => setUrl(e.target.value) }></input>
          </div>
          
          <div className="input-field">
            <button className="btn blue darken-1 z-depth-0">Create Website</button>
          </div>
        </form>
      </div>
    </div>
  </div>
 )
}

const matchDispatchToProps = (dispatch) => {
  return {
    addWebsite: (website) => dispatch(addWebsite(website))
  }
} 

export default connect(null,  matchDispatchToProps)(AddWebsite);