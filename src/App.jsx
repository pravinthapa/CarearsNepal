import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import InquiryModal from './components/InquiryModal';

import Home from './pages/Home';
import CourseDetail from './pages/CourseDetail';
import Testimonials from './pages/Testimonials';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Enroll from './pages/Enroll';
import NotFound from './pages/NotFound';

export default function App() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [selectedCourseName, setSelectedCourseName] = useState('AI Software Developer');

  const handleOpenInquiry = (courseName) => {
    if (courseName) setSelectedCourseName(courseName);
    setInquiryOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="page">
        <Navbar onOpenInquiry={() => handleOpenInquiry()} />
        <Routes>
          <Route path="/" element={<Home onOpenInquiry={handleOpenInquiry} />} />
          <Route path="/ai-software-developer" element={<CourseDetail onOpenInquiry={handleOpenInquiry} />} />
          <Route path="/ai-growth-marketer" element={<CourseDetail onOpenInquiry={handleOpenInquiry} />} />
          <Route path="/ai-agentic-automation" element={<CourseDetail onOpenInquiry={handleOpenInquiry} />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/enroll" element={<Enroll />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />

        {/* Global Inquiry Modal */}
        <InquiryModal
          isOpen={inquiryOpen}
          onClose={() => setInquiryOpen(false)}
          selectedCourseName={selectedCourseName}
        />
      </div>
    </Router>
  );
}
