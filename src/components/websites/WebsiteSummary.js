import React from 'react'

const WebsiteSummary = ({website}) => {
  return (
    <div className="card z-depth-0 website-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{website.url}</span>
        <p>Created on:</p>
        <p className="grey-text">8-21-2020</p>
      </div>
    </div>
  )
}

export default WebsiteSummary;