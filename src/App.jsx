import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import ProjectDetailsPage from './components/ProjectDetailsPage'; // Make sure this path is correct

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                  <Hero />
                </div>
                <About />
                <Experience />
                <Tech />
                <Works />
                <div className="relative z-0">
                  <Contact />
                </div>
                <StarsCanvas />
              </>
            }
          />

          <Route path="/project-details" element={<ProjectDetailsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;