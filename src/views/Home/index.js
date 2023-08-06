import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Chairs from "../../assets/moviechairs.png";

function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  //event.target.value
  const handleInputChange = ({ target: { value } }) => {
    setSearch(value);
  };
  const handleCleanOnClick = () => {
    setSearch("");
  };
  const handleSearchClick = () => {
    navigate(`/results/${search.trim()}`);
  };

  console.log(navigate);
  // return <div className="text-3xl font-bold">Home</div>;
  return (
    //amb el overflowhidden fa que no es pugui fer scroll.
    <div className="flex h-screen overflow-hidden">
      <div className="w-2/5">
        {/* el object cover es per a que quedi millor */}
        <img
          src={Chairs}
          alt="Movie chairs"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-3/5 flex justify-center items-center flex-col px-10">
        <h2 className="text-4xl font-bold font-lato">Find your film...</h2>
        <input
          className="bg-special-gray font-lato w-full my-3 h-9 p-1 border focus:outline-none focus:ring-2 focus:ring-gray-500 rounded"
          value={search}
          onChange={handleInputChange}
        />
        <div className="flex w-full justify-between">
          <button
            className="bg-red-500 text-white hover:bg-red-600 font-lato w-full shadow-lg h-9"
            style={{ width: "48%" }}
            onClick={handleSearchClick}
          >
            Find
          </button>
          <button
            className="bg-red-500 text-white hover:bg-red-600 font-lato w-full shadow-lg h-9"
            style={{ width: "48%" }}
            onClick={handleCleanOnClick}
          >
            clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
