import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/*เต้*/
import "./เต้/App.css";
import "./เต้/responsive.css";
import "react-toastify/dist/ReactToastify.css";
import HomeScreen from "./เต้/screens/HomeScreen";
import SingleProduct from "./เต้/screens/SingleProduct";
import Login from "./เต้/screens/Login";
import Register from "./เต้/screens/Register";
import CartScreen from "./เต้/screens/CartScreen";
import ShippingScreen from "./เต้/screens/ShippingScreen";
import ProfileScreen from "./เต้/screens/ProfileScreen";
import PaymentScreen from "./เต้/screens/PaymentScreen";
import PlaceOrderScreen from "./เต้/screens/PlaceOrderScreen";
import OrderScreen from "./เต้/screens/OrderScreen";
import NotFound from "./เต้/screens/NotFound";
import PrivateRouter from "./เต้/PrivateRouter";
import FirstScreen from "./เต้/screens/FirstScreen";

/*ฝ้าย*/
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import Page7 from './Page7';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={FirstScreen} exact />
        <Route path="/homescreen" component={HomeScreen} exact /> 
        <Route path="/search/:keyword" component={HomeScreen} exact />
        <Route path="/page/:pagenumber" component={HomeScreen} exact />
        <Route
          path="/search/:keyword/page/:pageNumber"
          component={HomeScreen}
          exact
        />
        <Route path="/products/:id" component={SingleProduct} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRouter path="/profile" component={ProfileScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <PrivateRouter path="/shipping" component={ShippingScreen} />
        <PrivateRouter path="/payment" component={PaymentScreen} />
        <PrivateRouter path="/placeorder" component={PlaceOrderScreen} />
        <PrivateRouter path="/order/:id" component={OrderScreen} />
        
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<Page5 />} />
        <Route path="/page6" element={<Page6 />} />
        <Route path="/page7" element={<Page7 />} />

        <Route path="*" component={NotFound} />
        
      </Switch>
    </Router>
  );
};

export default App;


/*
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<Page5 />} />
        <Route path="/page6" element={<Page6 />} />
        <Route path="/page7" element={<Page7 />} />
*/