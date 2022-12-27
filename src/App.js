import './App.css';
import Navigation from './Pages/Shared/Navigation/Navigation';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Appointments from './Pages/Appointments/Appointments';
import AllServices from './Pages/Services/AllServices/AllServices';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import MyReview from './Pages/Dashboard/MyReview';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllUser from './Pages/Dashboard/AllUser';
import Payment from './Pages/Dashboard/Payment';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointment" element={
          <RequireAuth>
            <Appointments />
          </RequireAuth>
        } />

        <Route path="dashboard" element={<Dashboard />
        }>
          <Route index element={<MyAppointment />} />
          <Route path="myreview" element={<MyReview />} />
          <Route path="payment/:id" element={<Payment />} />
          <Route path="alluser" element={<AllUser />} />
        </Route>

        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<AllServices />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <ToastContainer />

    </div >
  )
}
export default App;
