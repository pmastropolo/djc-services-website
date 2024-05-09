import React, { useEffect, useState } from 'react';
import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";
import netlifyIdentity from 'netlify-identity-widget';

const Dashboard = () => {
        const [user, setUser] = useState(null);
      
        useEffect(() => {
          const currentUser = netlifyIdentity.currentUser();
          setUser(currentUser);
        }, []);


  return (
    <>
        <Layouts>
      <PageBanner pageTitle="Dashboard" pageDesc="Welcome to your dashboard! Manage your projects and settings here." />
      <div className="container">
      <h1>Welcome, {user ? user.email : 'Guest'}</h1>
        <p>This is your personal dashboard where you can view and manage all your activities.</p>

      </div>
      </Layouts>
    </>
  );
};

export default Dashboard;
