import AnnouncementBar from "./components/AnnouncementBar.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Categories from "./components/Categories.jsx";
import FeaturedProducts from "./components/FeaturedProducts.jsx";
import BrandStory from "./components/BrandStory.jsx";
import WhyChooseUs from "./components/WhyChooseUs.jsx";
import FeaturesStrip from "./components/FeaturesStrip.jsx";
import PromoBanners from "./components/PromoBanners.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Newsletter from "./components/Newsletter.jsx";
import InstagramFeed from "./components/InstagramFeed.jsx";
import SocialProof from "./components/SocialProof.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <BrandStory />
        <WhyChooseUs />
        <FeaturesStrip />
        <PromoBanners />
        <Testimonials />
        <SocialProof />
        <Newsletter />
        <InstagramFeed />
      </main>
      <Footer />
      {/* <ScrollToTop /> */}
    </>
  );
}
