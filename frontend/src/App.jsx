import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./Home";
import Pizza from "./components/Pizza";
import Footer from "./components/Footer";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  const [view, setView] = useState("home");

  return (
    <>
      <Navbar setView={setView} />

      {view === "home" && <Home setView={setView} />}
      {view === "pizza" && <Pizza />}
      {view === "login" && <LoginPage />}
      {view === "register" && <RegisterPage />}

      <Footer />
    </>
  );
};

export default App;
