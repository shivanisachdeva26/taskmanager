
import { useEffect, useState } from "react";
import Actions from "./components/Actions";
import axios from "axios";

function App() {
  const [action, setAction] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);  // Set loading to true initially

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('/api/actions');
        console.log(response.data);
        if (response.data.length > 0) {
          setAction(response.data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
        setLoading(false);
      }
    })();
  }, []);

 

  if (error) {
    return <h1>Something Went Wrong</h1>;
  }

  if (loading) {
    return <h1>Loading...</h1>;  // Show a loading message until data is loaded
  }

 
  return (
    <>

      <Actions action={action} />
    </>
  );
}

export default App;
