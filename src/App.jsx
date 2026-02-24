import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import ReadMore from "./pages/ReadMore";
import AboutMain from "./pages/AboutMain";

function App() {
  return (
    <BrowserRouter>
      <Routes>
<Route path="/" element={<Layout />}>

  <Route index element={<Home />} />

  <Route path="about-1" element={<AboutMain />} />
  <Route path="about-school" element={<ReadMore />} />

</Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;