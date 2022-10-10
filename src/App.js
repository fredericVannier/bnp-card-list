import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";

const useFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/users");
      const response = await axios.get(
        `https://api.unsplash.com/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`
      );
      const res = [];
      result.data?.map((data, index) => {
        res.push({ ...data, image: response.data[index] });
      });

      setData(res);
    };
    fetchData();
  }, []);

  return data
};

function App() {

  const data = useFetch();

  return (
    <div className="App">
      <header className="App-header">
        {data.length > 0 ? <Home users={data} /> : <h2>Loading..</h2>}
      </header>
    </div>
  );
}

export default App;
