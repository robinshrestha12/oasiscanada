import React from 'react';
import NavbarItems from './components/Navbar/NavbarItems';
import './App.css';
import About from './components/pages/about/About';
import Donate from './components/pages/donate/Donate';
import Home from './components/pages/home/Home';
import Ourwork from './components/pages/ourwork/Ourwork';
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';
import { Layout } from './components/DesignFurther/Layout';
import JumbotronImage from './components/DesignFurther/JumbotronImage';
import AppFooter from './components/Footer/Footer';
import Signing from './components/pages/Authentication/Signing';
import ProtectedRoute from './components/pages/Authentication/ProtectedRoute';


function App() {
  const DefaultContainer = () => (
    <div>
      <Layout>
        <div className="App">
          <div className="sticky-top">
            <NavbarItems />
            <JumbotronImage />
          </div>

         {/*<ProtectedRoute exact path="/signing" component={Signing} />*/}
          <ProtectedRoute path="/home" component={Home} />
          <ProtectedRoute path="/about" component={About} />
          <ProtectedRoute path="/donate" component={Donate} />
          <ProtectedRoute path="/ourwork" component={Ourwork} />

        </div>

        <AppFooter />
      </Layout>
    </div>
  );

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Signing} />
        <div className="App">

          <Route component={DefaultContainer} />

        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
