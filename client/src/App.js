import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar.component';
import Home from './Home'
import Chat from './Components/Chat';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/chat' element={<Chat />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
