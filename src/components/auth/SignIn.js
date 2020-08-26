import React, { useState } from 'react';
import { connect } from 'react-redux';
import  { signIn } from '../../store/actions/authActions';
import { useHistory, Redirect } from 'react-router-dom';

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const { authError, auth } = props; 

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(props);
    props.signIn({email, password});

    history.push('/');
  }

  const formContainerStyle = {
    marginTop: "100px",
  }
  const titleStyle = {
    marginBottom: "50px",
  }
  
  if(auth.uid) return <Redirect to='/' />
  
  return(
    <div style={formContainerStyle} className="container">
      <div className="row">
        <div className="col s4 offset-s4">
          <form onSubmit={ handleSubmit } className="white">
            <h4 style={titleStyle} className="grey-text text-darken-3 ">Sign In</h4>
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
              { authError ? <p>{authError}</p> : null }
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
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = dispatch => {
  return {
    signIn: (credentials) => dispatch(signIn(credentials)) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);