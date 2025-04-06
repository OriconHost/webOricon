import React, { lazy, Suspense, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import NavbarDark from "./components/NavbarDark";
import Footer from "./components/Footer";
import Layout from "./components/Layout";
import PromoBanner from "./components/PromoBanner";
import Home from "./pages/Home";
import GamePage from './pages/GamePage';
import ScrollToTop from "./components/ScrollToTop";

// Lazy load
// const Dedicated = lazy(() => import("./pages/Dedicated"));
// const VPSList = lazy(() => import("./pages/VPS"));
// const GamesListing = lazy(() => import("./pages/GamesListing"));
// const MinecraftPackages = lazy(() => import("./pages/Minecraft"));
// const RustPackages = lazy(() => import("./pages/Rust"));
// const UnturnedPackages = lazy(() => import("./pages/Unturned"));
// const BeamMPPackages = lazy(() => import("./pages/beammp"));
const LegalDocumentation = lazy(() => import("./pages/Legal"));
const AboutUs = lazy(() => import("./pages/About"));
// const CareersPage = lazy(() => import("./pages/Careers"));
const SupportPortal = lazy(() => import("./pages/SupportPortal"));
const StatusList = lazy(() => import("./pages/Status"));


// Loading spinner
function LoadingSpinner({ isVisible }) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-200 ${
        isVisible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 animate-spin">
          <img
            src="https://i.imgur.com/MifFmmC.png"
            alt="Loading..."
            className="w-24 h-24 object-contain"
          />
        </div>
      </div>
    </div>
  );
}

// Loading skeleton
function LoadingSkeleton() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white text-white">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-800 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-800 rounded"></div>
            <div className="h-4 bg-gray-800 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PageTransitionLoader() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return <LoadingSpinner isVisible={isLoading} />;
}

function AppContent() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen  text-stone-900">
      <ScrollToTop />
      <PageTransitionLoader />
      {location.pathname === "/" && <PromoBanner />}

      {location.pathname === "/" ? <Navbar /> : <NavbarDark />}
      <main>
        <Layout>
          <Suspense fallback={<LoadingSkeleton />}>
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/Dedicated" element={<Dedicated />} />
              <Route path="/vps" element={<VPSList />} />
              <Route path="/games" element={<GamesListing />} /> */}
              <Route path="/legal" element={<LegalDocumentation />} />
              {/* <Route path="/minecraft" element={<MinecraftPackages />} />
              <Route path="/rust" element={<RustPackages />} />
              <Route path="/unturned" element={<UnturnedPackages />} />
              <Route path="/beammp" element={<BeamMPPackages />} /> */}
              <Route path="/about" element={<AboutUs />} />
              <Route path="/support" element={<SupportPortal />} />
              {/* <Route path="/careers" element={<CareersPage />} /> */}
              <Route path="/status" element={<StatusList/>} />
              <Route path="/game/:id" element={<GamePage />} />

            </Routes>
          </Suspense>
        </Layout>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
