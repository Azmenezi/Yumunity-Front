import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import UserContext from "./context/UserContext";
import { useEffect, useState } from "react";
import { checkToken } from "./Api/auth";
import Navbar from "./Components/Navbar/Navbar";
import theIMage from "./media/homeImg.jpg";
function App() {
  const [user, setUser] = useState(false);
  useEffect(() => {
    setUser(checkToken());
  }, []);
  return (
    <UserContext.Provider value={[user, setUser]}>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </div>
    </UserContext.Provider>
  );
}

export default App;
