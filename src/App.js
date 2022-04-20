import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashborad from "./pages/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashborad />}></Route>
    </Routes>
  );
}

export default App;
