// Components
import GlobalStyle from './components/GlobalStyle';
import Navigation from './components/Navigation';

// Pages
import AboutUs from './pages/AboutUs';
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
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
        <Route path="/projects" exact>
          <Projects />
        </Route>
        <Route path="/projects/:id">
          <ProjectDetail />
        </Route>
        <Route path="/contact">
          <ContactMe />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
