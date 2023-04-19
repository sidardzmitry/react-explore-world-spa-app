import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

import { Home } from "./pages/Home";
import { NotFound } from "./pages/NorFound";
import {Country} from './pages/Country';


function App() {
  const [country, setCountry] = useState([]);

  return (
    <Router>
      <Header />
      <Main>
          <Routes>
            <Route path="/" element={<Home country={country} setCountry={setCountry} />}></Route>
            <Route path="/country/:name" element={<Country />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
      </Main>
    </Router>
  );
}

export default App;
