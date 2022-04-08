import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Connection from "./components/Connection";
import Inscription from "./components/Inscription";
import Home from "./components/Home";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main id="App-main">
        <Routes>
          <Route element={<Home/>} path="/" />
          {/*déclaration des Routes en fonction de l'url  */}
          <Route path="/connection" element={<Connection />} />
          <Route path="/inscription" element={<Inscription />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
