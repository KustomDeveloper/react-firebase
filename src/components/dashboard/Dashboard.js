import React, { Component } from 'react';
import Notifications from './Notifications';
import { connect } from 'react-redux'; 
import WebsiteList from '../websites/WebsiteList';

class Dashboard extends Component {
  render() {
  const { websites } = this.props;
  console.log(typeof websites);

  return(
    <div className="dashboard container">
     
      <div className="row">
        <div className="col s12 m6">
          <WebsiteList websites={websites} />
        </div>

        <div className="col s12 m5 offset-m1">
          <Notifications />
        </div>
      </div>
    </div>
  )
  }
}

const mapStateToProps = (state) => {
  return{
    websites: state.website.websites
  }
}

export default connect(mapStateToProps)(Dashboard);