import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Download from './components/Download/Download';
import About from './components/About/About';
import Guide from './components/Guide/Guide';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (process.env.NODE_ENV === 'test') return;

    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    } catch {
      // jsdom does not implement scrollTo.
    }
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      {/* overflow-x-clip (not hidden) keeps the window as the scroll container */}
      <div className="flex min-h-screen flex-col overflow-x-clip">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/download" element={<Download />} />
            <Route path="/about" element={<About />} />
            <Route path="/guide" element={<Guide />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
