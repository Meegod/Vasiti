import './App.css';
import MyNavbar from './components/MyNavbar.js';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import Customer from './components/Customer.js';
import Story from './components/Story.js';
import Vendor from './components/Vendor.js';
import Footer from './components/Footer.js';


function App() {
  return (
    <div className="app">
    <MyNavbar/>
    <Header/>   
    <Hero/>   
    <Customer/> 
    <Story/>  
    <Vendor/>  
    <Footer/>  

   </div>
  );
}

export default App;
