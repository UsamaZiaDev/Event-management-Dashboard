// core / libraries
import { Routes, Route } from "react-router-dom"
//components
import Events from "../events/Events"
import Sidebar from "./Sidebar"
import ViewEvent from "../events/ViewEvent"
import AddEvent from "../events/AddEvent"
// style
import "./style/style.css"

const Dashboard = () => {
  return (
    <>
    
    <div className="body-layout-wrapper d-flex vh-100">

        <Sidebar width="300" />

        <main className="dashboard-main-content-wrapper p-5 w-100">

            <Routes>
              <Route path="/" element={<Events/>} />
              <Route path="/view/:id" element={<ViewEvent/>} />
              <Route path="/add" element={<AddEvent/>} />
              <Route path="/update/:id" element={<AddEvent/>} />
            </Routes>

        </main>
    
    </div>
    
    </>
  )
}

export default Dashboard