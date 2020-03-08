import React from "react";
import { HashRouter } from "react-router-dom";
import { Router } from "react-router-dom";
import ReactGA from "react-ga";
import { createBrowserHistory } from "history";
import "./App.css";
import routes from "./routes";
import Navbar from "./components/Navbar/Navbar";
import BottomNavbar from "./components/Navbar/BottomNavbar/BottomNavbar";
import Footer from "./components/Footer/Footer";

const trackingId = "UA-135682867-6";
// Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

function App() {
  return (
    <HashRouter>
      <Router history={history}>
        <div className="App">
          <Navbar />
          <header>{routes}</header>
          <BottomNavbar />
          {/* <Footer /> */}
        </div>
      </Router>
    </HashRouter>
  );
}

export default App;
