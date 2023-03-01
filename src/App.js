import "./App.css";
import { Home } from "./Components/home/Home";
import About from "./Components/aboutME/About";
import Service from "./Components/serviceSec/Service";
import VideoGallery from "./Components/videoGallery/VideoGallery";
import PhotoGallery from "./Components/photoGallery/PhotoGallery";
import ContactUs from "./Components/contactUs/ContactUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navv from "./Components/nav/Nav";
import BlogArchive from "./Components/blogArchive/BlogArchive";
import Footer from "./Components/footer/Footer";
import BlogPage from "./Components/blogPage/BlogPage";
import Promotion from "./../src/Components/promotion/Promotion";
import "bootstrap/dist/css/bootstrap.min.css";
import Team from "./Components/home/homeComponent/teamSec/Team";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navv />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/team" element={<Team />} />
          <Route path="/videoGallery" element={<VideoGallery />} />
          <Route path="/photoGallery" element={<PhotoGallery />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/blog" element={<BlogArchive />} />
          <Route path="/blog/:id" element={<BlogPage />} />
          {/* <Route path="/blogPage" element={<BlogPage />} /> */}
          <Route path="/promotion" element={<Promotion />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
