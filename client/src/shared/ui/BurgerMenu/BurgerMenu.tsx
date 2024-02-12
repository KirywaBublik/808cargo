import {useRef} from 'react';
import './burger.css';

export const BurgerMenu = () => {
	const ref = useRef(null);
	//
	// useEffect(() => {
	// 	const _ref = ref.current;
	// 	_ref.addEventListener('mousemove', handlerMoveMouse);
	// 	return () => {
	// 		_ref.removeEventListener('mousemove', handlerMoveMouse);
	// 	};
	// }, [handlerMoveMouse]);
	return (
		<div className='absolute top-2 right-2 w-44 h-32 border-2 border-solid border-border-header rounded-3xl bg-dark-header text-center pt-5'>
			<p className='cursor-pointer text-border-header'>
        Избранное
			</p>
			<p className='cursor-pointer text-border-header'>
        Корзина
			</p>
		</div>);
};
