import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.svg';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Header = (props) => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />

  return(
    <header>
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to="/"><img alt="logo" src={Logo} className="logo"/></Link>
          { links }
        </div>
      </nav>
    </header>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return{
    auth: state.firebase.auth,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Header);
    