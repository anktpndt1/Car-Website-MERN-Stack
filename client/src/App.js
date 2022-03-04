import { React, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import Sell from "./components/Sell/Sell";
import { useDispatch } from "react-redux";
import { getListings } from "./actions/listings";
import Listings from "../src/components/ShowListings/Listings";
import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./components/DetailView/Detail";

function App() {
  //using redux state management system
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getListings());
  }, [dispatch]);
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Container fluid className="app-container">
          {/* using routes to change the content of our webpage */}
          <Routes>
            <Route path="/" element={<Listings />}></Route>
            <Route path="/sell" element={<Sell />}></Route>
            <Route path="/detail/:id" element={<Detail />}></Route>
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
