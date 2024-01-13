import Blog from "./components/blog/Blog";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Projects from "./components/projects/Projects";
import Review from "./components/reviews/Reviews";
import Sales from "./components/sales-section/Sales";
import Service from "./components/service-section/Service";
import Since from "./components/since-section/Since";


function App() {
  return (
    <>
      <Header />
      <Since />
      <Service />
      <Sales />
      <Projects />
      <Review />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
