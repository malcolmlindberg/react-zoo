import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Animal } from "./components/Animal";
import { GetAnimals } from "./components/GetAnimals";
import { Layout } from "./components/Layout";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<GetAnimals />}></Route>
          <Route path="/animal/:id" element={<Animal />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
