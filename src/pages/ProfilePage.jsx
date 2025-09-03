import React from 'react';
import Menu from '../component/Menu.jsx';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
    let {facebookId, youtubeId} = useParams();

    return (
        <div>
            <Menu/>
            <h3>Facebook: {facebookId}</h3>
            <h3>Youtube: {youtubeId}</h3>
            <h1>This is Profile Page</h1>
        </div>
    );
};

export default ProfilePage;