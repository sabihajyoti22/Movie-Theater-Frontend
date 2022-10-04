import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./Components/Home";
import ShowTime from "./Components/ShowTime";
import AboutUs from "./Components/AboutUs";
import BuyTicket from "./Components/BuyTicket";
import Login from "./Components/Login";
import Register from "./Components/Register"
import AdminEntry from "./Components/AdminEntry";
import AdminPanel from "./Components/AdminPanel";

import { UserContext } from "./UserContext";

import "./Style.css"

function App() {
  const serverURL = process.env.REACT_APP_SERVER_URL
  return (
    <>
      <UserContext.Provider value={{ serverURL }} >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logIn" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/showTimes" element={<ShowTime />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/buyTicket" element={<BuyTicket />} />
            <Route path="/adminEntry" element={<AdminEntry />} />
            <Route path="/adminPanel" element={<AdminPanel />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
