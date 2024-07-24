import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import SignUp from  "c:/Users/Night Agent/Desktop/mern-estate/client/src/pages/SignUp"
import About from './pages/About';
import Profile from './pages/Profile';
import Signin from './pages/signin';
import Header from './componenets/Header';



export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/signin" element={<Signin />} />
       <Route path="/signup" element={<SignUp />} />
       <Route path="/about" element={<About />} />
       <Route path="/profile" element={<Profile />} />

    </Routes>
    
    </BrowserRouter>
  )
}









