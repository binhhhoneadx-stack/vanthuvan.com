import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Project from "./pages/Project";
import PortfolioGoals from "./pages/PortfolioGoals";
import PersonalDevelopment from "./pages/PersonalDevelopment";
import PortfolioConclusion from "./pages/PortfolioConclusion";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/project/:id" element={<Project />} />
            <Route path="/portfolio-goals" element={<PortfolioGoals />} />
            <Route path="/personal" element={<PersonalDevelopment />} />
            <Route path="/portfolio-conclusion" element={<PortfolioConclusion />} />
          </Routes>
        </main>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
