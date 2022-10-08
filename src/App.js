
import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import './App.css';
import Home from './components/Home';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/users");
      setData(result.data);
      console.log("tesrfrfdf", result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      <Home text={data}/>
      </header>
    </ div>
  );
}

export default App;
