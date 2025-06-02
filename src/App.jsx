import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import SidePage_01_Character from "./components/pages/SidePage_01_Character";
import SidePage_011_Character_List from "./components/pages/SidePage_011_Character_List";
import SidePage_012_Character_Detail from "./components/pages/SidePage_012_Character_Detail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/character-category"
            element={<SidePage_01_Character />}
          />
          <Route
            path="/character-list/:regionId"
            element={<SidePage_011_Character_List />}
          />
          <Route
            path="/character-detail"
            element={<SidePage_012_Character_Detail />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
