import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/pages/layouts/Layout';
import Friend from './components/pages/Friend';
import Attachments from './components/pages/Attachments';
import Profile from './components/pages/Profile';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/friends" element={<Friend />} />
          <Route path="/attachments" element={<Attachments />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
