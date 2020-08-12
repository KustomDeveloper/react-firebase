import React from 'react';
import Notifications from './Notifications';
import { connect } from 'react-redux'; 

const Dashboard = (props) => {
  const list = props.websites;
  console.log(list);

  return(

    <div className="dashboard container">
     
      <div className="row">
        <div className="col s12 m6">
        <ul>
          { list.map(function(a) {
            console.log(
                <li key={a.id}>{a.url}</li>
            )
          })}
        </ul>
        </div>

        <div className="col s12 m5 offset-m1">
          <Notifications />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    websites: state.website.websites
  }
}

export default connect(mapStateToProps)(Dashboard);