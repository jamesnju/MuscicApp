import './App.css';
import Download from './components/Download';
import { Experience } from './components/Experience';
import Footer from './components/Footer';
import Login from './components/Forms/Login';
import Header from './components/Header';
import Hero from './components/Hero';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
    <Header/>
    <Hero/>
    <Experience/>
    {/* <Login/> */}
    <Search/>
    <Download/>
    <Footer/>
    </div>
  );
}

export default App;
