import React from 'react';
import { Routes, Route } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import HomePage from './pages/HomePage';
import OpenRolePage from './pages/OpenRolePage';
import NotFound from './pages/NotFound';
import { LanguageProvider } from './components/LanguageProvider';

function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="careers" element={<OpenRolePage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </LanguageProvider>
  );
}

export default App;
