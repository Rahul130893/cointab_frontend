
import "./App.css";
import { Home } from "./pages/Home";
import { UserDetails } from "./pages/UserDetails"
import {Routes, Route} from "react-router-dom"

function App() {
 
         
  

  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home />} />
       
        <Route path={"/userDetails"} element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;
