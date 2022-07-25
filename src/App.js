import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { NotFound } from "./pages/NotFound";

import "./scss/app.scss";

function App() {
  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue);

  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home searchValue={searchValue} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* <NotFound /> */}
      </div>
    </div>
  );
}

export default App;
