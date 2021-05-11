import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "./Home";
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
            <Route exact path="/Project-Portfolio" component={Home} />
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
