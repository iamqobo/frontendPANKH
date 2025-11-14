import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Impact from "./pages/Impact";
import Media from "./pages/Media";
import Article from "./pages/Article";
import Events from "./pages/Events";
import Team from "./pages/Team";
import GetInvolved from "./pages/GetInvolved";
import Donate from "./pages/Donate";
import Shop from "./pages/Shop";
import UdaanTalk from "./pages/UdaanTalk";
import UdaanPodcast from "./pages/UdaanPodcast";
import UdaanToSpace from "./pages/UdaanToSpace";
import WomenEmpowerment from "./pages/WomenEmpowerment";
import DisabilityInclusion from "./pages/DisabilityInclusion";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Admin routes (no header/footer) */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          
          {/* Public routes (with header/footer) */}
          <Route
            path="/*"
            element={
              <div className="min-h-screen bg-white flex flex-col">
                <Header />
                <main className="grow">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/impact" element={<Impact />} />
                    <Route path="/media" element={<Media />} />
                    <Route path="/media/:slug" element={<Article />} />
                    <Route path="/events" element={<Events />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/get-involved" element={<GetInvolved />} />
                    <Route path="/donate" element={<Donate />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/programs/udaan-talk" element={<UdaanTalk />} />
                    <Route path="/programs/udaan-podcast" element={<UdaanPodcast />} />
                    <Route path="/programs/udaan-to-space" element={<UdaanToSpace />} />
                    <Route
                      path="/programs/women-empowerment"
                      element={<WomenEmpowerment />}
                    />
                    <Route
                      path="/programs/disability-inclusion"
                      element={<DisabilityInclusion />}
                    />
                  </Routes>
                </main>
                <Footer />
              </div>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
