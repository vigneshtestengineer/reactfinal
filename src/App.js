// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Dashboard from './Dashboard/Dash'; // Create a Dashboard component
import Products from './Products/products';
import Addproducts from './Products/add-product';
import Accounts from './Accounts/accounts';

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path='/products' element={<Products/>}/>
      <Route path='/add-products' element={<Addproducts/>}/>
      <Route path='/accounts' element={<Accounts/>}/>
    </Routes>
  </Router>
  );
};

export default App;
