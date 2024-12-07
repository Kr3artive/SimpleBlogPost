import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Home from "./Pages/Home"
import Header from "./components/Header"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import CreatePost from "./Pages/CreatePost"
import ProtectedRoute from "./ProtectedRoutes"

const App = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route
            path="/createpost"
            element={
              <ProtectedRoute>
                <CreatePost/>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
