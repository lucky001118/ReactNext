import HomePage from "./Pages/HomePage"
import Footer from "./Pages/Footer"
import Navbar from "./Pages/Navbar"
import WorkShopSchedule from "./Pages/WorkShopSchedule"
import JavaScript from "./Pages/JavaScript"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MySQLPage from "./Pages/MySQLPage"
function App() {

  return (
    <div>

      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/javaScript" element={<JavaScript />} />
        <Route path="/schedule" element={<WorkShopSchedule/>} />
        <Route path="/mySql" element={<MySQLPage/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
      

    </div>
  )
}

export default App
