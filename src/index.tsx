import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';

import "./style.css";
import { NotFound } from './pages/_404.jsx';
import { Ranking } from './pages/Ranking/index.js';


export function App() {
	return (
		<LocationProvider>
			<main>
				<Router>
					<Route path="/" component={Ranking} />
					<Route path="/ranking" component={Ranking} />
					<Route default component={NotFound} />
				</Router>
			</main>
		</LocationProvider>
	);
}

render(<App />, document.getElementById('app'));
