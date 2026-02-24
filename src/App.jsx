import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import ReadMore from "./pages/ReadMore";
import AboutMain from "./pages/AboutMain";
import QualityPolicy from "./pages/QualityPolicy";
import PrincipalSpeak from "./pages/PrincipalSpeak";


function App() {
  return (
    <BrowserRouter>
      <Routes>
<Route path="/" element={<Layout />}>

  <Route index element={<Home />} />

  <Route path="about-1" element={<AboutMain />} />
  <Route path="about-school" element={<ReadMore />} />
  <Route path="quality-policy" element={<QualityPolicy />} />
  <Route path="principal-speak" element={<PrincipalSpeak />} />
 

</Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;