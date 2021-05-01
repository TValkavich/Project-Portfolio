import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./Home";
import Experience from "./Experience";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import NoMatch from "./NoMatch";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Router>
        <div class="container" style={{display: 'flex', flexDirection: 'column', minHeight: "100vh", minWidth: "100%", paddingLeft: 0, paddingRight: 0}}>
        <Navbar />
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/experience" component={Experience} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </Layout>
        <div class="footer" style={{marginTop: "auto"}}>
          <Footer />
        </div>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
