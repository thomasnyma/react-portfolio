// Global styles
import GlobalStyle from './components/GlobalStyle';

// Pages
import AboutUs from './pages/AboutUs';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navigation />
      <AboutUs />
    </div>
  );
};

export default App;
