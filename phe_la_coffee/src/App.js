import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./page/home/Home";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
        </Routes>
    </div>
  );
}

export default App;
