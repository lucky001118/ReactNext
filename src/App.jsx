import HomePage from "./Pages/HomePage"
import Footer from "./Pages/Footer"
import Navbar from "./Pages/Navbar"
import WorkShopSchedule from "./Pages/WorkShopSchedule"
import JavaScript from "./Pages/JavaScript"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import MySQLPage from "./Pages/MySQLPage"
import ReactPage from "./Pages/ReactPage"
import GitPage from "./Pages/GitPage"
import FirebasePage from "./Pages/FirebasePage"
import NextPage from "./Pages/NextPage"
import CredentialPage from "./Pages/CredentialPage"
import ExcellenceCertificatePage from "./Pages/ExcellenceCertificatePage"
function App() {

  return (
    <div>

      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/javaScript" element={<JavaScript />} />
        <Route path="/schedule" element={<WorkShopSchedule/>} />
        <Route path="/credential" element={<CredentialPage/>} />
        <Route path="/winners" element={<ExcellenceCertificatePage/>} />
        <Route path="/mySql" element={<MySQLPage/>} />
        <Route path="/react" element={<ReactPage/>} />
        <Route path="/git" element={<GitPage/>} />
        <Route path="/firebase" element={<FirebasePage/>} />
        <Route path="/next" element={<NextPage/>} />
      </Routes>
      <Footer />
      </BrowserRouter>
      

    </div>
  )
}

export default App
