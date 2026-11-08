import React from 'react';
import AppRoutes from './routes';
import ScrollToTop from './components/common/ScrollToTop';

const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <AppRoutes />
    </>
  );
};

export default App;
