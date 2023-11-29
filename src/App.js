import './App.css';
import { View, SignUp, LogIn } from './Components';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faLock, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Routes, Route, Outlet, Link } from "react-router-dom"

library.add(faUser, faLock, faEnvelope, faPhone);

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App;
