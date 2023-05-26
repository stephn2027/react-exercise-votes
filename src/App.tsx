import React from 'react';
import { Container, Box } from '@mui/system';
import './App.css';
import { Divider } from '@mui/material';
import Products from './Products';

function App() {
  return (
    <div className="App">
      <Container maxWidth="md">
        <div className="header">
          <p>Popular Products</p>
        </div>
        <Divider />
        <p>List</p>
        <Products />
      </Container>
    </div>
  );
}

export default App;
