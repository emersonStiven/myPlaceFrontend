import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../src/Pages/Home";
import { Layout } from "./Components/Layout";
import {Error404} from "./Components/Error404"
import { Hosting } from "./Pages/Hosting";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />}></Route>
          <Route path="*" element={<Error404/>}></Route>
        </Route>

        <Route path="/hosting" element={<Hosting/>}></Route>
        
      </Routes>
    </BrowserRouter>
  );
}

