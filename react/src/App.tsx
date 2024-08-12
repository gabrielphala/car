import Home from "./views/base/Home"

import EmployeeSignUp from "./views/auth/EmployeeSignUp"
import EmployeeSignIn from "./views/auth/EmployeeSignIn"
import SignIn from "./views/auth/SignIn"
import SignUp from "./views/auth/SignUp"


import UserRequests from "./views/user/Requests"
import Checkout from "./views/user/Checkout"
import Chat from "./views/user/Chat"
import GarageRequests from "./views/garage/Requests"
import Employees from "./views/garage/Employees"
import Services from "./views/garage/Services"

import Garages from "./views/admin/Garages"
import CheckoutSuccess from "./views/user/CheckoutSuccess"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

export default function App () {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sign-in" element={<SignIn/>}></Route>
          <Route path="/sign-up" element={<SignUp/>}></Route>
          <Route path="/u/requests" element={<UserRequests />}></Route>
          <Route path="/u/chat" element={<Chat />}></Route>
          <Route path="/g/chat" element={<Chat />}></Route>
          <Route path="/u/requests/pay" element={<Checkout />}></Route>
          <Route path="/u/requests/pay/success" element={<CheckoutSuccess/>}></Route>
          <Route path="/g/sign-up" element={<EmployeeSignUp/>}></Route>
          <Route path="/g/sign-in" element={<EmployeeSignIn/>}></Route>
          <Route path="/g/requests" element={<GarageRequests/>}></Route>
          <Route path="/g/employees" element={<Employees />}></Route>
          <Route path="/g/services" element={<Services />}></Route>
          <Route path="/a/garages" element={<Garages />}></Route>
        </Routes>
      </div>
    </Router>
  )
}