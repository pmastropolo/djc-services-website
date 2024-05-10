import React, { useEffect, useState } from 'react';
import Layouts from "@layouts/Layouts";
import netlifyIdentity from 'netlify-identity-widget';
import PageBanner from "@components/PageBanner";

const Dashboard = () => {
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      const currentUser = netlifyIdentity.currentUser();
      setUser(currentUser);
    }, []);

    // Access the user's name using user.user_metadata.full_name
    const userName = user && user.user_metadata && user.user_metadata.full_name ? user.user_metadata.full_name : 'Guest';

    return (
        <>
            <Layouts>
                <PageBanner pageTitle="Dashboard" pageDesc={`Welcome, ${userName}. This is your personal dashboard.`} />
                <div className="container">
                    <h1>Welcome, {userName}</h1>
                    <p>This is your personal dashboard where you can view and manage all your activities.</p>
                </div>
            </Layouts>
        </>
    );
};

export default Dashboard;
