import { useState,useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{

  },[]);

  const getData = async ()=>{
    const req = await axios.get()
  };

  return (
    <div>
      App
    </div>
  );
}

export default App;
