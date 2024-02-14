import {Search} from 'features/Search';
import {Categories} from 'features/Categories';
import {Card} from 'shared/ui/Card';

export const Catalog = () => (
	<div>
		<p className='text-center text-white text-4xl'>Каталог</p>
		<div className='text-white flex justify-center gap-80'>
			<Categories/>
			<Search/>
		</div>
		<div>
			<Card/>
		</div>
	</div>
);

