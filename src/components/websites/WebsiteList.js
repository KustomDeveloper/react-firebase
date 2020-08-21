import React from 'react';
import { Link } from  'react-router-dom'
import WebsiteDetails from './WebsiteDetails';

const WebsiteList = ({websites}) => {
    return(
        <div>
            {websites && websites.map(website => {
                return (
                <Link to={'/website/' + website.id}> 
                    <WebsiteDetails website={website} key={website.id} />
                </Link>
                )
            })}
        </div>
    )
}

export default WebsiteList;