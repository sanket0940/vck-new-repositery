// src/App.jsx
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";

import ContactPage from "./pages/ContactPage";
import "./styles/Pages.css";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import AdmissionsPage from "./pages/Admissions";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";

import { useState } from "react";
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";

function App() {
  const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
    <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Sanket Vilas Patil"
          studentPhotoUrl="/images/sanket.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
      
    <Router>
      <div className="main-layout">
    
       <div className="content">
          <Routes>
      
            <Route path="/home" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
          </Routes>
        </div>
        <ChatbotComponent/>
        
      </div>
      
    </Router>
    </>
  );
}
export default App;


