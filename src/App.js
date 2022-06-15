import { Route, Routes } from "react-router-dom";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AutoZoneDetails from "./components/Projects/AutoZone/AutoZoneDetails";
import BookBuddyDetails from "./components/Projects/BookBuddy/BookBuddyDetails";
import ConventionCenterDetails from "./components/Projects/ConventionCenter/ConventionCenterDetails";

import Home from "./Pages/Home/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/project/autoZone" element={<AutoZoneDetails />} />
        <Route path="/project/bookBuddy" element={<BookBuddyDetails />} />
        <Route
          path="/project/conventionCenter"
          element={<ConventionCenterDetails />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
