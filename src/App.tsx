import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RootRoutes } from './routes';
import './styles/App.scss';
import './languages/config'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <RootRoutes />
    </BrowserRouter>
  );
};

export default App;
