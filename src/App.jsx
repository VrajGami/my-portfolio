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
  Background,
  CustomCursor,
  CanvasCursor,
  ShootingStars,
  ScrollProgress
} from "./components";


function App() {
  return (
    <BrowserRouter >
      <div className="relative z-0 bg-primary">

        <CanvasCursor />
        <CustomCursor />
        <ShootingStars />
        <ScrollProgress />
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
