import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.svg';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Header = () => {
  return(
    <header>
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to="/"><img src={Logo} className="logo"/></Link>
          <SignedInLinks />
          <SignedOutLinks />
        </div>
      </nav>
    </header>
  )
}

const mapStateToProps = (state) => {
  console.log(state);
  return{

  }
}

export default connect(mapStateToProps)(Header);
    