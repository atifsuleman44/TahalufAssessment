import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

function App() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  // using axios to get the University List and saving data in state
  useEffect(() => {
    axios
      .get("http://universities.hipolabs.com/search?country=United%20Arab%20Emirates")
      .then((response) => setMyData(response.data))
      .catch((error) => setIsError(error.message));
  }, []);

//if an error show otherwise don't show
  return (
    <>
      
      
      {isError !== "" && <h2>{isError}</h2>}

      {myData.slice(0, 100).map((post) => {
        const { state, domains, webpage, name, countrycode, country } = post;
        return (
          <div key={name} className="card">

            <h2>{name.toUpperCase()}</h2>

          </div>
        );
      })}

    </>
  );
};


export default App;
