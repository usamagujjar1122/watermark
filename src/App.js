import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./comp/Footer";
import Nav from "./comp/Nav";
import Home from "./screens/Home";
import Pricing from "./screens/Pricing";
import * as React from 'react';
import Main from "./screens/Main";


function App() {
  const [open, setOpen] = React.useState(false);
  return (
    <BrowserRouter>
      <Nav open={open} setOpen={setOpen}/>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
