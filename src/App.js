import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home'; // Ensure this path is correct
import Kerala from './components/states/Kerala';
import TamilNadu from './components/states/TamilNadu';
import Karnataka from './components/states/Karnataka';
import Hyderabad from './components/states/Hyderabad';
import Andaman from './components/states/Andaman';
import Darjeeling from './components/states/Darjeeling';
import Goa from './components/states/Goa';
import Pune from './components/states/Pune';
import Mumbai from './components/states/Mumbai';
import Ahmedabad from './components/states/Ahmedabad';
import Himachal from './components/states/Himachal';

import GroupTour from './components/GroupTour';  
import Bill from './components/group/Bill';
import Dubaichennai from './components/group/Dubaichennai';
import Dubaicovai from './components/group/Dubaicovai';
import Europechennai from './components/group/Europechennai';
import Easteurope from './components/group/Easteurope';
import Ukchennai from './components/group/Ukchennai';
import Malaysia from './components/group/Malaysia';
import Baku from './components/group/Baku';
import Turkey from './components/group/Turkey';

import Volunteer from './components/activities/Volunteer';
import PackageByOutside from './components/activities/PackageByOutside';
import Weather from './components/Weather';

import Contact from './components/Contact';

// Import login, register, and admin-related components
import Login from './components/login/Login';
import Register from './components/login/Register';
import AdminLogin from './components/login/AdminLogin';
import AdminPanel from './components/login/AdminPanel';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kerala" element={<Kerala />} />
        <Route path="/tamilnadu" element={<TamilNadu />} />
        <Route path="/karnataka" element={<Karnataka />} />
        <Route path="/hyderabad" element={<Hyderabad />} />
        <Route path="/andaman" element={<Andaman />} />
        <Route path="/darjeeling" element={<Darjeeling />} />
        <Route path="/goa" element={<Goa />} />
        <Route path="/pune" element={<Pune />} />
        <Route path="/mumbai" element={<Mumbai />} />
        <Route path="/ahmedabad" element={<Ahmedabad />} />
        <Route path="/himachal" element={<Himachal />} />

        <Route path="/grouptour" element={<GroupTour />} />
        <Route path="/bill" element={<Bill />} />
        <Route path="/dubaichennai" element={<Dubaichennai />} />
        <Route path="/dubaicovai" element={<Dubaicovai />} />
        <Route path="/europechennai" element={<Europechennai />} />
        <Route path="/easteurope" element={<Easteurope />} />
        <Route path="/ukchennai" element={<Ukchennai />} />
        <Route path="/malaysia" element={<Malaysia />} />
        <Route path="/baku" element={<Baku />} />
        <Route path="/Turkey" element={<Turkey />} />

        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/packagebyoutside" element={<PackageByOutside />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/weather" element={<Weather />} />

        {/* Login, Register, and Admin Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
