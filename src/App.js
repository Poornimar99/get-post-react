import React, { useState } from "react";
import axios from "axios";

const App = () => {
  //get data from backend to frontend
  const getDataFromBackend = async () => {
    const response = await axios.get("http://localhost:8080/call");
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };
//send the data from frontend to backend
  const data = "Hello";
  const postDataFromBackend = async () => {
    const response = await axios.post("http://localhost:8080/testpost", { data });
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };

  //post request-from
  const [formData,setFormData]=useState("");
  const postformFromFrontend = async () => {
    const response = await axios.post("http://localhost:8080/testform",{formData});
    console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };


  return (
    <div className="App">
{/* button to get data */}

      <button onClick={getDataFromBackend}>Get Data</button>
      <p id="para"></p>

{/* button to send the data */}

      <button onClick={postDataFromBackend}>Post Data</button>
      <p id="para"></p>

{/* send the data in form  */}
<form onSubmit={postformFromFrontend}>
  <input type="text" name="formdata" value={formData} onChange={(e)=>setFormData(e.target.value)}></input>
  <input type="submit" value="Test Form"></input>
</form>
      
</div>
  );
};

export default App;
