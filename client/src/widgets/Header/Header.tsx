import {
	basket, heart, logo, user,
} from '../../shared/assets/icons';
import {scrollTo} from 'widgets/Header/model/model.ts';
import {headerList} from 'widgets/Header/model/constants.ts';
import {useNavigate} from 'react-router-dom';
export const Header = () => {
	const navigate = useNavigate();
	return (
		<div className='bg-dark-header text-white fixed top-0 left-0 w-full px-4'>
			<div className='flex justify-between items-center'>
				<div className='pt-2'>
					<img onClick={() => {
						scrollTo('/');
					}} className='w-4/5 h-4/5 cursor-pointer' src={logo} alt='logo' />
				</div>
				<div className='text-white my-6 text-2xl font-extralight tracking-wider flex gap-12'>
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
				<div className='flex justify-center items-center gap-4'>
					<img onClick={() => {
						navigate('');
					}} className='w-10 h-10 cursor-pointer' src={basket} alt='' />
					<img onClick={() => {
						navigate('');
					}} className='w-8 h-8 cursor-pointer' src={heart} alt='' />
					<img onClick={() => {
						navigate('');
					}} className='w-8 h-8 cursor-pointer' src={user} alt='' />
				</div>
			</div>
		</div>
	);
};
