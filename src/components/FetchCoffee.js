import axios from "axios";
import React, { useState } from "react";

export default function FetchCoffee() {
  const [coffee, setCoffee] = useState([]);
  const url = "https://api.sampleapis.com/coffee/hot";

  function fetchBeers() {
    axios.get(url).then((responses) => {
      // console.log(responses);
      setCoffee(responses.data);
      // console.log(responses.data[1].title);
    });
  }
  return (
    <>
      <h1> Fetch Coffee </h1>
      <button className="btn btn-dark" onClick={fetchBeers}>
        Fetch
      </button>

      <div className="container my-5">
        <div className="row ">
          {coffee.map((values) => {
            return (
              <div class="card" style={{ width: "18rem" }}>
                <img
                  src={values.image}
                  style={{ width: "100%", height: "200px" }}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">{values.title}</h5>
                  <p class="card-text">{values.description}</p>
                  {/* <a href="#home" class="btn btn-primary">Go somewhere</a> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
