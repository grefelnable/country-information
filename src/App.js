import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error from "./pages/Error";
import Home from "./pages/Home";
import TheApp from "./pages/TheApp";
import Code from "./pages/Code";
import Repo from "./pages/Repo";
import SharedLayout from "./pages/SharedLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="countries" element={<TheApp />} />
          <Route path="code" element={<Code />} />
          <Route path="repo" element={<Repo />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
