// import {useState} from 'react';
import './App.css';
import Home from './Home/Home';
import About from './About/About'
import Layout from './Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import Search from './Search/Search';


function App() {
  
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Layout/>} >
      <Route index element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path='/search' element={<Search/>}/>
      </Route>
    </Routes>
      
    </div>
  );
}

export default App;
