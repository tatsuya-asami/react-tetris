import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <p>App.tsx</p>
      <p>environment variables:{process.env.REACT_APP_TEST}</p>
      <p>nodenv {process.env.NODE_ENV}</p>
    </div>
  );
};

export default App;
