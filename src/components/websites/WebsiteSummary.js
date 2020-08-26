import React from 'react';
import moment from 'moment';

const WebsiteSummary = ({website}) => {

  return (
    <div className="card z-depth-0 website-summary">
      <div className="card-content grey-text text-darken-3">
        <li>
        {website.url} <br/>

        <small>Created On: {moment(website.createdAt.toDate()).calendar()}</small>
        </li>
      </div>
    </div>
  )
}

export default WebsiteSummary;