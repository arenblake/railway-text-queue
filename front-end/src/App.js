import { Route, Routes, Navigate } from "react-router-dom";

import ListSubmissions from "./components/ListSubmissions";
import Sidebar from "./components/Sidebar";
import CardDetail from "./components/CardDetail";
// import "./App.css";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full flex flex-col items-center">
        <Routes>
          <Route path="/dashboard" element={<ListSubmissions />} />
          <Route path="/dashboard/:id" element={<CardDetail />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
