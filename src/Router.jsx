import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomeView from "./views/HomeView";

import Navbar from "./components/commons/Navbar";
import Footer from "./components/commons/Footer";
import Error404 from "./views/Error404";

import './Router.css'

const Router = () => {

  return (
    <BrowserRouter>
    <Navbar />
    <main className="container py-5">
    <Routes>
      <Route exact path='/' element={<HomeView />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
    </main>
    <Footer />
    </BrowserRouter>
  )
}

export default Router;
