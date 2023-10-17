import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import UserDashboard from './pages/UserDashboard';
import AddCustomer from './pages/AddCustomer';
import AdminDashboard from './pages/AdminDashboard';
import WithdrawComponent from './pages/WithdrawComponent';
import DepositComponent from './pages/DepositComponent';
import UpdateCustomerForm from './pages/UpdateCustomerForm';

function App() {
 

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" exact element={<Home />} />
          <Route path="/addcustomer" element={<AddCustomer />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/withdrawcomponenet" element={<WithdrawComponent />} />
          <Route path="/depositcomponent" element={<DepositComponent />} />
          <Route path="/updatecustomerform" element={<UpdateCustomerForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
