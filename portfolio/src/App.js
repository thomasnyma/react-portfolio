// Components
import GlobalStyle from './components/GlobalStyle';
import Navigation from './components/Navigation';

// Pages
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';

// Router
import { Switch, Route, useLocation } from 'react-router-dom';

// Animation
import { AnimatePresence } from 'framer-motion';

function App() {
	const location = useLocation();

	return (
		<div className='App'>
			<GlobalStyle />
			<Navigation />
			<AnimatePresence exitBeforeEnter>
				<Switch location={location} key={location.pathname}>
					<Route path='/' exact>
						<About />
					</Route>
					<Route path='/projects' exact>
						<Projects />
					</Route>
					<Route path='/projects/:id'>
						<ProjectDetail />
					</Route>
					<Route path='/contact'>
						<Contact />
					</Route>
				</Switch>
			</AnimatePresence>
		</div>
	);
}

export default App;
