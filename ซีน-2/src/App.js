import Order from './Order';
import Orderdetails from './Orderdetails';
// import Point from './Point';
import Pointdetails from './Pointdetails';
// import Shop from './Shop';
import Shopdetails from './Shopdetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Shop/>}/> */}
          <Route path="/" element={<Shopdetails/>}/>
          <Route path="/order" element={<Order/>}/>
          <Route path="/orderdetails" element={<Orderdetails/>}/>
          {/* <Route path="/point" element={<Point/>}/> */}
          <Route path="/pointdetails" element={<Pointdetails/>}/> 
          
        </Routes>
     </BrowserRouter>
  )
}

export default App
