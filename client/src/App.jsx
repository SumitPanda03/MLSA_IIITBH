// import Zero from "./components/Zero.js";
import React from "react";
// import Title from "./components/Title.js";
// import Application from "./pages/Application.js";
// import Milestones from "./pages/Milestones.js";
// import Chapter from "./pages/Chapter.js";

// import { Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Opening from "./pages/Opening.js";
// import Upload from "./pages/Upload.js";
import { AuthWrapper } from "./auth/AuthWrapper.jsx";
import { injectSpeedInsights } from '@vercel/speed-insights';

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Routes>
          <Route path="/" element={<Zero />} />
          <Route path="/home" element={<Title />} />
          <Route path="/application" element={<Application />} />
          <Route path="/milestones" element={<Milestones />} />
          <Route path="/chapter" element={<Chapter />} />
          <Route path="/opening" element={<Opening />} />
          <Route path="/register" element={<Upload />} />
        </Routes> */}
        <AuthWrapper/>
      </BrowserRouter>
      injectSpeedInsights();


    </div>
  );
}

export default App;
