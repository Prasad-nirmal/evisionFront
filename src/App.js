import { BrowserRouter, Route, Routes } from "react-router-dom";
import ImageList from "./pages/getImages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ImageList/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
