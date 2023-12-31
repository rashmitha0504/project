import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Pages from "./pages/pages";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Works from "./components/Works";
import Service from "./components/Service";
import TalkUsForm from "./components/TalktoUsForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Pages />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/services" element={<Service />} />
        <Route path="/TalkUsForm" element={<TalkUsForm />} />
      </Routes>
    </Router>
  );
}

export default App;
