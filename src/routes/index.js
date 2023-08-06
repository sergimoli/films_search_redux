// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Home from "../views/Home";
// import Results from "../views/Results";
// import Detail from "../views/Detail";

// const RoutesComponent = () => {
//   <Router>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/results" element={<Results />} />
//       <Route path="/detail" element={<Detail />} />
//     </Routes>
//   </Router>;
// };

// export default RoutesComponent;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../views/Home";
import Results from "../views/Results";
import Detail from "../views/Detail";

function index() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results/:title" element={<Results />} />
        <Route path="/detail/:movieId" element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default index;
