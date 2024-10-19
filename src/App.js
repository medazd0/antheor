
import './App.css';
import Navbar from './component/Navbar'
import Comp0 from './component/Comp0';
import Comp1 from './component/Comp1';
import Comp3 from './component/Comp3' ;
import Comp4 from './component/Comp4';
import Comp5 from './component/Comp5';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const HomePage = () => {
  return (
      <div>
          
          <Comp0 />
          <Comp1 />
          <Comp3 />
          <Comp4 />
          <Comp5 />
      </div>
  );
};

function App() {
  return (
    <div className="App  ">
           <Router>
                <Navbar />
                <Routes>
                    <Route path="/antheor/" element={<HomePage />} />
                    
                </Routes>
            </Router>
        </div>
  
  );
}

export default App;
