import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import TopNewsSlider from './components/TopNewsSlider';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Single from './components/navbarComponent/Single';
import Contact from './components/navbarComponent/Contact';
import Category from './components/navbarComponent/Category';
import MainNewsSlider from './components/MainNewsSlider';
function App() {
	return (
		<Router>
			<div className="App">
				<TopBar />
				<Navbar />
				<TopNewsSlider />
				<MainNewsSlider />
				{/* routes */}
				<Switch>
					<Route exact path="/category">
						<Category />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
					<Route path="/single">
						<Single />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
