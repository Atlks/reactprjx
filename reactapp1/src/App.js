import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import TablePage from './TablePage';
import AddForm from './AddForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table" element={<TablePage />} />
        <Route path="/addform" element={<AddForm />} />
      </Routes>
    </Router>
  );
}

export default App;
