import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />}/>
    </Routes>
  );
}

export default App;
