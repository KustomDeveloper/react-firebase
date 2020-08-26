import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';

const SignUp = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { authError, auth } = props; 

  const handleSubmit = (e) => {
    e.preventDefault();

    props.signUp({ 
      firstName, 
      lastName,
      email, 
      password 
    });
  }

  const formContainerStyle = {
    marginTop: "100px",
  }
  const loginTitleStyle = {
    marginBottom: "50px",
  }

  if(auth.uid) return <Redirect to='/' />

  return(
    <div style={formContainerStyle} className="container">
      <div className="row">
        <div className="col s4 offset-s4">
          <form onSubmit={ handleSubmit } className="white">
            <h4 style={loginTitleStyle} className="grey-text text-darken-3 ">Sign Up</h4>
            <div className="input-field">
              <label htmlFor="firstname">First Name</label>
              <input type="text" id="firstname" value={firstName} onChange={e => setFirstName(e.target.value) }></input>
            </div>
            <div className="input-field">
              <label htmlFor="lastname">Last Name</label>
              <input type="text" id="lastname" value={lastName} onChange={e => setLastName(e.target.value) }></input>
            </div>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value) }></input>
            </div>
            <div className="input-field">
              <label htmlFor="password">password</label>
              <input type="password" id="password" value={password} onChange={ e => setPassword(e.target.value) }></input>
            </div>
            <div className="input-field">
              <button className="btn pink lighten-1 z-depth-0">Login</button>
              <div className="red-text center">
                { authError ? <p>{ authError }</p> : null }
              </div>
            </div>
          </form>
        </div>
      </div>
  </div>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);