import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Certificate, About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, MyLife, ProjectDetailsPage } from './components';

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
       

        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className=" bg-cover bg-no-repeat bg-center">
                   <Navbar />
                  <Hero />
                </div>
                <About />
                <Experience />
                <Tech />
                <Works />
                <Certificate/>
                <div className="relative z-0">
                  <Contact />
                </div>
                <StarsCanvas />

              </>
            }
          />

          <Route path="/project-details" element={<ProjectDetailsPage />} />
            <Route path="/myLife" element={<MyLife />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;