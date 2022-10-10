import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/users");
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {data.length > 0 ? <Home users={data} /> : <h2>Loading..</h2>}
      </header>
    </div>
  );
}

export default App;
