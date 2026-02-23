import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import ReadMore from "./pages/ReadMore";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Layout wrapper */}
        <Route path="/" element={<Layout />}>

          {/* Pages inside Layout */}
          <Route index element={<Home />} />
          <Route path="about-school" element={<ReadMore />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;