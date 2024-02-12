import {burger, logo} from '../../shared/assets/icons';
import {scrollTo} from 'widgets/Header/model/model.ts';
import {headerList} from 'widgets/Header/model/constants.ts';
import {useState} from 'react';
import {BurgerMenu} from 'shared/ui/BurgerMenu';
export const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className='bg-dark-header text-white fixed top-0 left-0 w-full px-4'>
			<div className='flex justify-between items-center'>
				<div>
					<img onClick={() => {
						scrollTo('/');
					}} className='w-4/5 h-4/5 cursor-pointer' src={logo} alt='logo' />
				</div>
				<div className='text-white my-6 text-2xl font-extralight tracking-wider flex gap-12 -ml-32'>
					{
						headerList.map(({name, id, scroll}) => (
							<button className='underline-effect' onClick={() => {
								scrollTo(scroll);
							}} key={id}>
								{name}
							</button>
						))
					}
				</div>
				<div onMouseEnter={() => {
					setIsOpen(true);
				}}>
					<div onMouseLeave={() => {
						setIsOpen(false);
					}} className='absolute top-2.5 right-0'>
						{isOpen ? <BurgerMenu/> : <img className='w-4/5 h-4/5' src={burger} alt='burger' />}
					</div>
				</div>
			</div>
		</div>);
};

