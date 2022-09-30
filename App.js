
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/homecomps/Skills";
import Qualifications from "./components/homecomps/Qualifications";
import Interests from "./components/homecomps/Interests";
import Profiles from "./components/homecomps/Profiles";
import Projects from "./components/homecomps/Projects";



import { Routes ,Route } from "react-router-dom";
function App() {
  return (
<>
<Routes>
<Route exact path="/" element={<Header/>}/>
<Route exact path="/About" element={<About/>}/>
<Route exact path="/contact" element={<Contact/>}/>
<Route exact path="/Skills" element={<Skills/>}/>
<Route exact path="/Interests" element={<Interests/>}/>
<Route exact path="/Projects" element={<Projects/>}/>
<Route exact path="/Qualifications" element={<Qualifications/>}/>
<Route exact path="/Profiles" element={<Profiles/>}/>


</Routes>
</>    
 
  );
}

export default App;
