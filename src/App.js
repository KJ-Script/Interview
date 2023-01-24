import React, { useEffect, useState } from "react";
import { slice } from "lodash";
import axios from "axios";
import "./App.css";
import Car from "./components.js/Car";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [cars, setCars] = useState([]);
  const [i, setI] = useState(6);
  const slicedCars = slice(cars.cars, 0, i);

  // fetches cars from api
  const fetchCars = () => {
    axios
      .get("https://mocki.io/v1/a3892440-24f6-4403-bc18-9960b53f935c")
      .then((response) => {
        setCars(response.data);
        console.log(cars);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loadMore = () => {
    setI(i + 3);
    if (i === cars.cars.length - 1) {
      setIsLoaded(true);
    } else if (i >= cars.cars.length) {
      setIsLoaded(true);
      alert("Nothing more to display");
    } else {
      setIsLoaded(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);
  return (
    <div className="min-h-screen bg-emerald-800 w-full">
        <div className="w-full">
          <div className="">
            {isLoaded ? (
              <button
                className="px-4 py-2 rounded-md bg-blue-500 text-white my-[2%] mx-[50%] w-[10%] hover:p-6 hover:duration-500"
                onClick={() => {
                  loadMore();
                }}
              >
                Done
              </button>
            ) : (
              <button
                className="px-4 py-2 rounded-md bg-blue-500 text-white my-[2%] mx-[50%] w-[10%] hover:p-6 hover:duration-500"
                onClick={() => {
                  loadMore();
                }}
              >
                Load More +
              </button>
            )}
          </div>

          <div className="w-full grid grid-cols-3">
            {slicedCars.map((item, index) => {
              return (
                <div className="w-full">
                  <Car information={item} key={index} />
                </div>
              );
            })}
          </div>
        </div>
    </div>
  );
}

export default App;
