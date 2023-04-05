import YPoint from './components/YPoint';
import KPass from './components/KPass';
import Ybin from './components/Ybin';
import Home from './components/Home';
import YFol from './components/YFol';
import YFol1 from './components/YFol1';
import YFol2 from './components/YFol2';
import Ybin1 from './components/Ybin1';
import Ybin2 from './components/Ybin2';
//import Ybox from './Admin/Ybox';
import {  BrowserRouter as Router, Route ,Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container-fluidr">
          <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <h1 style={{ paddingTop: '10px', paddingBottom: '10px', fontWeight: 'bold', fontSize: '35px' }}>
              <span className="d-none d-sm-inline"> ELEcREc </span>
            </h1>
          </a>
        </div>          
      </div>
      <Switch>
        <Route exact path="/">
          <Ybin/>
        </Route>
         <Route exact path='/home'>
          <Home/>
        </Route>
        <Route path="/ybin1">
          <Ybin1/>
        </Route>
        <Route path="/ybin2">
          <Ybin2/>
        </Route>
        <Route path="/kpass">
          <KPass/>
        </Route>
        <Route path="/ypoint">
          <YPoint/>
        </Route>
        <Route path="/yfol">
          <YFol/> 
        </Route>
        <Route path="/yfol1">
          <YFol1/> 
        </Route>
        <Route path="/yfol2">
          <YFol2/> 
        </Route>       
      </Switch> 
    </Router>
  );
    
}

export default App;
