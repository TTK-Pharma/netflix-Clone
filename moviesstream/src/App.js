import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import 'tailwindcss/tailwind.css'; 
import Login from './components/login'
import Signup from './components/signup'
import Account from './components/account'
import { AuthContextProvider } from './context/authContext';
import Navbar from './components/Navbar'


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/account' element={<Account />} />
      </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
