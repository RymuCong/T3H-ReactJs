import './App.css';
import NavBar from './components/Header/NavBar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer/Footer';
import Posts from './posts/Posts';
import Post from './pages/Post';
import Survey from "./pages/Survey";
import Register from "./pages/Register";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about-us' element={<About />} />
                <Route path='/blog' element={<Posts />} />
                <Route path='/post/:index' element={<Post />} />
                <Route path='/survey' Component={Survey} />
                <Route path='/register' Component={Register} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;