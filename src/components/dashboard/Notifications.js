import React from 'react';
import moment from 'moment';

const Notifications = (props) => {

  const {notifications} = props;
  return(
    <div className="section">
    <div className="card z-depth-0">
    <div className="card-content">
    <span className="card-title">Notifications</span>
    <ul>
    {notifications && notifications.map((item)=> {
      return (
        <li key={item.id}>
          <span className="pink-text">{item.content}</span><br/>
          <span className="grey-text">{moment(item.time.toDate()).fromNow()}</span>
        </li>
      )
    })}
    </ul>
    
    </div>
    </div>
    
    

    </div>
  )
}

export default Notifications;