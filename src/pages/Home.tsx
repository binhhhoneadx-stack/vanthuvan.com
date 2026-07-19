import { useEffect } from "react";
import Features from "../components/Features";
import Hero from "../components/Hero";

const Home = () => {
  useEffect(() => {
    document.title = `Vũ Thu Vân - Trang chủ`;
  }, []);

  return (
    <>
      <Hero />
      <Features />
    </>
  );
};

export default Home;
