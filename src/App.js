import LeftSide from "./Components/LeftSide/LeftSide";
import './App.css'
import { BrowserRouter  as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Reels from "./Pages/Reels/Reels";
import Explor from "./Pages/Explor/Explor";
import Profile from "./Pages/Profile/Profile";
import Direct from "./Pages/Direct/Direct";
import Login from './Pages/Login/Login'
import Signup from './Pages/Signup/Signup'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import ProtectedHome from "./Routes/ProtectedHome";
import ProtectedAuth from "./Routes/ProtectedAuth";
import Protected from "./Routes/Protected";
function App() {
  return ( 
  <Router> 

    <div  className="App">
        <Routes> 
                <Route exact path='/home' element={
                <ProtectedHome>< Home /></ProtectedHome>}></Route> 
                <Route exact path='/reels' element={<Protected><Reels/></Protected>}></Route> 
                <Route exact path='/explor' element={<Protected><Explor/></Protected>}></Route> 
                <Route exact path='/profile' element={<Protected><Profile/></Protected>}></Route> 
                <Route exact path='/direct' element={<Protected><Direct/></Protected>}></Route> 
                <Route exact path='/signup' element={<ProtectedAuth><Signup /></ProtectedAuth>}></Route> 
                <Route exact path='/' element={<ProtectedAuth><Login /></ProtectedAuth>}></Route> 
                <Route path="*" element={<ErrorPage />} />

        </Routes> 
       
    </div> 
    </Router>
  );
}

export default App;
