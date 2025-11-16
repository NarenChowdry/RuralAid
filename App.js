// // src/App.js
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
// import NavigationBar from './Components/Navbar';
// import Home from './Components/Home';
// import ComplaintPage from './Components/ComplaintPage';
// import ComplaintListPage from './Components/ComplaintListPage';
// import AboutUs from './Components/AboutUs';
// import DonationPage from './Components/DonationPage';
// import './Components/ComplaintPage.css';
// import './Components/DonationPage.css';
// import ComplaintForm from './Components/ComplaintForm';
// import Logginn from './Components/Logginn';
// import Signupp from './Components/Signupp';
// import ComplaintDetailPage from './Components/ComplaintDetailPage';
// import NavBar from './Components/Navbar1';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [username, setUsername] = useState('');
//   // const handleLogin = () => setIsLoggedIn(true);
//   // const handleLogout = () => setIsLoggedIn(false);
//   const handleLogin = (user) => {
//     setIsLoggedIn(true);
//     setUsername(user);
//   };
  
//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setUsername('');
//   };
//   return (
//     <Router>
//       {isLoggedIn ? <NavigationBar username={username}/> : <NavBar />}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/raise-complaint" element={<ComplaintPage />} />
//         <Route path="/track-complaint" element={<div>Track Complaint Status Page</div>} />
//         <Route path="/posts" element={<ComplaintListPage />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/donate" element={<DonationPage />} />
//         <Route path="/login" element={<Logginn onLogin={handleLogin} />} />
//         <Route path="/signup" element={<Signupp />} />
//         <Route path="/complaint-form" element={<ComplaintForm />} />
//         <Route path="/complaints-list" element={<ComplaintListPage />} />
//         <Route path="/complaints/:id" element={<ComplaintDetailPage />} />
//         {/* Add a dummy logout route for testing */}
//         <Route path="/logout" element={<button onClick={handleLogout}>Logout</button>} />
        
//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import NavigationBar from './Components/Navbar';
// import Home from './Components/Home';
// import ComplaintPage from './Components/ComplaintPage';
// import ComplaintListPage from './Components/ComplaintListPage';
// import AboutUs from './Components/AboutUs';
// import DonationPage from './Components/DonationPage';
// import './Components/ComplaintPage.css';
// import './Components/DonationPage.css';
// import ComplaintForm from './Components/ComplaintForm';
// import Logginn from './Components/Logginn';
// import Signupp from './Components/Signupp';
// import ComplaintDetailPage from './Components/ComplaintDetailPage';
// import NavBar from './Components/Navbar1';
// import SuccessPopup from './Components/SuccessPopup';
// import AdminDashboard from './AdminComponents/AdminDashboard';
// import UserList from './AdminComponents/UserList';
// import AddUser from './AdminComponents/AddUser';
// import DetailsPage from './Components/DetailsPage';
// import Payment from './Components/Payment';
// import SummaryPage from './Components/SummaryPage';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [username, setUsername] = useState('');

//   const handleLogin = (user) => {
//     setIsLoggedIn(true);
//     setUsername(user);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setUsername('');
//   };

//   return (
//     <Router>
//       {isLoggedIn ? (
//         <NavigationBar username={username} onLogout={handleLogout} />
//       ) : (
//         <NavBar />
//       )}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/raise-complaint" element={<ComplaintPage />} />
//         <Route path="/track-complaint" element={<div>Track Complaint Status Page</div>} />
//         <Route path="/posts" element={<ComplaintListPage />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/donate" element={<DonationPage />} />
//         <Route path="/login" element={<Logginn onLogin={handleLogin} />} />
//         <Route path="/signup" element={<Signupp />} />
//         <Route path="/complaint-form" element={<ComplaintForm />} />
//         <Route path="/complaints-list" element={<ComplaintListPage />} />
//         <Route path="/complaints/:id" element={<ComplaintDetailPage />} />
//         <Route path="/success" element={<SuccessPopup />} />
//         <Route path="/admin" element={<AdminDashboard />} />
//         <Route path="/ulist" element={<UserList />} />
//         <Route path="/addu" element={<AddUser />} />
//         <Route path="/details" element={<DetailsPage />} />
//         <Route path="/pay" element={<Payment />} />
//         <Route path="/summary" element={<SummaryPage />} />
        
//         {/* No need for a separate logout route */}
//       </Routes>
      
//     </Router>
//   );
// }

// export default App;
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './Components/Navbar';
import Home from './Components/Home';
import ComplaintPage from './Components/ComplaintPage';
import ComplaintListPage from './Components/ComplaintListPage';
import AboutUs from './Components/AboutUs';
import DonationPage from './Components/DonationPage';
import './Components/ComplaintPage.css';
import './Components/DonationPage.css';
import ComplaintForm from './Components/ComplaintForm';
import Logginn from './Components/Logginn';
import Signupp from './Components/Signupp';
import ComplaintDetailPage from './Components/ComplaintDetailPage';
import NavBar from './Components/Navbar1';
import SuccessPopup from './Components/SuccessPopup';
import AdminDashboard from './AdminComponents/AdminDashboard';
import UserList from './AdminComponents/UserList';
import AddUser from './AdminComponents/AddUser';
import DetailsPage from './Components/DetailsPage';
import Payment from './Components/Payment';
import SummaryPage from './Components/SummaryPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); // Add admin state
  const [username, setUsername] = useState('');

  const handleLogin = (user, admin = false) => {
    setIsLoggedIn(true);
    setUsername(user);
    setIsAdmin(admin); // Set admin status
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setIsAdmin(false); // Reset admin status
  };

  return (
    <Router>
      {!isAdmin && ( // Only show navbar if not admin
        isLoggedIn ? (
          <NavigationBar username={username} onLogout={handleLogout} />
        ) : (
          <NavBar />
        )
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/raise-complaint" element={<ComplaintPage />} />
        <Route path="/track-complaint" element={<div>Track Complaint Status Page</div>} />
        <Route path="/posts" element={<ComplaintListPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/donate" element={<DonationPage />} />
        <Route path="/login" element={<Logginn onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signupp />} />
        <Route path="/complaint-form" element={<ComplaintForm />} />
        <Route path="/complaints-list" element={<ComplaintListPage />} />
        <Route path="/complaints/:id" element={<ComplaintDetailPage />} />
        <Route path="/success" element={<SuccessPopup />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/ulist" element={<UserList />} />
        <Route path="/addu" element={<AddUser />} />
        <Route path="/details" element={<DetailsPage />} />
        <Route path="/pay" element={<Payment />} />
        <Route path="/summary" element={<SummaryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
