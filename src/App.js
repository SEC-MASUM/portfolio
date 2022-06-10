import { Route, Routes } from "react-router-dom";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/blogs" element={<Blogs />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
