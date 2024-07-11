import './App.css';
import Navbar from './Components/Navbar/Navbar' 
import Footer from './Components/Footer/Footer' 

//for preventing selecting text
const preventTextSelection = {
  WebkitTouchCallout: "none", 
  WebkitUserSelect: "none", 
  KhtmlUserSelect: "none",
  MozUserSelect: "none",
  msUserSelect: "none", 
  userSelect: "none", 
};
function App() {

  return (
    <div className="App" style={preventTextSelection}>
      
      <Navbar/>
      <Footer/>
    </div>
  );
}

export default App;
