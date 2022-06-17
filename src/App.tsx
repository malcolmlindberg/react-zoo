import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Animal } from "./components/Animal";
import { GetAnimals } from "./components/GetAnimals";
import { Layout } from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<GetAnimals />}></Route>
          <Route path="/animal/:id" element={<Animal />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
