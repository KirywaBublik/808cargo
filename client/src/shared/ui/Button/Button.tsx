import classNames from 'classnames';
import './xuy.css';
import {type ButtonHTMLAttributes} from 'react';
type ButtonProps = {
	theme: 'default' | 'product' | 'contacts';
} & ButtonHTMLAttributes<HTMLButtonElement>;
export const Button = ({theme, children, className, ...props}: ButtonProps) => {
	const themeClasses = {
		default: 'text-white',
		product: 'bg-stroke text-red-500',
		contacts: 'bg-stroke text-base1',
	};
	return (
		<button {...props} className={classNames('w-48 h-10 rounded border-white border-solid border-2', themeClasses[theme], className)}>
			{children}
		</button>
	);
};
