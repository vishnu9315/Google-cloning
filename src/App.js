import { useState } from "react";
import Navbar from "./Components/Navbar";
import RoutesComponent from "./Components/RoutesComponent";
import Footer from "./Components/Footer";

function App() {

  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className= {darkTheme ? 'dark' : ''}>
      
     <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        <RoutesComponent />
        {/* <Footer/> */}
      </div>     
  
    </div>
  );
}

export default App;

