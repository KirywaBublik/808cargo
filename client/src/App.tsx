import {Header} from 'widgets/Header';
import {Footer} from 'widgets/Footer';
import {TopPage} from 'pages/TopPage/ui';
import {Contacts} from 'widgets/Contacts/ui';
import {Dignity} from 'widgets/Dignity/ui';
import {Catalog} from 'widgets/Catalog';
const App = () => (
	<>
		<Header />
		<div className='flex-auto'>
			<TopPage/>
			<Catalog/>
			<Dignity/>
			<Contacts/>
		</div>
		<Footer />
	</>
);

export default App;
