// import logo from './logo.svg';
import "./App.css";
// import HomePage from "./ProjectPage/HomePage";
import LoginPage from "./Components/LoginPage";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Nav";
import ViewPage from "./Components/ViewPage";
import { createContext, useContext, useState } from "react";
import HomePage from "./Components/HomePage";

export const SelectedContext = createContext(null);

function App() {
  // const [select, setSelect] = useState();

  return (
    <div className="App">
      {/* <HomePage /> */}
      <SelectedContext.Provider>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="homepage" element={<HomePage />} />
          <Route path="viewpage" element={<ViewPage />}></Route>
        </Routes>
      </SelectedContext.Provider>
      {/* <SelectedContext.Provider> */}
      {/* <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="homepage" element={<HomePage />} />
          <Route path="viewpage" element={<ViewPage />}></Route>
        </Routes> */}
      {/* </SelectedContext.Provider> */}
    </div>
  );
}

export default App;
