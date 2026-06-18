import { Routes, Route} from "react-router-dom"
import UserRoutes from "./routes/userRoutes"
import AdminRoutes from "./routes/adminRoutes"

function App() {
  return (
    <Routes>
      <Route path="/*" element={<UserRoutes/>}/>
      <Route path="/admin/*" element={<AdminRoutes />} />
    </Routes>
  )
}

export default App

 