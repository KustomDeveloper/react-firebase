import React from 'react';
import { Link } from  'react-router-dom'
import WebsiteSummary from './WebsiteSummary';

const WebsiteList = ({websites}) => {
    return(
        <div>
            {websites && websites.map(website => {
                return (
                <Link to={'/website/' + website.id} key={website.id}> 
                    <WebsiteSummary website={website} />
                </Link>
                )
            })}
        </div>
    )
}

export default WebsiteList;