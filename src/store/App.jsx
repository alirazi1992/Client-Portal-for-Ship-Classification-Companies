// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import InspectionRequest from './pages/InspectionRequest';
import SurveyStatus from './pages/SurveyStatus';
import Certificates from './pages/Certificates';
import History from './pages/History';
import Support from './pages/Support';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/request" element={<InspectionRequest />} />
            <Route path="/status" element={<SurveyStatus />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/history" element={<History />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
