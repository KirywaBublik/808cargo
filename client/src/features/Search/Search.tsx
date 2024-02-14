import './xuy.css';
import {useState} from 'react';
import {close} from 'shared/assets/icons';
export const Search = () => {
	const [value, setValue] = useState('');

	return (
		<div className='xuy'>
			<input
				value={value}
				onChange={e => {
					setValue(e.target.value);
				}}
				type='text' className='bg-black text-white placeholder-search-color pl-12 pr-16 py-2 text-lg rounded-3xl hover:bg-dark-header transition-colors duration-300 ease-in' placeholder='Поиск...' />
			{
				value && <button onClick={() => {
					setValue('');
				}}>
					<img className='w-8 h-8' src={close} alt='closeButton' />
				</button>
			}
		</div>
	);
};

