import React from 'react';
import WebsiteDetails from './WebsiteDetails';

const WebsiteList = ({websites}) => {
    return(
        <div>
            {websites && websites.map(website => {
                return <WebsiteDetails website={website} key={website.id}/>
            })}
        </div>
    )
}

export default WebsiteList;