import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Certificate,
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  Volunteering,
  Background
} from "./components";


function App() {
  return (
    <BrowserRouter basename="/my-portfolio">
      <div className="relative z-0 bg-primary">
        <Background />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <About />
                 <Tech />
                <Experience />
                <Volunteering />
                <Works />
                <Certificate />
                <div className="relative z-0">
                  <Contact />
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
