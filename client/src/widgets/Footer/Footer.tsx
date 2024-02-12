import {conditions, politic} from 'shared/assets/pdf';

export const Footer = () => (

	<div className='left-0 top-full bg-dark-header h-max w-full flex flex-row justify-between items-center py-3 text-base'>
		<div className='text-neutral-400 exo-2 px-4 flex flex-col items-start justify-center gap-1'>
			<p>©{new Date().getFullYear()}</p>
			<p>Все права защищены</p>
			<p>
        ИП Мамин Роман Александрович (ОГРНИП: 323745600116446 ИНН: 744715897415)
			</p>
			<a href='mailto:syncsoundshop@gmail.com'>syncsoundshop@gmail.com</a>
			<a href='tel:89951052901'>8 (995) 105-29-01</a>
		</div>
		<div className='flex flex-col items-end justify-center gap-2 px-4'>
			<a
				className='text-neutral-400 exo-2 rounded-lg px-2 py-1 '
				href={conditions}
				target='_blank'
				rel='noreferrer'
			>
        Условия предоставления товаров
			</a>
			<a
				className='text-grey-color exo-2 rounded-lg px-2 py-1 '
				href={politic}
				target='_blank'
				rel='noreferrer'
			>
        Политика обработки персональных данных
			</a>
			<p className='text-grey-color exo-2 rounded-lg px-2 py-1 '>
        Информация на сайте не является публичной офертой
			</p>
		</div>
	</div>
);
