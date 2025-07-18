import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Certificate, About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas, Volunteering } from './components';

function App() {
  return (
    <BrowserRouter basename="/my-portfolio">
      <div className="relative z-0 bg-primary">
       

        <Routes>
          <Route
            path="/"
            element={
              <>
              
                   <Navbar />
                  <Hero />

                <About />
                <Experience />
                <Volunteering />
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;