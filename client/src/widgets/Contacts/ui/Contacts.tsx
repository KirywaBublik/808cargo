import {Link} from 'react-router-dom';
export const Contacts = () => (
	<div className='text-center py-16'>
		<p className='text-white text-4xl'>
		Написать нам:
		</p>
		<div className='flex justify-center gap-12 pt-32'>
			<Link className='w-64 py-3 text-xl text-white border-solid border-white border-2 rounded-3xl hover:bg-black transition-colors duration-300 ease-in' target='_blank' to='https://t.me/syncsoundshop'>
				Telegram
			</Link>
			<Link className='w-64 py-3 text-xl text-white border-solid border-white border-2 rounded-3xl hover:bg-black transition-colors duration-300 ease-in' target='_blank' to='https://wa.me/89951052901'>
				WhatsApp
			</Link>
			<Link className='w-64 py-3 text-xl text-white border-solid border-white border-2 rounded-3xl hover:bg-black transition-colors duration-300 ease-in' to='mailto:syncsoundshop@gmail.com' target='_blank'>
				Email
			</Link>
		</div>
	</div>
);
