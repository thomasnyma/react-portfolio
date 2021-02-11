// Components
import GlobalStyle from './components/GlobalStyle';
import Navigation from './components/Navigation';

// Pages
import AboutUs from './pages/AboutUs';
import MyWork from "./pages/MyWork";
import ContactMe from "./pages/ContactMe";

// Router
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <AboutUs />
        </Route>
        <Route path="/work">
          <MyWork />
        </Route>
        <Route path="/contact">
          <ContactMe />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
