import React from 'react';
import { Container } from '@mui/system';
import './App.css';
import { Divider } from '@mui/material';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Container maxWidth="md">
        <div className="header">
          <p>Popular Products</p>
        </div>
        <Divider />
      
        <Products />
      </Container>
    </div>
  );
}

export default App;
