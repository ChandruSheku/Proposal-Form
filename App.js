//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route,} from 'react-router-dom';
import LIC1 from './Components/LIC1.js';
import Post from './Components/LIC2.js';
import Po from './Components/LIC3.js';
import LIC4 from './Components/LIC4.js';
import LIC5 from './Components/LIC5.js';
import LIC10 from './Components/LIC10.js';
import LIC6 from './Components/LIC6.js';
import LIC7 from './Components/LIC7.js';
import LIC8 from './Components/LIC8.js';
import LIC9 from './Components/LIC9.js';
import PostProposal from './Components/ProposalLic';
function App()
{
  
  return (
<div>
   <Router>
   <LIC1/> 
  <Routes>
    <Route path="/LIC2" Component={Post}></Route>
     <Route path="/LIC3" Component={Po}> </Route> 
     <Route path="/LIC4" Component={LIC4}> </Route>
     <Route path="/LIC5" Component={LIC5}> </Route>

     <Route path="/LIC6" Component={LIC6}></Route>
     <Route path="/LIC7" Component={LIC7}> </Route> 
     <Route path="/LIC8" Component={LIC8}> </Route>
     <Route path="/LIC9" Component={LIC9}> </Route>
     <Route path="/LIC10" Component={LIC10}> </Route>
     <Route path="/ProposalLic" Component={PostProposal}> </Route>
  </Routes>
</Router>

 </div>


     );
}

export default App;
