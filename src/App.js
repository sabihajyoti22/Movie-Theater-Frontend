import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./Components/Home";
import ShowTime from "./Components/ShowTime";
import AboutUs from "./Components/AboutUs";
import BuyTicket from "./Components/BuyTicket";
import Login from "./Components/Login";
import Register from "./Components/Register"
import AdminEntry from "./Components/AdminEntry";

import { UserContext } from "./UserContext";

import "./Style.css"

function App() {
  const serverURL = process.env.REACT_APP_SERVER_URL
  const userLoggedIn = sessionStorage.getItem("User") ? JSON.parse(sessionStorage.getItem("User")) : null

  const getUser = (user) => {
    sessionStorage.setItem("User", JSON.stringify(user))
    console.log(userLoggedIn)
  }

  return (
    <>
      <UserContext.Provider value={{ serverURL, userLoggedIn }} >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logIn" element={<Login onGetUser={getUser}/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/showTimes" element={<ShowTime />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/buyTicket" element={<BuyTicket />} />
            <Route path="/adminEntry" element={<AdminEntry />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
