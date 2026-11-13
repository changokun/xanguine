import React from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const siteUrl = import.meta.env.VITE_SITE_URL || 'http://localhost:4028';

export default function RootLayout() {
  return (
    <>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Xanguine builds websites for small businesses worldwide from Portugal, and is hiring salespeople to grow the team." />
        
        {/* Open Graph / Social Media */}
        <meta property="og:title" content="Xanguine — Websites Built by a Small Team, Directly" />
        <meta property="og:description" content="Xanguine builds websites for small businesses worldwide from Portugal, and is hiring salespeople to grow the team." />
        <meta property="og:image" content="http://localhost:4028/assets/images/app_logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <title>Xanguine — Websites Built by a Small Team, Directly</title>
      </Helmet>
      
      <Outlet />
    </>
  );
}
