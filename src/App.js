import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import Nexora from "./pages/About/Nexora";
import CoreValues from "./pages/About/CoreValues";
import AcademicCalendar from "./pages/Learning/AcademicCalendar";
import Curriculum from "./pages/Learning/Curriculum";
import Contact from "./pages/Contact";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/corevalues" element={<CoreValues />} />
            <Route path="/about/nexora" element={<Nexora/>} />
            <Route path="/learning/academiccalendar" element={<AcademicCalendar />} />
            <Route path="/learning/curriculum" element={<Curriculum />} />
          </Routes>
        </main>

        {/* Static Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
