import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeView from "./views/HomeView";

import Navbar from "./components/commons/Navbar";
import Footer from "./components/commons/Footer";

import './Router.css'

const Router = () => {

  return (
    <BrowserRouter>
    <Navbar />
    <main>
    <Routes>
      <Route exact path='/' element={<HomeView />} />
    </Routes>
    </main>
    <Footer />
    </BrowserRouter>
  )
}

export default Router;
